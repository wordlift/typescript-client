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
import type { MerchantSync } from './MerchantSync';
import {
    MerchantSyncFromJSON,
    MerchantSyncFromJSONTyped,
    MerchantSyncToJSON,
    MerchantSyncToJSONTyped,
} from './MerchantSync';

/**
 * A page object with links to move to other pages and the list of objects.
 * @export
 * @interface PageMerchantSync
 */
export interface PageMerchantSync {
    /**
     * The link to the first page.
     * @type {string}
     * @memberof PageMerchantSync
     */
    first: string | null;
    /**
     * An array of objects.
     * @type {Array<MerchantSync>}
     * @memberof PageMerchantSync
     */
    items: Array<MerchantSync>;
    /**
     * The link to the last page.
     * @type {string}
     * @memberof PageMerchantSync
     */
    last: string | null;
    /**
     * The link to the next page or `null` if there's no page.
     * @type {string}
     * @memberof PageMerchantSync
     */
    next: string | null;
    /**
     * The link to the previous page or `null` if there's no page.
     * @type {string}
     * @memberof PageMerchantSync
     */
    prev: string | null;
    /**
     * The link to the current page.
     * @type {string}
     * @memberof PageMerchantSync
     */
    self: string | null;
}

/**
 * Check if a given object implements the PageMerchantSync interface.
 */
export function instanceOfPageMerchantSync(value: object): value is PageMerchantSync {
    if (!('first' in value) || value['first'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    if (!('last' in value) || value['last'] === undefined) return false;
    if (!('next' in value) || value['next'] === undefined) return false;
    if (!('prev' in value) || value['prev'] === undefined) return false;
    if (!('self' in value) || value['self'] === undefined) return false;
    return true;
}

export function PageMerchantSyncFromJSON(json: any): PageMerchantSync {
    return PageMerchantSyncFromJSONTyped(json, false);
}

export function PageMerchantSyncFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageMerchantSync {
    if (json == null) {
        return json;
    }
    return {
        
        'first': json['first'],
        'items': ((json['items'] as Array<any>).map(MerchantSyncFromJSON)),
        'last': json['last'],
        'next': json['next'],
        'prev': json['prev'],
        'self': json['self'],
    };
}

export function PageMerchantSyncToJSON(json: any): PageMerchantSync {
    return PageMerchantSyncToJSONTyped(json, false);
}

export function PageMerchantSyncToJSONTyped(value?: PageMerchantSync | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'first': value['first'],
        'items': ((value['items'] as Array<any>).map(MerchantSyncToJSON)),
        'last': value['last'],
        'next': value['next'],
        'prev': value['prev'],
        'self': value['self'],
    };
}

