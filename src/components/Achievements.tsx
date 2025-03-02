import React from 'react';
import medalIcon from '../img/medal.svg';
import achievement1 from '../img/achievement1.svg';
import achievement2 from '../img/achievement2.svg';

interface AchievementsProps {
  onBack: () => void;
  onViewAll: () => void;
}

const Achievements: React.FC<AchievementsProps> = ({ onBack, onViewAll }) => {
  const totalAchievements = 6;
  const earnedAchievements = 2;
  const progressPercentage = (earnedAchievements / totalAchievements) * 100;

  return (
    <div>
      <div className='btn-exit'>
        <button onClick={onBack} className="nav-btn-exit">←</button>
        <h2>Достижения</h2>
      </div>
      
      <div className="achievements">
        <div className="achieve-card">
          <div className="achieve-top">
            <h3>Достижения</h3>
            <button onClick={onViewAll} className="view-btn">
              Все достижения ({totalAchievements})
            </button>
          </div>
          
          <div className="achieve-progress">
            <img src={medalIcon} alt="Medal Icon" className="medal-icon" />
            <div className="progress">
              <p>Вы получили {earnedAchievements} из {totalAchievements} достижений <span>({Math.round(progressPercentage)}%)</span></p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progressPercentage}%`, backgroundColor: 'blue' }}></div>
                <div className="progress-empty" style={{ width: `${100 - progressPercentage}%`, backgroundColor: 'lightgray' }}></div>
              </div>
            </div>
          </div>
          
          <div className="achieve-images">
            <img src={achievement1} alt="Achievement 1" className="achievement-img" />
            <img src={achievement2} alt="Achievement 2" className="achievement-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;

// import React from 'react';
// import medalIcon from '../img/medal.svg';
// import achievement1 from '../img/achievement1.svg';
// import achievement2 from '../img/achievement2.svg';

// interface AchievementsProps {
//   onBack: () => void;
//   onViewAll: () => void;
// }

// const Achievements: React.FC<AchievementsProps> = ({ onBack, onViewAll }) => {
//   const totalAchievements = 6;
//   const earnedAchievements = 2;
//   const progressPercentage = (earnedAchievements / totalAchievements) * 100;

//   return (
//     <div>
//       <div className='btn-exit'>
//         <button onClick={onBack} className="nav-btn-exit">← Назад</button>
//         <h2>Достижения</h2>
//       </div>
      
//       <div className="achievements">
//         <div className="achieve-card">
//           <div className="achieve-top">
//             {/* Переход на страницу всех достижений */}
//             <button onClick={onViewAll} className="view-all-btn">Все достижения ({totalAchievements})</button>
//             <h3>Достижения</h3>
//           </div>
          
//           <div className="achieve-progress">
//             <img src={medalIcon} alt="Medal Icon" className="medal-icon" />
//             <p>Вы получили {earnedAchievements} из {totalAchievements} достижений ({Math.round(progressPercentage)}%)</p>
//           </div>
          
//           {/* Прогресс-бар с синим и серым цветом */}
//           <div className="progress-bar">
//             <div className="progress-fill" style={{ width: `${progressPercentage}%`, backgroundColor: 'blue' }}></div>
//             <div className="progress-empty" style={{ width: `${100 - progressPercentage}%`, backgroundColor: 'lightgray' }}></div>
//           </div>

//           <div className="achieve-images">
//             <img src={achievement1} alt="Achievement 1" className="achievement-img" />
//             <img src={achievement2} alt="Achievement 2" className="achievement-img" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Achievements;
