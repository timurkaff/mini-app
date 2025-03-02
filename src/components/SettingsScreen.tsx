import React from 'react';

interface SettingsScreenProps {
  onBack: () => void;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({ onBack }) => {
  return (
    <div>
    <div className="btn-exit">
      <button onClick={onBack} className="nav-btn-exit">←</button>
      <h2>Настройки</h2>
    </div>
      <div className="settings-container">
        <div className="settings-grid">
          <p>Настройки приложения</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;