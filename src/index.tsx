import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';


// function calculateDeliveryFee(cartValue, deliveryDistance, numberOfItems) {
//   // Rule 1: Small order surcharge
//   let smallOrderSurcharge = Math.max(0, 10 - cartValue);

//   // Rule 2: Base delivery fee
//   let baseFee = 2;

//   // Calculate additional distance fee
//   let additionalDistanceFee = Math.ceil((deliveryDistance - 1000) / 500) * 1;
//   additionalDistanceFee = Math.max(additionalDistanceFee, 1); // Minimum fee is 1€

//   // Rule 3: Total distance fee
//   let totalDistanceFee = baseFee + additionalDistanceFee;

//   // Rule 4: Item surcharge
//   let itemSurcharge = numberOfItems >= 5 ? (numberOfItems - 4) * 0.5 : 0;
//   let bulkFee = numberOfItems > 12 ? 1.2 : 0;

//   // Rule 5: Total surcharge
//   let totalSurcharge = Math.min(15 - totalDistanceFee, itemSurcharge + bulkFee);

//   // Rule 6: Free delivery for cart value >= 200€
//   let deliveryFee = cartValue >= 200 ? 0 : totalDistanceFee + totalSurcharge + smallOrderSurcharge;

//   // Rule 7: Friday rush multiplier
//   let currentDate = new Date();
//   let isFridayRush = currentDate.getDay() === 5 && currentDate.getHours() >= 15 && currentDate.getHours() < 19;

//   if (isFridayRush) {
//     deliveryFee *= 1.2;
//     deliveryFee = Math.min(deliveryFee, 15); // Cannot exceed 15€
//   }

//   return deliveryFee.toFixed(2);
// }

// // Example usage:
// let cartValue = 150; // Replace with the actual cart value
// let deliveryDistance = 1501; // Replace with the actual delivery distance
// let numberOfItems = 10; // Replace with the actual number of items

// let deliveryFee = calculateDeliveryFee(cartValue, deliveryDistance, numberOfItems);
// console.log("Delivery Fee: €" + deliveryFee);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
