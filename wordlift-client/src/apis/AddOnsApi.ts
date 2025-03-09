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
  PageAddOnConfiguration,
} from '../models';
import {
    PageAddOnConfigurationFromJSON,
    PageAddOnConfigurationToJSON,
} from '../models';

export interface ListConfigurationsRequest {
    token?: string;
    key?: string;
    limit?: number;
}

/**
 * 
 */
export class AddOnsApi extends runtime.BaseAPI {

    /**
     * List the Add-ons configurations
     * List
     */
    async listConfigurationsRaw(requestParameters: ListConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageAddOnConfiguration>> {
        const queryParameters: any = {};

        if (requestParameters.token !== undefined) {
            queryParameters['token'] = requestParameters.token;
        }

        if (requestParameters.key !== undefined) {
            queryParameters['key'] = requestParameters.key;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/addon/configurations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageAddOnConfigurationFromJSON(jsonValue));
    }

    /**
     * List the Add-ons configurations
     * List
     */
    async listConfigurations(requestParameters: ListConfigurationsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageAddOnConfiguration> {
        const response = await this.listConfigurationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
