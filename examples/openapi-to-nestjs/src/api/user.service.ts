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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Configuration } from '../configuration';
import { UserServiceInterface } from './user.serviceInterface';

@Injectable()
export class UserService implements UserServiceInterface {
  protected basePath = 'https://petstore3.swagger.io/api/v3';
  public defaultHeaders: Record<string, string> = {};
  public configuration = new Configuration();

  constructor(
    protected httpClient: HttpService,
    @Optional() configuration: Configuration
  ) {
    this.configuration = configuration || this.configuration;
    this.basePath = configuration?.basePath || this.basePath;
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data';
    return consumes.includes(form);
  }

  /**
   * Create user
   * This can only be done by the logged in user.
   * @param user Created user object
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public createUser(user?: User): Observable<AxiosResponse<User>>;
  public createUser(user?: User): Observable<any> {
    let headers = { ...this.defaultHeaders };

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json', 'application/xml'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [
      'application/json',
      'application/xml',
      'application/x-www-form-urlencoded',
    ];
    const httpContentTypeSelected: string | undefined =
      this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers['Content-Type'] = httpContentTypeSelected;
    }
    return this.httpClient.post<User>(`${this.basePath}/user`, user, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
    });
  }
  /**
   * Creates list of users with given input array
   * Creates list of users with given input array
   * @param user
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public createUsersWithListInput(
    user?: Array<User>
  ): Observable<AxiosResponse<User>>;
  public createUsersWithListInput(user?: Array<User>): Observable<any> {
    let headers = { ...this.defaultHeaders };

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json', 'application/xml'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined =
      this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers['Content-Type'] = httpContentTypeSelected;
    }
    return this.httpClient.post<User>(
      `${this.basePath}/user/createWithList`,
      user,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      }
    );
  }
  /**
   * Delete user
   * This can only be done by the logged in user.
   * @param username The name that needs to be deleted
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public deleteUser(username: string): Observable<AxiosResponse<any>>;
  public deleteUser(username: string): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling deleteUser.'
      );
    }

    let headers = { ...this.defaultHeaders };

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.delete<any>(
      `${this.basePath}/user/${encodeURIComponent(String(username))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      }
    );
  }
  /**
   * Get user by user name
   *
   * @param username The name that needs to be fetched. Use user1 for testing.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getUserByName(username: string): Observable<AxiosResponse<User>>;
  public getUserByName(username: string): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling getUserByName.'
      );
    }

    let headers = { ...this.defaultHeaders };

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json', 'application/xml'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<User>(
      `${this.basePath}/user/${encodeURIComponent(String(username))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      }
    );
  }
  /**
   * Logs user into the system
   *
   * @param username The user name for login
   * @param password The password for login in clear text
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public loginUser(
    username?: string,
    password?: string
  ): Observable<AxiosResponse<string>>;
  public loginUser(username?: string, password?: string): Observable<any> {
    let queryParameters = new URLSearchParams();
    if (username !== undefined && username !== null) {
      queryParameters.append('username', <any>username);
    }
    if (password !== undefined && password !== null) {
      queryParameters.append('password', <any>password);
    }

    let headers = { ...this.defaultHeaders };

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/xml', 'application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<string>(`${this.basePath}/user/login`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
    });
  }
  /**
   * Logs out current logged in user session
   *
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public logoutUser(): Observable<AxiosResponse<any>>;
  public logoutUser(): Observable<any> {
    let headers = { ...this.defaultHeaders };

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<any>(`${this.basePath}/user/logout`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
    });
  }
  /**
   * Update user
   * This can only be done by the logged in user.
   * @param username name that need to be deleted
   * @param user Update an existent user in the store
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public updateUser(
    username: string,
    user?: User
  ): Observable<AxiosResponse<any>>;
  public updateUser(username: string, user?: User): Observable<any> {
    if (username === null || username === undefined) {
      throw new Error(
        'Required parameter username was null or undefined when calling updateUser.'
      );
    }

    let headers = { ...this.defaultHeaders };

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [
      'application/json',
      'application/xml',
      'application/x-www-form-urlencoded',
    ];
    const httpContentTypeSelected: string | undefined =
      this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers['Content-Type'] = httpContentTypeSelected;
    }
    return this.httpClient.put<any>(
      `${this.basePath}/user/${encodeURIComponent(String(username))}`,
      user,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      }
    );
  }
}