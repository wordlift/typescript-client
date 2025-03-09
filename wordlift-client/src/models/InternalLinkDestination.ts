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
 * InternalLink destinations configuration.
 * @export
 * @interface InternalLinkDestination
 */
export interface InternalLinkDestination {
    /**
     * Identifier of the Entity.
     * @type {string}
     * @memberof InternalLinkDestination
     */
    name: string;
    /**
     * The position of an item in a series or sequence of items.
     * @type {number}
     * @memberof InternalLinkDestination
     */
    position: number;
    /**
     * URL of the Entity.
     * @type {string}
     * @memberof InternalLinkDestination
     */
    url: string;
}

/**
 * Check if a given object implements the InternalLinkDestination interface.
 */
export function instanceOfInternalLinkDestination(value: object): value is InternalLinkDestination {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('position' in value) || value['position'] === undefined) return false;
    if (!('url' in value) || value['url'] === undefined) return false;
    return true;
}

export function InternalLinkDestinationFromJSON(json: any): InternalLinkDestination {
    return InternalLinkDestinationFromJSONTyped(json, false);
}

export function InternalLinkDestinationFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalLinkDestination {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'position': json['position'],
        'url': json['url'],
    };
}

export function InternalLinkDestinationToJSON(json: any): InternalLinkDestination {
    return InternalLinkDestinationToJSONTyped(json, false);
}

export function InternalLinkDestinationToJSONTyped(value?: InternalLinkDestination | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'position': value['position'],
        'url': value['url'],
    };
}

