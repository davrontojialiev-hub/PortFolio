import { FC } from 'react';
import { useTranslation } from 'react-i18next'; 
import ProjectCard from './ProjectCard';
import { useScrollAnimation } from '../useScrollAnimation';

interface ProjectItem {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  projectUrl: string;
}

const ProjectList: FC = () => {
  const containerRef = useScrollAnimation();
  const { t } = useTranslation(); 

  const myProjects: ProjectItem[] = [
    {
      title: "BMW 3",
      description: t('projects.bmw.description'), 
      imageUrl: "blue-bg", 
      tags: ["HTML", "JavaScript", "CSS"],
      projectUrl: "#"
    },
    {
      title: "Porsche",
      description: t('projects.porsche.description'),
      imageUrl: "purple-bg",  
      tags: ["HTML", "TypeScript", "CSS"],
      projectUrl: "#"
    }
  ];

  return (
    <div className="container_projects" ref={containerRef}>
      <div className="projects-grid">
        {myProjects.map((project, index) => (
          <div 
            key={index} 
            className="fade-in-element"
            style={{ '--card-index': index } as React.CSSProperties}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl} 
              tags={project.tags}
              projectUrl={project.projectUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;