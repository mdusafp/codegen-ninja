/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
 * Add a new pet to the store
 * Add a new pet to the store
 *
 * pet Pet Create a new pet in the store
 * returns Pet
 * */
const addPet = ({ pet }) =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        Service.successResponse({
          pet,
        })
      );
    } catch (e) {
      reject(
        Service.rejectResponse(e.message || 'Invalid input', e.status || 405)
      );
    }
  });
/**
 * Deletes a pet
 * delete a pet
 *
 * petId Long Pet id to delete
 * apiUnderscorekey String  (optional)
 * no response value expected for this operation
 * */
const deletePet = ({ petId, apiUnderscorekey }) =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        Service.successResponse({
          petId,
          apiUnderscorekey,
        })
      );
    } catch (e) {
      reject(
        Service.rejectResponse(e.message || 'Invalid input', e.status || 405)
      );
    }
  });
/**
 * Finds Pets by status
 * Multiple status values can be provided with comma separated strings
 *
 * status String Status values that need to be considered for filter (optional)
 * returns List
 * */
const findPetsByStatus = ({ status }) =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        Service.successResponse({
          status,
        })
      );
    } catch (e) {
      reject(
        Service.rejectResponse(e.message || 'Invalid input', e.status || 405)
      );
    }
  });
/**
 * Finds Pets by tags
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 *
 * tags List Tags to filter by (optional)
 * returns List
 * */
const findPetsByTags = ({ tags }) =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        Service.successResponse({
          tags,
        })
      );
    } catch (e) {
      reject(
        Service.rejectResponse(e.message || 'Invalid input', e.status || 405)
      );
    }
  });
/**
 * Find pet by ID
 * Returns a single pet
 *
 * petId Long ID of pet to return
 * returns Pet
 * */
const getPetById = ({ petId }) =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        Service.successResponse({
          petId,
        })
      );
    } catch (e) {
      reject(
        Service.rejectResponse(e.message || 'Invalid input', e.status || 405)
      );
    }
  });
/**
 * Update an existing pet
 * Update an existing pet by Id
 *
 * pet Pet Update an existent pet in the store
 * returns Pet
 * */
const updatePet = ({ pet }) =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        Service.successResponse({
          pet,
        })
      );
    } catch (e) {
      reject(
        Service.rejectResponse(e.message || 'Invalid input', e.status || 405)
      );
    }
  });
/**
 * Updates a pet in the store with form data
 *
 *
 * petId Long ID of pet that needs to be updated
 * name String Name of pet that needs to be updated (optional)
 * status String Status of pet that needs to be updated (optional)
 * no response value expected for this operation
 * */
const updatePetWithForm = ({ petId, name, status }) =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        Service.successResponse({
          petId,
          name,
          status,
        })
      );
    } catch (e) {
      reject(
        Service.rejectResponse(e.message || 'Invalid input', e.status || 405)
      );
    }
  });
/**
 * uploads an image
 *
 *
 * petId Long ID of pet to update
 * additionalMetadata String Additional Metadata (optional)
 * body File  (optional)
 * returns ApiResponse
 * */
const uploadFile = ({ petId, additionalMetadata, body }) =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        Service.successResponse({
          petId,
          additionalMetadata,
          body,
        })
      );
    } catch (e) {
      reject(
        Service.rejectResponse(e.message || 'Invalid input', e.status || 405)
      );
    }
  });

module.exports = {
  addPet,
  deletePet,
  findPetsByStatus,
  findPetsByTags,
  getPetById,
  updatePet,
  updatePetWithForm,
  uploadFile,
};
