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
 * The key store secrets.
 */
export interface DatabaseToolsKeyStoreSummary {
  /**
   * The key store type.
   */
  "keyStoreType"?: model.KeyStoreType;
  "keyStoreContent"?: model.DatabaseToolsKeyStoreContentSecretIdSummary;
  "keyStorePassword"?: model.DatabaseToolsKeyStorePasswordSecretIdSummary;
}

export namespace DatabaseToolsKeyStoreSummary {
  export function getJsonObj(obj: DatabaseToolsKeyStoreSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyStoreContent": obj.keyStoreContent
          ? model.DatabaseToolsKeyStoreContentSummary.getJsonObj(obj.keyStoreContent)
          : undefined,
        "keyStorePassword": obj.keyStorePassword
          ? model.DatabaseToolsKeyStorePasswordSummary.getJsonObj(obj.keyStorePassword)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseToolsKeyStoreSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyStoreContent": obj.keyStoreContent
          ? model.DatabaseToolsKeyStoreContentSummary.getDeserializedJsonObj(obj.keyStoreContent)
          : undefined,
        "keyStorePassword": obj.keyStorePassword
          ? model.DatabaseToolsKeyStorePasswordSummary.getDeserializedJsonObj(obj.keyStorePassword)
          : undefined
      }
    };

    return jsonObj;
  }
}
