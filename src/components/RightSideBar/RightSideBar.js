import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  getDaySummary,
  getNotAllowedProducts,
} from '../../Redux/ProductSearch/productsSearchSelector';
import { userInfo } from '../../Redux/ProductSearch/productsSearchOperations';
import { format, startOfToday } from 'date-fns';
import { RightBar, ProdThumb, Title, Text } from './RightSideBar.styled';

const RightSideBar = () => {
  // =====
  const dispatch = useDispatch();
  const notAllowedProducts = useSelector(getNotAllowedProducts);
  const daySummary = useSelector(getDaySummary);

  useEffect(() => {
    dispatch(userInfo());
  }, [dispatch]);

  const randomProducts = () => {
    const elemProductsNum = 5;
    const newProductsArr = new Array(elemProductsNum)
      .fill(0)
      .map(
        () =>
          notAllowedProducts[
            Math.floor(Math.random() * notAllowedProducts.length)
          ]
      );
    return newProductsArr;
  };

  // =====

  let today = startOfToday();
  let date = format(today, 'dd MM yyyy');
  // const {
  //   daySummary: { kcalConsumed = 0, dailyRate = 0, percentsOfDailyRate = 0 },
  // } = daySummary[0] || {};
  const {
    kcalConsumed = 0,
    dailyRate = 0,
    percentsOfDailyRate = 0,
  } = daySummary || {};
  // console.log(daySummary[0].daySummary.kcalLeft);
  // console.log(daySummary[0].daySummary.kcalConsumed);
  // console.log(daySummary[0].daySummary.percentsOfDailyRate);

  return (
    <RightBar>
      {daySummary && (
        <ProdThumb>
          <div>
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
          </div>

          <div>
            <Title>Нерекомендуемые продукты</Title>
            {notAllowedProducts.length > 0 ? (
              <ul>
                {randomProducts().map((item, index) => (
                  <li key={index}>
                    <Text>{item}</Text>
                  </li>
                ))}
              </ul>
            ) : (
              <Text>Здесь будет отображаться Ваш рацион</Text>
            )}
          </div>
        </ProdThumb>
      )}
    </RightBar>
  );
};

export default RightSideBar;
