import React from 'react'

const UserCard = ({title, user, seen, image, role, email}) => {
  return(
  <div class="md:w-1/4">
            <div class="bg-white border rounded m-4">
              <div class="py-8 px-4">
                <a href="">
                  <img class="rounded-full mx-auto h-24 w-24 object-cover" src="./../dist/avatar/nis.png" alt=""/>
                </a>
                <div class="py-4 text-center text-xl">
                  <h1 class="leading-3 font-medium text-xl">
                    Zero Black Coder
                  </h1>
                  <span class="text-sm text-gray-700 font-normal leading-3">{email}</span>
                  <p class="text-sm text-gray-600 leading-5 mt-3">
                    Zero Black Coder is an Member of DPR living in planet namek,
                    i love to play with hooman
                  </p>
                </div>
                <div class="px-8 pb-4 pt-2 flex justify-between items-center">
                  <div>
                    <div class="text-center text-xl font-base text-gray-500">
                      <i class="bx bx-camera"></i>
                    </div>
                    <div class="text-center text-xl font-medium text-gray-700 leading-none">
                      126
                    </div>
                  </div>

                  <div>
                    <div class="text-center text-xl font-base text-gray-500">
                      <i class="bx bx-bookmark"></i>
                    </div>
                    <div class="text-center text-xl font-medium text-gray-700 leading-none">
                      897
                    </div>
                  </div>
                  <div>
                    <div class="text-center text-xl font-base text-gray-500">
                      <i class="bx bx-user"></i>
                    </div>
                    <div class="text-center text-xl font-medium text-gray-700 leading-none">
                      551K
                    </div>
                  </div>
                </div>
                <div class="px-4">
                  <button class="py-2 w-full text-sm border border-transparent rounded bg-green-500 text-white hover:bg-green-400 focus:outline-none focus:border-green-500 focus:shadow-outline-blue active:bg-green-500 transition duration-150 ease-in-out inline-flex justify-center items-center">
                    <i class="bx bx-user-plus text-lg text-white mr-4"></i>
                    Add Friends
                  </button>
                </div>
              </div>
            </div>
          </div>
  )
}

export default UserCard