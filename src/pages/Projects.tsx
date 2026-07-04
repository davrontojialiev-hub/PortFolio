import { FC } from 'react';
import { useTranslation } from 'react-i18next';   
import BMW from '../assets/img/BMW.jpg';
import Brutalism from '../assets/img/Brutalism.jpg';
import DreamArt from '../assets/img/Dream art.jpg';
import FengShui from '../assets/img/FengShui.jpg';
import ParfumeLine from '../assets/img/PERFUME-LINE.jpg';
import Porsche from '../assets/img/Porsche.jpeg';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../useScrollAnimation';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

const Projects: FC = () => {
  const containerRef = useScrollAnimation();
  const { t } = useTranslation(); 

  const allProjectsData: Project[] = [
    {
      id: 1,
      title: "BMW 3",
      description: t('projects.items.bmw.description'),
      image: BMW,
      category: t('projects.categories.webApp'),
      tags: ["HTML", "JavaScript", "CSS"],
      demoUrl: "https://davrontojialiev-hub.github.io/BMW3/",
      githubUrl: "https://github.com/davrontojialiev-hub/BMW3"
    },
    {
      id: 2,
      title: "Porsche",
      description: t('projects.items.porsche.description'),
      image: Porsche,
      category: t('projects.categories.webApp'),
      tags: ["HTML", "TypeScript","CSS"],
      demoUrl: "https://davrontojialiev-hub.github.io/porsche/",
      githubUrl: "https://github.com/davrontojialiev-hub/porsche"
    },
    {
      id: 3,
      title: "PERFUME-LINE",
      description: t('projects.items.perfume.description'),
      image: ParfumeLine,
      category: t('projects.categories.mobileApp'),
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://davrontojialiev-hub.github.io/PERFUME-LINE/",
      githubUrl: "https://github.com/davrontojialiev-hub/PERFUME-LINE"
    },
    {
      id: 4,
      title: "Brutalism Design System",
      description: t('projects.items.brutalism.description'),
      image: Brutalism,
      category: "AI/ML",
      tags: ["HTML", "JavaScript", "CSS"],
      demoUrl: "https://davrontojialiev-hub.github.io/brutalism/",
      githubUrl: "https://github.com/davrontojialiev-hub/brutalism"
    },
    {
      id: 5,
      title: "Feng-Shui",
      description: t('projects.items.fengshui.description'),
      image: FengShui,
      category: t('projects.categories.productivity'),
      tags: ["Vue.js", "HTML", "CSS", "React"],
      demoUrl: "https://davrontojialiev-hub.github.io/Feng-Shui/",
      githubUrl: "https://github.com/davrontojialiev-hub/Feng-Shui"
    },
    {
      id: 6,
      title: "Dream Art",
      description: t('projects.items.dreamArt.description'),
      image: DreamArt,
      category: t('projects.categories.webApp'),
      tags: ["React", "JavaScript", "CSS", "Vite"],
      demoUrl: "https://davrontojialiev-hub.github.io/Dream-art/",
      githubUrl: "https://github.com/davrontojialiev-hub/Dream-art"
    }
  ];

  return (
    <section className="projects-page" ref={containerRef}>
      <div className="container">

        <div className="projects-page__header fade-in-element">
          <h1 className="projects-page__title">
            {t('projects.titlePage')} <span>{t('projects.titlePageAccent')}</span>
          </h1>
          <p className="projects-page__subtitle">
            {t('projects.subtitlePage')}
          </p>
        </div>

        <div className="projects-grid">
          {allProjectsData.map((project, index) => (
            <article 
              key={project.id} 
              className="project-card fade-in-element"
              style={{ '--card-index': index } as React.CSSProperties} 
            >
              <div className="project-card__image-wrapper">
                <img src={project.image} alt={project.title} className="project-card__image" />
                <span className="project-card__category">{project.category}</span>
              </div>

              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__text">{project.description}</p>

                <div className="project-card__tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-card__tag">{tag}</span>
                  ))}
                </div>

                <div className="project-card__actions">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__btn project-card__btn--live"
                  >
                    <span className="btn-icon">↗</span> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__btn project-card__btn--code"
                  >
                    <span className="btn-icon">📁</span> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-page__cta cta-block fade-in-element">
          <h2 className="cta-block__title">{t('projects.cta.title')}</h2>
          <p className="cta-block__text">{t('projects.cta.text')}</p>
          <Link to="/contact" className="cta-block__btn">
            {t('projects.cta.btn')}
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Projects;