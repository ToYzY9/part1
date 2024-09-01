import { useState } from "react";

const Button = (props) => {
    return <button onClick={props.handleClick}>{props.text}</button>;
};

const Paragraph = ({ text, count }) => {
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

function App() {
    // enregistrer les clics de chaque bouton dans un état différent
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
            <h1>Give feedback</h1>
            <Button handleClick={() => handleAddGoodByOne()} text="Good" />
            <Button handleClick={handleAddNeutralByOne()} text="Neutral" />
            <Button handleClick={handleAddBadByOne} text="Bad" />

            <h2>Statistics</h2>
            <Paragraph text="Good" count={good} />
            <Paragraph text="Neutral" count={neutral} />
            <Paragraph text="Bad" count={bad} />
            <Paragraph text="All" count={all} />
            <Paragraph text="Average" count={average()} />
            <Paragraph text="Positive" count={positive()} />
        </div>
    );
}

export default App;
