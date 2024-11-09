import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = ({ onPlayerSelect }) => {
  const [information, setInformation] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setInformation(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {information.map((item) => (
        <Card
          key={item.playerId}
          information={item}
          onPlayerSelect={onPlayerSelect}
        />
      ))}
    </div>
  );
};

export default Cards;
