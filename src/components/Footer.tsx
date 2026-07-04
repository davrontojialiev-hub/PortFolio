import React, { FC } from 'react';
import { Link } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next'; 
import { FaGithub, FaTelegramPlane, FaInstagram } from 'react-icons/fa';

const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          
          <div className="footer__col">
            <h3 className="footer__logo"><span>Dev</span>Portfolio</h3>
            <p className="footer__text">
              {t('hero.subtitle')} 
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">{t('footer.menuTitle')}</h4>
            <ul className="footer__links">
              <li><Link to="/">{t('header.home')}</Link></li>
              <li><Link to="/about">{t('header.about')}</Link></li>
              <li><Link to="/projects">{t('header.projects')}</Link></li>
              <li><Link to="/skills">{t('header.skills')}</Link></li>
              <li><Link to="/contact">{t('header.contacts')}</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">{t('footer.socials')}</h4>
            <div className="footer__socials">
              <a
                href="https://github.com/davrontojialiev-hub"
                target="_blank"
                rel="noreferrer"
                className="footer__social-btn"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://t.me/Davrik_15"
                target="_blank"
                rel="noreferrer"
                className="footer__social-btn"
                aria-label="Telegram"
              >
                <FaTelegramPlane />
              </a>

              <a
                href="https://instagram.com/davrik.t"
                target="_blank"
                rel="noreferrer"
                className="footer__social-btn"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>
        
        <hr className="footer__divider" />
        
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2026 DevPortfolio. {t('footer.copyright')}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;