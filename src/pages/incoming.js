import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const groups = [ "family", "friends", "coworkers" ];
const packagesSent = [
  { "recipient": "mom", "tracking": "123", "status": "IN_TRANSIT" },
  { "recipient": "dad", "tracking": "456", "status": "IN_TRANSIT" },
  { "recipient": "sister", "tracking": "", "status": "ORDERED" },
  { "recipient": "brother", "tracking": "901", "status": "RECEIVED" },
];

const Incoming = () => (
  <Layout>
    <SEO title="Incoming Packages" />
    <h1>Incoming Packages</h1>
    <select>
      {groups.map(member => <option>{member}</option>)}
    </select>

    <table>
      <tr><th>Sender</th><th>Tracking Number</th><th>Status</th><th>Received</th></tr>
      {packagesSent.map((pkg, i) => 
      <tr><td>{pkg.recipient}</td>
          <td>{pkg.tracking}</td>
          <td>{pkg.status}</td>
          <td>{(i%2===0?"X":"")}</td></tr>
      )}
    </table>
  </Layout>
);

export default Incoming;
