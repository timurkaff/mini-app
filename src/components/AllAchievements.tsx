import React from 'react';
import { achievements } from '../data/achiemements';
import ratingIcon from '../img/rating-icon.svg';

interface AllAchievementsProps {
  onBack: () => void;
  onMyAchievements: () => void;
}

const AllAchievements: React.FC<AllAchievementsProps> = ({ onBack, onMyAchievements }) => {
  return (
    <div>
      <div className='btn-exit'>
        <button onClick={onBack} className='nav-btn-exit'>←</button>
        <h2>Все достижения</h2>
      </div>
      
      <div className="achievements">
      <div className="achieve-card">
      <div className='achieve-top'>
        <h3>Все достижения ({achievements.length})</h3>
        <button onClick={onMyAchievements} className='view-btn'>
          Мои достижения
        </button>
      </div>
      
      <div className='achievements-list'>
        {achievements.map((achievement) => (
          <div key={achievement.id} className='achievement-item'>
            <div className='achievement-right'>
                <img src={achievement.image} alt={achievement.title} className='achievement-img' />
                <div className='achievement-info'>
                    <h3>{achievement.title}</h3>
                    <p>{achievement.description}</p>
                </div>
            </div>
            <div className='achievement-rating'>
                <div className='rate'>
                    <img src={ratingIcon} alt='Rating' className='rating-icon' />
                    <p>{achievement.percentage}%</p>
                </div>
              <span>Получили</span>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
    </div>
  );
};

export default AllAchievements;