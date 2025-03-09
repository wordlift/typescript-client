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
 * An array of objects.
 * @export
 * @interface Preset
 */
export interface Preset {
    /**
     * The predefined graphql query.
     * @type {string}
     * @memberof Preset
     */
    body: string;
    /**
     * 
     * @type {number}
     * @memberof Preset
     */
    id?: number;
    /**
     * The label of the preset.
     * @type {string}
     * @memberof Preset
     */
    label: string;
}

/**
 * Check if a given object implements the Preset interface.
 */
export function instanceOfPreset(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "body" in value;
    isInstance = isInstance && "label" in value;

    return isInstance;
}

export function PresetFromJSON(json: any): Preset {
    return PresetFromJSONTyped(json, false);
}

export function PresetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Preset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'body': json['body'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'label': json['label'],
    };
}

export function PresetToJSON(value?: Preset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'body': value.body,
        'id': value.id,
        'label': value.label,
    };
}

