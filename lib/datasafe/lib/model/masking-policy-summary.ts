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
 * Summary of a masking policy.
 */
export interface MaskingPolicySummary {
  /**
   * The OCID of the masking policy.
   */
  "id": string;
  /**
   * The OCID of the compartment that contains the masking policy.
   */
  "compartmentId": string;
  /**
   * The display name of the masking policy.
   */
  "displayName": string;
  /**
   * The date and time the masking policy was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeCreated": Date;
  /**
   * The date and time the masking policy was last updated, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeUpdated": Date;
  /**
   * The current state of the masking policy.
   */
  "lifecycleState": model.MaskingLifecycleState;
  /**
   * The description of the masking policy.
   */
  "description"?: string;
  "columnSource"?: model.ColumnSourceFromSdmDetails | model.ColumnSourceFromTargetDetails;
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
}

export namespace MaskingPolicySummary {
  export function getJsonObj(obj: MaskingPolicySummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "columnSource": obj.columnSource
          ? model.ColumnSourceDetails.getJsonObj(obj.columnSource)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MaskingPolicySummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "columnSource": obj.columnSource
          ? model.ColumnSourceDetails.getDeserializedJsonObj(obj.columnSource)
          : undefined
      }
    };

    return jsonObj;
  }
}
