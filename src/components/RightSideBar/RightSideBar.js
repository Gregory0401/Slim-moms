import { useSelector } from 'react-redux';
import {
  getDaySummary,
  getNotAllowedProducts,
  selectDailyRate,
} from '../../Redux/userData/userDataSelector';
import { RightBar, ProdThumb, Title, Text } from './RightSideBar.styled';

const RightSideBar = ({ date }) => {
  const notAllowedProducts = useSelector(getNotAllowedProducts);
  const daySummary = useSelector(getDaySummary);
  const dailyRate = useSelector(selectDailyRate);

  const { kcalConsumed = 0, id = '' } = daySummary;

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

  return (
    <>
      <RightBar>
        <ProdThumb>
          {daySummary && (
            <div key={id}>
              <Title>Сводка на {date}</Title>
              <div>
                {Number(dailyRate) > Number(kcalConsumed) ? (
                  <Text>
                    <span>Осталось</span>{' '}
                    <span>
                      {Math.round(Number(dailyRate) - Number(kcalConsumed))}{' '}
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
                  <span>{Math.round(kcalConsumed)} ккал</span>
                </Text>
                <Text>
                  <span>Дневная норма </span>{' '}
                  <span>{Math.round(dailyRate)} ккал</span>
                </Text>
                <Text>
                  <span>Процент от нормы</span>{' '}
                  <span>
                    {Number(kcalConsumed) > 0
                      ? Math.round(
                          (Number(kcalConsumed) / Number(dailyRate)) * 100
                        )
                      : '0'}
                    %
                  </span>
                </Text>
              </div>
            </div>
          )}
          <div>
            <Title>Нерекомендуемые продукты</Title>
            {notAllowedProducts?.length > 0 ? (
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
      </RightBar>
    </>
  );
};

export default RightSideBar;
