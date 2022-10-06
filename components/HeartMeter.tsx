export default function HeartMeter() {
  const popularityLevel = 5;
  const userHeartLevel = 3;
  const setUserHeartRating = (heartValue: number) => heartValue;

  const getHandleClick = (heartValue: number) => () => {
    console.log("like");
    setUserHeartRating(heartValue);
  };

  return (
    <div>
      <button onClick={getHandleClick(1)}>{`<3`}</button>
      <button onClick={getHandleClick(2)}>{`<3`}</button>
      <button onClick={getHandleClick(3)}>{`<3`}</button>
      <button onClick={getHandleClick(4)}>{`<3`}</button>
      <button onClick={getHandleClick(5)}>{`<3`}</button>
    </div>
  );
}
