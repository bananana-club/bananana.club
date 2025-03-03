// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    { type: 'doc', id: 'introduction', label: '🍌 Introduction' },
    { type: 'doc', id: 'song', label: '🎵 Song' },
    { type: 'doc', id: 'game', label: '🎮 Game' },
    { type: 'doc', id: 'vision', label: '🧠 Vision' },
    {
      type: 'category',
      label: '🎨 Contribute',
      items: [
        { type: 'doc', id: 'contribute/why', label: '❓ Why Contribute' },
        { type: 'doc', id: 'contribute/dancing', label: '💃 Dancing' },
        { type: 'doc', id: 'contribute/singing', label: '🎤 Singing' },
        { type: 'doc', id: 'contribute/jamming', label: '🎸 Jamming' },
        { type: 'doc', id: 'contribute/coding', label: '💻 Coding' },
        { type: 'doc', id: 'contribute/designing', label: '🎨 Designing' },
        { type: 'doc', id: 'contribute/eating', label: '🍌 Eating' },
        { type: 'doc', id: 'contribute/referring', label: '📢 Referring' },
        { type: 'doc', id: 'contribute/engaging', label: '💬 Engaging' },
      ],
    },
    { type: 'doc', id: 'rewards', label: '🏆 Rewards' },
    { type: 'doc', id: 'tokenomics', label: '💰 Tokenomics' },
    { type: 'doc', id: 'governance', label: '⚖️ Governance' },
    { type: 'doc', id: 'growth', label: '📈 Growth & Expansion' },
    { type: 'doc', id: 'hierarchy', label: '🏛️ Hierarchy' },
    { type: 'doc', id: 'security', label: '🔒 Security' },
    { type: 'doc', id: 'buy', label: '🛒 How To Buy' },
  ],
};

export default sidebars;
