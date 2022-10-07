import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../Redux/ProductSearch/productsSearchOperations';
import { getProductName } from '../../../Redux/ProductSearch/productsSearchSelector';

export const DiaryAddProductForm = () => {
  const dispatch = useDispatch('');
  const product = useSelector(getProductName);
  console.log(product);

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validate={values => {
        const errors = {};
        if (!values.name && !values.number) {
          errors.city = 'Required';
        }
        return errors;
      }}
      onSubmit={values => {
        console.log(values.name);
        // callback("city", values.city);
        console.log(dispatch(addProduct(values.name)));
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.text}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="number"
            name="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.number}
          />
          {errors.text && touched.number}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};
