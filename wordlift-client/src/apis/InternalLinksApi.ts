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
  InternalLink,
  InternalLinkRequest,
} from '../models';
import {
    InternalLinkFromJSON,
    InternalLinkToJSON,
    InternalLinkRequestFromJSON,
    InternalLinkRequestToJSON,
} from '../models';

export interface CreateInternalLinkRequest {
    internalLinkRequest: InternalLinkRequest;
}

export interface CreateInternalLinkSuggestionRequest {
    internalLinkRequest: InternalLinkRequest;
}

/**
 * 
 */
export class InternalLinksApi extends runtime.BaseAPI {

    /**
     * Create Internal Links.
     * Create
     */
    async createInternalLinkRaw(requestParameters: CreateInternalLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.internalLinkRequest === null || requestParameters.internalLinkRequest === undefined) {
            throw new runtime.RequiredError('internalLinkRequest','Required parameter requestParameters.internalLinkRequest was null or undefined when calling createInternalLink.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/internal-links`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InternalLinkRequestToJSON(requestParameters.internalLinkRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Create Internal Links.
     * Create
     */
    async createInternalLink(requestParameters: CreateInternalLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.createInternalLinkRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create an Internal Links suggestion.
     * Suggest
     */
    async createInternalLinkSuggestionRaw(requestParameters: CreateInternalLinkSuggestionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<InternalLink>>> {
        if (requestParameters.internalLinkRequest === null || requestParameters.internalLinkRequest === undefined) {
            throw new runtime.RequiredError('internalLinkRequest','Required parameter requestParameters.internalLinkRequest was null or undefined when calling createInternalLinkSuggestion.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/internal-links/suggestions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InternalLinkRequestToJSON(requestParameters.internalLinkRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(InternalLinkFromJSON));
    }

    /**
     * Create an Internal Links suggestion.
     * Suggest
     */
    async createInternalLinkSuggestion(requestParameters: CreateInternalLinkSuggestionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<InternalLink>> {
        const response = await this.createInternalLinkSuggestionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
