import React, { useEffect, useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";


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
const getIncomingPackageData = () => {

  // default data
  const packagesSent = [
    { "recipient": "mom", "tracking": "321", "status": "IN_TRANSIT" },
    { "recipient": "dad", "tracking": "654", "status": "IN_TRANSIT" },
    { "recipient": "sister", "tracking": "", "status": "ORDERED" },
    { "recipient": "brother", "tracking": "999", "status": "RECEIVED" },
  ];

  return new Promise((resolve, reject) => {

    let data = localStorage.getItem("pkgData");
    const safeDefault = { "packages": [] };

    // if there's no data, use the default so we're not empty for now
    // this will be an initial state we'll need to handle.
    if (data === null) {
      localStorage.setItem("pkgData", JSON.stringify({ "packages": packagesSent }));
      data = safeDefault;
    } else {
      try {
        data = JSON.parse(data);
      } catch(e) {
        // if we can't parse it, show nothing
        // TODO: probably should show an error later
        data = safeDefault;
      }
    }

    setTimeout(function() {
      resolve(data.packages);
    }, 500);

  });

};


const Incoming = () => {

  // get and handle the package data
  // async/await version
  const [ packages, setPackages ] = useState([]);
  useEffect(() => {
    (async function() {
      const result = await getIncomingPackageData();
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
      <SEO title="Incoming Packages" />
      <h1>Incoming Packages</h1>
      <select>
        {groups.map((member, i) => <option key={i}>{member}</option>)}
      </select>

      <table>
        <thead>
          <tr>
            <th>Sender</th>
            <th>Tracking Number</th>
            <th>Status</th>
            <th>Received</th>
          </tr>
        </thead>
        <tbody>
        {packages.map((pkg, i) =>
        <tr key={i}><td>{pkg.recipient}</td>
            <td>{pkg.tracking}</td>
            <td>{pkg.status}</td>
            <td>{(i%2===0?"X":"")}</td></tr>
        )}
        </tbody>
      </table>
    </Layout>
  );
};

export default Incoming;
