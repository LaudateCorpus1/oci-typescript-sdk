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
 * Image incorporated in the request payload.
 */
export interface InlineImageDetails extends model.ImageDetails {
  /**
   * Image raw data.
   */
  "data": string;

  "source": string;
}

export namespace InlineImageDetails {
  export function getJsonObj(obj: InlineImageDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.ImageDetails.getJsonObj(obj) as InlineImageDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const source = "INLINE";
  export function getDeserializedJsonObj(
    obj: InlineImageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ImageDetails.getDeserializedJsonObj(obj) as InlineImageDetails)),
      ...{}
    };

    return jsonObj;
  }
}
