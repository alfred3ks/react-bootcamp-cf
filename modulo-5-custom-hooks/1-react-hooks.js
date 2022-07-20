/*

Reglas de los hooks: Rules of Hooks:

Solo se pueden llamar los hooks al nivel mas alto:
- No se puede hacer dnetro de loops,
- No se puede hacer dentro de condicionales,
- No se puede hacer dentro de funciones que no sean de react.

Solo podemos llamar a un hooks desde una funcion de react.

Existen muchos hooks que vienen con react y cada vez mas.
Los hook basicos:
- useState(),
- useEffect(),
- useContext()

useState():
function Counter(initialCount){
  const [count, setCount] = useState(initialCount);

  return (
    <>
    Count: {count}
    <button onClick={()=>setCount(initialCount)}>Reset</button>
    <button onClick={()=>setCount(prevCount=> prevCount + 1)}>+</button>
    <button onClick={()=>setCount(prevCount=> prevCount - 1)}>-</button>
    </>

  )
}

useEfecct():
()=>{
  const subcription = props.sourece.susccribe();
  return ()=>{
    subcription.unsubcribe()
  }, [props.sourse]
}

useContext():
Lo veremos mas adelante.

A parte de los hooks anteriores basicos tenemos algunos que vamos a ver:

- useReducer,
- useCallback,
- useMemo,
- useRef,
- useImperativeHandle,
- useLayoutEffect,
- useDebugValue,
- useDeferredValue,
- useTransition,
- useId.

*/