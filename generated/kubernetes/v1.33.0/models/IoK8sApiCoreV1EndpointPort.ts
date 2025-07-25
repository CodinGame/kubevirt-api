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
 * EndpointPort is a tuple that describes a single port. Deprecated: This API is deprecated in v1.33+.
 * @export
 * @interface IoK8sApiCoreV1EndpointPort
 */
export interface IoK8sApiCoreV1EndpointPort {
    /**
     * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
     * 
     * * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
     * 
     * * Kubernetes-defined prefixed names:
     *   * 'kubernetes.io/h2c' - HTTP/2 prior knowledge over cleartext as described in https://www.rfc-editor.org/rfc/rfc9113.html#name-starting-http-2-with-prior-
     *   * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455
     *   * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
     * 
     * * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
     * @type {string}
     * @memberof IoK8sApiCoreV1EndpointPort
     */
    appProtocol?: string;
    /**
     * The name of this port.  This must match the 'name' field in the corresponding ServicePort. Must be a DNS_LABEL. Optional only if one port is defined.
     * @type {string}
     * @memberof IoK8sApiCoreV1EndpointPort
     */
    name?: string;
    /**
     * The port number of the endpoint.
     * @type {number}
     * @memberof IoK8sApiCoreV1EndpointPort
     */
    port: number;
    /**
     * The IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP.
     * @type {string}
     * @memberof IoK8sApiCoreV1EndpointPort
     */
    protocol?: string;
}

export function IoK8sApiCoreV1EndpointPortFromJSON(json: any): IoK8sApiCoreV1EndpointPort {
    return IoK8sApiCoreV1EndpointPortFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1EndpointPortFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1EndpointPort {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appProtocol': !exists(json, 'appProtocol') ? undefined : json['appProtocol'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'port': json['port'],
        'protocol': !exists(json, 'protocol') ? undefined : json['protocol'],
    };
}

export function IoK8sApiCoreV1EndpointPortToJSON(value?: IoK8sApiCoreV1EndpointPort | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appProtocol': value.appProtocol,
        'name': value.name,
        'port': value.port,
        'protocol': value.protocol,
    };
}

