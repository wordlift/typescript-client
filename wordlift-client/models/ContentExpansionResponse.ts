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
 * A Content Expansion response.
 * @export
 * @interface ContentExpansionResponse
 */
export interface ContentExpansionResponse {
    /**
     * The completion.
     * @type {string}
     * @memberof ContentExpansionResponse
     */
    completion?: string;
}

/**
 * Check if a given object implements the ContentExpansionResponse interface.
 */
export function instanceOfContentExpansionResponse(value: object): value is ContentExpansionResponse {
    return true;
}

export function ContentExpansionResponseFromJSON(json: any): ContentExpansionResponse {
    return ContentExpansionResponseFromJSONTyped(json, false);
}

export function ContentExpansionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentExpansionResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'completion': json['completion'] == null ? undefined : json['completion'],
    };
}

export function ContentExpansionResponseToJSON(json: any): ContentExpansionResponse {
    return ContentExpansionResponseToJSONTyped(json, false);
}

export function ContentExpansionResponseToJSONTyped(value?: ContentExpansionResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'completion': value['completion'],
    };
}

