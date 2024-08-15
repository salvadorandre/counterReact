import { useState } from 'react';
import PropTypes from 'prop-types'

const CounterApp = ( { value } ) => {

    const [counter, setCounter] = useState( value ); 
    
    function handleAdd() { 
        setCounter(counter + 1)
    }

    function handleRest() { 
        setCounter(counter - 1)
    }

    return (
        <>
            <h1>CounterApp</h1>
            
            <h2>{counter}</h2>

            <button onClick={handleAdd}> + 1 </button>
            <button onClick={handleRest}> - 1</button>
        </>
    )
}

export default CounterApp; 

CounterApp.prototype = { 
    value: PropTypes.number.isRequired 
}


