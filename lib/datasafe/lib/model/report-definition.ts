/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * Description of report definition.
 */
export interface ReportDefinition {
  /**
   * Name of the report definition.
   */
  "displayName": string;
  /**
   * The OCID of the report definition.
   */
  "id": string;
  /**
   * The OCID of the parent report definition. In the case of seeded report definition, this is same as definition OCID.
   */
  "parentId"?: string;
  /**
   * Specifies the name of the category that this report belongs to.
   */
  "category"?: ReportDefinition.Category;
  /**
   * A description of the report definition.
   */
  "description"?: string;
  /**
   * Specifies the name of a resource that provides data for the report. For example alerts, events.
   */
  "dataSource"?: model.ReportDefinitionDataSource;
  /**
   * Signifies whether the definition is seeded or user defined. Values can either be 'true' or 'false'.
   */
  "isSeeded"?: boolean;
  /**
   * Specifies how the report definitions are ordered in the display. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "displayOrder"?: number;
  /**
   * Specifies the time at which the report definition was created.
   */
  "timeCreated"?: Date;
  /**
   * The date and time of the report definition update in Data Safe.
   */
  "timeUpdated"?: Date;
  /**
   * Additional scim filters used to specialize the report.
   */
  "scimFilter"?: string;
  /**
   * An array of column objects in the order (left to right) displayed in the report. A column object stores all information about a column, including the name displayed on the UI, corresponding field name in the data source, data type of the column, and column visibility (if the column is visible to the user).
   */
  "columnInfo"?: Array<model.Column>;
  /**
   * An array of column filter objects. A column Filter object stores all information about a column filter including field name, an operator, one or more expressions, if the filter is enabled, or if the filter is hidden.
   */
  "columnFilters"?: Array<model.ColumnFilter>;
  /**
   * An array of column sorting objects. Each column sorting object stores the column name to be sorted and if the sorting is in ascending order; sorting is done by the first column in the array, then by the second column in the array, etc.
   */
  "columnSortings"?: Array<model.ColumnSorting>;
  /**
   * An array of report summary objects in the order (left to right)  displayed in the report.  A  report summary object stores all information about summary of report to be displayed, including the name displayed on UI, the display order, corresponding group by and count of values, summary visibility (if the summary is visible to user).
   */
  "summary"?: Array<model.Summary>;
  /**
   * The OCID of the compartment containing the report definition.
   */
  "compartmentId": string;
  /**
   * The current state of the report.
   */
  "lifecycleState": model.ReportDefinitionLifecycleState;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see Resource Tags.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ReportDefinition {
  export enum Category {
    CustomReports = "CUSTOM_REPORTS",
    Summary = "SUMMARY",
    ActivityAuditing = "ACTIVITY_AUDITING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ReportDefinition): object {
    const jsonObj = {
      ...obj,
      ...{
        "columnInfo": obj.columnInfo
          ? obj.columnInfo.map(item => {
              return model.Column.getJsonObj(item);
            })
          : undefined,
        "columnFilters": obj.columnFilters
          ? obj.columnFilters.map(item => {
              return model.ColumnFilter.getJsonObj(item);
            })
          : undefined,
        "columnSortings": obj.columnSortings
          ? obj.columnSortings.map(item => {
              return model.ColumnSorting.getJsonObj(item);
            })
          : undefined,
        "summary": obj.summary
          ? obj.summary.map(item => {
              return model.Summary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ReportDefinition): object {
    const jsonObj = {
      ...obj,
      ...{
        "columnInfo": obj.columnInfo
          ? obj.columnInfo.map(item => {
              return model.Column.getDeserializedJsonObj(item);
            })
          : undefined,
        "columnFilters": obj.columnFilters
          ? obj.columnFilters.map(item => {
              return model.ColumnFilter.getDeserializedJsonObj(item);
            })
          : undefined,
        "columnSortings": obj.columnSortings
          ? obj.columnSortings.map(item => {
              return model.ColumnSorting.getDeserializedJsonObj(item);
            })
          : undefined,
        "summary": obj.summary
          ? obj.summary.map(item => {
              return model.Summary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
