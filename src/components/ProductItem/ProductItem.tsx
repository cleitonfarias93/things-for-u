import React from 'react';

// Interfaces
import { Product as ProductInterface } from 'interfaces';

// Styled Components
import { Card, Img, BuyButton } from './styles';

type Props = {
  product: ProductInterface;
};

const ProductItem: React.FC<Props> = ({ product }) => {
  const renderPrice = (): string => {
    const price = parseFloat(product.price);

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <Card>
      <Img src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{renderPrice()}</Card.Text>
        <Card.Footer>
          <BuyButton variant="primary">Comprar</BuyButton>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
