/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime';
/**
 * PersistentVolumeClaimInfo contains the relavant information virt-handler needs cached about a PVC
 * @export
 * @interface V1PersistentVolumeClaimInfo
 */
export interface V1PersistentVolumeClaimInfo {
  /**
   * AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
   * @type {Array<string>}
   * @memberof V1PersistentVolumeClaimInfo
   */
  accessModes?: Array<V1PersistentVolumeClaimInfoAccessModesEnum>;
  /**
   * Capacity represents the capacity set on the corresponding PVC status
   * @type {{ [key: string]: string; }}
   * @memberof V1PersistentVolumeClaimInfo
   */
  capacity?: { [key: string]: string };
  /**
   * ClaimName is the name of the PVC
   * @type {string}
   * @memberof V1PersistentVolumeClaimInfo
   */
  claimName?: string;
  /**
   * Percentage of filesystem's size to be reserved when resizing the PVC
   * @type {string}
   * @memberof V1PersistentVolumeClaimInfo
   */
  filesystemOverhead?: string;
  /**
   * Preallocated indicates if the PVC's storage is preallocated or not
   * @type {boolean}
   * @memberof V1PersistentVolumeClaimInfo
   */
  preallocated?: boolean;
  /**
   * Requests represents the resources requested by the corresponding PVC spec
   * @type {{ [key: string]: string; }}
   * @memberof V1PersistentVolumeClaimInfo
   */
  requests?: { [key: string]: string };
  /**
   * VolumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
   *
   * Possible enum values:
   *  - `"Block"` means the volume will not be formatted with a filesystem and will remain a raw block device.
   *  - `"Filesystem"` means the volume will be or is formatted with a filesystem.
   *  - `"FromStorageProfile"` means the volume mode will be auto selected by CDI according to a matching StorageProfile
   * @type {string}
   * @memberof V1PersistentVolumeClaimInfo
   */
  volumeMode?: V1PersistentVolumeClaimInfoVolumeModeEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum V1PersistentVolumeClaimInfoAccessModesEnum {
  ReadOnlyMany = 'ReadOnlyMany',
  ReadWriteMany = 'ReadWriteMany',
  ReadWriteOnce = 'ReadWriteOnce',
  ReadWriteOncePod = 'ReadWriteOncePod',
}
/**
 * @export
 * @enum {string}
 */
export enum V1PersistentVolumeClaimInfoVolumeModeEnum {
  Block = 'Block',
  Filesystem = 'Filesystem',
  FromStorageProfile = 'FromStorageProfile',
}

export function V1PersistentVolumeClaimInfoFromJSON(json: any): V1PersistentVolumeClaimInfo {
  return V1PersistentVolumeClaimInfoFromJSONTyped(json, false);
}

export function V1PersistentVolumeClaimInfoFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1PersistentVolumeClaimInfo {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    accessModes: !exists(json, 'accessModes') ? undefined : json['accessModes'],
    capacity: !exists(json, 'capacity') ? undefined : json['capacity'],
    claimName: !exists(json, 'claimName') ? undefined : json['claimName'],
    filesystemOverhead: !exists(json, 'filesystemOverhead')
      ? undefined
      : json['filesystemOverhead'],
    preallocated: !exists(json, 'preallocated') ? undefined : json['preallocated'],
    requests: !exists(json, 'requests') ? undefined : json['requests'],
    volumeMode: !exists(json, 'volumeMode') ? undefined : json['volumeMode'],
  };
}

export function V1PersistentVolumeClaimInfoToJSON(value?: V1PersistentVolumeClaimInfo | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    accessModes: value.accessModes,
    capacity: value.capacity,
    claimName: value.claimName,
    filesystemOverhead: value.filesystemOverhead,
    preallocated: value.preallocated,
    requests: value.requests,
    volumeMode: value.volumeMode,
  };
}
