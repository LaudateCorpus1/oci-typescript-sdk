/**
 * VisionService API
 * A description of the VisionService API.
 * OpenAPI spec version: 20220125
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
 * Table extracted from a document.
 */
export interface Table {
  /**
   * Number of rows. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "rowCount": number;
  /**
   * Number of columns. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "columnCount": number;
  /**
   * Header rows.
   */
  "headerRows": Array<model.TableRow>;
  /**
   * Body rows.
   */
  "bodyRows": Array<model.TableRow>;
  /**
   * Footer rows.
   */
  "footerRows": Array<model.TableRow>;
  /**
   * Confidence score between 0 to 1. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "confidence": number;
  "boundingPolygon": model.BoundingPolygon;
}

export namespace Table {
  export function getJsonObj(obj: Table): object {
    const jsonObj = {
      ...obj,
      ...{
        "headerRows": obj.headerRows
          ? obj.headerRows.map(item => {
              return model.TableRow.getJsonObj(item);
            })
          : undefined,
        "bodyRows": obj.bodyRows
          ? obj.bodyRows.map(item => {
              return model.TableRow.getJsonObj(item);
            })
          : undefined,
        "footerRows": obj.footerRows
          ? obj.footerRows.map(item => {
              return model.TableRow.getJsonObj(item);
            })
          : undefined,

        "boundingPolygon": obj.boundingPolygon
          ? model.BoundingPolygon.getJsonObj(obj.boundingPolygon)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Table): object {
    const jsonObj = {
      ...obj,
      ...{
        "headerRows": obj.headerRows
          ? obj.headerRows.map(item => {
              return model.TableRow.getDeserializedJsonObj(item);
            })
          : undefined,
        "bodyRows": obj.bodyRows
          ? obj.bodyRows.map(item => {
              return model.TableRow.getDeserializedJsonObj(item);
            })
          : undefined,
        "footerRows": obj.footerRows
          ? obj.footerRows.map(item => {
              return model.TableRow.getDeserializedJsonObj(item);
            })
          : undefined,

        "boundingPolygon": obj.boundingPolygon
          ? model.BoundingPolygon.getDeserializedJsonObj(obj.boundingPolygon)
          : undefined
      }
    };

    return jsonObj;
  }
}
