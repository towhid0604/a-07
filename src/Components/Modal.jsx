const Modal = ({ player, closeModal }) => {
  if (!player) return null; // If no player, don't render anything

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96 text-center">
        <h3 className="text-xl font-bold mb-4">Player Selected</h3>
        <img
          src={player.image}
          alt={player.name}
          className="w-48 h-48 object-cover rounded-lg mb-4 mx-auto"
        />
        <h3 className="text-xl font-bold">{player.name}</h3>
        <p className="text-gray-500">{player.country}</p>
        <p>Role: {player.role}</p>
        <p>Batting Type: {player.battingType}</p>
        <p>Rating: {player.rating}</p>
        <p>Price: ${player.biddingPrice}</p>
        <button
          onClick={closeModal}
          className="bg-blue-500 text-white py-2 px-5 rounded-md mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
