/*

Controlled components:
Son aquellos que pueden ser alterados de forma programatica:
Vemos un ejemplo:

// JS:
const [currentValue, setCurrentValue] = useState('');

// ReactJS:
<input
  type="text"
  value={currentValue}
  onChange={(e)=>{
    setCurrentValue(e.target.value)
}}
/>

https://reactjs.org/docs/forms.html#controlled-components

Uncontrolled components:
Son aquellos donde los datos son proporcionados por el DOM mismo, por ejemplo:

<input
  type="file"
  name="attached-file"
/>

https://reactjs.org/docs/uncontrolled-components

*/