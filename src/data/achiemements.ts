import { Achievement } from '../interfaces/achievement/index';
import achievement1 from '../img/achievement1.svg';
import achievement2 from '../img/achievement2.svg';
import achievement3 from '../img/achievement3.svg';
import achievement4 from '../img/achievement4.svg';
import achievement from '../img/achievement.svg';

export const achievements: Achievement[] = [
  { id: 1, title: 'Первый шаг', description: 'Завершил 1 курс', image: achievement1, percentage: 80 },
  { id: 2, title: 'Мастер времени', description: 'Тот, кто успевает все', image: achievement2, percentage: 45 },
  { id: 3, title: 'Медиа-команда', description: 'Делает нас круче', image: achievement3, percentage: 12 },
  { id: 4, title: 'Непобедимый', description: 'Вовремя сдает все домашки', image: achievement4, percentage: 60 },
  { id: 5, title: 'Lorem ipsum', description: 'Lorem ipsum', image: achievement, percentage:  50},
  { id: 6, title: 'Lorem ipsum', description: 'Lorem ipsum', image: achievement, percentage: 45 },
];
