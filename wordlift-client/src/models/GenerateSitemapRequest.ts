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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GenerateSitemapRequest
 */
export interface GenerateSitemapRequest {
    /**
     * 
     * @type {string}
     * @memberof GenerateSitemapRequest
     */
    query?: string;
    /**
     * 
     * @type {string}
     * @memberof GenerateSitemapRequest
     */
    operationName?: string;
}

/**
 * Check if a given object implements the GenerateSitemapRequest interface.
 */
export function instanceOfGenerateSitemapRequest(value: object): value is GenerateSitemapRequest {
    return true;
}

export function GenerateSitemapRequestFromJSON(json: any): GenerateSitemapRequest {
    return GenerateSitemapRequestFromJSONTyped(json, false);
}

export function GenerateSitemapRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenerateSitemapRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'query': json['query'] == null ? undefined : json['query'],
        'operationName': json['operationName'] == null ? undefined : json['operationName'],
    };
}

export function GenerateSitemapRequestToJSON(json: any): GenerateSitemapRequest {
    return GenerateSitemapRequestToJSONTyped(json, false);
}

export function GenerateSitemapRequestToJSONTyped(value?: GenerateSitemapRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'query': value['query'],
        'operationName': value['operationName'],
    };
}

