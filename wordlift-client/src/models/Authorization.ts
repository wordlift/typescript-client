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
import type { AuthorizationStatus } from './AuthorizationStatus';
import {
    AuthorizationStatusFromJSON,
    AuthorizationStatusFromJSONTyped,
    AuthorizationStatusToJSON,
} from './AuthorizationStatus';

/**
 * 
 * @export
 * @interface Authorization
 */
export interface Authorization {
    /**
     * When the access token was issued
     * @type {Date}
     * @memberof Authorization
     */
    readonly accessTokenIssuedAt: Date;
    /**
     * Account key
     * @type {string}
     * @memberof Authorization
     */
    readonly account: string;
    /**
     * When the refresh token was issued
     * @type {Date}
     * @memberof Authorization
     */
    readonly refreshTokenIssuedAt?: Date;
    /**
     * 
     * @type {AuthorizationStatus}
     * @memberof Authorization
     */
    status: AuthorizationStatus;
}

/**
 * Check if a given object implements the Authorization interface.
 */
export function instanceOfAuthorization(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accessTokenIssuedAt" in value;
    isInstance = isInstance && "account" in value;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function AuthorizationFromJSON(json: any): Authorization {
    return AuthorizationFromJSONTyped(json, false);
}

export function AuthorizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Authorization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessTokenIssuedAt': (new Date(json['access_token_issued_at'])),
        'account': json['account'],
        'refreshTokenIssuedAt': !exists(json, 'refresh_token_issued_at') ? undefined : (new Date(json['refresh_token_issued_at'])),
        'status': AuthorizationStatusFromJSON(json['status']),
    };
}

export function AuthorizationToJSON(value?: Authorization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': AuthorizationStatusToJSON(value.status),
    };
}

