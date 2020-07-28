/**
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as identity from "oci-identity";
import common = require("oci-common");

(async () => {
  const authenticationProvider = await common.ResourcePrincipalAuthenticationDetailsProvider.builder();
  try {
    const identityClient = await new identity.IdentityClient({
      authenticationDetailsProvider: authenticationProvider
    });
    const regions = await identityClient.listRegions({});
    console.log("Regions: ", JSON.stringify(regions));
  } catch (e) {
    throw Error(`Failed with error: ${e}`);
  }
})();
