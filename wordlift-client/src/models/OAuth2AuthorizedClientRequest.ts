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
 * The OAuth2 Authorized Client request
 * @export
 * @interface OAuth2AuthorizedClientRequest
 */
export interface OAuth2AuthorizedClientRequest {
    /**
     * When the Access Token expires
     * @type {Date}
     * @memberof OAuth2AuthorizedClientRequest
     */
    accessTokenExpiresAt?: Date;
    /**
     * When the Access Token was issued
     * @type {Date}
     * @memberof OAuth2AuthorizedClientRequest
     */
    accessTokenIssuedAt?: Date;
    /**
     * The Access Token scopes
     * @type {string}
     * @memberof OAuth2AuthorizedClientRequest
     */
    accessTokenScopes?: string;
    /**
     * The Access Token Type
     * @type {string}
     * @memberof OAuth2AuthorizedClientRequest
     */
    accessTokenType?: string;
    /**
     * The Access Token Value
     * @type {string}
     * @memberof OAuth2AuthorizedClientRequest
     */
    accessTokenValue?: string;
    /**
     * The Client Registration Id
     * @type {string}
     * @memberof OAuth2AuthorizedClientRequest
     */
    clientRegistrationId?: string;
    /**
     * The Principal Name
     * @type {string}
     * @memberof OAuth2AuthorizedClientRequest
     */
    principalName?: string;
    /**
     * When the Access Token was issued
     * @type {Date}
     * @memberof OAuth2AuthorizedClientRequest
     */
    refreshTokenIssuedAt?: Date;
    /**
     * The Refresh Token Value
     * @type {string}
     * @memberof OAuth2AuthorizedClientRequest
     */
    refreshTokenValue?: string;
}

/**
 * Check if a given object implements the OAuth2AuthorizedClientRequest interface.
 */
export function instanceOfOAuth2AuthorizedClientRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OAuth2AuthorizedClientRequestFromJSON(json: any): OAuth2AuthorizedClientRequest {
    return OAuth2AuthorizedClientRequestFromJSONTyped(json, false);
}

export function OAuth2AuthorizedClientRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuth2AuthorizedClientRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessTokenExpiresAt': !exists(json, 'access_token_expires_at') ? undefined : (new Date(json['access_token_expires_at'])),
        'accessTokenIssuedAt': !exists(json, 'access_token_issued_at') ? undefined : (new Date(json['access_token_issued_at'])),
        'accessTokenScopes': !exists(json, 'access_token_scopes') ? undefined : json['access_token_scopes'],
        'accessTokenType': !exists(json, 'access_token_type') ? undefined : json['access_token_type'],
        'accessTokenValue': !exists(json, 'access_token_value') ? undefined : json['access_token_value'],
        'clientRegistrationId': !exists(json, 'client_registration_id') ? undefined : json['client_registration_id'],
        'principalName': !exists(json, 'principal_name') ? undefined : json['principal_name'],
        'refreshTokenIssuedAt': !exists(json, 'refresh_token_issued_at') ? undefined : (new Date(json['refresh_token_issued_at'])),
        'refreshTokenValue': !exists(json, 'refresh_token_value') ? undefined : json['refresh_token_value'],
    };
}

export function OAuth2AuthorizedClientRequestToJSON(value?: OAuth2AuthorizedClientRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'access_token_expires_at': value.accessTokenExpiresAt === undefined ? undefined : (value.accessTokenExpiresAt.toISOString()),
        'access_token_issued_at': value.accessTokenIssuedAt === undefined ? undefined : (value.accessTokenIssuedAt.toISOString()),
        'access_token_scopes': value.accessTokenScopes,
        'access_token_type': value.accessTokenType,
        'access_token_value': value.accessTokenValue,
        'client_registration_id': value.clientRegistrationId,
        'principal_name': value.principalName,
        'refresh_token_issued_at': value.refreshTokenIssuedAt === undefined ? undefined : (value.refreshTokenIssuedAt.toISOString()),
        'refresh_token_value': value.refreshTokenValue,
    };
}

