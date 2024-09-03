const Button = ({ text, handleClick }) => {
    return (
        <span>
            <button onClick={handleClick}>{text}</button>
        </span>
    );
};

export default Button;
