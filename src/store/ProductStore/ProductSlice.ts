import { createSlice } from '@reduxjs/toolkit';

// Interfaces
import { ProductState } from 'interfaces';

// Extra Reducers
import { getProductReducer } from './ExtraReducers';

const initialState: ProductState = {
  loadingProduct: false,
  productList: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getProductReducer(builder);
  },
});

export default productSlice.reducer;
