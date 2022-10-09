import DailyCaloriesForm from 'components/Forms/DailyCaloriesForm';
import { Wrapper, Title } from './HomePage.styled';
import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectError,
} from 'Redux/DailyRate/DailyRateSelectors';

const HomePage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  error && alert(error);

  return (
    <Wrapper>
      <Title>
        Просчитай свою суточную <br /> норму калорий прямо сейчас
      </Title>
      <DailyCaloriesForm />
      {isLoading && !error && <div>Loading...</div>}
    </Wrapper>
  );
};

export default HomePage;
