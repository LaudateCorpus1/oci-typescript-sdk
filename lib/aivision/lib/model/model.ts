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
 * Machine-learned Model.
 */
export interface Model {
  /**
   * Unique identifier that is immutable after creation.
   */
  "id": string;
  /**
   * Human-friendly name for the model, which can be changed.
   */
  "displayName"?: string;
  /**
   * Optional description of the model.
   */
  "description"?: string;
  /**
   * Compartment identifier.
   */
  "compartmentId": string;
  /**
   * What type of Vision model this is.
   */
  "modelType": Model.ModelType;
  /**
   * Set to true when experimenting with a new model type or dataset so model training is quick, with a predefined low number of passes through the training data.
   */
  "isQuickMode"?: boolean;
  /**
   * Maximum model training duration in hours, expressed as a decimal fraction. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxTrainingDurationInHours"?: number;
  /**
   * Total hours actually used for model training. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "trainedDurationInHours"?: number;
  "trainingDataset": model.DataScienceLabelingDataset | model.ObjectStorageDataset;
  "testingDataset"?: model.DataScienceLabelingDataset | model.ObjectStorageDataset;
  "validationDataset"?: model.DataScienceLabelingDataset | model.ObjectStorageDataset;
  /**
   * The version of the model.
   */
  "modelVersion": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the project which contains the model.
   */
  "projectId": string;
  /**
   * When the model was created, as an RFC3339 datetime string.
   */
  "timeCreated": Date;
  /**
   * When the model was updated, as an RFC3339 datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * Current state of the model.
   */
  "lifecycleState": Model.LifecycleState;
  /**
   * A message describing the current state in more detail which can provide actionable information if training failed.
   */
  "lifecycleDetails"?: string;
  /**
   * Precision of the trained model. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "precision"?: number;
  /**
   * Recall of the trained model. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "recall"?: number;
  /**
   * Mean average precision of the trained model. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "averagePrecision"?: number;
  /**
   * Intersection over union threshold used for calculating precision and recall. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "confidenceThreshold"?: number;
  /**
   * Number of images in the dataset used to train, validate, and test the model. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalImageCount"?: number;
  /**
   * Number of images set aside for evaluating model performance metrics after training. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "testImageCount"?: number;
  /**
   * Complete set of per-label metrics for successfully trained model.
   */
  "metrics"?: string;
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
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Model {
  export enum ModelType {
    ImageClassification = "IMAGE_CLASSIFICATION",
    ObjectDetection = "OBJECT_DETECTION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Model): object {
    const jsonObj = {
      ...obj,
      ...{
        "trainingDataset": obj.trainingDataset
          ? model.Dataset.getJsonObj(obj.trainingDataset)
          : undefined,
        "testingDataset": obj.testingDataset
          ? model.Dataset.getJsonObj(obj.testingDataset)
          : undefined,
        "validationDataset": obj.validationDataset
          ? model.Dataset.getJsonObj(obj.validationDataset)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Model): object {
    const jsonObj = {
      ...obj,
      ...{
        "trainingDataset": obj.trainingDataset
          ? model.Dataset.getDeserializedJsonObj(obj.trainingDataset)
          : undefined,
        "testingDataset": obj.testingDataset
          ? model.Dataset.getDeserializedJsonObj(obj.testingDataset)
          : undefined,
        "validationDataset": obj.validationDataset
          ? model.Dataset.getDeserializedJsonObj(obj.validationDataset)
          : undefined
      }
    };

    return jsonObj;
  }
}
