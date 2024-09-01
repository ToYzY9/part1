import StatisticLine from "./StatisticLine";

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

export default Statistics;
