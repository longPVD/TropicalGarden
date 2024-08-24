// import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import { useState } from 'react';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';
const ShoppingCartPage = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  // State to control the visibility of the modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  // Function to show the modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Function to handle closing the modal
  const handleOk = () => {
    setIsModalVisible(false);
    dispatch(clearCart());
    // You can add additional actions here, like redirecting to another page
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleClick = () => {
    navigate('/products');
  };

  return (
    <>
      <Header />
      <div className="p-8">
        {cart.items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
        <div className="mt-8">
          <h1 className="text-2xl font-bold">Total: ${cart.totalPrice}</h1>
          <button  onClick={showModal}  className="bg-blue-500 text-white px-4 py-2 mt-4">Checkout</button>
          {/* Modal for purchase confirmation */}
          <Modal
            title="Purchase Successful"
            open={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="OK"
            cancelButtonProps={{ style: { display: 'none' } }} // Hide the Cancel button
          >
            <p>Thank you for your purchase! Your order has been placed successfully.</p>
          </Modal>
          <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 mt-4 ml-4">Continue Shopping</button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartPage;