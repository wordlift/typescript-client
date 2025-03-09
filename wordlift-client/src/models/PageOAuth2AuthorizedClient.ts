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
import type { OAuth2AuthorizedClient } from './OAuth2AuthorizedClient';
import {
    OAuth2AuthorizedClientFromJSON,
    OAuth2AuthorizedClientFromJSONTyped,
    OAuth2AuthorizedClientToJSON,
    OAuth2AuthorizedClientToJSONTyped,
} from './OAuth2AuthorizedClient';

/**
 * A page object with links to move to other pages and the list of objects.
 * @export
 * @interface PageOAuth2AuthorizedClient
 */
export interface PageOAuth2AuthorizedClient {
    /**
     * The link to the first page.
     * @type {string}
     * @memberof PageOAuth2AuthorizedClient
     */
    first: string | null;
    /**
     * An array of objects.
     * @type {Array<OAuth2AuthorizedClient>}
     * @memberof PageOAuth2AuthorizedClient
     */
    items: Array<OAuth2AuthorizedClient>;
    /**
     * The link to the last page.
     * @type {string}
     * @memberof PageOAuth2AuthorizedClient
     */
    last: string | null;
    /**
     * The link to the next page or `null` if there's no page.
     * @type {string}
     * @memberof PageOAuth2AuthorizedClient
     */
    next: string | null;
    /**
     * The link to the previous page or `null` if there's no page.
     * @type {string}
     * @memberof PageOAuth2AuthorizedClient
     */
    prev: string | null;
    /**
     * The link to the current page.
     * @type {string}
     * @memberof PageOAuth2AuthorizedClient
     */
    self: string | null;
}

/**
 * Check if a given object implements the PageOAuth2AuthorizedClient interface.
 */
export function instanceOfPageOAuth2AuthorizedClient(value: object): value is PageOAuth2AuthorizedClient {
    if (!('first' in value) || value['first'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    if (!('last' in value) || value['last'] === undefined) return false;
    if (!('next' in value) || value['next'] === undefined) return false;
    if (!('prev' in value) || value['prev'] === undefined) return false;
    if (!('self' in value) || value['self'] === undefined) return false;
    return true;
}

export function PageOAuth2AuthorizedClientFromJSON(json: any): PageOAuth2AuthorizedClient {
    return PageOAuth2AuthorizedClientFromJSONTyped(json, false);
}

export function PageOAuth2AuthorizedClientFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageOAuth2AuthorizedClient {
    if (json == null) {
        return json;
    }
    return {
        
        'first': json['first'],
        'items': ((json['items'] as Array<any>).map(OAuth2AuthorizedClientFromJSON)),
        'last': json['last'],
        'next': json['next'],
        'prev': json['prev'],
        'self': json['self'],
    };
}

export function PageOAuth2AuthorizedClientToJSON(json: any): PageOAuth2AuthorizedClient {
    return PageOAuth2AuthorizedClientToJSONTyped(json, false);
}

export function PageOAuth2AuthorizedClientToJSONTyped(value?: PageOAuth2AuthorizedClient | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'first': value['first'],
        'items': ((value['items'] as Array<any>).map(OAuth2AuthorizedClientToJSON)),
        'last': value['last'],
        'next': value['next'],
        'prev': value['prev'],
        'self': value['self'],
    };
}

