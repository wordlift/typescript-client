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
import type { MerchantEntry } from './MerchantEntry';
import {
    MerchantEntryFromJSON,
    MerchantEntryFromJSONTyped,
    MerchantEntryToJSON,
} from './MerchantEntry';

/**
 * A page object with links to move to other pages and the list of objects.
 * @export
 * @interface PageMerchantEntry
 */
export interface PageMerchantEntry {
    /**
     * The link to the first page.
     * @type {string}
     * @memberof PageMerchantEntry
     */
    first: string | null;
    /**
     * An array of objects.
     * @type {Array<MerchantEntry>}
     * @memberof PageMerchantEntry
     */
    items: Array<MerchantEntry>;
    /**
     * The link to the last page.
     * @type {string}
     * @memberof PageMerchantEntry
     */
    last: string | null;
    /**
     * The link to the next page or `null` if there's no page.
     * @type {string}
     * @memberof PageMerchantEntry
     */
    next: string | null;
    /**
     * The link to the previous page or `null` if there's no page.
     * @type {string}
     * @memberof PageMerchantEntry
     */
    prev: string | null;
    /**
     * The link to the current page.
     * @type {string}
     * @memberof PageMerchantEntry
     */
    self: string | null;
}

/**
 * Check if a given object implements the PageMerchantEntry interface.
 */
export function instanceOfPageMerchantEntry(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "first" in value;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "last" in value;
    isInstance = isInstance && "next" in value;
    isInstance = isInstance && "prev" in value;
    isInstance = isInstance && "self" in value;

    return isInstance;
}

export function PageMerchantEntryFromJSON(json: any): PageMerchantEntry {
    return PageMerchantEntryFromJSONTyped(json, false);
}

export function PageMerchantEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageMerchantEntry {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'first': json['first'],
        'items': ((json['items'] as Array<any>).map(MerchantEntryFromJSON)),
        'last': json['last'],
        'next': json['next'],
        'prev': json['prev'],
        'self': json['self'],
    };
}

export function PageMerchantEntryToJSON(value?: PageMerchantEntry | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'first': value.first,
        'items': ((value.items as Array<any>).map(MerchantEntryToJSON)),
        'last': value.last,
        'next': value.next,
        'prev': value.prev,
        'self': value.self,
    };
}

