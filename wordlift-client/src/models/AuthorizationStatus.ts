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


/**
 * The connections status
 * @export
 */
export const AuthorizationStatus = {
    Connected: 'connected'
} as const;
export type AuthorizationStatus = typeof AuthorizationStatus[keyof typeof AuthorizationStatus];


export function AuthorizationStatusFromJSON(json: any): AuthorizationStatus {
    return AuthorizationStatusFromJSONTyped(json, false);
}

export function AuthorizationStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorizationStatus {
    return json as AuthorizationStatus;
}

export function AuthorizationStatusToJSON(value?: AuthorizationStatus | null): any {
    return value as any;
}

