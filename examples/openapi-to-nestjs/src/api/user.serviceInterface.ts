/**
 * Swagger Petstore - OpenAPI 3.0
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we\'ve switched to the design first approach! You can now help us improve the API whether it\'s by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3.  _If you\'re looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click [here](https://editor.swagger.io/?url=https://petstore.swagger.io/v2/swagger.yaml). Alternatively, you can load via the `Edit > Load Petstore OAS 2.0` menu option!_  Some useful links: - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore) - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 *
 * The version of the OpenAPI document: 1.0.11
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';

import { User } from '../model/user';

import { Configuration } from '../configuration';

export interface UserServiceInterface {
  defaultHeaders: {};
  configuration: Configuration;

  /**
   * Create user
   * This can only be done by the logged in user.
   * @param user Created user object
   */
  createUser(user?: User, extraHttpRequestParams?: any): Observable<User>;

  /**
   * Creates list of users with given input array
   * Creates list of users with given input array
   * @param user
   */
  createUsersWithListInput(
    user?: Array<User>,
    extraHttpRequestParams?: any
  ): Observable<User>;

  /**
   * Delete user
   * This can only be done by the logged in user.
   * @param username The name that needs to be deleted
   */
  deleteUser(username: string, extraHttpRequestParams?: any): Observable<{}>;

  /**
   * Get user by user name
   *
   * @param username The name that needs to be fetched. Use user1 for testing.
   */
  getUserByName(
    username: string,
    extraHttpRequestParams?: any
  ): Observable<User>;

  /**
   * Logs user into the system
   *
   * @param username The user name for login
   * @param password The password for login in clear text
   */
  loginUser(
    username?: string,
    password?: string,
    extraHttpRequestParams?: any
  ): Observable<string>;

  /**
   * Logs out current logged in user session
   *
   */
  logoutUser(extraHttpRequestParams?: any): Observable<{}>;

  /**
   * Update user
   * This can only be done by the logged in user.
   * @param username name that need to be deleted
   * @param user Update an existent user in the store
   */
  updateUser(
    username: string,
    user?: User,
    extraHttpRequestParams?: any
  ): Observable<{}>;
}
