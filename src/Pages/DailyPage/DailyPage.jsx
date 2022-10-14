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

import { Mobile } from '../../components/Forms/DiaryAddProductForm/DiaryAddProductForm.styled';
import { useState } from 'react';
import { ButtonOpen } from '../../components/Buttons/ButtonOpen/ButtonOpen';
import { Form } from '../../components/Forms/DiaryAddProductForm/MobileForm';
import { motion } from 'framer-motion';

const DailyPage = () => {
  const dispatch = useDispatch();

  let today = startOfToday();
  let date = format(today, 'yyyy-MM-dd');

  useEffect(() => {
    dispatch(dayInfo({date}));
  }, [dispatch, date]);

  const eatenProducts = useSelector(getEatenProducts);

  const findDayByDate =
    eatenProducts?.length > 0
      ? eatenProducts?.find(item => item.date === date).eatenProducts
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
          <DiaryDateCalendarDate />
          <Wrapper>
            <Container>
              <DiaryAddProductForm date={date} onClose={onToggleModal} />
            </Container>

            <Mobile>
              <ButtonOpen onClick={onToggleModal} />
            </Mobile>
            {showModal && <Form onClose={onToggleModal} />}
            <ProductsList date={date} eatenProducts={findDayByDate} />
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
          <RightSideBar />
        </SidebarWrap>
      </motion.div>
    </Thumb>
  );
};
export default DailyPage;
