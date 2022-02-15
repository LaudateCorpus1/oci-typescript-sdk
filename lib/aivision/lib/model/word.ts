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
 * A single word.
 */
export interface Word {
  /**
   * String of text characters in the word.
   */
  "text": string;
  /**
   * Confidence score between 0 to 1. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "confidence": number;
  "boundingPolygon": model.BoundingPolygon;
}

export namespace Word {
  export function getJsonObj(obj: Word): object {
    const jsonObj = {
      ...obj,
      ...{
        "boundingPolygon": obj.boundingPolygon
          ? model.BoundingPolygon.getJsonObj(obj.boundingPolygon)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Word): object {
    const jsonObj = {
      ...obj,
      ...{
        "boundingPolygon": obj.boundingPolygon
          ? model.BoundingPolygon.getDeserializedJsonObj(obj.boundingPolygon)
          : undefined
      }
    };

    return jsonObj;
  }
}
