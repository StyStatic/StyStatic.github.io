// gitprofile.config.js

const config = {
  github: {
    username: 'StyStatic', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 20, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: 'stystatic',
    mastodon: 'StyStatic@mastodon.gamedev.place',
    facebook: '',
    instagram: 'realstystatic',
    youtube: 'stystatic', // example: 'pewdiepie'
    twitch: 'stystatic',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://twitch.tv/stystatic',
    phone: '',
    email: 'stystatic@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Visual Basic',
    'C++',
    'Lua',
    'Python'
  ],
  experiences: [
    {
      company: 'Self-Employed',
      position: 'Freelance Java Developer',
      from: 'January 2022',
      to: 'Present',
      companyLink: 'https://stystatic.cc',
    },
    {
      company: 'Self-Employed/Curseforge',
      position: 'Minecraft Mod Developer',
      from: 'January 2022',
      to: 'Present',
      companyLink: 'https://legacy.curseforge.com/members/stystatic/projects',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Community College',
      degree: 'Associates of Science',
      from: 'August 2024',
      to: 'May 2025',
    },
    {
      institution: 'High School',
      degree: 'High School Diploma',
      from: 'August 2021',
      to: 'June 2024',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Advanced Combat (Revitalized)',
      description:
        'A modern recreation of Advanced Combat from scratch',
      imageUrl: 'https://media.forgecdn.net/avatars/526/256/637845299674396604.png',
      link: 'https://www.curseforge.com/minecraft/mc-mods/advanced-combat-revitalized',
    },
    {
      title: 'Dimension Localized Inventories',
      description:
        'Adds a seperate inventory for each dimension, with an ability to group together dimension inventories or exclude dimensions all together',
      imageUrl: 'https://media.forgecdn.net/avatars/841/226/638235708143988194.png',
      link: 'https://legacy.curseforge.com/minecraft/mc-mods/dimension-localized-inventories',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'customTheme',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#93D2FF',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#66bfff',
      'base-100': '#80caff',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
