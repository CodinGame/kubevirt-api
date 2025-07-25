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

import { exists, mapValues } from '../runtime';
/**
 * DataVolumeSourceVDDK provides the parameters to create a Data Volume from a Vmware source
 * @export
 * @interface V1beta1DataVolumeSourceVDDK
 */
export interface V1beta1DataVolumeSourceVDDK {
    /**
     * BackingFile is the path to the virtual hard disk to migrate from vCenter/ESXi
     * @type {string}
     * @memberof V1beta1DataVolumeSourceVDDK
     */
    backingFile?: string;
    /**
     * ExtraArgs is a reference to a ConfigMap containing extra arguments to pass directly to the VDDK library
     * @type {string}
     * @memberof V1beta1DataVolumeSourceVDDK
     */
    extraArgs?: string;
    /**
     * InitImageURL is an optional URL to an image containing an extracted VDDK library, overrides v2v-vmware config map
     * @type {string}
     * @memberof V1beta1DataVolumeSourceVDDK
     */
    initImageURL?: string;
    /**
     * SecretRef provides a reference to a secret containing the username and password needed to access the vCenter or ESXi host
     * @type {string}
     * @memberof V1beta1DataVolumeSourceVDDK
     */
    secretRef?: string;
    /**
     * Thumbprint is the certificate thumbprint of the vCenter or ESXi host
     * @type {string}
     * @memberof V1beta1DataVolumeSourceVDDK
     */
    thumbprint?: string;
    /**
     * URL is the URL of the vCenter or ESXi host with the VM to migrate
     * @type {string}
     * @memberof V1beta1DataVolumeSourceVDDK
     */
    url?: string;
    /**
     * UUID is the UUID of the virtual machine that the backing file is attached to in vCenter/ESXi
     * @type {string}
     * @memberof V1beta1DataVolumeSourceVDDK
     */
    uuid?: string;
}

export function V1beta1DataVolumeSourceVDDKFromJSON(json: any): V1beta1DataVolumeSourceVDDK {
    return V1beta1DataVolumeSourceVDDKFromJSONTyped(json, false);
}

export function V1beta1DataVolumeSourceVDDKFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1DataVolumeSourceVDDK {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'backingFile': !exists(json, 'backingFile') ? undefined : json['backingFile'],
        'extraArgs': !exists(json, 'extraArgs') ? undefined : json['extraArgs'],
        'initImageURL': !exists(json, 'initImageURL') ? undefined : json['initImageURL'],
        'secretRef': !exists(json, 'secretRef') ? undefined : json['secretRef'],
        'thumbprint': !exists(json, 'thumbprint') ? undefined : json['thumbprint'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
    };
}

export function V1beta1DataVolumeSourceVDDKToJSON(value?: V1beta1DataVolumeSourceVDDK | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'backingFile': value.backingFile,
        'extraArgs': value.extraArgs,
        'initImageURL': value.initImageURL,
        'secretRef': value.secretRef,
        'thumbprint': value.thumbprint,
        'url': value.url,
        'uuid': value.uuid,
    };
}

