import { useSelector } from 'react-redux';
import { getDaySummary } from '../../Redux/ProductSearch/productsSearchSelector';
import { RightBar, ProdThumb, Title, Text } from './RightSideBar.styled';

const RightSideBar = () => {
  const daySummary = useSelector(getDaySummary);
  // const { date, kcalConsumed, dailyRate, percentsOfDailyRate } = daySummary;
  return (
    <RightBar>
      {daySummary && (
        <ProdThumb>
          <Title>Сводка на {daySummary.date}</Title>
          <div>
            {Number(daySummary.dailyRate) > Number(daySummary.kcalConsumed) ? (
              <Text>
                <span>Осталось</span>{' '}
                <span>
                  {Math.round(
                    Number(daySummary.dailyRate) -
                      Number(daySummary.kcalConsumed)
                  )}{' '}
                  ккал
                </span>
              </Text>
            ) : (
              <Text>
                <span>Осталось</span> <span>0 ккал</span>
              </Text>
            )}
            <Text>
              <span>Употреблено </span>{' '}
              <span>{Math.round(daySummary.kcalConsumed)} ккал</span>
            </Text>
            <Text>
              <span>Дневная норма</span>{' '}
              <span>{Math.round(daySummary.dailyRate)} ккал</span>
            </Text>
            <Text>
              <span>Процент от нормы</span>{' '}
              <span>{Math.round(daySummary.percentsOfDailyRate)} %</span>
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
