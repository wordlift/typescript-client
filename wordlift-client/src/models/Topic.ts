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
 * Topic
 * @export
 * @interface Topic
 */
export interface Topic {
    /**
     * The topic title.
     * @type {string}
     * @memberof Topic
     */
    label?: string;
    /**
     * The topic description.
     * @type {string}
     * @memberof Topic
     */
    description?: string;
    /**
     * The topic URI.
     * @type {string}
     * @memberof Topic
     */
    uri?: string;
    /**
     * The topic confidence score.
     * @type {number}
     * @memberof Topic
     */
    confidence?: number;
    /**
     * A list of image URIs.
     * @type {Array<string>}
     * @memberof Topic
     */
    images?: Array<string>;
    /**
     * A list of sameas URIs.
     * @type {Array<string>}
     * @memberof Topic
     */
    sameAs?: Array<string>;
}

/**
 * Check if a given object implements the Topic interface.
 */
export function instanceOfTopic(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TopicFromJSON(json: any): Topic {
    return TopicFromJSONTyped(json, false);
}

export function TopicFromJSONTyped(json: any, ignoreDiscriminator: boolean): Topic {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'label': !exists(json, 'label') ? undefined : json['label'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'uri': !exists(json, 'uri') ? undefined : json['uri'],
        'confidence': !exists(json, 'confidence') ? undefined : json['confidence'],
        'images': !exists(json, 'images') ? undefined : json['images'],
        'sameAs': !exists(json, 'sameAs') ? undefined : json['sameAs'],
    };
}

export function TopicToJSON(value?: Topic | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'label': value.label,
        'description': value.description,
        'uri': value.uri,
        'confidence': value.confidence,
        'images': value.images,
        'sameAs': value.sameAs,
    };
}

