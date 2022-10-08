import { useState } from 'react';
// import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../Redux/ProductSearch/productsSearchOperations';
// import {
//   getProductName,
//   getProductWeight,
// } from '../../../Redux/ProductSearch/productsSearchSelector';
// =====
// import { selectAccessToken } from '../../../Redux/Auth/authSelectors';
// =====
// vova1@gmail.com

const DiaryAddProductForm = () => {
  const dispatch = useDispatch();
  // const productTitle = useSelector(getProductName);
  // const productWeight = useSelector(getProductWeight);
  // console.log(productTitle);
  // console.log(productWeight);

  const [title, setTitle] = useState('');
  const [weight, setWeight] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    name === 'title' ? setTitle(value) : setWeight(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newProduct = {
      title,
      weight,
    };
    console.log(newProduct);

    dispatch(addProduct(newProduct));
    setTitle('');
    setWeight('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="title" value={title} onChange={handleChange} />
      </label>
      <label>
        <input
          type="number"
          name="weight"
          value={weight}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add product</button>
    </form>

    // <Formik
    //   initialValues={{ title: '', weight: '' }}
    //   onSubmit={values => {
    //     console.log(values.title);
    //     console.log(productWeight);
    //     const product = values.title;
    //     const weight = values.weight;
    //     // console.log(values.title);
    //     // console.log(values.weight);
    //     // console.log(222, product);
    //     dispatch(addProduct({ title: product, weight }));
    //     // console.log(
    //     //   dispatch(
    //     //     addProduct({
    //     //       title: values.title,
    //     //       weight: values.weight,
    //     //     })
    //     //   )
    //     // );
    //     // console.log(222, product);
    //     // console.log(222, productWeight);
    //   }}
    //   // initialValues={{ title: '', weight: '' }}
    //   validate={values => {
    //     const errors = {};
    //     if (!values.title && !values.weight) {
    //       errors.city = 'Required';
    //     }
    //     return errors;
    //   }}
    // >
    //   {({
    //     values,
    //     errors,
    //     touched,
    //     handleChange,
    //     handleBlur,
    //     handleSubmit,
    //     isSubmitting,
    //   }) => (
    //     <form onSubmit={handleSubmit}>
    //       <input
    //         type="text"
    //         name="title"
    //         onChange={handleChange}
    //         onBlur={handleBlur}
    //         value={values.title}
    //       />
    //       {errors.title && touched.title && errors.title}
    //       <input
    //         type="number"
    //         name="weight"
    //         onChange={handleChange}
    //         onBlur={handleBlur}
    //         value={values.weight}
    //       />
    //       {errors.weight && touched.weight}
    //       <button type="submit" disabled={isSubmitting}>
    //         Submit
    //       </button>
    //     </form>
    //   )}
    // </Formik>
  );
};

export default DiaryAddProductForm;
