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
import type { NodeRequestMetadataValue } from './NodeRequestMetadataValue';
import {
    NodeRequestMetadataValueFromJSON,
    NodeRequestMetadataValueFromJSONTyped,
    NodeRequestMetadataValueToJSON,
    NodeRequestMetadataValueToJSONTyped,
} from './NodeRequestMetadataValue';

/**
 * A node request.
 * @export
 * @interface NodeRequest
 */
export interface NodeRequest {
    /**
     * A list of embeddings.
     * @type {Array<number>}
     * @memberof NodeRequest
     */
    embeddings?: Array<number>;
    /**
     * The entity id in the form on an IRI, e.g. https://data.example.org/dataset/entity.
     * @type {string}
     * @memberof NodeRequest
     */
    entityId: string;
    /**
     * A map of metadata properties.
     * @type {{ [key: string]: NodeRequestMetadataValue; }}
     * @memberof NodeRequest
     */
    metadata?: { [key: string]: NodeRequestMetadataValue; };
    /**
     * The node id generally expressed in the form of a UUID.
     * @type {string}
     * @memberof NodeRequest
     */
    nodeId: string;
    /**
     * The original text.
     * @type {string}
     * @memberof NodeRequest
     */
    text?: string;
}

/**
 * Check if a given object implements the NodeRequest interface.
 */
export function instanceOfNodeRequest(value: object): value is NodeRequest {
    if (!('entityId' in value) || value['entityId'] === undefined) return false;
    if (!('nodeId' in value) || value['nodeId'] === undefined) return false;
    return true;
}

export function NodeRequestFromJSON(json: any): NodeRequest {
    return NodeRequestFromJSONTyped(json, false);
}

export function NodeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'embeddings': json['embeddings'] == null ? undefined : json['embeddings'],
        'entityId': json['entity_id'],
        'metadata': json['metadata'] == null ? undefined : (mapValues(json['metadata'], NodeRequestMetadataValueFromJSON)),
        'nodeId': json['node_id'],
        'text': json['text'] == null ? undefined : json['text'],
    };
}

export function NodeRequestToJSON(json: any): NodeRequest {
    return NodeRequestToJSONTyped(json, false);
}

export function NodeRequestToJSONTyped(value?: NodeRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'embeddings': value['embeddings'],
        'entity_id': value['entityId'],
        'metadata': value['metadata'] == null ? undefined : (mapValues(value['metadata'], NodeRequestMetadataValueToJSON)),
        'node_id': value['nodeId'],
        'text': value['text'],
    };
}

