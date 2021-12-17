import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

// Services
import { getProducts } from 'services/ProductService';

export const getProductAsync = createAsyncThunk(
  'product/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProducts();
      return response.data;
    } catch (error) {
      const errorAxios = error as AxiosError;
      return rejectWithValue(errorAxios.response);
    }
  },
);
