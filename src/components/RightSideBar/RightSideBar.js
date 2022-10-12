import { useSelector } from 'react-redux';
import { getDaySummary } from '../../Redux/ProductSearch/productsSearchSelector';
import { RightBar } from './RightSideBar.styled';
import { format, startOfToday } from 'date-fns';

const RightSideBar = () => {
  const daySummary = useSelector(getDaySummary);
  let today = startOfToday();
  let date = format(today, 'dd MM yyyy');
  const {
    kcalConsumed = 0,
    dailyRate = 0,
    percentsOfDailyRate = 0,
  } = daySummary || {};
  return (
    <RightBar>
      {daySummary && (
        <div>
          <h2>Сводка на {date}</h2>
          <div>
            {Number(dailyRate) > Number(kcalConsumed) ? (
              <p>
                Осталось {Math.round(Number(dailyRate) - Number(kcalConsumed))}{' '}
                ккал
              </p>
            ) : (
              <p>Осталось 0 ккал</p>
            )}
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
      )}
      {/* <h2>Сводка на {date}</h2>
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
      </div> */}
    </RightBar>
  );
};

export default RightSideBar;
