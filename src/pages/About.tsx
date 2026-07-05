import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import InterestsList from '../components/InterestItem';
import { useScrollAnimation } from '../useScrollAnimation';
import myPhoto from '../assets/img/myPhoto.jpg';

const About: FC = () => {
  const containerRef = useScrollAnimation();
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section" ref={containerRef}>
      <div className="container">

        <div className="about-section__header fade-in-element">
          <h2 className="about-section__main-title">
            {t('about.titlePage')} <span>{t('about.titlePageAccent')}</span>
          </h2>
          <p className="about-section__subtitle">
            {t('about.subtitlePage')}
          </p>
        </div>

        <div className="about-section__grid">
          <div className="about-section__left">
            <div className="about-card fade-in-element">
              <h3 className="about-card__title">{t('about.story.title')}</h3>
              <p className="about-card__text">
                {t('about.story.p1')}
              </p>
              <p className="about-card__text">
                {t('about.story.p2')}
              </p>
              <p className="about-card__text">
                {t('about.story.p3')}
              </p>
            </div>

            <div className="about-card fade-in-element">
              <h3 className="about-card__title">{t('education.title')}</h3>

              <div className="education-timeline">
                <div className="education-item">
                  <div className="education-item__meta">
                    <span className="education-item__year">2026 — {t('education.present')}</span>
                  </div>
                  <h4 className="education-item__title">{t('education.bachelor')}</h4>
                  <p className="education-item__university">{t('education.university')}</p>
                </div>

                <div className="education-item">
                  <div className="education-item__meta">
                    <span className="education-item__year">2025-2026</span>
                  </div>
                  <h4 className="education-item__title">{t('education.courses')}</h4>
                  <p className="education-item__university">{t('education.platforms')}</p>
                </div>
              </div>
            </div>
          </div>

         <div className="about-section__right">
            <div className="about-card about-card--info fade-in-element">
              <h3 className="about-card__title">{t('about.info.title')}</h3>

              <div className="info-list">
                <div className="info-item">
                  <span className="info-item__label">{t('about.info.locationLabel')}</span>
                  <span className="info-item__value">{t('about.info.locationValue')}</span>
                </div>

                <div className="info-item">
                  <span className="info-item__label">Email</span>
                  <span className="info-item__value">davrontojialiev@gmail.com</span>
                </div>

                <div className="info-item">
                  <span className="info-item__label">{t('about.info.languagesLabel')}</span>
                  <span className="info-item__value">{t('about.info.languagesValue')}</span>
                </div>

                <div className="info-item">
                  <span className="info-item__label">{t('about.info.statusLabel')}</span>
                  <span className="info-item__value info-item__value--status">
                    <span className="status-dot"></span> {t('about.info.statusValue')}
                  </span>
                </div>
              </div>

              {/* Фотография теперь стоит после списка */}
              <div className="about-card about-card--photo fade-in-element" style={{ marginTop: '24px' }}>
                <img src={myPhoto} alt="Developer" className="about-card__photo" />
              </div>
            </div>
          
        </div>
      </div>

      <div className="about-interests fade-in-element">
        <h3 className="about-interests__title">{t('interests.title')}</h3>
        <InterestsList />
      </div>

    </div>
    </section >
  );
};

export default About;