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
import type { Filter } from './Filter';
import {
    FilterFromJSON,
    FilterFromJSONTyped,
    FilterToJSON,
    FilterToJSONTyped,
} from './Filter';

/**
 * A query request.
 * @export
 * @interface VectorSearchQueryRequest
 */
export interface VectorSearchQueryRequest {
    /**
     * List of extra fields to be retrieved.
     * @type {Set<string>}
     * @memberof VectorSearchQueryRequest
     */
    fields?: Set<string>;
    /**
     * A list of prefilters.
     * @type {Array<Filter>}
     * @memberof VectorSearchQueryRequest
     */
    filters?: Array<Filter>;
    /**
     * The list of embeddings, not required if `query_string` is provided.
     * @type {Array<number>}
     * @memberof VectorSearchQueryRequest
     */
    queryEmbedding?: Array<number>;
    /**
     * The query string, not required if the `query_embeddings` are provided. Please note that the `query_string` is ignored if the `query_embeddings` are provided.
     * @type {string}
     * @memberof VectorSearchQueryRequest
     */
    queryString?: string;
    /**
     * Perform a Vector Search based on similarities with an entity with the specified URI.
     * @type {string}
     * @memberof VectorSearchQueryRequest
     */
    queryUri?: string;
    /**
     * Perform a Vector Search based on similarities with an entity with the specified URL (schema:url).
     * @type {string}
     * @memberof VectorSearchQueryRequest
     */
    queryUrl?: string;
    /**
     * The similarity top K.
     * @type {number}
     * @memberof VectorSearchQueryRequest
     */
    similarityTopK?: number;
}

/**
 * Check if a given object implements the VectorSearchQueryRequest interface.
 */
export function instanceOfVectorSearchQueryRequest(value: object): value is VectorSearchQueryRequest {
    return true;
}

export function VectorSearchQueryRequestFromJSON(json: any): VectorSearchQueryRequest {
    return VectorSearchQueryRequestFromJSONTyped(json, false);
}

export function VectorSearchQueryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): VectorSearchQueryRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'fields': json['fields'] == null ? undefined : new Set(json['fields']),
        'filters': json['filters'] == null ? undefined : ((json['filters'] as Array<any>).map(FilterFromJSON)),
        'queryEmbedding': json['query_embedding'] == null ? undefined : json['query_embedding'],
        'queryString': json['query_string'] == null ? undefined : json['query_string'],
        'queryUri': json['query_uri'] == null ? undefined : json['query_uri'],
        'queryUrl': json['query_url'] == null ? undefined : json['query_url'],
        'similarityTopK': json['similarity_top_k'] == null ? undefined : json['similarity_top_k'],
    };
}

export function VectorSearchQueryRequestToJSON(json: any): VectorSearchQueryRequest {
    return VectorSearchQueryRequestToJSONTyped(json, false);
}

export function VectorSearchQueryRequestToJSONTyped(value?: VectorSearchQueryRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fields': value['fields'] == null ? undefined : Array.from(value['fields'] as Set<any>),
        'filters': value['filters'] == null ? undefined : ((value['filters'] as Array<any>).map(FilterToJSON)),
        'query_embedding': value['queryEmbedding'],
        'query_string': value['queryString'],
        'query_uri': value['queryUri'],
        'query_url': value['queryUrl'],
        'similarity_top_k': value['similarityTopK'],
    };
}

