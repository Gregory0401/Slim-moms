import DiaryAddProductForm from 'components/Forms/DiaryAddProductForm/DiaryAddProductForm';
import ProductsList from '../../components/ProductsList/ProductsList';
import DiaryDateCalendarDate from 'components/Forms/DiaryDateСalendar/DiaryDateCalendarDate/DiaryDateCalendarDate';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import { SidebarWrap, Thumb, Wrapper, Div } from './DailyPage.styled';
import { format, startOfToday } from 'date-fns';
import { motion } from 'framer-motion';

const DailyPage = () => {
  let today = startOfToday();
  let date = format(today, 'yyyy-MM-dd');

  return (
    <Thumb>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Div>
          <DiaryDateCalendarDate />
          <Wrapper>
            <DiaryAddProductForm date={date} />
            <ProductsList date={date} />
          </Wrapper>
        </Div>
      </motion.div>
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
