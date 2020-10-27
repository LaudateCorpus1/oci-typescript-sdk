/**
 * InstanceAgentService API
 * Instance Agent Service API
 * OpenAPI spec version: 20180530
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Command output.
 */
export interface InstanceAgentCommandOutputDetails {
  "outputType": string;
}

export namespace InstanceAgentCommandOutputDetails {
  export function getJsonObj(obj: InstanceAgentCommandOutputDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("outputType" in obj && obj.outputType) {
      switch (obj.outputType) {
        case "OBJECT_STORAGE_URI":
          return model.InstanceAgentCommandOutputViaObjectStorageUriDetails.getJsonObj(
            <model.InstanceAgentCommandOutputViaObjectStorageUriDetails>(<object>jsonObj),
            true
          );
        case "OBJECT_STORAGE_TUPLE":
          return model.InstanceAgentCommandOutputViaObjectStorageTupleDetails.getJsonObj(
            <model.InstanceAgentCommandOutputViaObjectStorageTupleDetails>(<object>jsonObj),
            true
          );
        case "TEXT":
          return model.InstanceAgentCommandOutputViaTextDetails.getJsonObj(
            <model.InstanceAgentCommandOutputViaTextDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.outputType);
      }
    }
    return jsonObj;
  }
}
