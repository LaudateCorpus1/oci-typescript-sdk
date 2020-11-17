/**
 * ManagementDashboard API
 * API for the Management Dashboard micro-service. Use this API for dashboard and saved search metadata preservation and to perform  tasks such as creating a dashboard, creating a saved search, and obtaining a list of dashboards and saved searches in a compartment.
    

 * OpenAPI spec version: 20200901
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
 * Summary of the properties of a saved search.
 */
export interface ManagementSavedSearchSummary {
  /**
   * ID of the saved search.
   */
  "id": string;
  /**
   * Display name of the saved search.
   */
  "displayName": string;
  /**
   * Determines whether the saved search is an Out-of-the-Box (OOB) saved search. Note that OOB saved searches are only provided by Oracle and cannot be modified.
   */
  "isOobSavedSearch": boolean;
  /**
   * ID of the service (for example log-analytics) that owns the saved search. Each service has a unique ID.
   */
  "providerId": string;
  /**
   * OCID of the compartment in which the saved search resides.
   */
  "compartmentId": string;
  /**
   * Description of the saved search.
   */
  "description": string;
  /**
   * JSON that contains internationalization options.
   */
  "nls": any;
  /**
   * Determines how the saved search is displayed in a dashboard.
   */
  "type": model.SavedSearchTypes;
  /**
   * JSON that contains user interface options.
   */
  "uiConfig": any;
  /**
   * Array of JSON that contain data source options.
   */
  "dataConfig": Array<any>;
  /**
   * User who created the saved search.
   */
  "createdBy": string;
  /**
   * User who updated the saved search.
   */
  "updatedBy": string;
  /**
   * Date and time the saved search was created.
   */
  "timeCreated": Date;
  /**
   * Date and time the saved search was updated.
   */
  "timeUpdated": Date;
  /**
   * Screen image of the saved search.
   */
  "screenImage": string;
  /**
   * Version of the metadata.
   */
  "metadataVersion": string;
  /**
   * Reference to the HTML file of the widget.
   */
  "widgetTemplate": string;
  /**
   * Reference to the view model of the widget.
   */
  "widgetVM": string;
  /**
   * Current lifecycle state of the saved search.
   */
  "lifecycleState": model.LifecycleStates;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ManagementSavedSearchSummary {
  export function getJsonObj(obj: ManagementSavedSearchSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
