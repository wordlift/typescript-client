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
 * The Merchant request
 * @export
 * @interface MerchantRequest
 */
export interface MerchantRequest {
    /**
     * Google Merchant access token
     * @type {string}
     * @memberof MerchantRequest
     */
    accessToken?: string;
    /**
     * The Knowledge Graph to use for the Merchant. Please note that the Knowledge Graph will be reset. When not provided, this method will use the first available Knowledge Graph.
     * @type {number}
     * @memberof MerchantRequest
     */
    accountId?: number;
    /**
     * The custom domain (for example data.example.org)
     * @type {string}
     * @memberof MerchantRequest
     */
    datasetDomain?: string;
    /**
     * The dataset path (for example "data")
     * @type {string}
     * @memberof MerchantRequest
     */
    datasetName?: string;
    /**
     * True if the merchant has been deleted
     * @type {boolean}
     * @memberof MerchantRequest
     */
    deleted?: boolean;
    /**
     * The Google Merchant id
     * @type {number}
     * @memberof MerchantRequest
     */
    googleMerchantId: number;
    /**
     * Whether to ignore the `brand` property during validation
     * @type {boolean}
     * @memberof MerchantRequest
     */
    ignoreBrand?: boolean;
    /**
     * Whether to ignore the `image` property during validation
     * @type {boolean}
     * @memberof MerchantRequest
     */
    ignoreImage?: boolean;
    /**
     * The publisher name (shows in schema publisher)
     * @type {string}
     * @memberof MerchantRequest
     */
    publisherName: string;
    /**
     * Google Merchant refresh token
     * @type {string}
     * @memberof MerchantRequest
     */
    refreshToken: string;
    /**
     * The website URL
     * @type {string}
     * @memberof MerchantRequest
     */
    url: string;
    /**
     * Which strategy to use to write the url schema.
     * @type {string}
     * @memberof MerchantRequest
     */
    urlStrategy?: MerchantRequestUrlStrategyEnum;
    /**
     * How to write the merchant data to the graph, if unsure, do not set anything (by default `wordpressMerchantWriter`).
     * @type {string}
     * @memberof MerchantRequest
     */
    writerService?: string;
}


/**
 * @export
 */
export const MerchantRequestUrlStrategyEnum = {
    CanonicalLinkAndLink: 'canonicalLinkAndLink',
    CanonicalLinkOtherwiseLink: 'canonicalLinkOtherwiseLink'
} as const;
export type MerchantRequestUrlStrategyEnum = typeof MerchantRequestUrlStrategyEnum[keyof typeof MerchantRequestUrlStrategyEnum];


/**
 * Check if a given object implements the MerchantRequest interface.
 */
export function instanceOfMerchantRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "googleMerchantId" in value;
    isInstance = isInstance && "publisherName" in value;
    isInstance = isInstance && "refreshToken" in value;
    isInstance = isInstance && "url" in value;

    return isInstance;
}

export function MerchantRequestFromJSON(json: any): MerchantRequest {
    return MerchantRequestFromJSONTyped(json, false);
}

export function MerchantRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerchantRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessToken': !exists(json, 'access_token') ? undefined : json['access_token'],
        'accountId': !exists(json, 'account_id') ? undefined : json['account_id'],
        'datasetDomain': !exists(json, 'dataset_domain') ? undefined : json['dataset_domain'],
        'datasetName': !exists(json, 'dataset_name') ? undefined : json['dataset_name'],
        'deleted': !exists(json, 'deleted') ? undefined : json['deleted'],
        'googleMerchantId': json['google_merchant_id'],
        'ignoreBrand': !exists(json, 'ignore_brand') ? undefined : json['ignore_brand'],
        'ignoreImage': !exists(json, 'ignore_image') ? undefined : json['ignore_image'],
        'publisherName': json['publisher_name'],
        'refreshToken': json['refresh_token'],
        'url': json['url'],
        'urlStrategy': !exists(json, 'url_strategy') ? undefined : json['url_strategy'],
        'writerService': !exists(json, 'writer_service') ? undefined : json['writer_service'],
    };
}

export function MerchantRequestToJSON(value?: MerchantRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'access_token': value.accessToken,
        'account_id': value.accountId,
        'dataset_domain': value.datasetDomain,
        'dataset_name': value.datasetName,
        'deleted': value.deleted,
        'google_merchant_id': value.googleMerchantId,
        'ignore_brand': value.ignoreBrand,
        'ignore_image': value.ignoreImage,
        'publisher_name': value.publisherName,
        'refresh_token': value.refreshToken,
        'url': value.url,
        'url_strategy': value.urlStrategy,
        'writer_service': value.writerService,
    };
}

