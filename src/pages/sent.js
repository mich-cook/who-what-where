import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

// The list item should show:
//   - the recipient of a package
//   - the tracking number of the package (if available yet)
//   - the status of the package (if avilable)

//  User will be able to toggle between groups on page. No plans to support group in URL.

// get this from API in future
const groups = [ "family", "friends", "coworkers" ];
const packagesSent = [
  { "recipient": "mom", "tracking": "123", "status": "IN_TRANSIT" },
  { "recipient": "dad", "tracking": "456", "status": "IN_TRANSIT" },
  { "recipient": "sister", "tracking": "", "status": "ORDERED" },
  { "recipient": "brother", "tracking": "901", "status": "RECEIVED" },
];

const Sent = () => (
  <Layout>
    <SEO title="Packages Sent" />
    <h1>Packages Sent</h1>
    <select>
      {groups.map(member => <option>{member}</option>)}
    </select>

    <table>
      <tr><th>Recipient</th><th>Tracking Number</th><th>Status</th></tr>
      {packagesSent.map(pkg => <tr><td>{pkg.recipient}</td><td>{pkg.tracking}</td><td>{pkg.status}</td></tr>)}
    </table>
  </Layout>
);

export default Sent;
