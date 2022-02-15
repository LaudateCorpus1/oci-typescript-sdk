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
 * The Delete Rows masking format deletes the rows that meet a user-specified
 * condition. It is useful in conditional masking when you want to delete a
 * subset of values in a column and mask the remaining values using some other
 * masking formats. You should be careful while using this masking format. If
 * no condition is specified, all rows in a table are deleted. If a column is
 * being masked using Delete Rows, there must not be a foreign key constraint
 * or dependent column referring to the table. To learn more, check Delete Rows
 * in the Data Safe documentation.
 *
 */
export interface DeleteRowsFormatEntry extends model.FormatEntry {
  "type": string;
}

export namespace DeleteRowsFormatEntry {
  export function getJsonObj(obj: DeleteRowsFormatEntry, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.FormatEntry.getJsonObj(obj) as DeleteRowsFormatEntry)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "DELETE_ROWS";
  export function getDeserializedJsonObj(
    obj: DeleteRowsFormatEntry,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.FormatEntry.getDeserializedJsonObj(obj) as DeleteRowsFormatEntry)),
      ...{}
    };

    return jsonObj;
  }
}
