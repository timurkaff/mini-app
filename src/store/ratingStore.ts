import { makeAutoObservable } from 'mobx';

class RatingStore {
  chartData = [
    { name: 'Иванов И.', educational: 8, additional: 15 },
    { name: 'Игонькина Д.', educational: 147, additional: 7 },
    { name: 'Димова А.', educational: 176, additional: 10 },
    { name: 'Бражник Г.', educational: 122, additional: 9 },
    { name: 'Сенина А.', educational: 67, additional: 0 },
    { name: 'Манойлов В.', educational: 143, additional: 6 },
    { name: 'Никулина О.', educational: 189, additional: 4 },
    { name: 'Бикбаев Т.', educational: 184, additional: 1 },
    { name: 'Конев И.', educational: 115, additional: 1 },
    { name: 'Савин Г.', educational: 153, additional: 16 },
  ];

  constructor() {
    makeAutoObservable(this); // Это делает объект реактивным
  }

  setChartData(data: any) {
    this.chartData = data;
  }
}

const ratingStore = new RatingStore();
export default ratingStore;

// import { makeAutoObservable } from 'mobx';

// class RatingStore {
//   chartData = [
//     { name: 'Иванов И.', educational: 147, additional: 10 },
//     { name: 'Бикбаев Т.', educational: 147, additional: 7 },
//     { name: 'Матигоров Н.', educational: 147, additional: 7 },
//   ];

//   constructor() {
//     makeAutoObservable(this);
//   }

//   setChartData(newData) {
//     this.chartData = newData;
//   }
// }

// const ratingStore = new RatingStore();
// export default ratingStore;