import { getImageUrl } from "../utils.js";
import { PropTypes } from "prop-types";

// JSX: los componentes CamelCase
// Los nombres de los componentes siempre deben empezar con mayusculas.

// el unico parametro que tiene: props
// como seteamos un valor por default? text = default
function Avatar({ person, size, text }) {
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

Avatar.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageId: PropTypes.string.isRequired
    }).isRequired,
    size: PropTypes.number.isRequired,
    text: PropTypes.string
};


/*

Como propagar props con  {...props}, esto es para el caso de que un componente recibe muchas props, lo hacemos con arrays destructuring con el spread operator.

*/

function Ejemplo(props) {
    return (
        <Avatar
            {...props}
        />
    );
};

/*

Esto lo que nos ayuda que las propt que va a recibir seran estas, para que cuando se pasen esos datos sean esas: Es una dependencia que nos ayuda a eso. Importante ver el modulo

*/

// children
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
            <Card>
                <Avatar
                    size={100}
                    person={{
                        name: "Katsuko Saruhashi",
                        imageId: "YfeOqp2"
                    }}
                    text={"title-card"}
                />
            </Card>
            <Card>
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
            </Card>
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

// Aqui vemos el componente carta que va a recibir un hijo en este caso el avatar, lo recibe por medio de una props.
function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}