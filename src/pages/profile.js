import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Profile = () => (
  <Layout>
    <SEO title="Profile" />
    <h1>Profile</h1>
    <form>
      <label>Display name: <input type="text" length="20" /></label>
      <p>Group management (clean way to manage this mess?)</p>
      <div id="wishlists" style={{ "border" : "1px solid black" }}>
        <p>Wishlists: </p>
        <label>Wishlist 1: <input type="text" /></label>
        <button style={{ "display": "block" }}>Add Wishlist</button>
      </div>
      <button>Save Profile</button>
    </form>
  </Layout>
);

export default Profile;
