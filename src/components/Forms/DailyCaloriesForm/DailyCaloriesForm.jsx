import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  Input,
  Label,
  Wrapper,
  FormWrapper,
  ErrorText,
  RadioTitle,
  RadioWrapper,
  RadioLabel,
  RadioInput,
  Button,
} from './DailyCaloriesForm.styled';
import {
  dailyRate,
  dailyRateWithUserId,
} from 'Redux/DailyRate/DailyRateOperations';
import ModalProducts from '../../Modal/ModalProducts/ModalProducts';
import {
  selectError,
  selectIsLoading,
} from 'Redux/DailyRate/DailyRateSelectors';
import { selectIsLoggedIn, selectUserId } from 'Redux/Auth/authSelectors';

const changeTypeToNumber = obj => {
  var new_obj = {};
  for (let prop in obj) {
    new_obj[prop] = Number(obj[prop]);
  }
  return new_obj;
};

const bloodTypes = ['1', '2', '3', '4'];
const userParams = [
  {
    value: 'height',
    text: 'Рост *',
  },
  {
    value: 'age',
    text: 'Возраст *',
  },
  {
    value: 'weight',
    text: 'Текущий вес *',
  },
];

const DailyCaloriesForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const userId = useSelector(selectUserId);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const initialValues = {
    height: '',
    weight: '',
    age: '',
    desiredWeight: '',
    bloodType: '',
  };
  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorText>{message}</ErrorText>}
      />
    );
  };
  const validationSchema = Yup.object({
    height: Yup.number('Должно быть число')
      .min(100, 'Минимум 100 см')
      .max(250, 'Максимум 250 см')
      .required('Обязательное поле'),
    weight: Yup.number('Должно быть число')
      .min(20, 'Минимум 20 кг')
      .max(500, 'Максимум 500 кг')
      .required('Обязательное поле'),
    age: Yup.number('Должно быть число')
      .min(18, 'Возраст должен быть больше 18')
      .max(100, 'Возраст должен быть меньше 100')
      .required('Обязательное поле'),
    desiredWeight: Yup.number()
      .min(20, 'Минимум 20 кг')
      .max(500, 'Максимум 500 кг')
      .required('Обязательное поле')
      .test(
        'checkLessWeight',
        'Должно быть меньше текущего веса',
        function (value) {
          if (this?.options?.parent?.weight <= value) {
            return false;
          }
          return true;
        }
      ),

    bloodType: Yup.number('Должно быть число').required('Обязательное поле'),
  });
  const [showModal, setShowModal] = useState(false);
  const onToggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const handleSubmit = (values, { resetForm }) => {
    const params = changeTypeToNumber(values);

    isLoggedIn
      ? dispatch(dailyRateWithUserId({ userId, ...params }))
      : dispatch(dailyRate(params));
    resetForm();

    setShowModal(true);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <StyledForm>
            <FormWrapper>
              <Wrapper>
                {userParams.map(({ value, text }) => (
                  <div key={value}>
                    <Label htmlFor={value}>{text}</Label>
                    <Input name={value} type="text" />
                    <FormError name={value} />
                  </div>
                ))}
              </Wrapper>
              <Wrapper>
                <div>
                  <Label htmlFor="desiredWeight">Желаемый вес *</Label>
                  <Input type="text" name="desiredWeight" />
                  <FormError name="desiredWeight" />
                </div>
                <div role="group" aria-labelledby="my-radio-group">
                  <RadioTitle>Группа крови *</RadioTitle>
                  <RadioWrapper>
                    {bloodTypes.map(item => (
                      <RadioLabel key={item}>
                        <RadioInput
                          type="radio"
                          name="bloodType"
                          value={item}
                        />
                        {item}
                      </RadioLabel>
                    ))}
                  </RadioWrapper>
                  <FormError name="bloodType" />
                </div>
              </Wrapper>
            </FormWrapper>
            <Button type="submit">Похудеть</Button>
          </StyledForm>
        </Form>
      </Formik>
      {showModal && !error && !isLoading && (
        <ModalProducts onClick={onToggleModal} onClose={onToggleModal}>
          <dailyRate />
        </ModalProducts>
      )}
    </>
  );
};
export default DailyCaloriesForm;
