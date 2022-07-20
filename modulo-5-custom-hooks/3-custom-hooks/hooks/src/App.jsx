import React from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import { useRef } from 'react';

/*

Cuando trabajamos con eventos asincronos debemos manejar al menos 3 estados:
- pendiente, -> pendding
- completado, -> success
- terminado, -> error.

*/

// Aqui declaramos los estados de nuestra consulta: Para peticiones asincronas.
const Statuses = {
  PENDING: "pending",
  SUCCESS: "success",
  FAILURE: "failure"
};

// Creamos nuestro hooks personalizado, nuestro custom hooks que recibe una funcion asincrona:
function useAsync(fn) {
  const [status, setStatus] = useState(Statuses.PENDING);
  const [data, setData] = useState(null);
  let callback = useRef((...args) => { fn(...args) })

  // Este hooks ejecuta nuestra funcion asincrona:
  useEffect(function runAsyncFunction() {
    // Seteamos la funcion para que siempre sea pending al arrancar la app:
    setStatus(Statuses.PENDING);
    setData(null);

    // Aqui implementamos un abortController: Se suele usar cuando hacemos peticiones fetch a una API para abortar los request
    const controller = new AbortController();


    // Ejecutamos la funcion: Al ser una funcion asincrona devuelve una promesa:
    callback
      .current({ signal: controller.signal })
      .then((result) => {
        setData(result)
        // Ahora el estado pasa a ser success
        setStatus(Statuses.SUCCESS);
      })
      // Si hay un error aqui lo capturamos y cambiamos el estatus a FAILURE:
      .catch((err) => {
        setData(err);
        setStatus(Statuses.FAILURE);
      });

    // asi paramos las peticiones:
    return function cleanup() {
      controller.abort();
    }

  }, [])

  return { status, data }
}

export function App() {


  // Aqui llamamos nuestro hooks personalizado:
  const { status, data } = useAsync(
    ({ signal }) => {

      return new Promise((resolve, reject) => {
        let timer = setTimeout(() => {

          if (signal.aborted) { return; }

          if (Math.random() > 0.5) {
            return resolve("Success");
          }
          else {
            return reject(new Error("Boom ha fallado..."));
          }
        }, 1000)

        signal.addEventListener("abort", () => {
          clearTimeout(timer);

        })
      })
    }

  );
  console.log({ status, data });
  if (status === Statuses.PENDING) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  if (status === Statuses.FAILURE) {
    return (
      <div>
        <p>{data.message}</p>
      </div>
    )
  }

  if (status === Statuses.SUCCESS) {
    return (
      <div>
        <p>{data}</p>
      </div>
    )
  }


  return <p>Implement me</p>
}

// Funcion asincrona fn que le pasamos a nuestro custom hook:
function fn({ signal }) {

  return new Promise((resolve, reject) => {
    let timer = setTimeout(() => {

      if (signal.aborted) { return; }

      if (Math.random() > 0.5) {
        return resolve("Success");
      }
      else {
        return reject(new Error("Boom ha fallado..."));
      }
    }, 1000)

    signal.addEventListener("abort", () => {
      clearTimeout(timer);

    })
  })
}
