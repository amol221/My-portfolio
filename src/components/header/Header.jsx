// import React from 'react'
// import'./header.css'
// import CTA from './CTA'
// import ME from '../../assets/profilepic_1.png'
// import HeaderSocial from './HeaderSocial'

// const header = () => {
//   return (
//     <header>
//       <div className="container header_container">
//         <h4>Hello I'm</h4>
//         <h1>Amol Nilkanthe</h1>
//         <h4 className="text-light">Software Developer | Python Developer</h4>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dignissimos natus sed in. Maxime sed omnis quod! Accusamus pariatur libero eum quos aspernatur, in dolorem. Libero est magnam a ipsa.</p>
//         <CTA/>
//         <HeaderSocial/>
//         <div className="me">
//           <img className='profilepic' src={ME} alt="me" />
//         </div>
//         <a href="#contact" className='scroll_down'>Scroll Down</a>
//       </div>
//     </header>
//   )
// }

// export default header



// Update your React component (header.js)

import React, { useEffect, useRef } from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/profilepic_1.png';
import HeaderSocial from './HeaderSocial';

const Header = () => {
  const meRef = useRef(null);

  useEffect(() => {
    // When the component mounts, add the "show" class after a short delay
    const timeoutId = setTimeout(() => {
      meRef.current.classList.add('show');
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timeoutId); // Cleanup on component unmount
  }, []);

  return (
    <header>
      <div className="container header_container">
      <h4>Hello I'm</h4>
        <h1>Amol Nilkanthe</h1>
        <h4 className="text-light">Software Developer | Python Developer</h4>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dignissimos natus sed in. Maxime sed omnis quod! Accusamus pariatur libero eum quos aspernatur, in dolorem. Libero est magnam a ipsa.</p> */}
        <HeaderSocial/>
        <div className="me" ref={meRef}>
          <img className='profilepic' src={ME} alt="me" />
        </div>
        <CTA/>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
