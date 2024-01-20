const Statistics = ({
  goodValue,
  neutralValue,
  badValue,
  goodPercantage,
  total,
}) => {
  return (
    <>
      <p>Good: {goodValue}</p>
      <p>Neutral: {neutralValue}</p>
      <p>Bad: {badValue}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {goodPercantage}%</p>
    </>
  );
};

export default Statistics;
