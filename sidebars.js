// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  manualeSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduzione',
    },
    {
      type: 'category',
      label: 'Governance',
      items: [
        'governance/asset-relationship',
        'governance/budget-costi-management',
        'governance/fornitori-critici',
      ],
    },
  ],
};

module.exports = sidebars;
