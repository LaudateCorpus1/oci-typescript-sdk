/**
 * Logging Search API
 * Search for logs in your compartments, log groups, and log objects.
 * OpenAPI spec version: 20190909
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
 * Search request object.
 */
export interface SearchLogsDetails {
  /**
   * Start filter log's date and time, in the format defined by RFC3339.
   *
   */
  "timeStart": Date;
  /**
   * End filter log's date and time, in the format defined by RFC3339.
   *
   */
  "timeEnd": Date;
  /**
   * Query corresponding to the search operation. This query is parsed and validated before execution and
   * should follow the specification. For more information on the query language specification, see
   * [Logging Query Language Specification](https://docs.cloud.oracle.com/Content/Logging/Reference/query_language_specification.htm).
   *
   */
  "searchQuery": string;
  /**
   * Whether to return field schema information for the log stream specified in searchQuery.
   *
   */
  "isReturnFieldInfo"?: boolean;
}

export namespace SearchLogsDetails {
  export function getJsonObj(obj: SearchLogsDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
