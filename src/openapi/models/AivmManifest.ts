/* tslint:disable */
/* eslint-disable */
/**
 * AivisSpeech Engine
 * AivisSpeech の音声合成エンジンです。
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AivmManifestSpeaker } from './AivmManifestSpeaker';
import {
    AivmManifestSpeakerFromJSON,
    AivmManifestSpeakerFromJSONTyped,
    AivmManifestSpeakerToJSON,
} from './AivmManifestSpeaker';
import type { ModelArchitecture } from './ModelArchitecture';
import {
    ModelArchitectureFromJSON,
    ModelArchitectureFromJSONTyped,
    ModelArchitectureToJSON,
} from './ModelArchitecture';

/**
 * AIVM マニフェストのスキーマ 
 * @export
 * @interface AivmManifest
 */
export interface AivmManifest {
    /**
     * 
     * @type {string}
     * @memberof AivmManifest
     */
    manifestVersion: string;
    /**
     * 
     * @type {string}
     * @memberof AivmManifest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AivmManifest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof AivmManifest
     */
    termsOfUse?: string;
    /**
     * 
     * @type {ModelArchitecture}
     * @memberof AivmManifest
     */
    modelArchitecture: ModelArchitecture;
    /**
     * 
     * @type {string}
     * @memberof AivmManifest
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof AivmManifest
     */
    version: string;
    /**
     * 
     * @type {Array<AivmManifestSpeaker>}
     * @memberof AivmManifest
     */
    speakers: Array<AivmManifestSpeaker>;
}

/**
 * Check if a given object implements the AivmManifest interface.
 */
export function instanceOfAivmManifest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "manifestVersion" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "modelArchitecture" in value;
    isInstance = isInstance && "uuid" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "speakers" in value;

    return isInstance;
}

export function AivmManifestFromJSON(json: any): AivmManifest {
    return AivmManifestFromJSONTyped(json, false);
}

export function AivmManifestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AivmManifest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'manifestVersion': json['manifest_version'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'termsOfUse': !exists(json, 'terms_of_use') ? undefined : json['terms_of_use'],
        'modelArchitecture': ModelArchitectureFromJSON(json['model_architecture']),
        'uuid': json['uuid'],
        'version': json['version'],
        'speakers': ((json['speakers'] as Array<any>).map(AivmManifestSpeakerFromJSON)),
    };
}

export function AivmManifestToJSON(value?: AivmManifest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'manifest_version': value.manifestVersion,
        'name': value.name,
        'description': value.description,
        'terms_of_use': value.termsOfUse,
        'model_architecture': ModelArchitectureToJSON(value.modelArchitecture),
        'uuid': value.uuid,
        'version': value.version,
        'speakers': ((value.speakers as Array<any>).map(AivmManifestSpeakerToJSON)),
    };
}

