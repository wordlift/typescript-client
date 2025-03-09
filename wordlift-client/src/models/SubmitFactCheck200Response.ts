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
 * @interface SubmitFactCheck200Response
 */
export interface SubmitFactCheck200Response {
    /**
     * 
     * @type {string}
     * @memberof SubmitFactCheck200Response
     */
    response?: string;
}

/**
 * Check if a given object implements the SubmitFactCheck200Response interface.
 */
export function instanceOfSubmitFactCheck200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubmitFactCheck200ResponseFromJSON(json: any): SubmitFactCheck200Response {
    return SubmitFactCheck200ResponseFromJSONTyped(json, false);
}

export function SubmitFactCheck200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubmitFactCheck200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'response': !exists(json, 'response') ? undefined : json['response'],
    };
}

export function SubmitFactCheck200ResponseToJSON(value?: SubmitFactCheck200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'response': value.response,
    };
}

