import Paragraph from "./Paragraph";
import Vote from "./Vote";

const Anecdote = ({ selected, votes }) => {
    return (
        <div>
            <Paragraph text={votes[selected].name} />
            <Vote votes={votes} selected={selected} />
        </div>
    );
};

export default Anecdote;
