import "./App.css"; 

const Button = (props) => { 

    return (
        <>
            <button className="buttonNavBar">{props.name}</button>
        </>
    )
}

export default Button