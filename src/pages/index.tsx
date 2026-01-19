import React from "react";
import Layout from "@theme/Layout";
import TOC from "@theme/TOC";
import HomeContent, { toc as homeToc } from "./home.mdx";

export default function Home() {
  return (
    <Layout wrapperClassName="homepageIndex">
      <main className="container--fluid padding-vert--lg">
        <div className="homepageLayout">
          <div className="homepageWide">
            <HomeContent />
          </div>

          <aside className="homepageToc" role="complementary" aria-label="Contenuti della pagina">
            <div className="homepageTocInner">
              <div className="homepageTocTitle">Contenuti della pagina</div>
              <TOC key="home-toc" toc={homeToc} />
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
