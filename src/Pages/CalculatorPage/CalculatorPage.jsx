import DailyCaloriesForm from 'components/Forms/DailyCaloriesForm';
import { Wrapper, Title } from './CalculatorPage.styled';
import { useSelector } from 'react-redux';
import { getLoading, getError } from 'Redux/userData/userDataSelector';
import Loader from 'components/Loader';
import Notification from 'components/Notification';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import { SidebarWrap, Thumb } from '../DailyPage/DailyPage.styled';
import { motion } from 'framer-motion';

const CalculatorPage = () => {
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  return (
    <Thumb>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Wrapper>
          <Title
            as={motion.h2}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0 }}
          >
            Узнай свою суточную норму калорий
          </Title>
          <DailyCaloriesForm />
          {isLoading && <Loader />}
          {error && <Notification message={error} />}
        </Wrapper>
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

export default CalculatorPage;
