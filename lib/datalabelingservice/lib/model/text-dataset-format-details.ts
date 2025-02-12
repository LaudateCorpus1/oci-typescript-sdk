/**
 * Data Labeling Management API
 * Use Data Labeling Management API to create, list, edit & delete datasets.
 * OpenAPI spec version: 20211001
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
 * Indicates the dataset is comprised of txt files.
 */
export interface TextDatasetFormatDetails extends model.DatasetFormatDetails {
  "formatType": string;
}

export namespace TextDatasetFormatDetails {
  export function getJsonObj(obj: TextDatasetFormatDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatasetFormatDetails.getJsonObj(obj) as TextDatasetFormatDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const formatType = "TEXT";
  export function getDeserializedJsonObj(
    obj: TextDatasetFormatDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatasetFormatDetails.getDeserializedJsonObj(obj) as TextDatasetFormatDetails)),
      ...{}
    };

    return jsonObj;
  }
}
