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
 * summary of fields
 */
export interface LogAnalyticsFieldSummary {
  /**
   * The name this field is given in the common event expression standard from mitre.org.
   * This is used for reference when exporting content conforming to CEE standard
   *
   */
  "ceeAlias"?: string;
  /**
   * data type
   */
  "dataType"?: string;
  /**
   * default regular expression
   */
  "regularExpression"?: string;
  /**
   * description
   */
  "description"?: string;
  /**
   * display name
   */
  "displayName"?: string;
  /**
   * edit version
   */
  "editVersion"?: number;
  /**
   * facet priority
   */
  "facetPriority"?: number;
  /**
   * internal name
   */
  "name"?: string;
  /**
   * is facet eligible flag
   */
  "isFacetEligible"?: boolean;
  /**
   * is high cardinality flag
   */
  "isHighCardinality"?: boolean;
  /**
   * is larget data flag
   */
  "isLargeData"?: boolean;
  /**
   * is multi-valued flag
   */
  "isMultiValued"?: boolean;
  /**
   * is primary flag
   */
  "isPrimary"?: boolean;
  /**
   * is system flag
   */
  "isSystem"?: boolean;
  /**
   * is summarizable flag
   */
  "isSummarizable"?: boolean;
  /**
   * mappable
   */
  "mappedValue"?: string;
  /**
   * metric key eligible
   */
  "isMetricKeyEligible"?: boolean;
  /**
   * metric value eligible
   */
  "isMetricValueEligible"?: boolean;
  /**
   * range facet eligible
   */
  "rangeFacetEligible"?: number;
  /**
   * table eligible
   */
  "isTableEligible"?: boolean;
  /**
   * unit type
   */
  "unitType"?: string;
}

export namespace LogAnalyticsFieldSummary {
  export function getJsonObj(obj: LogAnalyticsFieldSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
