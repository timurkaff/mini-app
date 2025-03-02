import React from 'react';

interface NavigationProps {
  onNavigate: (screen: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <div className="navigation-buttons">
      <button onClick={() => onNavigate('rating')} className="nav-btn">
        📊 Образовательный рейтинг
      </button>
      <button onClick={() => onNavigate('activities')} className="nav-btn">
        🎯 Получить баллы
      </button>
      <button onClick={() => onNavigate('calendar')} className="nav-btn">
        📅 Календарь событий
      </button>
      <button onClick={() => onNavigate('forum')} className="nav-btn">
        💪🏻 Конкурсы
      </button>
      <button onClick={() => onNavigate('achievements')} className="nav-btn">
        🏅 Достижения
      </button>
      <button onClick={() => onNavigate('settings')} className="nav-btn">
        ⚙️ Настройки
      </button>
    </div>
  );
};

export default Navigation;