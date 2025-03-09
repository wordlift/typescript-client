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
 * The request of the `buildAuthorizeUri` endpoint.
 * @export
 * @interface BuildAuthorizeUriRequest
 */
export interface BuildAuthorizeUriRequest {
    /**
     * The Redirect URI to where redirect the Client after successful authentication.
     * @type {string}
     * @memberof BuildAuthorizeUriRequest
     */
    redirectUri: string;
}

/**
 * Check if a given object implements the BuildAuthorizeUriRequest interface.
 */
export function instanceOfBuildAuthorizeUriRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "redirectUri" in value;

    return isInstance;
}

export function BuildAuthorizeUriRequestFromJSON(json: any): BuildAuthorizeUriRequest {
    return BuildAuthorizeUriRequestFromJSONTyped(json, false);
}

export function BuildAuthorizeUriRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildAuthorizeUriRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'redirectUri': json['redirect_uri'],
    };
}

export function BuildAuthorizeUriRequestToJSON(value?: BuildAuthorizeUriRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'redirect_uri': value.redirectUri,
    };
}

