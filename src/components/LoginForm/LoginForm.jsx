import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  Input,
  Label,
  StyledNavLink,
  BtnL,
  Wrapper,
  BtnWrapper,
  ErrorText,
} from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from '../../Redux/Auth/authOperation';
import { motion } from 'framer-motion';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
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
    email: Yup.string()
      .email('Введите правильный email')
      .required('Обязательное поле'),
    password: Yup.string()
      .typeError('Должно быть строкой')
      .required('Обязательное поле'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0 }}
    >
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form autoComplete="off">
          <StyledForm>
            <Wrapper>
              <Label htmlFor="email">Логин *</Label>
              <Input name="email" type="email" />
              <FormError name="email" />
            </Wrapper>
            <Wrapper>
              <Label htmlFor="password">Пароль *</Label>
              <Input type="password" name="password" />
              <FormError name="password" />
            </Wrapper>
            <BtnWrapper>
              <BtnL type="submit"> Вход </BtnL>
              <StyledNavLink to="/register">Регистрация</StyledNavLink>
            </BtnWrapper>
          </StyledForm>
        </Form>
      </Formik>
    </motion.div>
  );
};
