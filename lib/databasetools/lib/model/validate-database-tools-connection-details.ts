/**
 * Database Tools
 * Database Tools APIs to manage Connections and Private Endpoints.
 * OpenAPI spec version: 20201005
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Connection validation details.
 */
export interface ValidateDatabaseToolsConnectionDetails {
  "type": string;
}

export namespace ValidateDatabaseToolsConnectionDetails {
  export function getJsonObj(obj: ValidateDatabaseToolsConnectionDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("type" in obj && obj.type) {
      switch (obj.type) {
        case "ORACLE_DATABASE":
          return model.ValidateDatabaseToolsConnectionOracleDatabaseDetails.getJsonObj(
            <model.ValidateDatabaseToolsConnectionOracleDatabaseDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ValidateDatabaseToolsConnectionDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("type" in obj && obj.type) {
      switch (obj.type) {
        case "ORACLE_DATABASE":
          return model.ValidateDatabaseToolsConnectionOracleDatabaseDetails.getDeserializedJsonObj(
            <model.ValidateDatabaseToolsConnectionOracleDatabaseDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
}
