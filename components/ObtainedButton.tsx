import { useState } from "react";
import { FaRegSquare, FaCheckSquare } from "react-icons/fa";

export default function ObtainedButton() {
  const [isObtained, setIsObtained] = useState(false);
  const titleText = isObtained ? "Mark as 'unobtained'" : "Mark as 'obtained'";

  const handleClick = () => setIsObtained(!isObtained);

  return (
    <button onClick={handleClick} title={titleText}>
      {isObtained ? <FaCheckSquare className="fa-2xl" /> : <FaRegSquare />}
    </button>
  );
}
