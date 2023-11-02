/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
 * Create user
 * This can only be done by the logged in user.
 *
 * user User Created user object (optional)
 * returns User
 * */
const createUser = ({ user }) =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        Service.successResponse({
          user,
        })
      );
    } catch (e) {
      reject(
        Service.rejectResponse(e.message || 'Invalid input', e.status || 405)
      );
    }
  });
/**
 * Creates list of users with given input array
 * Creates list of users with given input array
 *
 * user List  (optional)
 * returns User
 * */
const createUsersWithListInput = ({ user }) =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        Service.successResponse({
          user,
        })
      );
    } catch (e) {
      reject(
        Service.rejectResponse(e.message || 'Invalid input', e.status || 405)
      );
    }
  });
/**
 * Delete user
 * This can only be done by the logged in user.
 *
 * username String The name that needs to be deleted
 * no response value expected for this operation
 * */
const deleteUser = ({ username }) =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        Service.successResponse({
          username,
        })
      );
    } catch (e) {
      reject(
        Service.rejectResponse(e.message || 'Invalid input', e.status || 405)
      );
    }
  });
/**
 * Get user by user name
 *
 *
 * username String The name that needs to be fetched. Use user1 for testing.
 * returns User
 * */
const getUserByName = ({ username }) =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        Service.successResponse({
          username,
        })
      );
    } catch (e) {
      reject(
        Service.rejectResponse(e.message || 'Invalid input', e.status || 405)
      );
    }
  });
/**
 * Logs user into the system
 *
 *
 * username String The user name for login (optional)
 * password String The password for login in clear text (optional)
 * returns String
 * */
const loginUser = ({ username, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        Service.successResponse({
          username,
          password,
        })
      );
    } catch (e) {
      reject(
        Service.rejectResponse(e.message || 'Invalid input', e.status || 405)
      );
    }
  });
/**
 * Logs out current logged in user session
 *
 *
 * no response value expected for this operation
 * */
const logoutUser = () =>
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
 * Update user
 * This can only be done by the logged in user.
 *
 * username String name that need to be deleted
 * user User Update an existent user in the store (optional)
 * no response value expected for this operation
 * */
const updateUser = ({ username, user }) =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        Service.successResponse({
          username,
          user,
        })
      );
    } catch (e) {
      reject(
        Service.rejectResponse(e.message || 'Invalid input', e.status || 405)
      );
    }
  });

module.exports = {
  createUser,
  createUsersWithListInput,
  deleteUser,
  getUserByName,
  loginUser,
  logoutUser,
  updateUser,
};
