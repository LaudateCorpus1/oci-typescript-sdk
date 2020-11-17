/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * LogAnalyticsParserFilter
 */
export interface LogAnalyticsParserFilter {
  /**
   * id
   */
  "id"?: string;
  "parser"?: model.LogAnalyticsParser;
  /**
   * agent version
   */
  "agentVersion"?: string;
  /**
   * is in use flag
   */
  "isInUse"?: number;
  /**
   * operating system
   */
  "operatingSystem"?: string;
  /**
   * parser Id
   */
  "parserId"?: number;
  /**
   * version
   */
  "version"?: string;
}

export namespace LogAnalyticsParserFilter {
  export function getJsonObj(obj: LogAnalyticsParserFilter): object {
    const jsonObj = {
      ...obj,
      ...{
        "parser": obj.parser ? model.LogAnalyticsParser.getJsonObj(obj.parser) : undefined
      }
    };

    return jsonObj;
  }
}
