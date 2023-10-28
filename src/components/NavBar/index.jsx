import  { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

 
  return (
    <>
    <div className='m-0'>
    <nav className="dark:bg-slate-900 fixed  left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <NavLink to={'/home'}>
              <img className="h-15 w-12" src="https://firebasestorage.googleapis.com/v0/b/elchaniar-617f3.appspot.com/o/logo-new.png?alt=media&token=3955c679-d984-4afe-8652-28963bae4ab3" />
              </NavLink>
            </div>
          </div>

          <div className="hidden md:block ">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to={'/home'} className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-orange-100">
                Inicio
              </NavLink>
              <NavLink to={'/category/mates'} className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-orange-100">
                Mates
              </NavLink>
              <NavLink to={'/category/cuchillos'} className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-orange-100">
                Cuchillos
              </NavLink>
              <a className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-orange-100">
                Termos
              </a>
              <a className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-orange-100">
                Otros
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-blue-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 grid md:grid-cols-3 gap-4">
          <NavLink  to={'/home'} className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-orange-100">
            Inicio
          </NavLink>
          <NavLink to={'/category/mates'} className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-orange-100">
            Mates
          </NavLink>
          <NavLink to={'/category/cuchillos'} className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-orange-100">
            Cuchillos
          </NavLink>
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-orange-100">
            Termos
          </a>
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-orange-100">
            Otros
          </a>
        </div>
      </div>
    </nav>
    </div>
    </>
  );
};
