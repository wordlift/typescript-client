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
 * @interface LocationInner
 */
export interface LocationInner {
}

/**
 * Check if a given object implements the LocationInner interface.
 */
export function instanceOfLocationInner(value: object): value is LocationInner {
    return true;
}

export function LocationInnerFromJSON(json: any): LocationInner {
    return LocationInnerFromJSONTyped(json, false);
}

export function LocationInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationInner {
    return json;
}

export function LocationInnerToJSON(json: any): LocationInner {
    return LocationInnerToJSONTyped(json, false);
}

export function LocationInnerToJSONTyped(value?: LocationInner | null, ignoreDiscriminator: boolean = false): any {
    return value;
}

