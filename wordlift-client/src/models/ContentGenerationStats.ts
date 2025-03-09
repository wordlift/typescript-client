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
 * Statistics about a Content Generation Project.
 * @export
 * @interface ContentGenerationStats
 */
export interface ContentGenerationStats {
    /**
     * The number of accepted records.
     * @type {number}
     * @memberof ContentGenerationStats
     */
    accepted?: number;
    /**
     * The number of records with errors.
     * @type {number}
     * @memberof ContentGenerationStats
     */
    errors?: number;
    /**
     * The total number of records.
     * @type {number}
     * @memberof ContentGenerationStats
     */
    total?: number;
    /**
     * The number of valid records.
     * @type {number}
     * @memberof ContentGenerationStats
     */
    valid?: number;
    /**
     * The number of records with warnings.
     * @type {number}
     * @memberof ContentGenerationStats
     */
    warnings?: number;
}

/**
 * Check if a given object implements the ContentGenerationStats interface.
 */
export function instanceOfContentGenerationStats(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ContentGenerationStatsFromJSON(json: any): ContentGenerationStats {
    return ContentGenerationStatsFromJSONTyped(json, false);
}

export function ContentGenerationStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentGenerationStats {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accepted': !exists(json, 'accepted') ? undefined : json['accepted'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'total': !exists(json, 'total') ? undefined : json['total'],
        'valid': !exists(json, 'valid') ? undefined : json['valid'],
        'warnings': !exists(json, 'warnings') ? undefined : json['warnings'],
    };
}

export function ContentGenerationStatsToJSON(value?: ContentGenerationStats | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accepted': value.accepted,
        'errors': value.errors,
        'total': value.total,
        'valid': value.valid,
        'warnings': value.warnings,
    };
}

