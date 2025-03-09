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
  PageRecord,
  Record,
  Request3,
  UpdateRecordRequest,
  UpdateRecordsRequest,
} from '../models/index';
import {
    PageRecordFromJSON,
    PageRecordToJSON,
    RecordFromJSON,
    RecordToJSON,
    Request3FromJSON,
    Request3ToJSON,
    UpdateRecordRequestFromJSON,
    UpdateRecordRequestToJSON,
    UpdateRecordsRequestFromJSON,
    UpdateRecordsRequestToJSON,
} from '../models/index';

export interface GetRecordRequest {
    contentGenerationId: number;
    recordId: number;
}

export interface ListRecordsRequest {
    contentGenerationId: number;
    cursor?: string;
    limit?: number;
    q?: string;
}

export interface ListRecordsAsEventsRequest {
    contentGenerationId: number;
}

export interface UpdateContentGenerationRecordRequest {
    contentGenerationId: number;
    recordId: number;
    request3: Request3;
}

export interface UpdateRecordsOperationRequest {
    contentGenerationId: number;
    isAccepted: boolean;
    updateRecordsRequest: UpdateRecordsRequest;
}

export interface UpdateRecordsCollectionRequest {
    contentGenerationId: number;
    updateRecordRequest: Array<UpdateRecordRequest>;
}

/**
 * 
 */
export class ContentGenerationRecordsApi extends runtime.BaseAPI {

    /**
     * Get
     */
    async getRecordRaw(requestParameters: GetRecordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Record>> {
        if (requestParameters['contentGenerationId'] == null) {
            throw new runtime.RequiredError(
                'contentGenerationId',
                'Required parameter "contentGenerationId" was null or undefined when calling getRecord().'
            );
        }

        if (requestParameters['recordId'] == null) {
            throw new runtime.RequiredError(
                'recordId',
                'Required parameter "recordId" was null or undefined when calling getRecord().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/content-generations/{contentGenerationId}/records/{recordId}`.replace(`{${"contentGenerationId"}}`, encodeURIComponent(String(requestParameters['contentGenerationId']))).replace(`{${"recordId"}}`, encodeURIComponent(String(requestParameters['recordId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RecordFromJSON(jsonValue));
    }

    /**
     * Get
     */
    async getRecord(requestParameters: GetRecordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Record> {
        const response = await this.getRecordRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List
     */
    async listRecordsRaw(requestParameters: ListRecordsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageRecord>> {
        if (requestParameters['contentGenerationId'] == null) {
            throw new runtime.RequiredError(
                'contentGenerationId',
                'Required parameter "contentGenerationId" was null or undefined when calling listRecords().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['cursor'] != null) {
            queryParameters['cursor'] = requestParameters['cursor'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['q'] != null) {
            queryParameters['q'] = requestParameters['q'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/content-generations/{contentGenerationId}/records`.replace(`{${"contentGenerationId"}}`, encodeURIComponent(String(requestParameters['contentGenerationId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageRecordFromJSON(jsonValue));
    }

    /**
     * List
     */
    async listRecords(requestParameters: ListRecordsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageRecord> {
        const response = await this.listRecordsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List as Events
     */
    async listRecordsAsEventsRaw(requestParameters: ListRecordsAsEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['contentGenerationId'] == null) {
            throw new runtime.RequiredError(
                'contentGenerationId',
                'Required parameter "contentGenerationId" was null or undefined when calling listRecordsAsEvents().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/content-generations/{contentGenerationId}/records-sse`.replace(`{${"contentGenerationId"}}`, encodeURIComponent(String(requestParameters['contentGenerationId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * List as Events
     */
    async listRecordsAsEvents(requestParameters: ListRecordsAsEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.listRecordsAsEventsRaw(requestParameters, initOverrides);
    }

    /**
     * Update
     */
    async updateContentGenerationRecordRaw(requestParameters: UpdateContentGenerationRecordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Record>> {
        if (requestParameters['contentGenerationId'] == null) {
            throw new runtime.RequiredError(
                'contentGenerationId',
                'Required parameter "contentGenerationId" was null or undefined when calling updateContentGenerationRecord().'
            );
        }

        if (requestParameters['recordId'] == null) {
            throw new runtime.RequiredError(
                'recordId',
                'Required parameter "recordId" was null or undefined when calling updateContentGenerationRecord().'
            );
        }

        if (requestParameters['request3'] == null) {
            throw new runtime.RequiredError(
                'request3',
                'Required parameter "request3" was null or undefined when calling updateContentGenerationRecord().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/content-generations/{contentGenerationId}/records/{recordId}`.replace(`{${"contentGenerationId"}}`, encodeURIComponent(String(requestParameters['contentGenerationId']))).replace(`{${"recordId"}}`, encodeURIComponent(String(requestParameters['recordId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: Request3ToJSON(requestParameters['request3']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RecordFromJSON(jsonValue));
    }

    /**
     * Update
     */
    async updateContentGenerationRecord(requestParameters: UpdateContentGenerationRecordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Record> {
        const response = await this.updateContentGenerationRecordRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update
     */
    async updateRecordsRaw(requestParameters: UpdateRecordsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['contentGenerationId'] == null) {
            throw new runtime.RequiredError(
                'contentGenerationId',
                'Required parameter "contentGenerationId" was null or undefined when calling updateRecords().'
            );
        }

        if (requestParameters['isAccepted'] == null) {
            throw new runtime.RequiredError(
                'isAccepted',
                'Required parameter "isAccepted" was null or undefined when calling updateRecords().'
            );
        }

        if (requestParameters['updateRecordsRequest'] == null) {
            throw new runtime.RequiredError(
                'updateRecordsRequest',
                'Required parameter "updateRecordsRequest" was null or undefined when calling updateRecords().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['isAccepted'] != null) {
            queryParameters['is_accepted'] = requestParameters['isAccepted'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/content-generations/{contentGenerationId}/records`.replace(`{${"contentGenerationId"}}`, encodeURIComponent(String(requestParameters['contentGenerationId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateRecordsRequestToJSON(requestParameters['updateRecordsRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update
     */
    async updateRecords(requestParameters: UpdateRecordsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateRecordsRaw(requestParameters, initOverrides);
    }

    /**
     * Update
     */
    async updateRecordsCollectionRaw(requestParameters: UpdateRecordsCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Record>>> {
        if (requestParameters['contentGenerationId'] == null) {
            throw new runtime.RequiredError(
                'contentGenerationId',
                'Required parameter "contentGenerationId" was null or undefined when calling updateRecordsCollection().'
            );
        }

        if (requestParameters['updateRecordRequest'] == null) {
            throw new runtime.RequiredError(
                'updateRecordRequest',
                'Required parameter "updateRecordRequest" was null or undefined when calling updateRecordsCollection().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/content-generations/{contentGenerationId}/records-collection`.replace(`{${"contentGenerationId"}}`, encodeURIComponent(String(requestParameters['contentGenerationId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['updateRecordRequest']!.map(UpdateRecordRequestToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RecordFromJSON));
    }

    /**
     * Update
     */
    async updateRecordsCollection(requestParameters: UpdateRecordsCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Record>> {
        const response = await this.updateRecordsCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
