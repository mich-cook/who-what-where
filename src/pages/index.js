import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <p>If you have family, friends, coworkers, or other groups of people that send presents to each other at certain times of the year, it can get a bit messy tracking who sent what to whom. Maybe you're sending emails to every person about the package(s) that you've sent. Maybe you're in some sort of group chat or message board. Everyone is saying what is going where, but a lot of it is not relevant to the other people. If takes a bit of effort to dig the signal out of the noise. This is a potential solution for that.</p>
    <p>External login methods will be used to make life easier in the beginning, though it's likely that may not change. This will send more data than just "logged in or not", but the only piece of any real interest to us is the display name which we will use as a start value and you can change it if you want.</p>
    <button>login button placeholder that might move to the header. we'll see.</button>
  </Layout>
);

export default IndexPage;
