import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { getProductAsync } from 'store/ProductStore';

// Components
import ProductItem from 'components/ProductItem';

// Styled components
import { Container } from './styles';

const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductAsync());
  }, []);

  const { productList, loadingProduct } = useAppSelector(
    (state) => state.product,
  );

  if (loadingProduct) {
    return <span>Carregando...</span>;
  }

  return (
    <Container>
      {productList.map((product) => (
        <ProductItem product={product} />
      ))}
    </Container>
  );
};

export default ProductList;
