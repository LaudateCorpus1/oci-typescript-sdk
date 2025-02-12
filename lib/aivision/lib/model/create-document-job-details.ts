/**
 * VisionService API
 * A description of the VisionService API.
 * OpenAPI spec version: 20220125
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details about the batch document analysis.
 */
export interface CreateDocumentJobDetails {
  "inputLocation": model.ObjectListInlineInputLocation;
  /**
   * List of document analysis types requested.
   */
  "features": Array<model.DocumentFeature>;
  "outputLocation": model.OutputLocation;
  /**
   * Compartment identifier from the requester.
   */
  "compartmentId"?: string;
  /**
   * Document job display name.
   */
  "displayName"?: string;
  /**
   * Language of the document, abbreviated according to ISO 639-2.
   */
  "language"?: model.DocumentLanguage;
  /**
   * The type of documents.
   */
  "documentType"?: model.DocumentType;
  /**
   * Whether to generate a Zip file containing the results.
   */
  "isZipOutputEnabled"?: boolean;
}

export namespace CreateDocumentJobDetails {
  export function getJsonObj(obj: CreateDocumentJobDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "inputLocation": obj.inputLocation
          ? model.InputLocation.getJsonObj(obj.inputLocation)
          : undefined,
        "features": obj.features
          ? obj.features.map(item => {
              return model.DocumentFeature.getJsonObj(item);
            })
          : undefined,
        "outputLocation": obj.outputLocation
          ? model.OutputLocation.getJsonObj(obj.outputLocation)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDocumentJobDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "inputLocation": obj.inputLocation
          ? model.InputLocation.getDeserializedJsonObj(obj.inputLocation)
          : undefined,
        "features": obj.features
          ? obj.features.map(item => {
              return model.DocumentFeature.getDeserializedJsonObj(item);
            })
          : undefined,
        "outputLocation": obj.outputLocation
          ? model.OutputLocation.getDeserializedJsonObj(obj.outputLocation)
          : undefined
      }
    };

    return jsonObj;
  }
}
