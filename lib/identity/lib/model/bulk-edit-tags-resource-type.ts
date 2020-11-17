/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
 * OpenAPI spec version: 20160918
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

export interface BulkEditTagsResourceType {
  /**
   * The unique name of the resource type.
   *
   */
  "resourceType": string;
  /**
    * The metadata keys required to identify the resource.
* <p>
For example, for a bucket, the value of `metadataKeys` will be [\"namespaceName\", \"bucketName\"].
* This information will match the API documentation. 
* See [UpdateBucket](https://docs.cloud.oracle.com/api/#/en/objectstorage/latest/Bucket/UpdateBucket) and
* [DeleteBucket](https://docs.cloud.oracle.com/api/#/en/objectstorage/latest/Bucket/DeleteBucket).
* 
    */
  "metadataKeys"?: Array<string>;
}

export namespace BulkEditTagsResourceType {
  export function getJsonObj(obj: BulkEditTagsResourceType): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
