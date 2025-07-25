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

import { exists } from '../runtime';
import {
  IoK8sApiResourceV1alpha3DeviceTaintRuleSpec,
  IoK8sApiResourceV1alpha3DeviceTaintRuleSpecFromJSON,
  IoK8sApiResourceV1alpha3DeviceTaintRuleSpecToJSON,
  IoK8sApimachineryPkgApisMetaV1ObjectMeta,
  IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
  IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * DeviceTaintRule adds one taint to all devices which match the selector. This has the same effect as if the taint was specified directly in the ResourceSlice by the DRA driver.
 * @export
 * @interface IoK8sApiResourceV1alpha3DeviceTaintRule
 */
export interface IoK8sApiResourceV1alpha3DeviceTaintRule {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof IoK8sApiResourceV1alpha3DeviceTaintRule
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof IoK8sApiResourceV1alpha3DeviceTaintRule
   */
  kind?: string;
  /**
   *
   * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
   * @memberof IoK8sApiResourceV1alpha3DeviceTaintRule
   */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /**
   *
   * @type {IoK8sApiResourceV1alpha3DeviceTaintRuleSpec}
   * @memberof IoK8sApiResourceV1alpha3DeviceTaintRule
   */
  spec: IoK8sApiResourceV1alpha3DeviceTaintRuleSpec;
}

export function IoK8sApiResourceV1alpha3DeviceTaintRuleFromJSON(
  json: any,
): IoK8sApiResourceV1alpha3DeviceTaintRule {
  return IoK8sApiResourceV1alpha3DeviceTaintRuleFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1alpha3DeviceTaintRuleFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiResourceV1alpha3DeviceTaintRule {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata')
      ? undefined
      : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
    spec: IoK8sApiResourceV1alpha3DeviceTaintRuleSpecFromJSON(json['spec']),
  };
}

export function IoK8sApiResourceV1alpha3DeviceTaintRuleToJSON(
  value?: IoK8sApiResourceV1alpha3DeviceTaintRule | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    kind: value.kind,
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
    spec: IoK8sApiResourceV1alpha3DeviceTaintRuleSpecToJSON(value.spec),
  };
}
