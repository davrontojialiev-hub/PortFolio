import { FC } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string; 
  tags: string[];
  projectUrl: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, imageUrl, tags, projectUrl }) => {
  return (
    <a href={projectUrl} className="project-card" target="_blank" rel="noreferrer">
      <div className={`project-card__image-container ${imageUrl}`}>
        <span className="project-card__icon">&lt;/&gt;</span>
      </div>
      
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        
        <div className="project-card__tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="project-card__tag">{tag}</span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;