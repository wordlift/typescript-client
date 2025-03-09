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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SubmitFactCheckRequest
 */
export interface SubmitFactCheckRequest {
    /**
     * 
     * @type {string}
     * @memberof SubmitFactCheckRequest
     */
    query?: string;
}

/**
 * Check if a given object implements the SubmitFactCheckRequest interface.
 */
export function instanceOfSubmitFactCheckRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubmitFactCheckRequestFromJSON(json: any): SubmitFactCheckRequest {
    return SubmitFactCheckRequestFromJSONTyped(json, false);
}

export function SubmitFactCheckRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubmitFactCheckRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'query': !exists(json, 'query') ? undefined : json['query'],
    };
}

export function SubmitFactCheckRequestToJSON(value?: SubmitFactCheckRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'query': value.query,
    };
}

