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
 * Details about an image to analyze.
 */
export interface ImageDetails {
  "source": string;
}

export namespace ImageDetails {
  export function getJsonObj(obj: ImageDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("source" in obj && obj.source) {
      switch (obj.source) {
        case "OBJECT_STORAGE":
          return model.ObjectStorageImageDetails.getJsonObj(
            <model.ObjectStorageImageDetails>(<object>jsonObj),
            true
          );
        case "INLINE":
          return model.InlineImageDetails.getJsonObj(
            <model.InlineImageDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.source);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ImageDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("source" in obj && obj.source) {
      switch (obj.source) {
        case "OBJECT_STORAGE":
          return model.ObjectStorageImageDetails.getDeserializedJsonObj(
            <model.ObjectStorageImageDetails>(<object>jsonObj),
            true
          );
        case "INLINE":
          return model.InlineImageDetails.getDeserializedJsonObj(
            <model.InlineImageDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.source);
      }
    }
    return jsonObj;
  }
}
