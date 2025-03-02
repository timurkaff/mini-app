import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, Legend, ResponsiveContainer } from 'recharts';
import ratingStore from '../store/ratingStore';

interface RatingScreenProps {
  onBack: () => void;
}

const RatingScreen: React.FC<RatingScreenProps> = ({ onBack }) => {
  const [chartHeight, setChartHeight] = useState(800);
  const [yAxisWidth, setYAxisWidth] = useState(150);
  
  useEffect(() => {
    const handleResize = () => {
      // Адаптивная высота графика в зависимости от размера экрана
      if (window.innerWidth <= 480) {
        setChartHeight(500);
        setYAxisWidth(100);
      } else if (window.innerWidth <= 768) {
        setChartHeight(600);
        setYAxisWidth(120);
      } else {
        setChartHeight(800);
        setYAxisWidth(150);
      }
    };
    
    handleResize(); // Вызываем при монтировании
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const formattedData = ratingStore.chartData.map(item => ({
    ...item,
    additional: item.additional === 0 ? undefined : item.additional,
    educational: item.educational === 0 ? undefined : item.educational
  }));

  return (
    <div>
      <div className='btn-exit'>
        <button onClick={onBack} className="nav-btn-exit">
          ←
        </button>
        <h2>Образовательный рейтинг</h2>
      </div>

      <div className="rating-chart">
        <h2>Баллы frontend 3 Курс февраль</h2>
        <ResponsiveContainer width="100%" height={chartHeight}>
          <BarChart
            layout="vertical"
            barCategoryGap={3}
            data={formattedData}
            margin={{ top: 20, right: 20, left: -20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis dataKey="name" type="category" width={yAxisWidth} />
            <XAxis type="number" domain={[0, 'dataMax']} />
            <Tooltip 
              formatter={(value, name) => {
                const labels: { [key: string]: string } = {
                  totalPoints: "Общие баллы",
                  educational: "Образовательные баллы",
                  additional: "Дополнительные баллы",
                };
                return [value, labels[name] || name]; 
              }} 
            />
            <Legend />

            {formattedData.some(item => item.educational !== undefined) && (
              <Bar dataKey="educational" fill="#3173fd">
                <LabelList dataKey="educational" fill="#fff" fontSize={12} />
              </Bar>
            )}

            {formattedData.some(item => item.additional !== undefined) && (
              <Bar dataKey="additional" fill="#ffb92d">
                <LabelList dataKey="additional" fill="#fff" fontSize={12} />
              </Bar>
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default observer(RatingScreen);
