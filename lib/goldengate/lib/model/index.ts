/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ActionType from "./action-type";
export import ActionType = ActionType.ActionType;
import * as CancelDeploymentBackupDetails from "./cancel-deployment-backup-details";
export import CancelDeploymentBackupDetails = CancelDeploymentBackupDetails.CancelDeploymentBackupDetails;
import * as CancelDeploymentBackupType from "./cancel-deployment-backup-type";
export import CancelDeploymentBackupType = CancelDeploymentBackupType.CancelDeploymentBackupType;
import * as ChangeDatabaseRegistrationCompartmentDetails from "./change-database-registration-compartment-details";
export import ChangeDatabaseRegistrationCompartmentDetails = ChangeDatabaseRegistrationCompartmentDetails.ChangeDatabaseRegistrationCompartmentDetails;
import * as ChangeDeploymentBackupCompartmentDetails from "./change-deployment-backup-compartment-details";
export import ChangeDeploymentBackupCompartmentDetails = ChangeDeploymentBackupCompartmentDetails.ChangeDeploymentBackupCompartmentDetails;
import * as ChangeDeploymentCompartmentDetails from "./change-deployment-compartment-details";
export import ChangeDeploymentCompartmentDetails = ChangeDeploymentCompartmentDetails.ChangeDeploymentCompartmentDetails;
import * as CreateDatabaseRegistrationDetails from "./create-database-registration-details";
export import CreateDatabaseRegistrationDetails = CreateDatabaseRegistrationDetails.CreateDatabaseRegistrationDetails;
import * as CreateDeploymentBackupDetails from "./create-deployment-backup-details";
export import CreateDeploymentBackupDetails = CreateDeploymentBackupDetails.CreateDeploymentBackupDetails;
import * as CreateDeploymentDetails from "./create-deployment-details";
export import CreateDeploymentDetails = CreateDeploymentDetails.CreateDeploymentDetails;
import * as CreateOggDeploymentDetails from "./create-ogg-deployment-details";
export import CreateOggDeploymentDetails = CreateOggDeploymentDetails.CreateOggDeploymentDetails;
import * as DatabaseRegistration from "./database-registration";
export import DatabaseRegistration = DatabaseRegistration.DatabaseRegistration;
import * as DatabaseRegistrationCollection from "./database-registration-collection";
export import DatabaseRegistrationCollection = DatabaseRegistrationCollection.DatabaseRegistrationCollection;
import * as DatabaseRegistrationSummary from "./database-registration-summary";
export import DatabaseRegistrationSummary = DatabaseRegistrationSummary.DatabaseRegistrationSummary;
import * as Deployment from "./deployment";
export import Deployment = Deployment.Deployment;
import * as DeploymentBackup from "./deployment-backup";
export import DeploymentBackup = DeploymentBackup.DeploymentBackup;
import * as DeploymentBackupCollection from "./deployment-backup-collection";
export import DeploymentBackupCollection = DeploymentBackupCollection.DeploymentBackupCollection;
import * as DeploymentBackupSummary from "./deployment-backup-summary";
export import DeploymentBackupSummary = DeploymentBackupSummary.DeploymentBackupSummary;
import * as DeploymentBackupType from "./deployment-backup-type";
export import DeploymentBackupType = DeploymentBackupType.DeploymentBackupType;
import * as DeploymentCollection from "./deployment-collection";
export import DeploymentCollection = DeploymentCollection.DeploymentCollection;
import * as DeploymentSummary from "./deployment-summary";
export import DeploymentSummary = DeploymentSummary.DeploymentSummary;
import * as DeploymentType from "./deployment-type";
export import DeploymentType = DeploymentType.DeploymentType;
import * as DeploymentUpgrade from "./deployment-upgrade";
export import DeploymentUpgrade = DeploymentUpgrade.DeploymentUpgrade;
import * as DeploymentUpgradeCollection from "./deployment-upgrade-collection";
export import DeploymentUpgradeCollection = DeploymentUpgradeCollection.DeploymentUpgradeCollection;
import * as DeploymentUpgradeLifecycleState from "./deployment-upgrade-lifecycle-state";
export import DeploymentUpgradeLifecycleState = DeploymentUpgradeLifecycleState.DeploymentUpgradeLifecycleState;
import * as DeploymentUpgradeSummary from "./deployment-upgrade-summary";
export import DeploymentUpgradeSummary = DeploymentUpgradeSummary.DeploymentUpgradeSummary;
import * as DeploymentUpgradeType from "./deployment-upgrade-type";
export import DeploymentUpgradeType = DeploymentUpgradeType.DeploymentUpgradeType;
import * as LicenseModel from "./license-model";
export import LicenseModel = LicenseModel.LicenseModel;
import * as LifecycleState from "./lifecycle-state";
export import LifecycleState = LifecycleState.LifecycleState;
import * as LifecycleSubState from "./lifecycle-sub-state";
export import LifecycleSubState = LifecycleSubState.LifecycleSubState;
import * as OggDeployment from "./ogg-deployment";
export import OggDeployment = OggDeployment.OggDeployment;
import * as OperationStatus from "./operation-status";
export import OperationStatus = OperationStatus.OperationStatus;
import * as OperationType from "./operation-type";
export import OperationType = OperationType.OperationType;
import * as RestoreDeploymentDetails from "./restore-deployment-details";
export import RestoreDeploymentDetails = RestoreDeploymentDetails.RestoreDeploymentDetails;
import * as RestoreDeploymentType from "./restore-deployment-type";
export import RestoreDeploymentType = RestoreDeploymentType.RestoreDeploymentType;
import * as SortOrder from "./sort-order";
export import SortOrder = SortOrder.SortOrder;
import * as StartDeploymentDetails from "./start-deployment-details";
export import StartDeploymentDetails = StartDeploymentDetails.StartDeploymentDetails;
import * as StartDeploymentType from "./start-deployment-type";
export import StartDeploymentType = StartDeploymentType.StartDeploymentType;
import * as StopDeploymentDetails from "./stop-deployment-details";
export import StopDeploymentDetails = StopDeploymentDetails.StopDeploymentDetails;
import * as StopDeploymentType from "./stop-deployment-type";
export import StopDeploymentType = StopDeploymentType.StopDeploymentType;
import * as UpdateDatabaseRegistrationDetails from "./update-database-registration-details";
export import UpdateDatabaseRegistrationDetails = UpdateDatabaseRegistrationDetails.UpdateDatabaseRegistrationDetails;
import * as UpdateDeploymentBackupDetails from "./update-deployment-backup-details";
export import UpdateDeploymentBackupDetails = UpdateDeploymentBackupDetails.UpdateDeploymentBackupDetails;
import * as UpdateDeploymentDetails from "./update-deployment-details";
export import UpdateDeploymentDetails = UpdateDeploymentDetails.UpdateDeploymentDetails;
import * as UpdateOggDeploymentDetails from "./update-ogg-deployment-details";
export import UpdateOggDeploymentDetails = UpdateOggDeploymentDetails.UpdateOggDeploymentDetails;
import * as UpgradeDeploymentDetails from "./upgrade-deployment-details";
export import UpgradeDeploymentDetails = UpgradeDeploymentDetails.UpgradeDeploymentDetails;
import * as UpgradeDeploymentType from "./upgrade-deployment-type";
export import UpgradeDeploymentType = UpgradeDeploymentType.UpgradeDeploymentType;
import * as WorkRequest from "./work-request";
export import WorkRequest = WorkRequest.WorkRequest;
import * as WorkRequestError from "./work-request-error";
export import WorkRequestError = WorkRequestError.WorkRequestError;
import * as WorkRequestLogEntry from "./work-request-log-entry";
export import WorkRequestLogEntry = WorkRequestLogEntry.WorkRequestLogEntry;
import * as WorkRequestResource from "./work-request-resource";
export import WorkRequestResource = WorkRequestResource.WorkRequestResource;

import * as DefaultCancelDeploymentBackupDetails from "./default-cancel-deployment-backup-details";
export import DefaultCancelDeploymentBackupDetails = DefaultCancelDeploymentBackupDetails.DefaultCancelDeploymentBackupDetails;
import * as DefaultRestoreDeploymentDetails from "./default-restore-deployment-details";
export import DefaultRestoreDeploymentDetails = DefaultRestoreDeploymentDetails.DefaultRestoreDeploymentDetails;
import * as DefaultStartDeploymentDetails from "./default-start-deployment-details";
export import DefaultStartDeploymentDetails = DefaultStartDeploymentDetails.DefaultStartDeploymentDetails;
import * as DefaultStopDeploymentDetails from "./default-stop-deployment-details";
export import DefaultStopDeploymentDetails = DefaultStopDeploymentDetails.DefaultStopDeploymentDetails;
import * as UpgradeDeploymentCurrentReleaseDetails from "./upgrade-deployment-current-release-details";
export import UpgradeDeploymentCurrentReleaseDetails = UpgradeDeploymentCurrentReleaseDetails.UpgradeDeploymentCurrentReleaseDetails;
