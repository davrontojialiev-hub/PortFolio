import React, { FC } from 'react';
import { useTranslation } from 'react-i18next'; 
import { LayoutGrid, Database, Palette, Wrench } from 'lucide-react';
import styles from "../assets/scss/MySkills.module.scss";
import { useScrollAnimation } from '../useScrollAnimation';

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

interface TechTag {
  name: string;
  category: string;
}

interface SoftSkill {
  title: string;
  description: string;
}

export const MySkills: FC = () => {
  const containerRef = useScrollAnimation();
  const { t } = useTranslation();

  const skillCategories: SkillCategory[] = [
    {
      title: t('skills.categories.frontend'),
      icon: <LayoutGrid className={styles.iconBlue} size={24} />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'TailwindCSS', level: 95 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
      ],
    },
    {
      title: t('skills.categories.backend'),
      icon: <Database className={styles.iconBlue} size={24} />,
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 70 },
        { name: 'PostgreSQL', level: 65 },
        { name: 'MongoDB', level: 70 },
        { name: 'REST API', level: 80 },
        { name: 'GraphQL', level: 60 },
      ],
    },
    {
      title: t('skills.categories.design'),
      icon: <Palette className={styles.iconBlue} size={24} />,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 70 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Glassmorphism', level: 85 },
        { name: 'Animation', level: 80 },
        { name: 'Prototyping', level: 75 },
      ],
    },
    {
      title: t('skills.categories.tools'),
      icon: <Wrench className={styles.iconBlue} size={24} />,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 60 },
        { name: 'Vercel', level: 90 },
        { name: 'GitHub Actions', level: 70 },
        { name: 'VS Code', level: 95 },
        { name: 'npm/yarn', level: 90 },
      ],
    },
  ];

  const techTags: TechTag[] = [
    { name: 'React', category: t('skills.tags.framework') },
    { name: 'TypeScript', category: t('skills.tags.language') },
    { name: 'Next.js', category: t('skills.tags.framework') },
    { name: 'TailwindCSS', category: 'CSS' },
    { name: 'Node.js', category: t('skills.tags.runtime') },
    { name: 'Figma', category: t('skills.tags.design') },
    { name: 'Git', category: t('skills.tags.versionControl') },
    { name: 'VS Code', category: t('skills.tags.editor') },
    { name: 'PostgreSQL', category: t('skills.tags.database') },
    { name: 'MongoDB', category: t('skills.tags.database') },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Vercel', category: t('skills.tags.deployment') },
  ];

  const softSkills: SoftSkill[] = [
    { title: t('skills.soft.teamwork.title'), description: t('skills.soft.teamwork.desc') },
    { title: t('skills.soft.problemSolving.title'), description: t('skills.soft.problemSolving.desc') },
    { title: t('skills.soft.learning.title'), description: t('skills.soft.learning.desc') },
    { title: t('skills.soft.communication.title'), description: t('skills.soft.communication.desc') },
    { title: t('skills.soft.timeManagement.title'), description: t('skills.soft.timeManagement.desc') },
    { title: t('skills.soft.creativity.title'), description: t('skills.soft.creativity.desc') },
  ];

  const learningTags = ['Web3', 'AI/ML', 'Cloud Architecture', 'Microservices'];

  return (
    <section className={styles.skillsSection} id="skills" ref={containerRef}>
      <div className={styles.container}>
        
        <div className={`${styles.headerBlock} fade-in-element`}>
          <h2 className={styles.mainTitle}>
            {t('skills.titlePage')} <span className={styles.highlightBlue}>{t('skills.titlePageAccent')}</span>
          </h2>
          <p className={styles.subtitle}>{t('skills.subtitlePage')}</p>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={`${styles.skillCard} fade-in-element`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <div className={styles.barsList}>
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className={styles.barItem}>
                    <div className={styles.barInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPercent}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressTrack}>
                      <div 
                        className={styles.progressFill} 
                        style={{ '--progress-width': `${skill.level}%` } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.techStackSection} fade-in-element`}>
          <h2 className={styles.sectionTitle}>{t('skills.sections.techStack')}</h2>
          <div className={styles.tagsCloud}>
            {techTags.map((tag, index) => (
              <div key={index} className={styles.techTag}>
                <span className={styles.tagName}>{tag.name}</span>
                <span className={styles.tagCategory}>{tag.category}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.softSkillsSection} fade-in-element`}>
          <h2 className={styles.sectionTitle}>Soft Skills</h2>
          <div className={styles.softGrid}>
            {softSkills.map((soft, index) => (
              <div key={index} className={styles.softCard}>
                <h3>{soft.title}</h3>
                <p>{soft.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.learningSection} fade-in-element`}>
          <div className={styles.learningCard}>
            <h2 className={styles.sectionTitle}>{t('skills.sections.development')}</h2>
            <p className={styles.learningText}>
              {t('skills.developmentText')}
            </p>
            <div className={styles.learningTagsRow}>
              {learningTags.map((tag, index) => (
                <span key={index} className={styles.learningTag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};