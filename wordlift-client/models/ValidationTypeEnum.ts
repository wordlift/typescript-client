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
 * 
 * @export
 */
export const ValidationTypeEnum = {
    FindAndReplace: 'FIND_AND_REPLACE',
    OpenAi: 'OPEN_AI',
    Append: 'APPEND'
} as const;
export type ValidationTypeEnum = typeof ValidationTypeEnum[keyof typeof ValidationTypeEnum];


export function instanceOfValidationTypeEnum(value: any): boolean {
    for (const key in ValidationTypeEnum) {
        if (Object.prototype.hasOwnProperty.call(ValidationTypeEnum, key)) {
            if (ValidationTypeEnum[key as keyof typeof ValidationTypeEnum] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ValidationTypeEnumFromJSON(json: any): ValidationTypeEnum {
    return ValidationTypeEnumFromJSONTyped(json, false);
}

export function ValidationTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidationTypeEnum {
    return json as ValidationTypeEnum;
}

export function ValidationTypeEnumToJSON(value?: ValidationTypeEnum | null): any {
    return value as any;
}

export function ValidationTypeEnumToJSONTyped(value: any, ignoreDiscriminator: boolean): ValidationTypeEnum {
    return value as ValidationTypeEnum;
}

