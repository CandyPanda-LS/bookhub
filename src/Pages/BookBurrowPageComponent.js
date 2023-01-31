import React from 'react'
import regBannerImg from '../assets/regBannerImg.png'
import { BiSearchAlt } from 'react-icons/bi';



function BookBurrowPageComponent() {
    return (
        <div>
            <section id='hero'>
                <div className='m-5'>
                    <div class="container flex bg-bannerBlue rounded-xl	 flex-col-reverse  px-10 py-10 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
                        <div class='my-5 md:mx-10 md:w-3/4'>
                            <h1 class="text-white text-2xl md:text-4xl mb-4 md:text-left">REGISTER HERE</h1>
                            <p class="text-white text-[10px] md:text-xs mb-4 text-justify hidden md:block">Bookhub is an online platform that enables to donate and share books. We provide a platform for people to donate, share, and explore books of all genres. Through our platform, you can donate books to people in need, share books with other readers, and explore a wide range of books from all around the world. At Bookhub, we believe that books are a powerful tool for knowledge and understanding. We are committed to providing access to books to everyone, regardless of their financial or physical limitations. With our platform, we strive to promote learning and literacy for all. Thank you for visiting Bookhub and we hope you will find something you love!</p>
                            <p class="text-white text-[10px] md:text-xs mb-4 text-justify" >Bookhub is an online platform that enables to donate and share books. We provide a platform for people to donate, share, and explore books of all genres. Through our platform, you can donate books to people in need, share books with other readers, and explore a wide range of books from all around the world. At Bookhub, we believe that books are a powerful tool for knowledge and understanding. We are committed to providing access to books to everyone, regardless of their financial or physical limitations. With our platform, we strive to promote learning and literacy for all. Thank you for visiting Bookhub and we hope you will find something you love!</p>
                        </div>
                        {/* <!-- Image --> */}
                        <div class='md:w-1/4'>
                            <img class="rounded-xl mx-auto" src={regBannerImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section id='search'>
                <div className='m-2'>
                    <div class="container flex 	 flex-col-reverse  mx-auto  space-y-0 md:space-y-0 md:flex-row">
                        <div class=" md:w-3/4 mx-2 ">
                            <div class="mt-1 flex rounded-md shadow-sm">
                                <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500" >Search</span>
                                <input type="text" name="company-website" id="company-website" class="block w-full flex-1 rounded-none border-gray-300 focus:border-brightRed focus:ring-brightRed sm:text-sm" placeholder="Enter the name of the book..." />
                                <span class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-gray-500" ><BiSearchAlt /></span>
                            </div>
                        </div>
                        <div class='md:w-1/4 hidden md:block'>
                            <div class="mt-1 flex rounded-md shadow-sm">
                                <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500" >Search</span>
                                <input type="text" name="company-website" id="company-website" class="block w-full flex-1 rounded-none border-gray-300 focus:border-brightRed focus:ring-brightRed sm:text-sm" placeholder="Enter the name of the book..." />
                                <span class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-gray-500" ><BiSearchAlt /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='gallery'>
                <div className='mx-10 my-5'>
                    <div class="container flex justify-start">
                        <p class="ml-10 md:ml-6 text-slate-500 text-lg ">
                            Newest Additions...
                        </p>
                    </div>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" class="p-4">
                              <div class="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                  <label for="checkbox-all-search" class="sr-only">checkbox</label>
                              </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Color
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Accesories
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Available
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Weight
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                              <div class="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                              Sliver
                            </td>
                            <td class="px-6 py-4">
                              Laptop
                            </td>
                            <td class="px-6 py-4">
                              Yes
                            </td>
                            <td class="px-6 py-4">
                              Yes
                            </td>
                            <td class="px-6 py-4">
                              $2999
                            </td>
                            <td class="px-6 py-4">
                              3.0 lb.
                            </td>
                            <td class="flex items-center px-6 py-4 space-x-3">
                              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                              <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                              <div class="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                              Sliver
                            </td>
                            <td class="px-6 py-4">
                              Laptop
                            </td>
                            <td class="px-6 py-4">
                              Yes
                            </td>
                            <td class="px-6 py-4">
                              Yes
                            </td>
                            <td class="px-6 py-4">
                              $2999
                            </td>
                            <td class="px-6 py-4">
                              3.0 lb.
                            </td>
                            <td class="flex items-center px-6 py-4 space-x-3">
                              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                              <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                </div>
                <div className='mx-10 my-5'>
                    <div class="container flex justify-start">
                        <p class="ml-10 md:ml-6 text-slate-500 text-lg ">
                            Non-fiction...
                        </p>
                    </div>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" class="p-4">
                              <div class="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                  <label for="checkbox-all-search" class="sr-only">checkbox</label>
                              </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Color
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Accesories
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Available
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Weight
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                              <div class="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                              Sliver
                            </td>
                            <td class="px-6 py-4">
                              Laptop
                            </td>
                            <td class="px-6 py-4">
                              Yes
                            </td>
                            <td class="px-6 py-4">
                              Yes
                            </td>
                            <td class="px-6 py-4">
                              $2999
                            </td>
                            <td class="px-6 py-4">
                              3.0 lb.
                            </td>
                            <td class="flex items-center px-6 py-4 space-x-3">
                              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                              <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                              <div class="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                              </div>
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                              Sliver
                            </td>
                            <td class="px-6 py-4">
                              Laptop
                            </td>
                            <td class="px-6 py-4">
                              Yes
                            </td>
                            <td class="px-6 py-4">
                              Yes
                            </td>
                            <td class="px-6 py-4">
                              $2999
                            </td>
                            <td class="px-6 py-4">
                              3.0 lb.
                            </td>
                            <td class="flex items-center px-6 py-4 space-x-3">
                              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                              <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BookBurrowPageComponent