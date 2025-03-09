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
 * The author request.
 * @export
 * @interface AuthorRequest
 */
export interface AuthorRequest {
    /**
     * The name of the author, e.g. `John Smith`.
     * @type {string}
     * @memberof AuthorRequest
     */
    name: string;
}

/**
 * Check if a given object implements the AuthorRequest interface.
 */
export function instanceOfAuthorRequest(value: object): value is AuthorRequest {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function AuthorRequestFromJSON(json: any): AuthorRequest {
    return AuthorRequestFromJSONTyped(json, false);
}

export function AuthorRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function AuthorRequestToJSON(json: any): AuthorRequest {
    return AuthorRequestToJSONTyped(json, false);
}

export function AuthorRequestToJSONTyped(value?: AuthorRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
    };
}

