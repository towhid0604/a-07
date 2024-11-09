const Footer = () => {
  return (
    <div className="">
      <section className=" relative top-[140px]">
        <div
          className="hero w-3/4 mx-auto rounded-lg mb-5 bg-white"
          style={{
            backgroundImage: "url(../../src/assets/bg-shadow.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-content text-center flex items-center justify-center">
            <div className="max-w-md w-full px-5 py-10">
              <div className="relative rounded-lg flex flex-col items-center justify-center bg-opacity-75 z-20">
                <h3 className="text-4xl font-bold text-gray-800">
                  Subscribe to our Newsletter
                </h3>
                <p className="mt-2 text-gray-600">
                  Get the latest updates and news right in your inbox!
                </p>

                <form className="my-5">
                  <fieldset className="form-control w-full">
                    <div className="join flex flex-col sm:flex-row justify-center gap-3">
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="input input-bordered w-full sm:w-72"
                      />
                      <button
                        className="btn btn-primary w-full sm:w-auto mt-3 sm:mt-0"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-black pt-[150px] text-white">
        <div className="flex justify-center">
          <img
            src="../../src/assets/logo-footer.png"
            alt="Company Logo"
            className="max-w-xs"
          />
        </div>
        <footer className="footer text-white p-10">
          <nav>
            <h6 className="footer-title">About Us</h6>
            <p>
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </nav>
          <nav>
            <h6 className="footer-title">Quick Link</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Service</a>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="form-control w-80">
              <p className="my-2">
                Get the latest updates and news right in your inbox!
              </p>
              <div className="join">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item" type="submit">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
      <div className="bg-black text-gray-400 text-center">
        <div className="flex w-full flex-col">
          <div className="divider divider-neutral "></div>
        </div>
        <p>@2024 Your Company All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
