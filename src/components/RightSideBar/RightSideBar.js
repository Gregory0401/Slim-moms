import { useSelector } from 'react-redux';
import { getDaySummary } from '../../Redux/ProductSearch/productsSearchSelector';

const RightSideBar = () => {
  const daySummary = useSelector(getDaySummary);

  const { date, kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } =
    daySummary;
  return (
    <div>
      <h2>Сводка на {date}</h2>
      <div>
        <p>Осталось {Math.round(kcalLeft)} ккал</p>
        <p>Употреблено {Math.round(kcalConsumed)} ккал</p>
        <p>Дневная норма {Math.round(dailyRate)} ккал</p>
        <p>Процент от нормы {Math.round(percentsOfDailyRate)} %</p>
      </div>
      <br />
      <br />
      <div>
        <h2>Нерекомендуемые продукты</h2>
        <p>Здесь будет отображаться Ваш рацион</p>
      </div>
    </div>
  );
};

export default RightSideBar;
