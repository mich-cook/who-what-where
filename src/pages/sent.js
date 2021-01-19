import React, { useEffect, useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

// The list item should show:
//   - the recipient of a package
//   - the tracking number of the package (if available yet)
//   - the status of the package (if avilable)

// User will be able to toggle between groups on page. No plans to support group in URL.

// User should be able to add sent packages and add tracking numbers to placed orders that
//    have finished processing and have been shipped.

// we won't worry about changing this after page load.
const getUserGroups = () => {

  // default data
  const groups = [ "family", "friends", "coworkers" ];

  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(groups); }, 500);
  });
}


// get this from API in future
// currently simulating a fetch using a promise and 0.5s response delay
const getSentPackageData = () => {

  // default data
  const packagesSent = [
    { "recipient": "mom", "tracking": "123", "status": "IN_TRANSIT" },
    { "recipient": "dad", "tracking": "456", "status": "IN_TRANSIT" },
    { "recipient": "sister", "tracking": "", "status": "ORDERED" },
    { "recipient": "brother", "tracking": "901", "status": "RECEIVED" },
  ];

  return new Promise((resolve, reject) => {

    let data = localStorage.getItem("pkgData");

    // if there's no data, use the default so we're not empty for now
    // this will be an initial state we'll need to handle.
    if (data === null) {
      localStorage.setItem("pkgData", JSON.stringify({ "packages": packagesSent }));
      data = [];
    }

    setTimeout(function() {
      resolve(JSON.parse(data).packages);
    }, 500);

  });

};


const Sent = () => {

  // get and handle the package data
  // async/await version
  const [ packages, setPackages ] = useState([]);
  useEffect(() => {
    (async function() {
      const result = await getSentPackageData();
      setPackages(result);
    }());
  }, []);

  // get and handle the group data
  // promise version
  const [ groups, setGroups ] = useState([]);
  useEffect(() => {
    getUserGroups().then(result => {
      setGroups(result);
    });
  }, []);

  return (
    <Layout>
      <SEO title="Packages Sent" />
      <h1>Packages Sent</h1>
      <select>
        {groups.map((member, i) => <option key={i}>{member}</option>)}
      </select>

      <table>
        <thead>
          <tr>
            <th>Recipient</th>
            <th>Tracking Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg, i) => <tr key={i}><td>{pkg.recipient}</td><td>{pkg.tracking}</td><td>{pkg.status}</td></tr>)}
        </tbody>
      </table>
    </Layout>
  );

};

export default Sent;
