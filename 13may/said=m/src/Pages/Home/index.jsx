import React from 'react'

const Home = () => {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen from-yellow-50 via-teal-300 to-yellow-50 bg-gradient-to-br">
    
    <div className="w-full max-w-md px-7 py-10 mx-auto bg-white rounded-2xl shadow-xl">
      
          {/* App Header */}
         
          {/* Story Bar Section */}
          <div className="flex mb-5 border-b pb-5 border-gray-100">
            {/* Story Bar */}
            <ul className="flex items-center justify-center space-x-2">
              {/* Add Story */}
              <li className="flex flex-col items-center space-y-2">
                {/* Ring */}
                <div
                  className="story-ring flex justify-center items-center
                              bg-gradient-to-tl from-yellow-200 to-orange-500 
                              rounded-full relative cursor-pointer
                              hover:from-orange-300 hover:to-red-400
                              transition-all duration-150 delay-100"
                >
                  <a className="block bg-white p-1 rounded-full" href="#">
                    {/* Thumbnail */}
                    <img
                      className="w-16 rounded-full"
                      src="https://images.unsplash.com/photo-1638687110777-b3fcdf2f9c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                    />
                  </a>
                  <button
                    className="absolute transition duration-500 bg-white border-gray-400 
                                  h-8 w-8 rounded-full text-white border-2 
                                  border-white flex justify-center items-center opacity-80
                                  hover:opacity-60"
                  ></button>
                  <i className="absolute mdi mdi-plus mdi-18px mx-1 text-gray-500" />
                </div>
                {/* Story Text */}
                <span className="story-text font-medium">You</span>
              </li>
              {/* Story #1 */}
              <li className="flex flex-col items-center space-y-2">
                {/* Ring */}
                <div
                  className="story-ring flex justify-center items-center
                              bg-gradient-to-tl from-yellow-200 to-orange-500 
                              rounded-full relative cursor-pointer
                              hover:from-orange-300 hover:to-red-400
                              transition-all duration-150 delay-100"
                >
                  <a className="block bg-white p-1 rounded-full" href="#">
                    {/* Thumbnail */}
                    <img
                      className="w-16 rounded-full"
                      src="https://images.unsplash.com/photo-1638649602320-450b717fa622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                    />
                  </a>
                </div>
                {/* Story Text */}
                <span className="story-text">jett</span>
              </li>
              {/* Story #2 */}
              <li className="flex flex-col items-center space-y-2">
                {/* Ring */}
                <div
                  className="story-ring flex justify-center items-center
                              bg-gradient-to-tl from-yellow-200 to-orange-500 
                              rounded-full relative cursor-pointer
                              hover:from-orange-300 hover:to-red-400
                              transition-all duration-150 delay-100"
                >
                  <a className="block bg-white p-1 rounded-full" href="#">
                    {/* Thumbnail */}
                    <img
                      className="w-16 rounded-full"
                      src="https://images.unsplash.com/photo-1638708644743-2502f38000a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                    />
                  </a>
                </div>
                {/* Story Text */}
                <span className="story-text">sky</span>
              </li>
              {/* Story #3 */}
              <li className="flex flex-col items-center space-y-2">
                {/* Ring */}
                <div
                  className="story-ring flex justify-center items-center
                              bg-gradient-to-tl from-yellow-200 to-orange-500 
                              rounded-full relative cursor-pointer
                              hover:from-orange-300 hover:to-red-400
                              transition-all duration-150 delay-100"
                >
                  <a className="block bg-white p-1 rounded-full" href="#">
                    {/* Thumbnail */}
                    <img
                      className="w-16 rounded-full"
                      src="https://images.unsplash.com/photo-1638691899851-0e955bceba1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                    />
                  </a>
                </div>
                {/* Story Text */}
                <span className="story-text">omen</span>
              </li>
              {/* Story #4 */}
              <li className="flex flex-col items-center space-y-2">
                {/* Ring */}
                <div
                  className="story-ring flex justify-center items-center
                              bg-gradient-to-tl from-yellow-200 to-orange-500 
                              rounded-full relative cursor-pointer
                              hover:from-orange-300 hover:to-red-400
                              transition-all duration-150 delay-100 
                              hover:animate-pulse"
                >
                  <a className="block bg-white p-1 rounded-full" href="#">
                    <img
                      className="w-16 rounded-full"
                      src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                    />
                  </a>
                </div>
                {/* Story Text */}
                <span className="story-text">sage</span>
              </li>
            </ul>
          </div>
          {/* Post Section */}
          <div className="post-container flex flex-col flex-grow h-full">
            {/* Post */}
            <div
              className="story-ring flex justify-center items-center
                      relative cursor-pointer mb-6
                      transition-all duration-150 delay-100"
            >
              {/* Post Item */}
              <img
                className="h-full w-full rounded-3xl"
                src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              />
              {/* Post Owner */}
              <div className="left-4 top-4 absolute backdrop-blur-lg rounded-xl border border-gray-300">
                <a href="#" className="flex p-1.5 px-3">
                  <img
                    src="https://images.unsplash.com/photo-1638687110777-b3fcdf2f9c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                    className="mr-2 w-8 h-8 rounded-full border border-gray-400"
                  />
                  <div className="text-gray-600 font-bold text-sm text-gray-50 hover:underline mt-1">
                    EgoistDeveloper
                  </div>
                </a>
              </div>
              {/* Post Counts */}
              <div
                className="flex mx-auto bottom-10 absolute backdrop-blur-md rounded-xl p-2
                          hover:backdrop-blur-xl transition-all duration-150 delay-100"
              >
                <div className="flex text-gray-600 font-light text-lg text-gray-50 mx-6">
                  <i className="mdi mdi-heart-half-full mdi-24px text-gray-100 mr-2" />
                  23K
                </div>
                <div className="flex text-gray-600 font-light text-lg text-gray-50">
                  <i className="mdi mdi-comment-processing-outline mdi-24px text-gray-100 mr-2" />
                  1.4K
                </div>
                <div className="text-gray-600 font-light text-lg text-gray-50 mx-4">
                  <i className="mdi mdi-bookmark-outline mdi-24px mx-1 text-gray-100 mt-3" />
                </div>
              </div>
            </div>
            {/* Post */}
            <div
              className="story-ring flex justify-center items-center
                      relative cursor-pointer mb-6
                      transition-all duration-150 delay-100"
            >
              {/* Post Item */}
              <img
                className="h-full w-full rounded-3xl"
                src="https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              />
              {/* Post Owner */}
              <div className="left-4 top-4 absolute backdrop-blur-lg rounded-xl border border-gray-300">
                <a href="#" className="flex p-1.5 px-3">
                  <img
                    src="https://images.unsplash.com/photo-1638687110777-b3fcdf2f9c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                    className="mr-2 w-8 h-8 rounded-full border border-gray-400"
                  />
                  <div className="text-gray-600 font-bold text-sm text-gray-50 hover:underline mt-1">
                    EgoistDeveloper
                  </div>
                </a>
              </div>
              {/* Post Counts */}
              <div
                className="flex mx-auto bottom-10 absolute backdrop-blur-md rounded-xl p-2
                          hover:backdrop-blur-xl transition-all duration-150 delay-100"
              >
                <div className="flex text-gray-600 font-light text-lg text-gray-50 mx-6">
                  <i className="mdi mdi-heart-half-full mdi-24px text-gray-100 mr-2" />
                  23K
                </div>
                <div className="flex text-gray-600 font-light text-lg text-gray-50">
                  <i className="mdi mdi-comment-processing-outline mdi-24px text-gray-100 mr-2" />
                  1.4K
                </div>
                <div className="text-gray-600 font-light text-lg text-gray-50 mx-4">
                  <i className="mdi mdi-bookmark-outline mdi-24px mx-1 text-gray-100 mt-3" />
                </div>
              </div>
            </div>
            {/* Post */}
            <div
              className="story-ring flex justify-center items-center
                      relative cursor-pointer mb-6
                      transition-all duration-150 delay-100"
            >
              {/* Post Item */}
              <img
                className="h-full w-full rounded-3xl"
                src="https://images.unsplash.com/photo-1612405199572-aa74dfbad7d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              />
              {/* Post Owner */}
              <div className="left-4 top-4 absolute backdrop-blur-lg rounded-xl border border-gray-300">
                <a href="#" className="flex p-1.5 px-3">
                  <img
                    src="https://images.unsplash.com/photo-1638687110777-b3fcdf2f9c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                    className="mr-2 w-8 h-8 rounded-full border border-gray-400"
                  />
                  <div className="text-gray-600 font-bold text-sm text-gray-50 hover:underline mt-1">
                    EgoistDeveloper
                  </div>
                </a>
              </div>
              {/* Post Counts */}
              <div
                className="flex mx-auto bottom-10 absolute backdrop-blur-md rounded-xl p-2
                          hover:backdrop-blur-xl transition-all duration-150 delay-100"
              >
                <div className="flex text-gray-600 font-light text-lg text-gray-50 mx-6">
                  <i className="mdi mdi-heart-half-full mdi-24px text-gray-100 mr-2" />
                  23K
                </div>
                <div className="flex text-gray-600 font-light text-lg text-gray-50">
                  <i className="mdi mdi-comment-processing-outline mdi-24px text-gray-100 mr-2" />
                  1.4K
                </div>
                <div className="text-gray-600 font-light text-lg text-gray-50 mx-4">
                  <i className="mdi mdi-bookmark-outline mdi-24px mx-1 text-gray-100 mt-3" />
                </div>
              </div>
            </div>
            {/* Post */}
            <div
              className="story-ring flex justify-center items-center
                      relative cursor-pointer mb-6
                      transition-all duration-150 delay-100"
            >
              {/* Post Item */}
              <img
                className="h-full w-full rounded-3xl"
                src="https://images.unsplash.com/photo-1517442952015-85a8427cd6f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80"
              />
              {/* Post Owner */}
              <div className="left-4 top-4 absolute backdrop-blur-lg rounded-xl border border-gray-300">
                <a href="#" className="flex p-1.5 px-3">
                  <img
                    src="https://images.unsplash.com/photo-1638687110777-b3fcdf2f9c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                    className="mr-2 w-8 h-8 rounded-full border border-gray-400"
                  />
                  <div className="text-gray-600 font-bold text-sm text-gray-50 hover:underline mt-1">
                    EgoistDeveloper
                  </div>
                </a>
              </div>
              {/* Post Counts */}
              <div
                className="flex mx-auto bottom-10 absolute backdrop-blur-md rounded-xl p-2
                          hover:backdrop-blur-xl transition-all duration-150 delay-100"
              >
                <div className="flex text-gray-600 font-light text-lg text-gray-50 mx-6">
                  <i className="mdi mdi-heart-half-full mdi-24px text-gray-100 mr-2" />
                  23K
                </div>
                <div className="flex text-gray-600 font-light text-lg text-gray-50">
                  <i className="mdi mdi-comment-processing-outline mdi-24px text-gray-100 mr-2" />
                  1.4K
                </div>
                <div className="text-gray-600 font-light text-lg text-gray-50 mx-4">
                  <i className="mdi mdi-bookmark-outline mdi-24px mx-1 text-gray-100 mt-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* </div> */}

    </>
  )
}

export default Home