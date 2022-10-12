import { useSelector } from 'react-redux';
import { getDaySummary } from '../../Redux/ProductSearch/productsSearchSelector';
import { format, startOfToday } from 'date-fns';
import { RightBar, ProdThumb, Title, Text } from './RightSideBar.styled';

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
        <ProdThumb>
          <Title>Сводка на {date}</Title>
          <div>
            {Number(dailyRate) > Number(kcalConsumed) ? (
              <Text>
                <span>Осталось</span>{' '}
                <span>
                  {Math.round(Number(dailyRate) - Number(kcalConsumed))} ккал
                </span>
              </Text>
            ) : (
              <Text>
                <span>Осталось</span> <span>0 ккал</span>
              </Text>
            )}
            <Text>
              <span>Употреблено </span>{' '}
              <span>{Math.round(kcalConsumed)} ккал</span>
            </Text>
            <Text>
              <span>Дневная норма</span>{' '}
              <span>{Math.round(dailyRate)} ккал</span>
            </Text>
            <Text>
              <span>Процент от нормы</span>{' '}
              <span>{Math.round(percentsOfDailyRate)} %</span>
            </Text>
          </div>

          <ProdThumb>
            <Title>Нерекомендуемые продукты</Title>
            <Text>Здесь будет отображаться Ваш рацион</Text>
          </ProdThumb>
        </ProdThumb>
      )}
    </RightBar>
  );
};

export default RightSideBar;
