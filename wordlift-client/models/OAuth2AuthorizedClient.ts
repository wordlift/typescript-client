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
 * A OAuth2 Authorized Client
 * @export
 * @interface OAuth2AuthorizedClient
 */
export interface OAuth2AuthorizedClient {
    /**
     * 
     * @type {Date}
     * @memberof OAuth2AuthorizedClient
     */
    accessTokenExpiresAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof OAuth2AuthorizedClient
     */
    accessTokenIssuedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof OAuth2AuthorizedClient
     */
    accessTokenScopes?: string;
    /**
     * 
     * @type {string}
     * @memberof OAuth2AuthorizedClient
     */
    accessTokenType?: string;
    /**
     * 
     * @type {string}
     * @memberof OAuth2AuthorizedClient
     */
    accessTokenValue?: string;
    /**
     * 
     * @type {string}
     * @memberof OAuth2AuthorizedClient
     */
    clientRegistrationId?: string;
    /**
     * 
     * @type {number}
     * @memberof OAuth2AuthorizedClient
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof OAuth2AuthorizedClient
     */
    principalName?: string;
    /**
     * 
     * @type {Date}
     * @memberof OAuth2AuthorizedClient
     */
    refreshTokenIssuedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof OAuth2AuthorizedClient
     */
    refreshTokenValue?: string;
}

/**
 * Check if a given object implements the OAuth2AuthorizedClient interface.
 */
export function instanceOfOAuth2AuthorizedClient(value: object): value is OAuth2AuthorizedClient {
    return true;
}

export function OAuth2AuthorizedClientFromJSON(json: any): OAuth2AuthorizedClient {
    return OAuth2AuthorizedClientFromJSONTyped(json, false);
}

export function OAuth2AuthorizedClientFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuth2AuthorizedClient {
    if (json == null) {
        return json;
    }
    return {
        
        'accessTokenExpiresAt': json['access_token_expires_at'] == null ? undefined : (new Date(json['access_token_expires_at'])),
        'accessTokenIssuedAt': json['access_token_issued_at'] == null ? undefined : (new Date(json['access_token_issued_at'])),
        'accessTokenScopes': json['access_token_scopes'] == null ? undefined : json['access_token_scopes'],
        'accessTokenType': json['access_token_type'] == null ? undefined : json['access_token_type'],
        'accessTokenValue': json['access_token_value'] == null ? undefined : json['access_token_value'],
        'clientRegistrationId': json['client_registration_id'] == null ? undefined : json['client_registration_id'],
        'id': json['id'] == null ? undefined : json['id'],
        'principalName': json['principal_name'] == null ? undefined : json['principal_name'],
        'refreshTokenIssuedAt': json['refresh_token_issued_at'] == null ? undefined : (new Date(json['refresh_token_issued_at'])),
        'refreshTokenValue': json['refresh_token_value'] == null ? undefined : json['refresh_token_value'],
    };
}

export function OAuth2AuthorizedClientToJSON(json: any): OAuth2AuthorizedClient {
    return OAuth2AuthorizedClientToJSONTyped(json, false);
}

export function OAuth2AuthorizedClientToJSONTyped(value?: OAuth2AuthorizedClient | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'access_token_expires_at': value['accessTokenExpiresAt'] == null ? undefined : ((value['accessTokenExpiresAt']).toISOString()),
        'access_token_issued_at': value['accessTokenIssuedAt'] == null ? undefined : ((value['accessTokenIssuedAt']).toISOString()),
        'access_token_scopes': value['accessTokenScopes'],
        'access_token_type': value['accessTokenType'],
        'access_token_value': value['accessTokenValue'],
        'client_registration_id': value['clientRegistrationId'],
        'id': value['id'],
        'principal_name': value['principalName'],
        'refresh_token_issued_at': value['refreshTokenIssuedAt'] == null ? undefined : ((value['refreshTokenIssuedAt']).toISOString()),
        'refresh_token_value': value['refreshTokenValue'],
    };
}

