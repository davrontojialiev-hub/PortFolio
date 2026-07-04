import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import { useScrollAnimation } from "../useScrollAnimation";

const HeroBanner: FC = () => {
    const containerRef = useScrollAnimation();
    const { t } = useTranslation(); 

    return (
        <section className="hero-banner" ref={containerRef}>
            <div className="hero-banner__blur" />
            <div className="container">
                <div className="hero-banner__wrapper fade-in-element">

                    <div className="hero-banner__badge">
                        <span className="hero-banner__badge-icon">✨</span>
                        {t('hero.welcome')}
                    </div>

                    <h1 className="hero-banner__title">
                        {t('hero.greeting')}{' '}
                        <span className="highlight-blue">{t('hero.profession')}</span>
                    </h1>

                    <p className="hero-banner__subtitle">
                        {t('hero.subtitle')}
                    </p>

                    <div className="hero-banner__actions">
                        <Link to="/projects" className="hero-banner__btn hero-banner__btn--primary">
                            {t('hero.viewProjects')} <span className="hero-banner__btn-arrow">→</span>
                        </Link>

                        <Link to="/contact" className="hero-banner__btn hero-banner__btn--secondary">
                            {t('hero.contactMe')}
                        </Link>
                    </div>

                    <div className="hero-banner__stats">
                        <div className="hero-banner__stats-item">
                            <span className="hero-banner__stats-number">10+</span>
                            <span className="hero-banner__stats-text">{t('hero.stats.projects')}</span>
                        </div>

                        <div className="hero-banner__stats-item">
                            <span className="hero-banner__stats-number">1</span>
                            <span className="hero-banner__stats-text">{t('hero.stats.experience')}</span>
                        </div>

                        <div className="hero-banner__stats-item">
                            <span className="hero-banner__stats-number">100%</span>
                            <span className="hero-banner__stats-text">{t('hero.stats.satisfaction')}</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroBanner;