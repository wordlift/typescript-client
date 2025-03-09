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
 * The analysis request.
 * @export
 * @interface AnalysesRequest
 */
export interface AnalysesRequest {
    /**
     * The text to analyse.
     * @type {string}
     * @memberof AnalysesRequest
     */
    text?: string;
    /**
     * The URL to analyse.
     * @type {string}
     * @memberof AnalysesRequest
     */
    url?: string;
    /**
     * The query string to analyse.
     * @type {string}
     * @memberof AnalysesRequest
     */
    query?: string;
    /**
     * The html to analyse.
     * @type {string}
     * @memberof AnalysesRequest
     */
    html?: string;
    /**
     * The language code used for content analysis, e.g. `en`.
     * @type {string}
     * @memberof AnalysesRequest
     */
    languageCode?: string;
    /**
     * The location name for the query, e.g. United Kingdom.
     * @type {string}
     * @memberof AnalysesRequest
     */
    queryLocationName?: string;
    /**
     * The search engine domain for the query, if not set will be chosen according to `query_location_name`
     * @type {string}
     * @memberof AnalysesRequest
     */
    querySearchEngine?: string;
    /**
     * Whether to include results from Linked Data (e.g. DBpedia), by default true.
     * @type {boolean}
     * @memberof AnalysesRequest
     */
    linkedData?: boolean;
    /**
     * Whether to include results from the local Knowledge Graph, by default true.
     * @type {boolean}
     * @memberof AnalysesRequest
     */
    localData?: boolean;
    /**
     * Whether to include results from connected Knowledge Graphs, by default true.
     * @type {boolean}
     * @memberof AnalysesRequest
     */
    networkData?: boolean;
}

/**
 * Check if a given object implements the AnalysesRequest interface.
 */
export function instanceOfAnalysesRequest(value: object): value is AnalysesRequest {
    return true;
}

export function AnalysesRequestFromJSON(json: any): AnalysesRequest {
    return AnalysesRequestFromJSONTyped(json, false);
}

export function AnalysesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalysesRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'text': json['text'] == null ? undefined : json['text'],
        'url': json['url'] == null ? undefined : json['url'],
        'query': json['query'] == null ? undefined : json['query'],
        'html': json['html'] == null ? undefined : json['html'],
        'languageCode': json['language_code'] == null ? undefined : json['language_code'],
        'queryLocationName': json['query_location_name'] == null ? undefined : json['query_location_name'],
        'querySearchEngine': json['query_search_engine'] == null ? undefined : json['query_search_engine'],
        'linkedData': json['linked_data'] == null ? undefined : json['linked_data'],
        'localData': json['local_data'] == null ? undefined : json['local_data'],
        'networkData': json['network_data'] == null ? undefined : json['network_data'],
    };
}

export function AnalysesRequestToJSON(json: any): AnalysesRequest {
    return AnalysesRequestToJSONTyped(json, false);
}

export function AnalysesRequestToJSONTyped(value?: AnalysesRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'text': value['text'],
        'url': value['url'],
        'query': value['query'],
        'html': value['html'],
        'language_code': value['languageCode'],
        'query_location_name': value['queryLocationName'],
        'query_search_engine': value['querySearchEngine'],
        'linked_data': value['linkedData'],
        'local_data': value['localData'],
        'network_data': value['networkData'],
    };
}

