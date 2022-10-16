import DailyCaloriesForm from 'components/Forms/DailyCaloriesForm';
import { Wrapper, Title } from './CalculatorPage.styled';
import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectError,
} from 'Redux/DailyRate/DailyRateSelectors';
import Loader from 'components/Loader';
import Notification from 'components/Notification';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import { SidebarWrap, Thumb } from '../DailyPage/DailyPage.styled';
import { motion } from 'framer-motion';




const CalculatorPage = () => {

  

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (


    <Thumb>
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
      <SidebarWrap>
        <RightSideBar />
      </SidebarWrap>
    </Thumb>
    
   
    
  );
};

export default CalculatorPage;
