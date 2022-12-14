import React from 'react'
import logoWhite from '../../assets/logo-white.svg'
import iconFacebook from '../../assets/icon-facebook.svg'
import iconInstagram from '../../assets/icon-instagram.svg'
import iconTwitter from '../../assets/icon-twitter.svg'
import iconPinterest from '../../assets/icon-pinterest.svg'


function FooterComponent() {
  return (
    <div>{/* <!-- Footer --> */}
    <footer class="bg-veryDarkBlue">
      {/* <!-- Flex Container --> */}
      <div
        class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
      >
        {/* <!-- Logo and social links container --> */}
        <div
          class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
        >
          <div class="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          {/* <!-- Logo --> */}
          <div>
            <img src={logoWhite} class="h-8" alt="" />
          </div>
          {/* <!-- Social Links Container --> */}
          <div class="flex justify-center space-x-4">
            {/* <!-- Link 1 --> */}
            <a href="#">
              <img src={iconFacebook} alt="" class="h-8" />
            </a>
            {/* <!-- Link 2 --> */}
            <a href="#">
              <img src={iconInstagram} alt="" class="h-8" />
            </a>
            {/* <!-- Link 3 --> */}
            <a href="#">
              <img src={iconTwitter} alt="" class="h-8" />
            </a>
            {/* <!-- Link 4 --> */}
            <a href="#">
              <img src={iconPinterest} alt="" class="h-8" />
            </a>
            {/* <!-- Link 5 --> */}
            <a href="#">
              <img src={iconPinterest} alt="" class="h-8" />
            </a>
          </div>
        </div>
        {/* <!-- List Container --> */}
        <div class="flex justify-around space-x-32">
          <div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-brightRed">Home</a>
            <a href="#" class="hover:text-brightRed">Pricing</a>
            <a href="#" class="hover:text-brightRed">Products</a>
            <a href="#" class="hover:text-brightRed">About</a>
          </div>
          <div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-brightRed">Careers</a>
            <a href="#" class="hover:text-brightRed">Community</a>
            <a href="#" class="hover:text-brightRed">Privacy Policy</a>
          </div>
        </div>

        {/* <!-- Input Container --> */}
        <div class="flex flex-col justify-between">
          <form>
            <div class="flex space-x-3">
              <input
                type="text"
                class="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button
                class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
              >
                Go
              </button>
            </div>
          </form>
          <div class="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer></div>
  )
}

export default FooterComponent