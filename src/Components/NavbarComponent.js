import React from 'react'
import logo from '../assets/logo.svg'


function NavbarComponent() {
  return (
    <div>

      <nav class="relative container mx-auto p-6">
        {/* <!-- Flex container --> */}
        <div class="flex items-center justify-between">
          {/* <!-- Logo --> */}
          <div class="pt-2">
            <img class="w-40 " src={logo} alt="" />
          </div>
          {/* <!-- Menu Items --> */}
          <div class="hidden space-x-6 md:flex">
            <a href="/" class="hover:text-darkGrayishBlue">HOME</a>
            <a href="/donate" class="hover:text-darkGrayishBlue">DONATE</a>
            <a href="/burrow" class="hover:text-darkGrayishBlue">BURROW</a>
            <a href="/contact-us" class="hover:text-darkGrayishBlue">CONTACT US</a>
            <a href="/digital-library" class="hover:text-darkGrayishBlue">DIGITAL LIBRARY</a>
          </div>
          {/* <!-- Button --> */}
          {/* <div class="md:flex space-x-2">
            <a
              href="/register"
              class="hidden ml-8 p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
            >Register</a
            >

            <a
              href="/login"
              class="hidden  p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
            >Login</a
            >
          </div> */}
          <div class="md:flex space-x-2">
            <p class="hidden md:block mt-3">Welcome Yasuri</p>
            <a class="hidden md:block"
              href="/profile">
              <img class="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-6/303116441_862583885126583_4062530546096845958_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Rjdw5lA7mrsAX-g6UDr&_nc_ht=scontent.fcmb2-2.fna&oh=00_AfAtd4KEh0GaySwX8KPim20AfYvG0T3xEfQvuyul9nNv0w&oe=63DE7F50" alt="Bordered avatar" />
            </a>
            <a
              href="/login"
              class="hidden  p-3 px-6 text-white bg-brightRed rounded-md baseline hover:bg-brightRedLight md:block"
            >Logout
            </a>
          </div>

          {/* <!-- Hamburger Icon --> */}
          <button
            id="menu-btn"
            class="block hamburger md:hidden focus:outline-none"
          >
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
        </div>

        {/* <!-- Mobile Menu --> */}
        <div class="md:hidden">
          <div
            id="menu"
            class="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="/" >HOME</a>
            <a href="/donate" >DONATE</a>
            <a href="/burrow" >BURROW</a>
            <a href="/contact-us" >CONTACT US</a>
            <a href="/digital-library" >DIGITAL LIBRARY</a>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarComponent