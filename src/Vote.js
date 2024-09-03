const Vote = ({ votes, selected }) => {
    return (
        <div>
            <p>has {votes[selected].votes} votes</p>
        </div>
    );
};

export default Vote;
