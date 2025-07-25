/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: unversioned
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * NodeFeatures describes the set of features implemented by the CRI implementation. The features contained in the NodeFeatures should depend only on the cri implementation independent of runtime handlers.
 * @export
 * @interface IoK8sApiCoreV1NodeFeatures
 */
export interface IoK8sApiCoreV1NodeFeatures {
    /**
     * SupplementalGroupsPolicy is set to true if the runtime supports SupplementalGroupsPolicy and ContainerUser.
     * @type {boolean}
     * @memberof IoK8sApiCoreV1NodeFeatures
     */
    supplementalGroupsPolicy?: boolean;
}

export function IoK8sApiCoreV1NodeFeaturesFromJSON(json: any): IoK8sApiCoreV1NodeFeatures {
    return IoK8sApiCoreV1NodeFeaturesFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1NodeFeaturesFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1NodeFeatures {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'supplementalGroupsPolicy': !exists(json, 'supplementalGroupsPolicy') ? undefined : json['supplementalGroupsPolicy'],
    };
}

export function IoK8sApiCoreV1NodeFeaturesToJSON(value?: IoK8sApiCoreV1NodeFeatures | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'supplementalGroupsPolicy': value.supplementalGroupsPolicy,
    };
}

