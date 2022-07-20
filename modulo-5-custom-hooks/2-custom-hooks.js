/*

Los custom hooks:

Un custom hooks es una funcion que empieza con la palabra use y por medio de este custon hooks podemos acceder a otro hooks.

Por ejemplo:

function useFriendStatus(friendID){
  ..code
  const [isOnline, setIsOnlone] = useState(null)
}

Dentro de un custom hooks podemos acceder a cualquier hooks que exporte a react ose los hooks que ya existen en react.


*/