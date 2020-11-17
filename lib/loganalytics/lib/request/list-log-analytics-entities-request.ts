/**
 *
 *
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
export interface ListLogAnalyticsEntitiesRequest extends common.BaseRequest {
  /**
   * The Logging Analytics namespace used for the request.
   *
   */
  "namespaceName": string;
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * A filter to return only log analytics entities whose name matches the entire name given. The match
   * is case-insensitive.
   *
   */
  "name"?: string;
  /**
   * A filter to return only log analytics entities whose name contains the name given. The match
   * is case-insensitive.
   *
   */
  "nameContains"?: string;
  /**
   * A filter to return only log analytics entities whose entityTypeName matches the entire log analytics entity type name of
   * one of the entityTypeNames given in the list. The match is case-insensitive.
   *
   */
  "entityTypeName"?: Array<string>;
  /**
   * A filter to return only log analytics entities whose cloudResourceId matches the cloudResourceId given.
   *
   */
  "cloudResourceId"?: string;
  /**
   * A filter to return only those log analytics entities with the specified lifecycle state. The state
   * value is case-insensitive.
   *
   */
  "lifecycleState"?: model.EntityLifecycleStates;
  /**
   * A filter to return only log analytics entities whose lifecycleDetails contains the specified string.
   *
   */
  "lifecycleDetailsContains"?: string;
  /**
   * A filter to return only those log analytics entities whose managementAgentId is null or is not null.
   *
   */
  "isManagementAgentIdNull"?: ListLogAnalyticsEntitiesRequest.IsManagementAgentIdNull;
  /**
   * A filter to return only log analytics entities whose hostname matches the entire hostname given.
   *
   */
  "hostname"?: string;
  /**
   * A filter to return only log analytics entities whose hostname contains the substring given.
   * The match is case-insensitive.
   *
   */
  "hostnameContains"?: string;
  /**
   * A filter to return only log analytics entities whose sourceId matches the sourceId given.
   *
   */
  "sourceId"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: ListLogAnalyticsEntitiesRequest.SortOrder;
  /**
   * The field to sort entities by. Only one sort order may be provided. Default order for timeCreated and timeUpdated
   * is descending. Default order for entity name is ascending. If no value is specified timeCreated is default.
   *
   */
  "sortBy"?: ListLogAnalyticsEntitiesRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListLogAnalyticsEntitiesRequest {
  export enum IsManagementAgentIdNull {
    True = "true",
    False = "false"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeCreated = "timeCreated",
    TimeUpdated = "timeUpdated",
    Name = "name"
  }
}
