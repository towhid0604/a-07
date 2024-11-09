const Banner = ({ coinHandle }) => {
  return (
    <div className="relative flex items-center justify-center py-[40px]">
      <div>
        <img
          src="https://i.ibb.co.com/1RwfDDK/bg-shadow.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
      <div className="text-center relative p-4">
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co.com/fHGtZdn/banner-main.png"
            alt=""
            className="mx-auto"
          />
        </div>
        <h2 className="text-4xl mt-4">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <p className="text-[20px] mt-2">Beyond Boundaries Beyond Limits</p>
        <button
          onClick={coinHandle}
          className="bg-yellow-300 py-3 px-8 text-xl rounded-lg mt-4"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
