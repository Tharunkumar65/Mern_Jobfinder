import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col items-center mt-5'>
       
        <ul className='flex justify-center lg:gap-6'>
      <li className="item mr-2">
        <a href="https://www.instagram.com/">
          <i className="fa-brands fa-instagram icon"></i>
        </a>
      </li>
      <li className="item mr-2">
        <a href="https://in.linkedin.com/">
          <i className="fa-brands fa-linkedin icon"></i>
        </a>
      </li>
      <li className="item mr-2">
        <a href="https://www.youtube.com/">
          <i className="fa-brands fa-youtube icon"></i>
        </a>
      </li>
      <li className="item mr-2">
        <a href="https://twitter.com/">
          <i className="fa-brands fa-x-twitter icon"></i>
        </a>
      </li>
    </ul>
    <p className='mt-5'>&copy; 2024 JobFinder. All rights reserved.</p>

    </div>
  )
}

export default Footer
