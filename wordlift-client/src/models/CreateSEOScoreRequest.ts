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
 * 
 * @export
 * @interface CreateSEOScoreRequest
 */
export interface CreateSEOScoreRequest {
    /**
     * URL of the content to be analyzed. Mutually exclusive with text.
     * @type {string}
     * @memberof CreateSEOScoreRequest
     */
    url?: string;
    /**
     * A paragraph of text content to be analyzed. Mutually exclusive with URL.
     * @type {string}
     * @memberof CreateSEOScoreRequest
     */
    text?: string;
    /**
     * Keyword or query related to the content.
     * @type {string}
     * @memberof CreateSEOScoreRequest
     */
    keyword?: string;
    /**
     * Narrative description of the intent behind the query.
     * @type {string}
     * @memberof CreateSEOScoreRequest
     */
    descriptionNarrative?: string;
}

/**
 * Check if a given object implements the CreateSEOScoreRequest interface.
 */
export function instanceOfCreateSEOScoreRequest(value: object): value is CreateSEOScoreRequest {
    return true;
}

export function CreateSEOScoreRequestFromJSON(json: any): CreateSEOScoreRequest {
    return CreateSEOScoreRequestFromJSONTyped(json, false);
}

export function CreateSEOScoreRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSEOScoreRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'url': json['url'] == null ? undefined : json['url'],
        'text': json['text'] == null ? undefined : json['text'],
        'keyword': json['keyword'] == null ? undefined : json['keyword'],
        'descriptionNarrative': json['description_narrative'] == null ? undefined : json['description_narrative'],
    };
}

export function CreateSEOScoreRequestToJSON(json: any): CreateSEOScoreRequest {
    return CreateSEOScoreRequestToJSONTyped(json, false);
}

export function CreateSEOScoreRequestToJSONTyped(value?: CreateSEOScoreRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'url': value['url'],
        'text': value['text'],
        'keyword': value['keyword'],
        'description_narrative': value['descriptionNarrative'],
    };
}

