import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import DiaryAddProductForm from 'components/Forms/DiaryAddProductForm/DiaryAddProductForm';
import ProductsList from '../../components/ProductsList/ProductsList';
import DiaryDateCalendarDate from 'components/Forms/DiaryDateСalendar/DiaryDateCalendarDate/DiaryDateCalendarDate';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import {
  SidebarWrap,
  Thumb,
  Wrapper,
  Container,
  Div,
} from './DailyPage.styled';
import { format, startOfToday } from 'date-fns';
import { dayInfo } from '../../Redux/ProductSearch/productsSearchOperations';
import {
  getEatenProducts,
  getError,
} from '../../Redux/ProductSearch/productsSearchSelector';
import { Mobile } from '../../components/Forms/DiaryAddProductForm/DiaryAddProductForm.styled';
import { ButtonOpen } from '../../components/Buttons/ButtonOpen/ButtonOpen';
import { Form } from '../../components/Forms/DiaryAddProductForm/MobileForm';
import { getDate } from '../../Redux/ProductSearch/productsSearchSelector';
import Notification from 'components/Notification';

const DailyPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  const fetchDate = useSelector(getDate);

  let today = startOfToday();

  let todayFormated = format(today, 'yyyy-MM-dd');

  const date = fetchDate === null ? todayFormated : fetchDate;

  useEffect(() => {
    dispatch(dayInfo({ date }));
  }, [dispatch, date]);

  const eatenProducts = useSelector(getEatenProducts);

  const findDayByDate =
    eatenProducts?.length > 0
      ? eatenProducts?.filter(item => item.date === date)
      : [];

  const [showModal, setShowModal] = useState(false);
  const onToggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <Thumb>
      <Div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <DiaryDateCalendarDate date={date} />
          <Wrapper>
            <Container>
              <DiaryAddProductForm date={date} onClose={onToggleModal} />
            </Container>

            <Mobile>
              <ButtonOpen onClick={onToggleModal} />
            </Mobile>
            {showModal && <Form onClose={onToggleModal} />}
            <ProductsList eatenProducts={findDayByDate} />
          </Wrapper>
        </motion.div>
      </Div>
      <motion.div
        as={motion.h2}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0 }}
      >
        <SidebarWrap>
          <RightSideBar date={date} />
        </SidebarWrap>
      </motion.div>
      {error && <Notification message={error} />}
    </Thumb>
  );
};
export default DailyPage;
