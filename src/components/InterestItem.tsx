import { FC } from "react";
import { Code2, Zap, Heart, BookOpen, Award, Coffee } from "lucide-react";

interface InterestItem {
  icon: React.ReactNode; 
  title: string;
  description: string;
}

const InterestsList: FC = () => {
  const interests: InterestItem[] = [
    { 
      icon: <Code2 size={22} strokeWidth={2} />, 
      title: "Web Development", 
      description: "Создание современных веб-приложений" 
    },
    { 
      icon: <Zap size={22} strokeWidth={2} />, 
      title: "Performance", 
      description: "Оптимизация и быстрая загрузка" 
    },
    { 
      icon: <Heart size={22} strokeWidth={2} />, 
      title: "UI/UX Design", 
      description: "Красивый и понятный интерфейс" 
    },
    { 
      icon: <BookOpen size={22} strokeWidth={2} />, 
      title: "Learning", 
      description: "Постоянное обучение новому" 
    },
    { 
      icon: <Award size={22} strokeWidth={2} />, 
      title: "Best Practices", 
      description: "Следование лучшим практикам" 
    },
    { 
      icon: <Coffee size={22} strokeWidth={2} />, 
      title: "Coffee Lover", 
      description: "Программирую под кофе" 
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