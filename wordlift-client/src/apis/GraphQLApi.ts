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
  GraphqlRequest,
} from '../models/index';
import {
    GraphqlRequestFromJSON,
    GraphqlRequestToJSON,
} from '../models/index';

export interface GraphqlUsingPostRequest {
    body: GraphqlRequest;
}

/**
 * 
 */
export class GraphQLApi extends runtime.BaseAPI {

    /**
     * Query
     */
    async graphqlUsingPostRaw(requestParameters: GraphqlUsingPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: object; }>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling graphqlUsingPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/graphql`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GraphqlRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Query
     */
    async graphqlUsingPost(requestParameters: GraphqlUsingPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: object; } | null | undefined > {
        const response = await this.graphqlUsingPostRaw(requestParameters, initOverrides);
        switch (response.raw.status) {
            case 200:
                return await response.value();
            case 201:
                return null;
            default:
                return await response.value();
        }
    }

}
