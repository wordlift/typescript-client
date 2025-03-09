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
 * Entity Match
 * @export
 * @interface EntityMatch
 */
export interface EntityMatch {
    /**
     * Confidence score for the current entity.
     * @type {number}
     * @memberof EntityMatch
     */
    confidence?: number;
    /**
     * The entity URI.
     * @type {string}
     * @memberof EntityMatch
     */
    entityId?: string;
}

/**
 * Check if a given object implements the EntityMatch interface.
 */
export function instanceOfEntityMatch(value: object): value is EntityMatch {
    return true;
}

export function EntityMatchFromJSON(json: any): EntityMatch {
    return EntityMatchFromJSONTyped(json, false);
}

export function EntityMatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityMatch {
    if (json == null) {
        return json;
    }
    return {
        
        'confidence': json['confidence'] == null ? undefined : json['confidence'],
        'entityId': json['entityId'] == null ? undefined : json['entityId'],
    };
}

export function EntityMatchToJSON(json: any): EntityMatch {
    return EntityMatchToJSONTyped(json, false);
}

export function EntityMatchToJSONTyped(value?: EntityMatch | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'confidence': value['confidence'],
        'entityId': value['entityId'],
    };
}

