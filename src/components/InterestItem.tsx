import { FC } from "react";
import { useTranslation } from 'react-i18next'; 
import { Code2, Zap, Heart, BookOpen, Award, Coffee } from "lucide-react";

interface InterestItem {
  icon: React.ReactNode; 
  title: string;
  description: string;
}

const InterestsList: FC = () => {
  const { t } = useTranslation();

  const interests: InterestItem[] = [
    { 
      icon: <Code2 size={22} strokeWidth={2} />, 
      title: "Web Development", 
      description: t('interests.webDevDesc') 
    },
    { 
      icon: <Zap size={22} strokeWidth={2} />, 
      title: "Performance", 
      description: t('interests.perfDesc') 
    },
    { 
      icon: <Heart size={22} strokeWidth={2} />, 
      title: "UI/UX Design", 
      description: t('interests.designDesc') 
    },
    { 
      icon: <BookOpen size={22} strokeWidth={2} />, 
      title: "Learning", 
      description: t('interests.learningDesc') 
    },
    { 
      icon: <Award size={22} strokeWidth={2} />, 
      title: "Best Practices", 
      description: t('interests.practicesDesc') 
    },
    { 
      icon: <Coffee size={22} strokeWidth={2} />, 
      title: "Coffee Lover", 
      description: t('interests.coffeeDesc') 
    }
  ];

  return (
    <div className="interests-grid">
      {interests.map((item, index) => (
        <div key={index} className="interest-card">
          <div className="interest-card__icon-box">
            <span className="interest-card__icon">{item.icon}</span>
          </div>
          <div className="interest-card__content">
            <h4 className="interest-card__title">{item.title}</h4>
            <p className="interest-card__description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InterestsList;