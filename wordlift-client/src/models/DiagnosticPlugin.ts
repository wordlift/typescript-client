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
 * Plugin Data used for diagnostics
 * @export
 * @interface DiagnosticPlugin
 */
export interface DiagnosticPlugin {
    /**
     * The account id.
     * @type {number}
     * @memberof DiagnosticPlugin
     */
    readonly accountId?: number;
    /**
     * Whether the plugin is active.
     * @type {boolean}
     * @memberof DiagnosticPlugin
     */
    active?: boolean;
    /**
     * The create date-time
     * @type {Date}
     * @memberof DiagnosticPlugin
     */
    readonly createdAt?: Date;
    /**
     * The record id.
     * @type {number}
     * @memberof DiagnosticPlugin
     */
    readonly id?: number;
    /**
     * The plugin name.
     * @type {string}
     * @memberof DiagnosticPlugin
     */
    name?: string;
    /**
     * The plugin version.
     * @type {string}
     * @memberof DiagnosticPlugin
     */
    version?: string;
}

/**
 * Check if a given object implements the DiagnosticPlugin interface.
 */
export function instanceOfDiagnosticPlugin(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiagnosticPluginFromJSON(json: any): DiagnosticPlugin {
    return DiagnosticPluginFromJSONTyped(json, false);
}

export function DiagnosticPluginFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagnosticPlugin {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'account_id') ? undefined : json['account_id'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function DiagnosticPluginToJSON(value?: DiagnosticPlugin | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'name': value.name,
        'version': value.version,
    };
}

