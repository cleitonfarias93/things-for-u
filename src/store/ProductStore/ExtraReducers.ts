/* eslint-disable no-param-reassign */

import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { ProductState } from 'interfaces';
import { getProductAsync } from './CreateAsyncThunk';

export const getProductReducer = (
  builder: ActionReducerMapBuilder<ProductState>,
): void => {
  builder
    .addCase(getProductAsync.pending, (state: ProductState) => {
      state.loadingProduct = true;
    })
    .addCase(getProductAsync.fulfilled, (state: ProductState, action) => {
      state.loadingProduct = false;
      state.productList = action.payload;
    })
    .addCase(getProductAsync.rejected, (state: ProductState) => {
      state.loadingProduct = false;
    });
};
