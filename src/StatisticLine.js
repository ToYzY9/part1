const StatisticLine = ({ text, count }) => {
    if (count === 0) return <p>{text}</p>;
    if (text === "Positive") {
        return (
            <div>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: "60px" }}>{text}</td>
                            <td>{count} %</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th> </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ width: "60px" }}>{text}</td>
                        <td>{count}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default StatisticLine;
