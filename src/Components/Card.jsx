const Card = ({ information, onPlayerSelect }) => {
  const { name, country, image, role, battingType, biddingPrice, rating } =
    information;

  const handleChoosePlayer = () => {
    onPlayerSelect(biddingPrice);
  };

  return (
    <div className="border rounded-lg p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-xl font-bold mt-2">{name}</h3>
      <p className="text-gray-500">{country}</p>
      <button className="bg-gray-400 py-1 px-3 rounded-md mt-2">{role}</button>
      <p>Rating: {rating}</p>
      <p>Batting Type: {battingType}</p>
      <p>
        Price: <span>${biddingPrice}</span>
      </p>
      <button
        onClick={handleChoosePlayer}
        className="bg-blue-500 text-white py-2 px-5 rounded-lg mt-3"
      >
        Choose Player
      </button>
    </div>
  );
};

export default Card;
