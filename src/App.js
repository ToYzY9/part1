import { useState } from "react";

const Button = (props) => {
    return <button onClick={props.handleClick}>{props.text}</button>;
};

const Paragraph = ({ text, count }) => {
    if (count === 0) {
        return <p>{text}</p>;
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

    const handleAddGoodByOne = () => {
        setGood(good + 1);
    };
    const handleAddNeutralByOne = () => () => {
        setNeutral(neutral + 1);
    };
    const handleAddBadByOne = () => {
        setBad(bad + 1);
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
        </div>
    );
}

export default App;
