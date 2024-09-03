import { useState } from "react";
import Button from "./Button";
import Title from "./Title";
import Anecdote from "./Anecdote";

const App = () => {
    const anecdotes = [
        "If it hurts, do it more often.",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    ];

    const anecdotesVotes = Array.from({ length: anecdotes.length }, () => ({
        name: "",
        votes: 0,
    }));

    anecdotes.forEach((anecdote, index) => {
        anecdotesVotes[index].name = anecdote;
    });

    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState(anecdotesVotes);

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    };

    const randomNumberBetweenZeroToLength = () =>
        setSelected(getRandomInt(anecdotesVotes.length));

    const handleVoteClick = (pos) => () => {
        const newAnecdotesVotes = [...votes];
        newAnecdotesVotes.forEach((anecdote, index) => {
            if (pos === index) {
                newAnecdotesVotes[index].votes += 1;
            }
        });
        setVotes(newAnecdotesVotes);
    };

    const anecdoteWithMostVotes = votes.reduce((prev, current) => {
        return prev.votes > current.votes ? prev : current;
    });

    return (
        <div>
            <Title text="Anecdote of the day" />
            <Anecdote votes={votes} selected={selected} />
            <Button handleClick={handleVoteClick(selected)} text="vote" />
            <Button
                handleClick={randomNumberBetweenZeroToLength}
                text="next anecdote"
            />
            {votes.map((anecdote, index) => {
                const isAnecdoteWithMostWins =
                    anecdoteWithMostVotes.name === anecdote.name;
                if (isAnecdoteWithMostWins) {
                    return (
                        <div key={index}>
                            <Title text="Anecdote with most votes" />
                            <Anecdote votes={votes} selected={index} />
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};

export default App;
