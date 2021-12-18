import styled from 'styled-components';

// Bootstrap components
import { Card as CardBootstrap, Image, Button } from 'react-bootstrap';

export const Card = styled(CardBootstrap)`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  padding: 1.5rem;

  .card-body {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;

    height: 150px;
    padding-bottom: 0;
    margin-left: 2rem;

    .card-title {
      font-size: 2rem;
    }

    .card-text {
      margin-top: 1rem;
      font-size: 2.4rem;
    }

    .card-footer {
      display: flex;
      align-items: flex-end;
      flex-grow: 1;

      background-color: transparent;
      border: none;
      padding: 0;
    }
  }

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

export const Img = styled(Image)`
  width: 15rem;
  height: 15rem;
`;

export const BuyButton = styled(Button)`
  width: 15rem;

  padding: 0.5rem;
  font-size: 1.8rem;
`;
