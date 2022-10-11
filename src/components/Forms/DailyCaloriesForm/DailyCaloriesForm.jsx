import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  Input,
  Label,
  Wrapper,
  FormWrapper,
  RadioTitle,
  RadioWrapper,
  RadioLabel,
  RadioInput,
  Button,
} from './DailyCaloriesForm.styled';
import { dailyRate, dailyRateWithUserId } from 'Redux/DailyRate/DailyRateOperations';
import ModalProducts from '../../Modal/ModalProducts/ModalProducts';
import {
  selectError,
  selectIsLoading,
} from 'Redux/DailyRate/DailyRateSelectors';

const DailyCaloriesForm = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [desiredWeight, setDesiredWeight] = useState('');
  const [bloodType, setBloodType] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'height':
        setHeight(value);
        break;
      case 'weight':
        setWeight(value);
        break;
      case 'age':
        setAge(value);
        break;
      case 'desiredWeight':
        setDesiredWeight(value);
        break;
      default:
        break;
    }
  };

  const handleRadio = event => {
    setBloodType(event.target.value);
  };

  const [showModal, setShowModal] = useState(false);
  const onToggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(dailyRate({ height: Number(height), weight: Number(weight), age: Number(age), desiredWeight: Number(desiredWeight), bloodType: Number(bloodType) }));
    setHeight('');
    setWeight('');
    setAge('');
    setDesiredWeight('');
    setBloodType('');
    setShowModal(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormWrapper>
        <Wrapper>
          <Label>
            Рост *
            <Input
              type="text"
              name="height"
              value={height}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Возраст *
            <Input type="text" name="age" value={age} onChange={handleChange} />
          </Label>
          <Label>
            Текущий вес *
            <Input
              type="text"
              name="weight"
              value={weight}
              onChange={handleChange}
            />
          </Label>
        </Wrapper>
        <Wrapper>
          <Label>
            Желаемый вес *
            <Input
              type="text"
              name="desiredWeight"
              value={desiredWeight}
              onChange={handleChange}
            />
          </Label>
          <div>
            <RadioTitle>Группа крови *</RadioTitle>
            <RadioWrapper>
              <RadioLabel>
                1
                <RadioInput
                  type="radio"
                  checked={bloodType === '1'}
                  name="bloodType"
                  value="1"
                  onChange={handleRadio}
                />
              </RadioLabel>
              <RadioLabel>
                2
                <RadioInput
                  type="radio"
                  checked={bloodType === '2'}
                  name="bloodType"
                  value="2"
                  onChange={handleRadio}
                />
              </RadioLabel>
              <RadioLabel>
                3
                <RadioInput
                  type="radio"
                  checked={bloodType === '3'}
                  name="bloodType"
                  value="3"
                  onChange={handleRadio}
                />
              </RadioLabel>
              <RadioLabel>
                4
                <RadioInput
                  type="radio"
                  checked={bloodType === '4'}
                  name="bloodType"
                  value="4"
                  onChange={handleRadio}
                />
              </RadioLabel>
            </RadioWrapper>
          </div>
        </Wrapper>
      </FormWrapper>

      <Button type="submit">Похудеть</Button>

      {showModal && !error && !isLoading && (
        <ModalProducts onClick={onToggleModal} onClose={onToggleModal}>
          <dailyRate />
        </ModalProducts>
      )}
    </Form>
  );
};
export default DailyCaloriesForm;
