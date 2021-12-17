import { AxiosResponse } from 'axios';
import Api from './Api';

export const getProducts = (): Promise<AxiosResponse> => Api.get('/product');
