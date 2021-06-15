/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * The details required to establish a connection to the database using an on-premises connector.
 */
export interface OnPremiseConnector extends model.ConnectionOption {
  /**
   * The OCID of the on-premises connector.
   */
  "onPremConnectorId"?: string;

  "connectionType": string;
}

export namespace OnPremiseConnector {
  export function getJsonObj(obj: OnPremiseConnector, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.ConnectionOption.getJsonObj(obj) as OnPremiseConnector)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "ONPREM_CONNECTOR";
}
