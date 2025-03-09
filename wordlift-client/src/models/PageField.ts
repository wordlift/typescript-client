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
import type { Field } from './Field';
import {
    FieldFromJSON,
    FieldFromJSONTyped,
    FieldToJSON,
    FieldToJSONTyped,
} from './Field';

/**
 * A page object with links to move to other pages and the list of objects.
 * @export
 * @interface PageField
 */
export interface PageField {
    /**
     * The link to the first page.
     * @type {string}
     * @memberof PageField
     */
    first: string | null;
    /**
     * An array of objects.
     * @type {Array<Field>}
     * @memberof PageField
     */
    items: Array<Field>;
    /**
     * The link to the last page.
     * @type {string}
     * @memberof PageField
     */
    last: string | null;
    /**
     * The link to the next page or `null` if there's no page.
     * @type {string}
     * @memberof PageField
     */
    next: string | null;
    /**
     * The link to the previous page or `null` if there's no page.
     * @type {string}
     * @memberof PageField
     */
    prev: string | null;
    /**
     * The link to the current page.
     * @type {string}
     * @memberof PageField
     */
    self: string | null;
}

/**
 * Check if a given object implements the PageField interface.
 */
export function instanceOfPageField(value: object): value is PageField {
    if (!('first' in value) || value['first'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    if (!('last' in value) || value['last'] === undefined) return false;
    if (!('next' in value) || value['next'] === undefined) return false;
    if (!('prev' in value) || value['prev'] === undefined) return false;
    if (!('self' in value) || value['self'] === undefined) return false;
    return true;
}

export function PageFieldFromJSON(json: any): PageField {
    return PageFieldFromJSONTyped(json, false);
}

export function PageFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageField {
    if (json == null) {
        return json;
    }
    return {
        
        'first': json['first'],
        'items': ((json['items'] as Array<any>).map(FieldFromJSON)),
        'last': json['last'],
        'next': json['next'],
        'prev': json['prev'],
        'self': json['self'],
    };
}

export function PageFieldToJSON(json: any): PageField {
    return PageFieldToJSONTyped(json, false);
}

export function PageFieldToJSONTyped(value?: PageField | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'first': value['first'],
        'items': ((value['items'] as Array<any>).map(FieldToJSON)),
        'last': value['last'],
        'next': value['next'],
        'prev': value['prev'],
        'self': value['self'],
    };
}

