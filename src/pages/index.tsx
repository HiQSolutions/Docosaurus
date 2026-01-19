import React from "react";
import Layout from "@theme/Layout";
import HomeContent from "./home.mdx";

export default function Home() {
  return (
    <Layout wrapperClassName="homepageIndex">
      <main className="container container--fluid padding-vert--lg">
        <div className="homepageWide">
          <HomeContent />
        </div>
      </main>
    </Layout>
  );
}
