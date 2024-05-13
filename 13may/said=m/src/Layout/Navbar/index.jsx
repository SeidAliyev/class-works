import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
  <div className="flex flex-row space-x-3">
                {/* Item #1 */}
                <div className="flex group">
                  <a
                    href="#"
                    className="p-3 text-gray-400 hover:text-yellow-500"
                  >
                    <span className="flex flex-col items-center">
                      {/* Icon */}
                      <i
                        className="mdi mdi-home-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
                                      transition-color duration-200"
                      />
                      {/* Text */}
                      <span className="text-xs mb-2 transition-all duration-200">
                        Home
                      </span>
                      {/* Focus Dot */}
                      <span
                        className="h-2 w-2 rounded-full group-hover:bg-yellow-500
                                      transition-all duration-150 delay-100"
                      />
                    </span>
                  </a>
                </div>
                {/* Item #2 */}
                <div className="flex group">
                  <a
                    href="#"
                    className="p-3 text-gray-400 hover:text-yellow-500"
                  >
                    <span className="flex flex-col items-center">
                      {/* Icon */}
                      <i
                        className="mdi mdi-compass-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
                                      transition-color duration-200"
                      />
                      {/* Text */}
                      <span className="text-xs mb-2 transition-all duration-200">
                        Explore
                      </span>
                      {/* Focus Dot */}
                      <span
                        className="h-2 w-2 rounded-full group-hover:bg-yellow-500
                                      transition-all duration-150 delay-100"
                      />
                    </span>
                  </a>
                </div>
                {/* Item #3 Active */}
                <div className="flex group">
                  <a
                    href="#"
                    className="p-3 text-yellow-500 hover:text-yellow-500"
                  >
                    <span className="flex flex-col items-center">
                      {/* Icon */}
                      <i
                        className="mdi mdi-layers-outline mdi-24px mx-1 text-gray-700 group-hover:text-gray-700
                                      transition-color duration-200"
                      />
                      {/* Text */}
                      <span className="text-xs mb-2 transition-all duration-200">
                        Feeds
                      </span>
                      {/* Focus Dot */}
                      <span
                        className="h-1 w-5 rounded-full bg-yellow-500 group-hover:bg-yellow-500
                                      hover:h-3 hover:w-3 transition-all duration-150 delay-100"
                      />
                    </span>
                  </a>
                </div>
                {/* Item #4 */}
                <div className="flex group">
                  <a
                    href="#"
                    className="p-3 text-gray-400 hover:text-yellow-500"
                  >
                    <span className="flex flex-col items-center">
                      {/* Icon */}
                      <i
                        className="mdi mdi-basket-plus-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
                                      transition-color duration-200"
                      />
                      {/* Text */}
                      <span className="text-xs mb-2 transition-all duration-200">
                        Cart
                      </span>
                      {/* Focus Dot */}
                      <span
                        className="h-2 w-2 rounded-full group-hover:bg-yellow-500
                                      transition-all duration-150 delay-100"
                      />
                    </span>
                  </a>
                </div>
                {/* Item #5 */}
                <div className="flex group">
                  <a
                    href="#"
                    className="p-3 text-gray-400 hover:text-yellow-500"
                  >
                    <span className="flex flex-col items-center">
                      {/* Icon */}
                      <i
                        className="mdi mdi-account-circle-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
                                      transition-color duration-200"
                      />
                      {/* Text */}
                      <span className="text-xs mb-2 transition-all duration-200">
                        Account
                      </span>
                      {/* Focus Dot */}
                      <span
                        className="h-2 w-2 rounded-full group-hover:bg-yellow-500
                                      transition-all duration-150 delay-100"
                      />
                    </span>
                  </a>
                </div>
              </div>  

    </>
    
  )
}

export default Navbar