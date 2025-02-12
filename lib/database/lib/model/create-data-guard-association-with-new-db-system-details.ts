/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
* The configuration details for creating a Data Guard association for a virtual machine DB system database. For this type of DB system database, the `creationType` should be `NewDbSystem`. A new DB system will be launched to create the standby database.
* <p>
To create a Data Guard association for a database in a bare metal or Exadata DB system, use the {@link #createDataGuardAssociationToExistingDbSystemDetails(CreateDataGuardAssociationToExistingDbSystemDetailsRequest) createDataGuardAssociationToExistingDbSystemDetails} subtype instead.
* 
*/
export interface CreateDataGuardAssociationWithNewDbSystemDetails
  extends model.CreateDataGuardAssociationDetails {
  /**
   * The user-friendly name of the DB system that will contain the the standby database. The display name does not have to be unique.
   */
  "displayName"?: string;
  /**
   * The name of the availability domain that the standby database DB system will be located in. For example- \"Uocm:PHX-AD-1\".
   */
  "availabilityDomain"?: string;
  /**
    * The virtual machine DB system shape to launch for the standby database in the Data Guard association. The shape determines the number of CPU cores and the amount of memory available for the DB system.
* Only virtual machine shapes are valid options. If you do not supply this parameter, the default shape is the shape of the primary DB system.
* <p>
To get a list of all shapes, use the {@link #listDbSystemShapes(ListDbSystemShapesRequest) listDbSystemShapes} operation.
* 
    */
  "shape"?: string;
  /**
    * The OCID of the subnet the DB system is associated with.
* **Subnet Restrictions:**
* - For 1- and 2-node RAC DB systems, do not use a subnet that overlaps with 192.168.16.16/28
* <p>
These subnets are used by the Oracle Clusterware private interconnect on the database instance.
* Specifying an overlapping subnet will cause the private interconnect to malfunction.
* This restriction applies to both the client subnet and backup subnet.
* 
    */
  "subnetId"?: string;
  /**
   * A list of the [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that this resource belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm).
   * **NsgIds restrictions:**
   * - Autonomous Databases with private access require at least 1 Network Security Group (NSG). The nsgIds array cannot be empty.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * A list of the [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that the backup network of this DB system belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm). Applicable only to Exadata systems.
   *
   */
  "backupNetworkNsgIds"?: Array<string>;
  /**
   * The hostname for the DB node.
   */
  "hostname"?: string;

  "creationType": string;
}

export namespace CreateDataGuardAssociationWithNewDbSystemDetails {
  export function getJsonObj(
    obj: CreateDataGuardAssociationWithNewDbSystemDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDataGuardAssociationDetails.getJsonObj(
            obj
          ) as CreateDataGuardAssociationWithNewDbSystemDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const creationType = "NewDbSystem";
  export function getDeserializedJsonObj(
    obj: CreateDataGuardAssociationWithNewDbSystemDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDataGuardAssociationDetails.getDeserializedJsonObj(
            obj
          ) as CreateDataGuardAssociationWithNewDbSystemDetails)),
      ...{}
    };

    return jsonObj;
  }
}
