import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Plus</button>
            <button onClick={() => setCounter(0)}>Zero</button>
            <button onClick={() => setCounter(counter - 1)}>Moins</button>
        </>
    );
}

export default App;
