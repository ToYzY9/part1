import { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [all, setAll] = useState(0);

    const handleAddGoodByOne = () => {
        setGood(good + 1);
        setAll(all + 1);
    };
    const handleAddNeutralByOne = () => () => {
        setNeutral(neutral + 1);
        setAll(all + 1);
    };
    const handleAddBadByOne = () => {
        setBad(bad + 1);
        setAll(all + 1);
    };

    if (all === 0) {
        return (
            <div>
                <h1>Give feedback</h1>
                <Button handleClick={() => handleAddGoodByOne()} text="Good" />
                <Button handleClick={handleAddNeutralByOne()} text="Neutral" />
                <Button handleClick={handleAddBadByOne} text="Bad" />
                <h2>Statistics</h2>
                <p>No feedback given</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Give feedback</h1>
            <Button handleClick={() => handleAddGoodByOne()} text="Good" />
            <Button handleClick={handleAddNeutralByOne()} text="Neutral" />
            <Button handleClick={handleAddBadByOne} text="Bad" />
            <h2>Statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad} all={all} />
        </div>
    );
}

export default App;
