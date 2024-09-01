import { useState } from "react";

const Button = (props) => {
    return <button onClick={props.handleClick}>{props.text}</button>;
};

const StatisticLine = ({ text, count }) => {
    if (count === 0) return <p>{text}</p>;
    if (text === "Positive") {
        return (
            <p>
                {text} {count} %
            </p>
        );
    }
    return (
        <p>
            {text} {count}
        </p>
    );
};

const Statistics = ({ good, neutral, bad, all }) => {
    const average = () => {
        if (all === 0) return 0;
        return (good - bad) / all;
    };

    const positive = () => {
        if (all === 0) return 0;
        return (good * 100) / all;
    };

    return (
        <div>
            <StatisticLine text="Good" count={good} />
            <StatisticLine text="Neutral" count={neutral} />
            <StatisticLine text="Bad" count={bad} />
            <StatisticLine text="All" count={all} />
            <StatisticLine text="Average" count={average()} />
            <StatisticLine text="Positive" count={positive()} />
        </div>
    );
};

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
