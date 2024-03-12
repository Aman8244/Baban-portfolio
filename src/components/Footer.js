import React from 'react'

const Footer = () => {
  return (
    <div className='mx-auto bg-gray-800 text-white pb-4 flex flex-col items-center'>
      <div className="mt-4">© 2024 BabanMulchandani. All rights reserved.</div>
      <div className="flex mt-4">
        <a href="https://www.instagram.com/shoaib_xaif" target="_blank" rel="noopener noreferrer" className="mr-4">
          <img className="w-5" src="/" alt="Instagram" />
        </a>
        <a href="https://github.com/Shoaibxaif" target="_blank" rel="noopener noreferrer" className="mr-4">
          <img className="w-5" src="/" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/mohammad-shoaib-0a8298223/" target="_blank" rel="noopener noreferrer" className="mr-4">
          <img className="w-5" src="" alt="LinkedIn" />
        </a>
      </div>
    </div>
  )
}

export default Footer
