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
  BotifyCrawlImportRequest,
  WebPage,
} from '../models';
import {
    BotifyCrawlImportRequestFromJSON,
    BotifyCrawlImportRequestToJSON,
    WebPageFromJSON,
    WebPageToJSON,
} from '../models';

export interface CreateBotifyCrawlImportRequest {
    botifyCrawlImportRequest: BotifyCrawlImportRequest;
}

/**
 * 
 */
export class BotifyCrawlImportsApi extends runtime.BaseAPI {

    /**
     * Create a Botify Crawl Import
     * Create
     */
    async createBotifyCrawlImportRaw(requestParameters: CreateBotifyCrawlImportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<WebPage>>> {
        if (requestParameters.botifyCrawlImportRequest === null || requestParameters.botifyCrawlImportRequest === undefined) {
            throw new runtime.RequiredError('botifyCrawlImportRequest','Required parameter requestParameters.botifyCrawlImportRequest was null or undefined when calling createBotifyCrawlImport.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/botify-crawl-imports`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BotifyCrawlImportRequestToJSON(requestParameters.botifyCrawlImportRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(WebPageFromJSON));
    }

    /**
     * Create a Botify Crawl Import
     * Create
     */
    async createBotifyCrawlImport(requestParameters: CreateBotifyCrawlImportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<WebPage>> {
        const response = await this.createBotifyCrawlImportRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
