import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.svg";
import { getUser } from "../app/actions/user.actions";
import { logout } from "../app/slices/user.slice";
import { Link } from "react-router-dom";

function NavbarComponent() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  useEffect(() => {
    if (localStorage.getItem("Authorization")) {
      dispatch(getUser());
    }
  }, [userState.loginStatus]);

  return (
    <div>
      <nav className="relative container mx-auto p-6">
        {/* <!-- Flex container --> */}
        <div className="flex items-center justify-between">
          {/* <!-- Logo --> */}
          <div className="pt-2">
            <img className="w-40 " src={logo} alt="" />
          </div>
          {/* <!-- Menu Items --> */}
          <div className="hidden space-x-6 md:flex">
            <Link to="/" className="hover:text-darkGrayishBlue">
              HOME
            </Link>
            {userState && userState.loginStatus && (
              <>
                <Link to="/donate" className="hover:text-darkGrayishBlue">
                  DONATE
                </Link>
                <Link to="/burrow" className="hover:text-darkGrayishBlue">
                  BORROW
                </Link>
              </>
            )}
            <Link to="/contact-us" className="hover:text-darkGrayishBlue">
              CONTACT US
            </Link>
            <Link to="/digital-library" className="hover:text-darkGrayishBlue">
              DIGITAL LIBRARY
            </Link>
          </div>

          {/* <!-- Button --> */}

          {userState && !userState.loginStatus && (
            <div className="md:flex space-x-2">
              <Link
                to="/register"
                className="hidden ml-8 p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="hidden  p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
              >
                Login
              </Link>
            </div>
          )}

          {userState && userState.loginStatus && (
            <div className="md:flex space-x-2">
              <p className="hidden md:block mt-3">{userState.user.fullName}</p>
              <Link to="/profile" className="hidden md:block">
                <img
                  className="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src="https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-6/303116441_862583885126583_4062530546096845958_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Rjdw5lA7mrsAX-g6UDr&_nc_ht=scontent.fcmb2-2.fna&oh=00_AfAtd4KEh0GaySwX8KPim20AfYvG0T3xEfQvuyul9nNv0w&oe=63DE7F50"
                  alt="Bordered avatar"
                />
              </Link>
              <button
                onClick={() => dispatch(logout())}
                className="hidden  p-3 px-6 text-white bg-brightRed rounded-md baseline hover:bg-brightRedLight md:block"
              >
                Logout
              </button>
            </div>
          )}

          {/* <!-- Hamburger Icon --> */}
          <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* <!-- Mobile Menu --> */}
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="/">HOME</a>
            {userState && userState.loginStatus && (
              <>
                <a href="/donate">DONATE</a>
                <a href="/burrow">BURROW</a>
              </>
            )}
            <a href="/contact-us">CONTACT US</a>
            <a href="/digital-library">DIGITAL LIBRARY</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;
