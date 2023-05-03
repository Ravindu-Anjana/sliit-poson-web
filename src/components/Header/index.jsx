import { useState, useEffect } from 'react';


const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolledOutOfHome, setIsScrolledOutOfHome] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.querySelector('#home');
      if (homeSection) {
        const homeSectionRect = homeSection.getBoundingClientRect();
        setIsScrolledOutOfHome(window.scrollY >= homeSectionRect.bottom);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
<div className={`fixed z-50 w-full ${isScrolledOutOfHome ? 'bg-purple-900 dark:bg-gray-900' : 'bg-transparent'}`}>
  <div className="flex justify-between items-center">
    <h1 className="text-white font-normal font-circular font-size-24 leading-52 m-5 ml-5 md:ml-20">SLIIT INTERACTIVE MEDIA</h1>
    <nav className="bg-gray-50 m-5 shadow-lg rounded-full inline-flex justify-center mr-5 md:mr-20">
      <div className="px-2 py-1 flex items-center justify-between relative">
        <div className="flex items-center">
          <a
            href="#home"
            className={`font-normal text-gray-800 font-bold mr-2 md:mr-4 ${activeLink === 'home'
              ? 'bg-purple-900 dark:bg-gray-900 text-white rounded-full px-4 py-2'
              : ''
            }`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </a>
          <a
            href="#mentors"
            className={`font-normal text-gray-800 font-bold mr-2 md:mr-4 ${activeLink === 'mentors'
              ? 'bg-purple-900 dark:bg-gray-900 text-white rounded-full px-4 py-2'
              : ''
            }`}
            onClick={() => handleLinkClick('mentors')}
          >
            Our Mentors
          </a>
          <a
            href="#members"
            className={`font-normal text-gray-800 font-bold mr-2 md:mr-4 ${activeLink === 'team'
              ? 'bg-purple-900 dark:bg-gray-900 text-white rounded-full px-4 py-2'
              : ''
            }`}
            onClick={() => handleLinkClick('team')}
          >
            Our Team
          </a>
          <a
            href="#ourwork"
            className={`font-normal text-gray-800 font-bold mr-2 md:mr-4 ${activeLink === 'work'
              ? 'bg-purple-900 dark:bg-gray-900 text-white rounded-full px-4 py-2'
              : ''
            }`}
            onClick={() => handleLinkClick('work')}
          >
            Our Work
          </a>
          <a
            href="#contactus"
            className={`font-normal text-gray-800 font-bold mr-2 md:mr-4 ${activeLink === 'contact'
              ? 'bg-purple-900 dark:bg-gray-900 text-white rounded-full px-4 py-2'
              : ''
            }`}
            onClick={() => handleLinkClick('contact')}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  </div>
</div>


  );
};

export default Header;
