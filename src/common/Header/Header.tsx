
    import { FC } from "react";
    import { Link } from "react-router-dom";

    const Header: FC = () => {
      return (
        <header
      className={"relative z-40 mx-5 flex items-center justify-center py-5 font-bold transition-all ease-linear md:flex-row"}
    >
      <div
        className="mx-auto flex w-full flex-col items-center justify-between rounded-xl border-2 border-black bg-white px-4 py-3 shadow-custom transition-all md:flex-row"
        style={{ maxWidth: "80rem" }}
      >
        <>
          <div className="flex w-full flex-row items-center justify-center text-gray-800 md:flex-row md:text-base">
            <div className="lg:mx-10">
              <Link
                to="/"
                className="mx-4 py-1 text-sm  no-underline transition-all hover:text-blue-500 sm:text-xl sm:font-extrabold md:mx-10"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="mx-4 py-1 text-sm no-underline  transition-all hover:text-blue-500 sm:text-xl sm:font-extrabold md:mx-10"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="mx-4 py-1 text-sm no-underline transition-all hover:text-blue-500 sm:text-xl sm:font-extrabold md:mx-10"
              >
                Employment History
              </Link>
              <Link
                to="/contact"
                className="mx-4 py-1 text-sm no-underline transition-all hover:text-blue-500 sm:text-xl sm:font-extrabold md:mx-10"
              >
                Contact
              </Link>
            </div>
          </div>
        </>
      </div>
    </header>
      );
    };

    export default Header;