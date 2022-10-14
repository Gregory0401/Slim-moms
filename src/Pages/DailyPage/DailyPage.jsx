import DiaryAddProductForm from 'components/Forms/DiaryAddProductForm/DiaryAddProductForm';
import ProductsList from '../../components/ProductsList/ProductsList';
import DiaryDateCalendarDate from 'components/Forms/DiaryDateСalendar/DiaryDateCalendarDate/DiaryDateCalendarDate';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import { SidebarWrap, Thumb, Wrapper, Div } from './DailyPage.styled';
import { format, startOfToday } from 'date-fns';
// =====
import { eatenProduct } from '../../Redux/ProductSearch/productsSearchOperations';
import {
  userInfo,
  dayInfo,
} from '../../Redux/ProductSearch/productsSearchOperations';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getEatenProducts } from '../../Redux/ProductSearch/productsSearchSelector';
// =====

import { Container } from 'components/Layout/Main/Main.styled';

const DailyPage = () => {
  const dispatch = useDispatch();

  let today = startOfToday();
  let date = format(today, 'yyyy-MM-dd');

  useEffect(() => {
    dispatch(userInfo());
    dispatch(eatenProduct());
    dispatch(dayInfo(date));
  }, [dispatch, date]);
  // =====
  const eatenProducts = useSelector(getEatenProducts);
  console.log('eatenProducts!!!!!!! ', eatenProducts);
  // console.log(
  //   5555555,
  //   eatenProducts?.find(item => item.date === date)
  // );
  const findDayByDate =
    eatenProducts?.length > 0
      ? eatenProducts?.find(item => item.date === date).eatenProducts
      : [];
  console.log('findDayByDate', findDayByDate);

  // =====

  return (
    <Container>
      <Thumb>
        <div>
          <DiaryDateCalendarDate />
          <Wrapper>
            <DiaryAddProductForm date={date} />
            <ProductsList date={date} eatenProducts={findDayByDate} />
          </Wrapper>
        </div>
        <SidebarWrap>
          <RightSideBar />
        </SidebarWrap>
      </Thumb>
    </Container>
  );
};

export default DailyPage;
