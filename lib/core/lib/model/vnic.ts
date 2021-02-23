/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
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
* A virtual network interface card. Each VNIC resides in a subnet in a VCN.
* An instance attaches to a VNIC to obtain a network connection into the VCN
* through that subnet. Each instance has a *primary VNIC* that is automatically
* created and attached during launch. You can add *secondary VNICs* to an
* instance after it's launched. For more information, see
* [Virtual Network Interface Cards (VNICs)](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/managingVNICs.htm).
* <p>
Each VNIC has a *primary private IP* that is automatically assigned during launch.
* You can add *secondary private IPs* to a VNIC after it's created. For more
* information, see {@link #createPrivateIp(CreatePrivateIpRequest) createPrivateIp} and
* [IP Addresses](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/managingIPaddresses.htm).
* <p>

* If you are an Oracle Cloud VMware Solution customer, you will have secondary VNICs
* that reside in a VLAN instead of a subnet. These VNICs have other differences, which
* are called out in the descriptions of the relevant attributes in the `Vnic` object.
* Also see {@link Vlan}.
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/iaas/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface Vnic {
  /**
    * The VNIC's availability domain.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain": string;
  /**
   * The OCID of the compartment containing the VNIC.
   */
  "compartmentId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * The hostname for the VNIC's primary private IP. Used for DNS. The value is the hostname
* portion of the primary private IP's fully qualified domain name (FQDN)
* (for example, `bminstance-1` in FQDN `bminstance-1.subnet123.vcn1.oraclevcn.com`).
* Must be unique across all VNICs in the subnet and comply with
* [RFC 952](https://tools.ietf.org/html/rfc952) and
* [RFC 1123](https://tools.ietf.org/html/rfc1123).
* <p>
For more information, see
* [DNS in Your Virtual Cloud Network](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/dns.htm).
* <p>
Example: `bminstance-1`
* 
    */
  "hostnameLabel"?: string;
  /**
   * The OCID of the VNIC.
   */
  "id": string;
  /**
   * Whether the VNIC is the primary VNIC (the VNIC that is automatically created
   * and attached during instance launch).
   *
   */
  "isPrimary"?: boolean;
  /**
   * The current state of the VNIC.
   */
  "lifecycleState": Vnic.LifecycleState;
  /**
    * The MAC address of the VNIC.
* <p>
If the VNIC belongs to a VLAN as part of the Oracle Cloud VMware Solution,
* the MAC address is learned. If the VNIC belongs to a subnet, the
* MAC address is a static, Oracle-provided value.
* <p>
Example: `00:00:00:00:00:01`
* 
    */
  "macAddress"?: string;
  /**
    * A list of the OCIDs of the network security groups that the VNIC belongs to.
* <p>
If the VNIC belongs to a VLAN as part of the Oracle Cloud VMware Solution (instead of
* belonging to a subnet), the value of the `nsgIds` attribute is ignored. Instead, the
* VNIC belongs to the NSGs that are associated with the VLAN itself. See {@link Vlan}.
* <p>
For more information about NSGs, see
* {@link NetworkSecurityGroup}.
* 
    */
  "nsgIds"?: Array<string>;
  /**
   * If the VNIC belongs to a VLAN as part of the Oracle Cloud VMware Solution (instead of
   * belonging to a subnet), the `vlanId` is the OCID of the VLAN the VNIC is in. See
   * {@link Vlan}. If the VNIC is instead in a subnet, `subnetId` has a value.
   *
   */
  "vlanId"?: string;
  /**
    * The private IP address of the primary `privateIp` object on the VNIC.
* The address is within the CIDR of the VNIC's subnet.
* <p>
Example: `10.0.3.3`
* 
    */
  "privateIp"?: string;
  /**
   * The public IP address of the VNIC, if one is assigned.
   *
   */
  "publicIp"?: string;
  /**
    * Whether the source/destination check is disabled on the VNIC.
* Defaults to `false`, which means the check is performed. For information
* about why you would skip the source/destination check, see
* [Using a Private IP as a Route Target](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/managingroutetables.htm#privateip).
* <p>

* If the VNIC belongs to a VLAN as part of the Oracle Cloud VMware Solution (instead of
* belonging to a subnet), the `skipSourceDestCheck` attribute is `true`.
* This is because the source/destination check is always disabled for VNICs in a VLAN.
* <p>
Example: `true`
* 
    */
  "skipSourceDestCheck"?: boolean;
  /**
   * The OCID of the subnet the VNIC is in.
   */
  "subnetId"?: string;
  /**
    * The date and time the VNIC was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
}

export namespace Vnic {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Vnic): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
