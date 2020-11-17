/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
* The Oracle Database software version.
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator. If you're an administrator who needs to write policies to give users access, see [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface DbVersionSummary {
  /**
   * A valid Oracle Database version.
   */
  "version": string;
  /**
   * True if this version of the Oracle Database software is the latest version for a release.
   */
  "isLatestForMajorVersion"?: boolean;
  /**
   * True if this version of the Oracle Database software supports pluggable databases.
   */
  "supportsPdb"?: boolean;
  /**
   * True if this version of the Oracle Database software is the preview version.
   */
  "isPreviewDbVersion"?: boolean;
  /**
   * True if this version of the Oracle Database software is supported for Upgrade.
   */
  "isUpgradeSupported"?: boolean;
}

export namespace DbVersionSummary {
  export function getJsonObj(obj: DbVersionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
