import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa-house, fapen, faperson, faflag } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <header className="my-7 px-4 w-full xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto space-y-12">
    <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="text-3xl text-pine-tree font-black ">IdeaVista</a>
        </div>
        <div className="navbar-end flex gap-2">
          <ul className="lg:flex gap-4 hidden ">
            {/* <li className="tooltip" data-tip="Home" ><a className="rounded-full w-14 h-14 p-5 items-center bg-cultured border-[#0307121A] border-2"><FontAwesomeIcon icon="fa-solid fa-house" /></a></li>
            <li className="tooltip" data-tip="Edit"><a className="rounded-full w-14 h-14 p-5 items-center bg-cultured border-[#0307121A] border-2"><FontAwesomeIcon icon="fa-regular fa-pen-to-square" /></a></li>
            <li className="tooltip" data-tip="Add"><a className="rounded-full w-14 h-14 p-5 items-center bg-cultured border-[#0307121A] border-2"><FontAwesomeIcon icon="fa-solid fa-user-plus" /></a></li>
            <li className="tooltip" data-tip="Flag"><a className="rounded-full w-14 h-14 p-5 items-center bg-cultured border-[#0307121A] border-2"><FontAwesomeIcon icon="fa-solid fa-flag" /></a></li>
             */}
          </ul>

          <button className="text-white font-bold bg-[#797DFC] px-6 py-3 rounded-3xl">Sign In</button>
        </div>


      </div>
</header>
  )
}

export default Header