
export default function RootLayout({ children }) {
  return (
      <>
              <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <a href="#" className="flex items-center group">
                            <div className="bg-blue-600 group-hover:bg-blue-700 p-2 rounded-lg transition-colors duration-300">
                                <i className="fas fa-cube text-white text-xl"></i>
                            </div>
                            <span className="ml-3 text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">AcmePro</span>
                        </a>
                    </div>

                    <div className="hidden md:flex items-center space-x-1">
                        <div className="dropdown relative">
                            <button className="nav-link text-gray-700 hover:text-blue-600 px-4 py-2 flex items-center rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                <i className="fas fa-home mr-2"></i>
                                Home
                            </button>
                        </div>

                        <div className="dropdown relative">
                            <button className="nav-link text-gray-700 hover:text-blue-600 px-4 py-2 flex items-center rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                <i className="fas fa-briefcase mr-2"></i>
                                Products
                                <i className="fas fa-chevron-down ml-1 text-xs transition-transform duration-200"></i>
                            </button>
                            <div className="dropdown-menu absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-1 z-50 opacity-0 invisible transition-all duration-300 transform -translate-y-2 border border-gray-100">
                                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Solutions</div>
                                <a href="#" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200">
                                    <i className="fas fa-laptop text-blue-500 mr-3 w-5 text-center"></i>
                                    Software Suite
                                </a>
                                <a href="#" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200">
                                    <i className="fas fa-server text-blue-500 mr-3 w-5 text-center"></i>
                                    Cloud Services
                                </a>
                                <a href="#" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200">
                                    <i className="fas fa-mobile-screen text-blue-500 mr-3 w-5 text-center"></i>
                                    Mobile Apps
                                </a>
                                <div className="border-t border-gray-100 my-1"></div>
                                <a href="#" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200">
                                    <i className="fas fa-star text-yellow-400 mr-3 w-5 text-center"></i>
                                    Featured Products
                                </a>
                            </div>
                        </div>

                        <a href="#" className="nav-link text-gray-700 hover:text-blue-600 px-4 py-2 flex items-center rounded-lg hover:bg-blue-50 transition-colors duration-200">
                            <i className="fas fa-building mr-2"></i>
                            Company
                        </a>

                        <div className="dropdown relative">
                            <button className="nav-link text-gray-700 hover:text-blue-600 px-4 py-2 flex items-center rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                <i className="fas fa-file-alt mr-2"></i>
                                Resources
                                <i className="fas fa-chevron-down ml-1 text-xs transition-transform duration-200"></i>
                            </button>
                            <div className="dropdown-menu absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-1 z-50 opacity-0 invisible transition-all duration-300 transform -translate-y-2 border border-gray-100">
                                <div className="grid grid-cols-2 gap-1 p-2">
                                    <a href="#" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                                            <i className="fas fa-book text-blue-600"></i>
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-800">Docs</div>
                                            <div className="text-xs text-gray-500">Technical documentation</div>
                                        </div>
                                    </a>
                                    <a href="#" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                        <div className="bg-purple-100 p-2 rounded-lg mr-3">
                                            <i className="fas fa-video text-purple-600"></i>
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-800">Tutorials</div>
                                            <div className="text-xs text-gray-500">Step-by-step guides</div>
                                        </div>
                                    </a>
                                    <a href="#" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                        <div className="bg-green-100 p-2 rounded-lg mr-3">
                                            <i className="fas fa-blog text-green-600"></i>
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-800">Blog</div>
                                            <div className="text-xs text-gray-500">Latest updates</div>
                                        </div>
                                    </a>
                                    <a href="#" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                        <div className="bg-red-100 p-2 rounded-lg mr-3">
                                            <i className="fas fa-headset text-red-600"></i>
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-800">Support</div>
                                            <div className="text-xs text-gray-500">Help center</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <a href="#" className="nav-link text-gray-700 hover:text-blue-600 px-4 py-2 flex items-center rounded-lg hover:bg-blue-50 transition-colors duration-200">
                            <i className="fas fa-envelope mr-2"></i>
                            Contact
                            <span className="ml-2 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">New</span>
                        </a>
                    </div>

                    <div className="flex items-center space-x-3">
                        <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100 transition-colors duration-200 relative">
                            <i className="fas fa-search"></i>
                            <span className="sr-only">Search</span>
                        </button>

                        <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100 transition-colors duration-200 relative">
                            <i className="fas fa-bell"></i>
                            <span className="sr-only">Notifications</span>
                            <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white"></span>
                        </button>

                        <div className="hidden md:block h-6 w-px bg-gray-200"></div>

                        <div className="dropdown relative">
                            <button className="flex items-center space-x-2 focus:outline-none group">
                                <div className="relative">
                                    <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 overflow-hidden avatar-ring">
                                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="h-full w-full object-cover"/>
                                    </div>
                                    <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white"></span>
                                </div>
                                <div className="hidden lg:flex flex-col items-start">
                                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">John Doe</span>
                                    <span className="text-xs text-gray-500">Admin</span>
                                </div>
                                <i className="fas fa-chevron-down text-xs text-gray-500 hidden lg:inline transition-transform duration-200 group-hover:text-blue-600"></i>
                            </button>
                            <div className="dropdown-menu absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-1 z-50 opacity-0 invisible transition-all duration-300 transform -translate-y-2 border border-gray-100">
                                <div className="px-4 py-3 border-b border-gray-100">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 overflow-hidden mr-3">
                                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="h-full w-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">John Doe</p>
                                            <p className="text-sm text-gray-500">john@example.com</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200">
                                    <i className="fas fa-user-circle text-gray-400 mr-3 w-5 text-center"></i>
                                    My Profile
                                </a>
                                <a href="#" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200">
                                    <i className="fas fa-cog text-gray-400 mr-3 w-5 text-center"></i>
                                    Account Settings
                                </a>
                                <a href="#" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200">
                                    <i className="fas fa-envelope text-gray-400 mr-3 w-5 text-center"></i>
                                    Messages
                                    <span className="ml-auto bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">3</span>
                                </a>
                                <div className="border-t border-gray-100 my-1"></div>
                                <a href="#" className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200">
                                    <i className="fas fa-sign-out-alt text-gray-400 mr-3 w-5 text-center"></i>
                                    Sign out
                                </a>
                            </div>
                        </div>

                        <button id="mobile-menu-button" className="md:hidden p-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                            <i className="fas fa-bars text-xl"></i>
                            <span className="sr-only">Menu</span>
                        </button>
                    </div>
                </div>
            </div>

            <div id="mobile-menu" className="mobile-menu md:hidden bg-white border-t border-gray-200">
                <div className="px-2 pt-2 pb-4 space-y-1">
                    <a href="#" className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200">
                        <i className="fas fa-home text-blue-500 mr-3 w-5 text-center"></i>
                        Home
                    </a>
                    <div className="group">
                        <button className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">
                            <div className="flex items-center">
                                <i className="fas fa-briefcase text-blue-500 mr-3 w-5 text-center"></i>
                                Products
                            </div>
                            <i className="fas fa-chevron-down text-xs transition-transform duration-200 group-focus:rotate-180"></i>
                        </button>
                        <div className="pl-4 mt-1 space-y-1 hidden group-focus:block">
                            <a href="#" className="block px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200">
                                <i className="fas fa-laptop text-blue-400 mr-3 w-5 text-center"></i>
                                Software
                            </a>
                            <a href="#" className="block px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200">
                                <i className="fas fa-server text-blue-400 mr-3 w-5 text-center"></i>
                                Services
                            </a>
                            <a href="#" className="block px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200">
                                <i className="fas fa-mobile-screen text-blue-400 mr-3 w-5 text-center"></i>
                                Apps
                            </a>
                        </div>
                    </div>
                    <a href="#" className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200">
                        <i className="fas fa-building text-blue-500 mr-3 w-5 text-center"></i>
                        Company
                    </a>
                    <div className="group">
                        <button className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">
                            <div className="flex items-center">
                                <i className="fas fa-file-alt text-blue-500 mr-3 w-5 text-center"></i>
                                Resources
                            </div>
                            <i className="fas fa-chevron-down text-xs transition-transform duration-200 group-focus:rotate-180"></i>
                        </button>
                        <div className="pl-4 mt-1 space-y-1 hidden group-focus:block">
                            <a href="#" className="block px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200">
                                <i className="fas fa-book text-blue-400 mr-3 w-5 text-center"></i>
                                Documentation
                            </a>
                            <a href="#" className="block px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200">
                                <i className="fas fa-video text-blue-400 mr-3 w-5 text-center"></i>
                                Tutorials
                            </a>
                            <a href="#" className="block px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200">
                                <i className="fas fa-blog text-blue-400 mr-3 w-5 text-center"></i>
                                Blog
                            </a>
                        </div>
                    </div>
                    <a href="#" className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200">
                        <i className="fas fa-envelope text-blue-500 mr-3 w-5 text-center"></i>
                        Contact
                        <span className="ml-2 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">New</span>
                    </a>
                    <div className="border-t border-gray-200 pt-2 mt-2">
                        <a href="#" className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200">
                            <i className="fas fa-user-circle text-blue-500 mr-3 w-5 text-center"></i>
                            Profile
                        </a>
                        <a href="#" className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200">
                            <i className="fas fa-cog text-blue-500 mr-3 w-5 text-center"></i>
                            Settings
                        </a>
                        <a href="#" className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200">
                            <i className="fas fa-sign-out-alt text-blue-500 mr-3 w-5 text-center"></i>
                            Sign Out
                        </a>
                    </div>
                </div>
            </div>
        </nav>


          {children}
      </>

  );
}
