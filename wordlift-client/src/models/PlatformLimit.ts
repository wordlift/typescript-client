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
 * 
 * @export
 * @interface PlatformLimit
 */
export interface PlatformLimit {
    /**
     * 
     * @type {string}
     * @memberof PlatformLimit
     */
    appliesTo: string;
    /**
     * 
     * @type {string}
     * @memberof PlatformLimit
     */
    basedOn: PlatformLimitBasedOnEnum;
    /**
     * 
     * @type {string}
     * @memberof PlatformLimit
     */
    basedOnValue: string;
    /**
     * The create date-time.
     * @type {Date}
     * @memberof PlatformLimit
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof PlatformLimit
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof PlatformLimit
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof PlatformLimit
     */
    limits: number;
    /**
     * The last modified date-time.
     * @type {Date}
     * @memberof PlatformLimit
     */
    readonly modifiedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof PlatformLimit
     */
    scope: PlatformLimitScopeEnum;
}


/**
 * @export
 */
export const PlatformLimitBasedOnEnum = {
    Sku: 'SKU'
} as const;
export type PlatformLimitBasedOnEnum = typeof PlatformLimitBasedOnEnum[keyof typeof PlatformLimitBasedOnEnum];

/**
 * @export
 */
export const PlatformLimitScopeEnum = {
    Account: 'ACCOUNT',
    Subscription: 'SUBSCRIPTION'
} as const;
export type PlatformLimitScopeEnum = typeof PlatformLimitScopeEnum[keyof typeof PlatformLimitScopeEnum];


/**
 * Check if a given object implements the PlatformLimit interface.
 */
export function instanceOfPlatformLimit(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "appliesTo" in value;
    isInstance = isInstance && "basedOn" in value;
    isInstance = isInstance && "basedOnValue" in value;
    isInstance = isInstance && "limits" in value;
    isInstance = isInstance && "scope" in value;

    return isInstance;
}

export function PlatformLimitFromJSON(json: any): PlatformLimit {
    return PlatformLimitFromJSONTyped(json, false);
}

export function PlatformLimitFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlatformLimit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appliesTo': json['applies_to'],
        'basedOn': json['based_on'],
        'basedOnValue': json['based_on_value'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'limits': json['limits'],
        'modifiedAt': !exists(json, 'modified_at') ? undefined : (new Date(json['modified_at'])),
        'scope': json['scope'],
    };
}

export function PlatformLimitToJSON(value?: PlatformLimit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'applies_to': value.appliesTo,
        'based_on': value.basedOn,
        'based_on_value': value.basedOnValue,
        'description': value.description,
        'id': value.id,
        'limits': value.limits,
        'scope': value.scope,
    };
}

