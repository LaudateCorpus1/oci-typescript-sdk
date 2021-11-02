/**
 * Database Tools
 * Database Tools APIs to manage Connections and Private Endpoints.
 * OpenAPI spec version: 20201005
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The information about new DatabaseToolsConnection for an Oracle Database.
 */
export interface UpdateDatabaseToolsConnectionOracleDatabaseDetails
  extends model.UpdateDatabaseToolsConnectionDetails {
  "relatedResource"?: model.UpdateDatabaseToolsRelatedResourceDetails;
  /**
   * Connect descriptor or Easy Connect Naming method to connect to the database.
   */
  "connectionString"?: string;
  /**
   * Database user name.
   */
  "userName"?: string;
  "userPassword"?: model.DatabaseToolsUserPasswordSecretIdDetails;
  /**
   * Advanced connection properties key-value pair (e.g., oracle.net.ssl_server_dn_match).
   */
  "advancedProperties"?: { [key: string]: string };
  /**
   * Oracle wallet or Java Keystores containing trusted certificates for authenticating the server's public certificate and
   * the client private key and associated certificates required for client authentication.
   *
   */
  "keyStores"?: Array<model.DatabaseToolsKeyStoreDetails>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the DatabaseToolsPrivateEndpoint used to access the database in the Customer VCN.
   */
  "privateEndpointId"?: string;

  "type": string;
}

export namespace UpdateDatabaseToolsConnectionOracleDatabaseDetails {
  export function getJsonObj(
    obj: UpdateDatabaseToolsConnectionOracleDatabaseDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateDatabaseToolsConnectionDetails.getJsonObj(
            obj
          ) as UpdateDatabaseToolsConnectionOracleDatabaseDetails)),
      ...{
        "relatedResource": obj.relatedResource
          ? model.UpdateDatabaseToolsRelatedResourceDetails.getJsonObj(obj.relatedResource)
          : undefined,

        "userPassword": obj.userPassword
          ? model.DatabaseToolsUserPasswordDetails.getJsonObj(obj.userPassword)
          : undefined,

        "keyStores": obj.keyStores
          ? obj.keyStores.map(item => {
              return model.DatabaseToolsKeyStoreDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "ORACLE_DATABASE";
  export function getDeserializedJsonObj(
    obj: UpdateDatabaseToolsConnectionOracleDatabaseDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateDatabaseToolsConnectionDetails.getDeserializedJsonObj(
            obj
          ) as UpdateDatabaseToolsConnectionOracleDatabaseDetails)),
      ...{
        "relatedResource": obj.relatedResource
          ? model.UpdateDatabaseToolsRelatedResourceDetails.getDeserializedJsonObj(
              obj.relatedResource
            )
          : undefined,

        "userPassword": obj.userPassword
          ? model.DatabaseToolsUserPasswordDetails.getDeserializedJsonObj(obj.userPassword)
          : undefined,

        "keyStores": obj.keyStores
          ? obj.keyStores.map(item => {
              return model.DatabaseToolsKeyStoreDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
