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

const CalculatorPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Thumb>
      <Wrapper>
        <Title>Узнай свою суточную норму калорий</Title>
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
