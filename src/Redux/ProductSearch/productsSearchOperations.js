import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { format } from 'date-fns';
// import { data } from 'autoprefixer';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const searchProduct = createAsyncThunk(
  'product/searchProduct',
  async ({ title }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/product/?search=${title}`);
      return response.data;
    } catch (error) {
      if (error.response.status === 403) {
        return rejectWithValue('Для начала узнай свою суточную норму калорий');
      } else if (error.response.status === 400) {
        return rejectWithValue(
          'По этому запросу не найдено разрешенных продуктов'
        );
      }
      return rejectWithValue('addProduct Произошла ошибка');
    }
  }
);

export const formateDate = startDate => {
  const chosenDate = format(startDate, 'yyyy-MM-dd');
  return { payload: chosenDate };
};

export const dateSetAction = createAction('date/set', formateDate);
