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
export function instanceOfContentExpansionResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ContentExpansionResponseFromJSON(json: any): ContentExpansionResponse {
    return ContentExpansionResponseFromJSONTyped(json, false);
}

export function ContentExpansionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentExpansionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'completion': !exists(json, 'completion') ? undefined : json['completion'],
    };
}

export function ContentExpansionResponseToJSON(value?: ContentExpansionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'completion': value.completion,
    };
}

