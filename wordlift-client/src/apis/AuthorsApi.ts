/* tslint:disable */
/* eslint-disable */
/**
 * Embeddings API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AuthorRequest,
} from '../models/index';
import {
    AuthorRequestFromJSON,
    AuthorRequestToJSON,
} from '../models/index';

export interface CreateAuthorRequest {
    authorRequest: AuthorRequest;
}

/**
 * 
 */
export class AuthorsApi extends runtime.BaseAPI {

    /**
     * Creates the structured data for an author.
     * Create
     */
    async createAuthorRaw(requestParameters: CreateAuthorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['authorRequest'] == null) {
            throw new runtime.RequiredError(
                'authorRequest',
                'Required parameter "authorRequest" was null or undefined when calling createAuthor().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/data/authors`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthorRequestToJSON(requestParameters['authorRequest']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Creates the structured data for an author.
     * Create
     */
    async createAuthor(requestParameters: CreateAuthorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.createAuthorRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
