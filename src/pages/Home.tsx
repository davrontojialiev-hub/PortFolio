import { FC } from 'react';
import { useTranslation } from 'react-i18next'; 
import HeroBanner from '../components/HeroBanner';
import ProjectList from '../components/ProjectList';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../useScrollAnimation';

const Home: FC = () => {
  const containerRef = useScrollAnimation();
  const { t } = useTranslation(); 
  return (
    <div className="home-page" ref={containerRef}>
      <HeroBanner />
      <section className="projects-section">
        <div className="container">
          <div className="projects-section__header">
            <h2 className="projects-section__title">
              {t('home.projects.title')}
            </h2>
            <p className="projects-section__subtitle">
              {t('home.projects.subtitle')}
            </p>
          </div>
          <ProjectList />
          
          <div className="projects-section__footer">
            <Link to="/projects" className="projects-section__more-btn">
              {t('home.projects.moreBtn')} <span className="arrow">→</span>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;