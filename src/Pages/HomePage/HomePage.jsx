import DailyCaloriesForm from 'components/Forms/DailyCaloriesForm';
import { Wrapper, Title } from './HomePage.styled';
import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectError,
} from 'Redux/DailyRate/DailyRateSelectors';
import Loader from 'components/Loader';
import Notification from 'components/Notification';

const HomePage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Wrapper>
      <Title>Просчитай свою суточную норму калорий прямо сейчас</Title>
      <DailyCaloriesForm />
      {isLoading && <Loader />}
      {error && <Notification message={error} />}
    </Wrapper>
  );
};

export default HomePage;
