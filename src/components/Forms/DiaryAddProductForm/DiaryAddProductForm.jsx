import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DebounceInput from 'react-debounce-input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMedia } from 'react-use';
import {
  addProduct,
  eatenProduct,
} from '../../../Redux/ProductSearch/productsSearchOperations';
import { getSearchItems } from '../../../Redux/ProductSearch/productsSearchSelector';
// vova1@gmail.com
// qweqwe123@gmail.com
// petro-poroshenko@gmail.com
// vasylqwe@gmail.com

import { ButtonSubmit } from '../../Buttons/ButtonSubmit/ButtonSubmit';
import {
  LabelSearch,
  Wrrapen,
  StyledForm,
  Button,
  ButtonMod,
  ErrorWeight,
  WrrapenInput,
} from './DiaryAddProductForm.styled.js';
import Popup from 'components/Popup/Popup';

const DiaryAddProductForm = ({ date, onClose }) => {
  const dispatch = useDispatch();
  const items = useSelector(getSearchItems);
  const [productId, setProductId] = useState('');
  const [click, setClick] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const isMob = useMedia('(max-width: 767px)');

  const formik = useFormik({
    initialValues: {
      title: '',
      weight: '',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(3, 'Должно быть не менее 3 символов')
        .required('Обязательное поле')
        .typeError('Значение должно быть текстом'),
      weight: Yup.number()
        .min(1, 'Минимальное значение : 1г')
        .max(50000, 'Максимальное значение : 50000г')
        .required('Обязательное поле')
        .typeError('Значение должно быть цифрой'),
    }),
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    !click && setShowPopup(true);
    if (formik.values.title.length > 2) {
      dispatch(
        addProduct({
          title: formik.values.title,
        })
      );
    }
  }, [click, dispatch, formik.values.title]);

  function handleChange({ target: { name, value } }) {
    switch (name) {
      case 'title':
        setClick(false);
        formik.setFieldValue(name, value);
        break;
      case 'weight':
        formik.setFieldValue(name, value);
        break;

      default:
        break;
    }
  }

  const handleClick = (event, id) => {
    formik.setFieldValue('title', event.target.textContent);
    setProductId(id);
    setShowPopup(false);
    setClick(true);
  };

  function handleSubmit(values) {
    const eatenDate = {
      date,
      productId,
      weight: values.weight,
    };

    dispatch(eatenProduct(eatenDate));

    formik.resetForm();
    isMob && onClose();
  }

  return (
    <>
      <StyledForm onSubmit={formik.handleSubmit}>
        <Wrrapen>
          <LabelSearch>
           
            <DebounceInput
              type="text"
              name="title"
              placeholder="Введите название продукта"
              debounceTimeout={300}
              onChange={e => handleChange(e)}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              style={{
                width: 240,
                outline: 'none',
                paddingBottom: 20,
                borderBottom: '1px solid #E0E0E0',
                zIndex: 0
              }}
            />
           
          </LabelSearch>
          {}
          {formik.errors.title && formik.touched.title && (
            <ErrorWeight>{formik.errors.title}</ErrorWeight>
          )}

          {showPopup && items.length > 1 && formik.values.title.length > 2 && (
            <Popup data={items} onClick={handleClick} />
          )}
        </Wrrapen>
        <WrrapenInput>
          <input
            type="number"
            name="weight"
            placeholder="Граммы"
            onChange={e => handleChange(e, formik.setFieldValue)}
            onBlur={formik.handleBlur}
            value={formik.values.weight}
            style={{
              width: 105,
              outline: 'none',
              paddingBottom: 20,
              marginRight: 60,
              border: 'none',
              borderBottom: '1px solid #E0E0E0',
            }}
          />
          {formik.errors.weight &&
            formik.touched.weight &&
            formik.errors.weight && (
              <ErrorWeight>{formik.errors.weight}</ErrorWeight>
            )}
        </WrrapenInput>
        {isMob ? (
          <ButtonMod type="submit">Добавить</ButtonMod>
        ) : (
          <Button>
            <ButtonSubmit disabled={formik.isSubmitting} />
          </Button>
        )}
      </StyledForm>
    </>
  );
};

export default DiaryAddProductForm;
