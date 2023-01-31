import React from 'react'

function ProfilePageComponent() {
  return (
    <div>

      <section class=" bg-blueGray-200">
        <div class="container mx-auto px-4">
          <div class="flex flex-col min-w-0 break-words bg-slate-50 w-full mb-6 shadow-xl rounded-lg mt-2">
            <div class="px-2 mt-10">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div class="">
                    <img class="w-44 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-6/303116441_862583885126583_4062530546096845958_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Rjdw5lA7mrsAX-g6UDr&_nc_ht=scontent.fcmb2-2.fna&oh=00_AfAtd4KEh0GaySwX8KPim20AfYvG0T3xEfQvuyul9nNv0w&oe=63DE7F50" alt="Bordered avatar" />

                    {/* <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" class="shadow-xl rounded-full align-middle border-none" width="150px" /> */}
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                    <button class="bg-brightRed uppercase text-white font-bold hover:shadow-md shadow text-xs px-6 py-3 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                      Connect
                    </button>
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">22</span><span class="text-sm text-blueGray-400">Books Donated</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span><span class="text-sm text-blueGray-400">Books Burrowd</span>
                    </div>
                    <div class="lg:mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span class="text-sm text-blueGray-400">Audio Books</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-12">
                <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  Jenna Stones
                </h3>
                <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  Los Angeles, California
                </div>
                <div class="mb-2 text-blueGray-600 mt-10">
                  <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Solution Manager - Creative Tim Officer
                </div>
                <div class="mb-2 text-blueGray-600">
                  <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>University of Computer Science
                </div>
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </p>
                    <a href="#pablo" class="font-normal text-pink-500">Show more</a>
                  </div>
                </div>
              </div>

              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <p> My donations</p>

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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ProfilePageComponent