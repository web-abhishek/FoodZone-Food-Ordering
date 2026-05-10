import React from 'react';
import { useSelector } from 'react-redux';
import { FOOD_ITEM_CDN_URL } from '../utils/constants';

const Checkout = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.card.info.price || 0;
      return total + (price / 100);
    }, 0);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      <h1 className="text-4xl font-bold text-center my-10">Checkout</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <h5 className="text-red-500 text-2xl">Your cart is empty. Add items to proceed to checkout.</h5>
        </div>
      ) : (
        <div>
          <div className="space-y-4">
            {cartItems.map((item, index) => {
              const { name, price, description, imageId } = item.card.info;
              const itemPrice = (price || 0) / 100;

              return (
                <div
                  key={`${item.card.info.id}-${index}`}
                  className="bg-white rounded-lg p-4 border border-gray-200 shadow-md flex gap-4"
                >
                  {/* Item Image */}
                  <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-gray-200">
                    {imageId ? (
                      <img
                        src={`${FOOD_ITEM_CDN_URL}${imageId}`}
                        alt={name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs text-center">
                        No Image
                      </div>
                    )}
                  </div>

                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-base mb-1">{name}</h4>
                      <p className="text-gray-600 text-sm line-clamp-2">{description || "No description available"}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">₹{itemPrice}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total:</span>
              <span>₹{calculateTotal().toFixed(2)}</span>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
