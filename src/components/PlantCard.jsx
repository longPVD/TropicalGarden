// import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import { Button, Card } from 'antd';

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();
  const { name, price, image, description } = plant;

  const handleAddToCart = () => {
    dispatch(addItem(plant));
  };

  return (
    <Card cover={<img style={{ height: 400,  }} alt={name} src={image} />}>
      <h2 className="text-lg font-bold">{name}</h2>
      <p>{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">${price}</span>
        <Button type="primary" onClick={handleAddToCart}>Add to Cart</Button>
      </div>
    </Card>
  );
};

export default PlantCard;