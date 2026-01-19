import React from "react";
import Layout from "@theme/Layout";
import HomeContent from "./home.mdx";
import TOC from "@theme/TOC";

export default function Home() {
  // Mantieni questo elenco coerente con gli heading (##) della pagina
  const toc = [
    { value: "Sintesi", id: "sintesi", level: 2 },
    { value: "Il Modello GRC ICT per il Settore Bancario", id: "il-modello-grc-ict-per-il-settore-bancario", level: 2 },
    { value: "Il Modello Governance, Risk & Compliance ICT adottato da Sinergia ICT", id: "il-modello-governance-risk--compliance-ict-adottato-da-sinergia-ict", level: 2 },
    { value: "Le Unità Organizzative con impatto ICT nelle Banche", id: "le-unità-organizzative-con-impatto-ict-nelle-banche", level: 2 },
  ];

  return (
    <Layout wrapperClassName="homepageIndex">
      <main className="container container--fluid padding-vert--lg">
        <div className="homepageLayout">
          <div className="homepageWide">
            <HomeContent />
          </div>

          <aside className="homepageToc">
            <div className="homepageTocInner">
              <div className="homepageTocTitle">Contenuti della pagina</div>
              <TOC toc={toc} />
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
