import DailyCaloriesForm from 'components/Forms/DailyCaloriesForm';
import { Wrapper, Title } from './CalculatorPage.styled';
import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectError,
} from 'Redux/DailyRate/DailyRateSelectors';
import Loader from 'components/Loader';
import Notification from 'components/Notification';

const CalculatorPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Wrapper>
      <Title>Узнай свою суточную норму калорий</Title>
      <DailyCaloriesForm />
      {isLoading && <Loader />}
      {error && <Notification message={error} />}
    </Wrapper>
  );
};

export default CalculatorPage;
