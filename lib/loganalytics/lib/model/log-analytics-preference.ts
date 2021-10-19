/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * The preference information
 */
export interface LogAnalyticsPreference {
  /**
   * The preference name. Currently, only \"DEFAULT_HOMEPAGE\" is supported.
   */
  "name"?: string;
  /**
   * The preference value.
   */
  "value"?: string;
}

export namespace LogAnalyticsPreference {
  export function getJsonObj(obj: LogAnalyticsPreference): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsPreference): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
