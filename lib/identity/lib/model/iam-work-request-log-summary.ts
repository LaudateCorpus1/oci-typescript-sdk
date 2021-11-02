/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
 * OpenAPI spec version: 20160918
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
 * The log entity for a IAM work request.
 *
 */
export interface IamWorkRequestLogSummary {
  /**
   * A human-readable error string.
   */
  "message": string;
  /**
   * Date and time the log was written, in the format defined by RFC3339.
   * Example: `2016-08-25T21:10:29.600Z`
   *
   */
  "timestamp"?: Date;
}

export namespace IamWorkRequestLogSummary {
  export function getJsonObj(obj: IamWorkRequestLogSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IamWorkRequestLogSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
