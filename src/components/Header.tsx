import React, { useState, useEffect, useRef, FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

const Header: FC = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation(); 

  const menuItems = [
    { name: t('header.home'), path: '/home' },
    { name: t('header.about'), path: '/about' },
    { name: t('header.projects'), path: '/projects' },
    { name: t('header.skills'), path: '/skills' },
    { name: t('header.contacts'), path: '/contact' }
  ];

  const activeIndex = menuItems.findIndex(item => item.path === location.pathname) !== -1
    ? menuItems.findIndex(item => item.path === location.pathname)
    : 0;

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const listRef = useRef<HTMLUListElement>(null);
  const [lineStyle, setLineStyle] = useState({ width: 0, left: 0 });

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(nextLang);
    localStorage.setItem('lang', nextLang); 
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);


  useEffect(() => {
    if (listRef.current) {
      const activeItem = listRef.current.children[activeIndex] as HTMLElement;
      if (activeItem) {
        const link = activeItem.querySelector('.header__link') as HTMLElement;
        if (link) {
          setLineStyle({
            width: link.offsetWidth,
            left: link.offsetLeft,
          });
        }
      }
    }
  }, [activeIndex, location.pathname, i18n.language]);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__container">

        <div className="header__logo">
          Dev<span className="header__logo-accent">Portfolio</span>
        </div>

        <button
          className={`header__burger ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Открыть меню"
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>

        <div className={`header__right ${isMenuOpen ? 'open' : ''}`}>
          <nav className="header__nav">
            <ul className="header__list" ref={listRef}>
              {menuItems.map((item, index) => (
                <li key={index} className="header__item">
                  <Link
                    to={item.path}
                    className={`header__link ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              className="header__underline"
              style={{
                width: `${lineStyle.width}px`,
                transform: `translateX(${lineStyle.left}px)`
              }}
            />
          </nav>

          <div className="header__actions">
            <button
              className="header__action-btn"
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Переключить тему"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>

            <button className="header__action-btn header__action-btn--lang" onClick={toggleLanguage}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>{i18n.language.toUpperCase()}</span>
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;