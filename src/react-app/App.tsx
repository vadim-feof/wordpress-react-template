import React, {useState} from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1)
    }

    return (
        <div>
            <button onClick={increment}>{count}</button>
            <h1>asd</h1>
        </div>
    );
};

export default App;
