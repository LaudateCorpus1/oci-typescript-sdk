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
 * A format entry is part of a masking format and defines the logic to mask data. A format
 * entry can be a basic masking format such as Random Number, or it can be a library masking
 * format. If a masking format has more than one format entries, the combined output of all
 * the format entries is used for masking.
 *
 */
export interface FormatEntry {
  /**
   * The description of the format entry.
   */
  "description"?: string;

  "type": string;
}

export namespace FormatEntry {
  export function getJsonObj(obj: FormatEntry): object {
    const jsonObj = { ...obj, ...{} };

    if ("type" in obj && obj.type) {
      switch (obj.type) {
        case "RANDOM_STRING":
          return model.RandomStringFormatEntry.getJsonObj(
            <model.RandomStringFormatEntry>(<object>jsonObj),
            true
          );
        case "DETERMINISTIC_SUBSTITUTION":
          return model.DeterministicSubstitutionFormatEntry.getJsonObj(
            <model.DeterministicSubstitutionFormatEntry>(<object>jsonObj),
            true
          );
        case "DETERMINISTIC_ENCRYPTION":
          return model.DeterministicEncryptionFormatEntry.getJsonObj(
            <model.DeterministicEncryptionFormatEntry>(<object>jsonObj),
            true
          );
        case "RANDOM_DECIMAL_NUMBER":
          return model.RandomDecimalNumberFormatEntry.getJsonObj(
            <model.RandomDecimalNumberFormatEntry>(<object>jsonObj),
            true
          );
        case "RANDOM_SUBSTITUTION":
          return model.RandomSubstitutionFormatEntry.getJsonObj(
            <model.RandomSubstitutionFormatEntry>(<object>jsonObj),
            true
          );
        case "POST_PROCESSING_FUNCTION":
          return model.PPFFormatEntry.getJsonObj(<model.PPFFormatEntry>(<object>jsonObj), true);
        case "NULL_VALUE":
          return model.NullValueFormatEntry.getJsonObj(
            <model.NullValueFormatEntry>(<object>jsonObj),
            true
          );
        case "FIXED_NUMBER":
          return model.FixedNumberFormatEntry.getJsonObj(
            <model.FixedNumberFormatEntry>(<object>jsonObj),
            true
          );
        case "REGULAR_EXPRESSION":
          return model.RegularExpressionFormatEntry.getJsonObj(
            <model.RegularExpressionFormatEntry>(<object>jsonObj),
            true
          );
        case "USER_DEFINED_FUNCTION":
          return model.UDFFormatEntry.getJsonObj(<model.UDFFormatEntry>(<object>jsonObj), true);
        case "SHUFFLE":
          return model.ShuffleFormatEntry.getJsonObj(
            <model.ShuffleFormatEntry>(<object>jsonObj),
            true
          );
        case "FIXED_STRING":
          return model.FixedStringFormatEntry.getJsonObj(
            <model.FixedStringFormatEntry>(<object>jsonObj),
            true
          );
        case "TRUNCATE_TABLE":
          return model.TruncateTableFormatEntry.getJsonObj(
            <model.TruncateTableFormatEntry>(<object>jsonObj),
            true
          );
        case "LIBRARY_MASKING_FORMAT":
          return model.LibraryMaskingFormatEntry.getJsonObj(
            <model.LibraryMaskingFormatEntry>(<object>jsonObj),
            true
          );
        case "SQL_EXPRESSION":
          return model.SQLExpressionFormatEntry.getJsonObj(
            <model.SQLExpressionFormatEntry>(<object>jsonObj),
            true
          );
        case "DETERMINISTIC_ENCRYPTION_DATE":
          return model.DeterministicEncryptionDateFormatEntry.getJsonObj(
            <model.DeterministicEncryptionDateFormatEntry>(<object>jsonObj),
            true
          );
        case "RANDOM_DIGITS":
          return model.RandomDigitsFormatEntry.getJsonObj(
            <model.RandomDigitsFormatEntry>(<object>jsonObj),
            true
          );
        case "DELETE_ROWS":
          return model.DeleteRowsFormatEntry.getJsonObj(
            <model.DeleteRowsFormatEntry>(<object>jsonObj),
            true
          );
        case "SUBSTRING":
          return model.SubstringFormatEntry.getJsonObj(
            <model.SubstringFormatEntry>(<object>jsonObj),
            true
          );
        case "RANDOM_NUMBER":
          return model.RandomNumberFormatEntry.getJsonObj(
            <model.RandomNumberFormatEntry>(<object>jsonObj),
            true
          );
        case "PRESERVE_ORIGINAL_DATA":
          return model.PreserveOriginalDataFormatEntry.getJsonObj(
            <model.PreserveOriginalDataFormatEntry>(<object>jsonObj),
            true
          );
        case "RANDOM_DATE":
          return model.RandomDateFormatEntry.getJsonObj(
            <model.RandomDateFormatEntry>(<object>jsonObj),
            true
          );
        case "RANDOM_LIST":
          return model.RandomListFormatEntry.getJsonObj(
            <model.RandomListFormatEntry>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FormatEntry): object {
    const jsonObj = { ...obj, ...{} };

    if ("type" in obj && obj.type) {
      switch (obj.type) {
        case "RANDOM_STRING":
          return model.RandomStringFormatEntry.getDeserializedJsonObj(
            <model.RandomStringFormatEntry>(<object>jsonObj),
            true
          );
        case "DETERMINISTIC_SUBSTITUTION":
          return model.DeterministicSubstitutionFormatEntry.getDeserializedJsonObj(
            <model.DeterministicSubstitutionFormatEntry>(<object>jsonObj),
            true
          );
        case "DETERMINISTIC_ENCRYPTION":
          return model.DeterministicEncryptionFormatEntry.getDeserializedJsonObj(
            <model.DeterministicEncryptionFormatEntry>(<object>jsonObj),
            true
          );
        case "RANDOM_DECIMAL_NUMBER":
          return model.RandomDecimalNumberFormatEntry.getDeserializedJsonObj(
            <model.RandomDecimalNumberFormatEntry>(<object>jsonObj),
            true
          );
        case "RANDOM_SUBSTITUTION":
          return model.RandomSubstitutionFormatEntry.getDeserializedJsonObj(
            <model.RandomSubstitutionFormatEntry>(<object>jsonObj),
            true
          );
        case "POST_PROCESSING_FUNCTION":
          return model.PPFFormatEntry.getDeserializedJsonObj(
            <model.PPFFormatEntry>(<object>jsonObj),
            true
          );
        case "NULL_VALUE":
          return model.NullValueFormatEntry.getDeserializedJsonObj(
            <model.NullValueFormatEntry>(<object>jsonObj),
            true
          );
        case "FIXED_NUMBER":
          return model.FixedNumberFormatEntry.getDeserializedJsonObj(
            <model.FixedNumberFormatEntry>(<object>jsonObj),
            true
          );
        case "REGULAR_EXPRESSION":
          return model.RegularExpressionFormatEntry.getDeserializedJsonObj(
            <model.RegularExpressionFormatEntry>(<object>jsonObj),
            true
          );
        case "USER_DEFINED_FUNCTION":
          return model.UDFFormatEntry.getDeserializedJsonObj(
            <model.UDFFormatEntry>(<object>jsonObj),
            true
          );
        case "SHUFFLE":
          return model.ShuffleFormatEntry.getDeserializedJsonObj(
            <model.ShuffleFormatEntry>(<object>jsonObj),
            true
          );
        case "FIXED_STRING":
          return model.FixedStringFormatEntry.getDeserializedJsonObj(
            <model.FixedStringFormatEntry>(<object>jsonObj),
            true
          );
        case "TRUNCATE_TABLE":
          return model.TruncateTableFormatEntry.getDeserializedJsonObj(
            <model.TruncateTableFormatEntry>(<object>jsonObj),
            true
          );
        case "LIBRARY_MASKING_FORMAT":
          return model.LibraryMaskingFormatEntry.getDeserializedJsonObj(
            <model.LibraryMaskingFormatEntry>(<object>jsonObj),
            true
          );
        case "SQL_EXPRESSION":
          return model.SQLExpressionFormatEntry.getDeserializedJsonObj(
            <model.SQLExpressionFormatEntry>(<object>jsonObj),
            true
          );
        case "DETERMINISTIC_ENCRYPTION_DATE":
          return model.DeterministicEncryptionDateFormatEntry.getDeserializedJsonObj(
            <model.DeterministicEncryptionDateFormatEntry>(<object>jsonObj),
            true
          );
        case "RANDOM_DIGITS":
          return model.RandomDigitsFormatEntry.getDeserializedJsonObj(
            <model.RandomDigitsFormatEntry>(<object>jsonObj),
            true
          );
        case "DELETE_ROWS":
          return model.DeleteRowsFormatEntry.getDeserializedJsonObj(
            <model.DeleteRowsFormatEntry>(<object>jsonObj),
            true
          );
        case "SUBSTRING":
          return model.SubstringFormatEntry.getDeserializedJsonObj(
            <model.SubstringFormatEntry>(<object>jsonObj),
            true
          );
        case "RANDOM_NUMBER":
          return model.RandomNumberFormatEntry.getDeserializedJsonObj(
            <model.RandomNumberFormatEntry>(<object>jsonObj),
            true
          );
        case "PRESERVE_ORIGINAL_DATA":
          return model.PreserveOriginalDataFormatEntry.getDeserializedJsonObj(
            <model.PreserveOriginalDataFormatEntry>(<object>jsonObj),
            true
          );
        case "RANDOM_DATE":
          return model.RandomDateFormatEntry.getDeserializedJsonObj(
            <model.RandomDateFormatEntry>(<object>jsonObj),
            true
          );
        case "RANDOM_LIST":
          return model.RandomListFormatEntry.getDeserializedJsonObj(
            <model.RandomListFormatEntry>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
}
