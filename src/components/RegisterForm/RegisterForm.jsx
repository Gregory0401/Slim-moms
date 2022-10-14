import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { register } from '../../Redux/Auth/authOperation';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import {
  StyledForm,
  Input,
  Label,
  BtnR,
  StyledNavLink,
  Wrapper,
  BtnWrapper,
  ErrorText,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    username: '',
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
    username: Yup.string()
      .typeError('Должно быть строкой')
      .required('Обязательное поле'),

    email: Yup.string()
      .email('Введите правильный email')
      .required('Обязательное поле'),
    password: Yup.string()
      .typeError('Должно быть строкой')
      .required('Обязательное поле'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
    navigate('/login');
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
        <Form>
          <StyledForm>
            <Wrapper>
              <Label htmlFor="username">Имя *</Label>
              <Input type="text" name="username" />
              <FormError name="username" />
            </Wrapper>
            <Wrapper>
              <Label htmlFor="email">Логин *</Label>
              <Input type="email" name="email" />
              <FormError name="email" />
            </Wrapper>
            <Wrapper>
              <Label htmlFor="password">Пароль *</Label>
              <Input type="password" name="password" />
              <FormError name="password" />
            </Wrapper>

            <BtnWrapper>
              <BtnR type="submit"> Регистрация </BtnR>
              <StyledNavLink to="/login">Вход</StyledNavLink>
            </BtnWrapper>
          </StyledForm>
        </Form>
      </Formik>
    </motion.div>
  );
};
