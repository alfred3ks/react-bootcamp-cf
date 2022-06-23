/*

¿Como sabemos que props recibe un componente?

https://es.reactjs.org/docs/typechecking-with-proptypes.html

El repo orignal esta: Lo vemos en el pdf de la clase tambien el enlace:

https://codesandbox.io/s/props-6i9w0s?file=/package.json:69-79

Para este ejemplo vamos a crear dentro del proyecto en local props-ejemplo:

Un archivo utils.js con el siguiente contenido.
Otro archivo para el css: style.css
Ahora un componente nuevo llamado Profile.jsx.

Para este ejemplo he tenido que instalar una dependencia:

npm install --save prop-types
https://www.npmjs.com/package/prop-types

Este modulo lo que hace es verificar que tipos recibe un componente, osea nos garantiza que un componente reciba exactamente lo que deseamos que sea no cualquier otra cosa.

Bueno una cosa que podemos ver que se puede enviar props por defecto, osea suponiendo como en el ejemplo que un componente esta esperando una props y este no lo tiene muestre un valor por defaul.

function Avatar({ person, size, text = "default" }) {
    return (
        <>
            <h2>{text}</h2>
            <img
                className="avatar"
                src={getImageUrl(person)}
                alt={person.name}
                width={size}
                height={size}
            />

        </>
    );
}

Vemos que el componente Avatar recibe un texto por defecto, entonces si no agregamos esa props en el componente Avatar se renderizara defaul.

export default function Profile() {
    return (
        <div>
            <Avatar
                size={100}
                person={{
                    name: "Katsuko Saruhashi",
                    imageId: "YfeOqp2"
                }}
                text={"title-card"}
            />
            <Avatar
                size={80}
                person={{
                    name: "Aklilu Lemma",
                    imageId: "OKS67lh"
                }}
            />
            <Avatar
                size={50}
                person={{
                    name: "Lin Lanying",
                    imageId: "1bX5QH6"
                }}
            />
        </div>
    );
}

Hijos de un componente:

Ahora tambien podemos ver que un componente reciba otro componente como hijo por medio de una props aqui es diferente porque como vemos las props se pasan como atributos del componente pero este no se pasa como atributo se pasa entre los dos tag -> <Card> Aqui en vez como atributo </Card>

Creamos el componente carta:

function Card({ children }) {
    return (

        <div className="card">
            {children}
        </div>


    );
}

Luego le pasamos a ese componente el hijo pero no como atributo:
<Card>
    <Avatar
        size={80}
        person={{
            name: "Aklilu Lemma",
            imageId: "OKS67lh"
        }}
    />
</Card>

Como propagar props con  {...props}, esto es para el caso de que un componente recibe muchas props, lo hacemos con arrays es el spread operator.

function Ejemplo(props) {
    return (
        <Avatar
            {...props}
        />
    );
};

export default function Profile() {
    return (
        <div>
            <Ejemplo
                size={100}
                person={{
                    name: "Katsuko Saruhashi",
                    imageId: "YfeOqp2"
                }}
            />




*/