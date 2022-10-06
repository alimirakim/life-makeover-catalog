export default function ObtainedButton() {
  const isObtained = false;
  const setIsObtained = (isObtained: boolean) => true;

  return (
    <button onClick={() => setIsObtained(!isObtained)}>
      {isObtained ? "Obtained" : "Unobtained"}
    </button>
  );
}
