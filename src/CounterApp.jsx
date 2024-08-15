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

    function handleReset() { 
        setCounter(value)
    }

    function handleRandom() { 
        let newValue =  Math.round(Math.random(100) * 100)

        setCounter(newValue)
    }

    return (
        <>
            <h1>CounterApp</h1>
            
            <h2>{counter}</h2>

            <button onClick={handleAdd}> + 1 </button>
            <button onClick={handleRest}> - 1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleRandom}>RandomVal</button>
        </>
    )
}

export default CounterApp; 

CounterApp.prototype = { 
    value: PropTypes.number.isRequired 
}


