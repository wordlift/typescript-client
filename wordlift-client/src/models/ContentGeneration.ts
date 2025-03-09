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
 * A Content Generation project.
 * @export
 * @interface ContentGeneration
 */
export interface ContentGeneration {
    /**
     * The Account id bound to this Content Generation.
     * @type {number}
     * @memberof ContentGeneration
     */
    accountId: number;
    /**
     * The create date-time.
     * @type {Date}
     * @memberof ContentGeneration
     */
    readonly createdAt?: Date;
    /**
     * True if the project has been deleted.
     * @type {boolean}
     * @memberof ContentGeneration
     */
    deleted: boolean;
    /**
     * The delete date-time.
     * @type {Date}
     * @memberof ContentGeneration
     */
    readonly deletedAt?: Date;
    /**
     * The GraphQL query which will be used to import entity data from the Knowledge Graph.
     * @type {string}
     * @memberof ContentGeneration
     */
    graphqlQuery: string;
    /**
     * The unique id.
     * @type {number}
     * @memberof ContentGeneration
     */
    readonly id?: number;
    /**
     * The maximum number of tokens.
     * @type {number}
     * @memberof ContentGeneration
     */
    maxTokens?: number;
    /**
     * Minimum amount of words per completion
     * @type {number}
     * @memberof ContentGeneration
     */
    minWords?: number;
    /**
     * The model ID.
     * @type {number}
     * @memberof ContentGeneration
     */
    modelId?: number;
    /**
     * The last modified date-time.
     * @type {Date}
     * @memberof ContentGeneration
     */
    readonly modifiedAt?: Date;
    /**
     * The name.
     * @type {string}
     * @memberof ContentGeneration
     */
    name: string;
    /**
     * The penalty score.
     * @type {number}
     * @memberof ContentGeneration
     */
    penalty?: number;
    /**
     * The prompt template.
     * @type {string}
     * @memberof ContentGeneration
     */
    promptTemplate?: string;
    /**
     * The stop sequence.
     * @type {string}
     * @memberof ContentGeneration
     */
    stop?: string;
    /**
     * The temperature score.
     * @type {number}
     * @memberof ContentGeneration
     */
    temperature?: number;
    /**
     * Words to ignore when checking for words not in prompt.
     * @type {Set<string>}
     * @memberof ContentGeneration
     */
    wordsToIgnore?: Set<string>;
}

/**
 * Check if a given object implements the ContentGeneration interface.
 */
export function instanceOfContentGeneration(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accountId" in value;
    isInstance = isInstance && "deleted" in value;
    isInstance = isInstance && "graphqlQuery" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function ContentGenerationFromJSON(json: any): ContentGeneration {
    return ContentGenerationFromJSONTyped(json, false);
}

export function ContentGenerationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentGeneration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': json['account_id'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'deleted': json['deleted'],
        'deletedAt': !exists(json, 'deleted_at') ? undefined : (new Date(json['deleted_at'])),
        'graphqlQuery': json['graphql_query'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'maxTokens': !exists(json, 'max_tokens') ? undefined : json['max_tokens'],
        'minWords': !exists(json, 'min_words') ? undefined : json['min_words'],
        'modelId': !exists(json, 'model_id') ? undefined : json['model_id'],
        'modifiedAt': !exists(json, 'modified_at') ? undefined : (new Date(json['modified_at'])),
        'name': json['name'],
        'penalty': !exists(json, 'penalty') ? undefined : json['penalty'],
        'promptTemplate': !exists(json, 'prompt_template') ? undefined : json['prompt_template'],
        'stop': !exists(json, 'stop') ? undefined : json['stop'],
        'temperature': !exists(json, 'temperature') ? undefined : json['temperature'],
        'wordsToIgnore': !exists(json, 'words_to_ignore') ? undefined : json['words_to_ignore'],
    };
}

export function ContentGenerationToJSON(value?: ContentGeneration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.accountId,
        'deleted': value.deleted,
        'graphql_query': value.graphqlQuery,
        'max_tokens': value.maxTokens,
        'min_words': value.minWords,
        'model_id': value.modelId,
        'name': value.name,
        'penalty': value.penalty,
        'prompt_template': value.promptTemplate,
        'stop': value.stop,
        'temperature': value.temperature,
        'words_to_ignore': value.wordsToIgnore === undefined ? undefined : Array.from(value.wordsToIgnore as Set<any>),
    };
}

