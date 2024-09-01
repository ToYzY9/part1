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

export default StatisticLine;
