import { useMemo, useState } from "react";

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["New Todo"]);
    // const calculation = expensiveCalculation(count); 

    const calculation = useMemo(() => expensiveCalculation(count), [count])



    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <div>
            <div>
                <h2>My Todos :</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button style={{ border: '2px solid black' }} onClick={addTodo}>Add Todo</button>
            </div>
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    );
};



const expensiveCalculation = (num) => {
    console.log("Lengthy Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};



export default UseMemo