/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
 * Delete purchase order by ID
 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 *
 * orderId Long ID of the order that needs to be deleted
 * no response value expected for this operation
 * */
const deleteOrder = ({ orderId }) =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        Service.successResponse({
          orderId,
        })
      );
    } catch (e) {
      reject(
        Service.rejectResponse(e.message || 'Invalid input', e.status || 405)
      );
    }
  });
/**
 * Returns pet inventories by status
 * Returns a map of status codes to quantities
 *
 * returns Map
 * */
const getInventory = () =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(Service.successResponse({}));
    } catch (e) {
      reject(
        Service.rejectResponse(e.message || 'Invalid input', e.status || 405)
      );
    }
  });
/**
 * Find purchase order by ID
 * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
 *
 * orderId Long ID of order that needs to be fetched
 * returns Order
 * */
const getOrderById = ({ orderId }) =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        Service.successResponse({
          orderId,
        })
      );
    } catch (e) {
      reject(
        Service.rejectResponse(e.message || 'Invalid input', e.status || 405)
      );
    }
  });
/**
 * Place an order for a pet
 * Place a new order in the store
 *
 * order Order  (optional)
 * returns Order
 * */
const placeOrder = ({ order }) =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        Service.successResponse({
          order,
        })
      );
    } catch (e) {
      reject(
        Service.rejectResponse(e.message || 'Invalid input', e.status || 405)
      );
    }
  });

module.exports = {
  deleteOrder,
  getInventory,
  getOrderById,
  placeOrder,
};
