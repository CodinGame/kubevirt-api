/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt Containerized Data Importer API
 * Containerized Data Importer for KubeVirt.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime';
import {
  V1LocalObjectReference,
  V1LocalObjectReferenceFromJSON,
  V1LocalObjectReferenceToJSON,
  V1ResourceRequirements,
  V1ResourceRequirementsFromJSON,
  V1ResourceRequirementsToJSON,
  V1beta1FilesystemOverhead,
  V1beta1FilesystemOverheadFromJSON,
  V1beta1FilesystemOverheadToJSON,
  V1beta1ImportProxy,
  V1beta1ImportProxyFromJSON,
  V1beta1ImportProxyToJSON,
} from './';

/**
 * CDIConfigStatus provides the most recently observed status of the CDI Config resource
 * @export
 * @interface V1beta1CDIConfigStatus
 */
export interface V1beta1CDIConfigStatus {
  /**
   *
   * @type {V1ResourceRequirements}
   * @memberof V1beta1CDIConfigStatus
   */
  defaultPodResourceRequirements?: V1ResourceRequirements;
  /**
   *
   * @type {V1beta1FilesystemOverhead}
   * @memberof V1beta1CDIConfigStatus
   */
  filesystemOverhead?: V1beta1FilesystemOverhead;
  /**
   * The imagePullSecrets used to pull the container images
   * @type {Array<V1LocalObjectReference>}
   * @memberof V1beta1CDIConfigStatus
   */
  imagePullSecrets?: Array<V1LocalObjectReference>;
  /**
   *
   * @type {V1beta1ImportProxy}
   * @memberof V1beta1CDIConfigStatus
   */
  importProxy?: V1beta1ImportProxy;
  /**
   * Preallocation controls whether storage for DataVolumes should be allocated in advance.
   * @type {boolean}
   * @memberof V1beta1CDIConfigStatus
   */
  preallocation?: boolean;
  /**
   * The calculated storage class to be used for scratch space
   * @type {string}
   * @memberof V1beta1CDIConfigStatus
   */
  scratchSpaceStorageClass?: string;
  /**
   * UploadProxyCA is the certificate authority of the upload proxy
   * @type {string}
   * @memberof V1beta1CDIConfigStatus
   */
  uploadProxyCA?: string;
  /**
   * The calculated upload proxy URL
   * @type {string}
   * @memberof V1beta1CDIConfigStatus
   */
  uploadProxyURL?: string;
}

export function V1beta1CDIConfigStatusFromJSON(json: any): V1beta1CDIConfigStatus {
  return V1beta1CDIConfigStatusFromJSONTyped(json, false);
}

export function V1beta1CDIConfigStatusFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1beta1CDIConfigStatus {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    defaultPodResourceRequirements: !exists(json, 'defaultPodResourceRequirements')
      ? undefined
      : V1ResourceRequirementsFromJSON(json['defaultPodResourceRequirements']),
    filesystemOverhead: !exists(json, 'filesystemOverhead')
      ? undefined
      : V1beta1FilesystemOverheadFromJSON(json['filesystemOverhead']),
    imagePullSecrets: !exists(json, 'imagePullSecrets')
      ? undefined
      : (json['imagePullSecrets'] as Array<any>).map(V1LocalObjectReferenceFromJSON),
    importProxy: !exists(json, 'importProxy')
      ? undefined
      : V1beta1ImportProxyFromJSON(json['importProxy']),
    preallocation: !exists(json, 'preallocation') ? undefined : json['preallocation'],
    scratchSpaceStorageClass: !exists(json, 'scratchSpaceStorageClass')
      ? undefined
      : json['scratchSpaceStorageClass'],
    uploadProxyCA: !exists(json, 'uploadProxyCA') ? undefined : json['uploadProxyCA'],
    uploadProxyURL: !exists(json, 'uploadProxyURL') ? undefined : json['uploadProxyURL'],
  };
}

export function V1beta1CDIConfigStatusToJSON(value?: V1beta1CDIConfigStatus | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    defaultPodResourceRequirements: V1ResourceRequirementsToJSON(
      value.defaultPodResourceRequirements,
    ),
    filesystemOverhead: V1beta1FilesystemOverheadToJSON(value.filesystemOverhead),
    imagePullSecrets:
      value.imagePullSecrets === undefined
        ? undefined
        : (value.imagePullSecrets as Array<any>).map(V1LocalObjectReferenceToJSON),
    importProxy: V1beta1ImportProxyToJSON(value.importProxy),
    preallocation: value.preallocation,
    scratchSpaceStorageClass: value.scratchSpaceStorageClass,
    uploadProxyCA: value.uploadProxyCA,
    uploadProxyURL: value.uploadProxyURL,
  };
}
