import PropTypes from "prop-types"

const FirstApp = (  { name, subtitulo }   ) => { 

    return (
        <>
            <h1>Hola soy { name }</h1>
            <p>Hola soy un { subtitulo }</p>
        </>    
    )
}

export default FirstApp


FirstApp.prototype = { 
    name: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired
}
