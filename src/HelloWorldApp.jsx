import "./App.css"
import CounterApp from "./CounterApp";
const App = () => {

    return (
        <>
            {console.log('render')}
            <CounterApp value={10}/> 
        </>

    )
}

export default App; 