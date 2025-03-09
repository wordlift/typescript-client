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
  PageWebsite,
  PageWebsiteSearch,
} from '../models';
import {
    PageWebsiteFromJSON,
    PageWebsiteToJSON,
    PageWebsiteSearchFromJSON,
    PageWebsiteSearchToJSON,
} from '../models';

export interface ListWebsiteSearchRequest {
    website: string;
    since: string;
    until: string;
    dimensions: Array<string>;
    googleAccessToken: string;
    cursor?: string;
    limit?: number;
}

export interface ListWebsitesRequest {
    googleAccessToken: string;
    limit?: number;
}

/**
 * 
 */
export class GoogleSearchConsoleApi extends runtime.BaseAPI {

    /**
     * List the Website Search performance data
     * List Website Search data
     */
    async listWebsiteSearchRaw(requestParameters: ListWebsiteSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageWebsiteSearch>> {
        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website','Required parameter requestParameters.website was null or undefined when calling listWebsiteSearch.');
        }

        if (requestParameters.since === null || requestParameters.since === undefined) {
            throw new runtime.RequiredError('since','Required parameter requestParameters.since was null or undefined when calling listWebsiteSearch.');
        }

        if (requestParameters.until === null || requestParameters.until === undefined) {
            throw new runtime.RequiredError('until','Required parameter requestParameters.until was null or undefined when calling listWebsiteSearch.');
        }

        if (requestParameters.dimensions === null || requestParameters.dimensions === undefined) {
            throw new runtime.RequiredError('dimensions','Required parameter requestParameters.dimensions was null or undefined when calling listWebsiteSearch.');
        }

        if (requestParameters.googleAccessToken === null || requestParameters.googleAccessToken === undefined) {
            throw new runtime.RequiredError('googleAccessToken','Required parameter requestParameters.googleAccessToken was null or undefined when calling listWebsiteSearch.');
        }

        const queryParameters: any = {};

        if (requestParameters.website !== undefined) {
            queryParameters['website'] = requestParameters.website;
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.since !== undefined) {
            queryParameters['since'] = requestParameters.since;
        }

        if (requestParameters.until !== undefined) {
            queryParameters['until'] = requestParameters.until;
        }

        if (requestParameters.dimensions) {
            queryParameters['dimensions'] = requestParameters.dimensions;
        }

        if (requestParameters.googleAccessToken !== undefined) {
            queryParameters['google_access_token'] = requestParameters.googleAccessToken;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/ext/google/searchconsole/searches`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageWebsiteSearchFromJSON(jsonValue));
    }

    /**
     * List the Website Search performance data
     * List Website Search data
     */
    async listWebsiteSearch(requestParameters: ListWebsiteSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageWebsiteSearch> {
        const response = await this.listWebsiteSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List the Websites
     * List
     */
    async listWebsitesRaw(requestParameters: ListWebsitesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageWebsite>> {
        if (requestParameters.googleAccessToken === null || requestParameters.googleAccessToken === undefined) {
            throw new runtime.RequiredError('googleAccessToken','Required parameter requestParameters.googleAccessToken was null or undefined when calling listWebsites.');
        }

        const queryParameters: any = {};

        if (requestParameters.googleAccessToken !== undefined) {
            queryParameters['google_access_token'] = requestParameters.googleAccessToken;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/ext/google/searchconsole/websites`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageWebsiteFromJSON(jsonValue));
    }

    /**
     * List the Websites
     * List
     */
    async listWebsites(requestParameters: ListWebsitesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageWebsite> {
        const response = await this.listWebsitesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
