import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Item = ({ product }) => (
  <Card>
    <CardContent>
      {product.name}
    </CardContent>
  </Card>
);

Item.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    score: PropTypes.number,
    iamge: PropTypes.string,
  }).isRequired,
};

export default Item;
