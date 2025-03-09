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

/**
 * @type NodeRequestMetadataValue
 * A map of metadata properties.
 * @export
 */
export type NodeRequestMetadataValue = boolean | number | string;

export function NodeRequestMetadataValueFromJSON(json: any): NodeRequestMetadataValue {
    return NodeRequestMetadataValueFromJSONTyped(json, false);
}

export function NodeRequestMetadataValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeRequestMetadataValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...booleanFromJSONTyped(json, true), ...numberFromJSONTyped(json, true), ...stringFromJSONTyped(json, true) };
}

export function NodeRequestMetadataValueToJSON(value?: NodeRequestMetadataValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfboolean(value)) {
        return booleanToJSON(value as boolean);
    }
    if (instanceOfnumber(value)) {
        return numberToJSON(value as number);
    }
    if (instanceOfstring(value)) {
        return stringToJSON(value as string);
    }

    return {};
}

