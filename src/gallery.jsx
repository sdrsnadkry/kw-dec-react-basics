import { useState } from "react";

import patanImage from './images/Patan.webp'

const kathmanduImage =
  "https://cdn.britannica.com/68/178668-050-DA998E6C/Durbar-Square-heart-district-Kathmandu-earthquake-Nepal-April-25-2015.jpg";

export default function Gallery() {
  const [isKathmandu, setIsKathmandu] = useState(false);

  function handleIsKathmandu() {
    setIsKathmandu(!isKathmandu);
  }

  return (
    <div>
      <h1>Gallery = {String(isKathmandu)}</h1>

      <div>
        <button onClick={handleIsKathmandu}>Change Place</button>
      </div>

      <img
        src={isKathmandu ? kathmanduImage : patanImage}
        alt=""
        style={{ width: "200px", height: "200px" }}
      />
    </div>
  );
}
