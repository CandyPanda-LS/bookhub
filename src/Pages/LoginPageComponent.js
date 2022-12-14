import React from 'react'
import logBannerImg from '../assets/logBannerImg.png'
import { CgProfile } from 'react-icons/cg';
import { AiFillLock } from 'react-icons/ai';

function LoginPageComponent() {
  return (
    <div>
      <section id='hero'>
        <div class="m-5">
          <div className='flex'>
            <div class="flex flex-col hidden md:block  space-y-12 md:w-1/2 ">
              <h1
                class="max-w-md text-xl font-bold text-center md:text-5xl md:text-left"
              >
                Bring everyone together to build better future for our children
              </h1>
              <p class="max-w-sm text-xs	text-justify text-center text-darkGrayishBlue md:text-left">
                Bookhub is an online platform that enables to donate and share books. We provide a platform for people to donate, share, and explore books of all genres. Through our platform, you can donate books to people in need, share books with other readers, and explore a wide range of books from all around the world. At Bookhub, we believe that books are a powerful tool for knowledge and understanding. We are committed to providing access to books to everyone, regardless of their financial or physical limitations. With our platform, we strive to promote learning and literacy for all. Thank you for visiting Bookhub and we hope you will find something you love!
              </p>
              <div class="flex justify-center md:justify-start">
                <a
                  href="#"
                  class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
                >Get Started</a
                >
              </div>
            </div>
            <div class="container flex bg-bannerBlue rounded-xl	 flex-col-reverse  px-10 py-10 mx-auto space-y-0 md:space-y-0 md:flex-row">
              <div class='my-5 md:mx-10 md:w-1/2'>
                <h1 class="text-white text-2xl md:text-4xl mb-4 ">LOGIN HERE</h1>
                <p class="text-white text-[10px] md:text-xs mb-4 text-justify hidden md:block">Bookhub is an online platform that enables to donate and share books. We provide a platform for people to donate, share, and explore books of all genres. Through our platform, you can donate books to people in need, share books with other readers, and explore a wide range of books from all around the world. At Bookhub, </p>
                <label class="block text-sm font-medium text-left text-gray-100 mt-5">Email / Username</label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-xl text-gray-500"><CgProfile/></span>
                  <input type="text" name="company-website" id="company-website" class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-brightRed focus:ring-brightRed sm:text-sm" placeholder="username/email...." />
                </div>
                <label class="block text-sm font-medium text-left text-gray-100 mt-5">Password</label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-xl text-gray-500"><AiFillLock/></span>
                  <input type="text" name="company-website" id="company-website" class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-brightRed focus:ring-brightRed sm:text-sm" placeholder="password...." />
                </div>
                <div class="flex justify-center md:justify-start mt-5">
                <a
                  href="#"
                  class="p-3 px-6 pt-2 text-white bg-brightRed rounded-lg baseline hover:bg-brightRedLight"
                >Login</a
                >
              </div>
              </div>
              {/* <!-- Image --> */}
              <div class='md:w-1/2'>
                <img class="rounded-xl mx-auto" src={logBannerImg} alt="" />
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LoginPageComponent