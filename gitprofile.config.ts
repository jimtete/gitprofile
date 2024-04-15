// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'jimtete', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'jimtete/twitch-live-downloader',
          'jimtete/5e-board-helper',
          'jimtete/DependencyInjectionPlayground',
          'jimtete/PithiaV2',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Enterprise projects I have worked on',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Locpush',
          description:
            'A sophisticated rich push notifications and user engagement service especially built for TV Service Providers. Add locpush.tv to your existing TV mobile app and WebTV service and start launching push marketing campaigns that engage your audience.',
          imageUrl: 'https://locpush.io/images/locpush-logo.svg',
          link: 'https://locpush.tv/',
        },
        // {
        //   title: '[REDUCTED]',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: {
    title: 'Dimitrios Tetepoulidis',
    description: '',
    imageURL:
      'https://media.licdn.com/dms/image/D4D03AQEZoaSBkD2W9w/profile-displayphoto-shrink_800_800/0/1710171725817?e=1718236800&v=beta&t=uVEkJSgtsvRnf3LpsEAPpBZn1hQx1s7ntn2G5hXcdu4',
  },
  social: {
    linkedin: 'dimitris-tetepoulidis',
    //researchGate: '',
    facebook: 'D.Tetepoulidis',
    instagram: 'tetepoulidis',
    //youtube: '', // example: 'pewdiepie'
    //dribbble: '',
    //behance: '',
    //medium: 'arifszn',
    //dev: 'arifszn',
    //stackoverflow: '', // example: '1/jeff-atwood'
    //skype: '',
    //telegram: '',
    //website: 'https://www.arifszn.com',
    phone: '(+30)6948336420',
    email: 'jim-tete@hotmail.com',
  },
  resume: {
    fileUrl:
      'https://onedrive.live.com/embed?resid=10B8B807D66E77D7%21105408&authkey=!ABWjBpSPyOCr-kM&em=2', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C#',
    '.NET',
    'WPF',
    'REST',
    'EFCore',
    'Dapper',
    'Docker',
    'PostgreSQL',
    'SQLite',
    'Firebase',
    'Git',
    'Python',
    'LaTeX',
    'Linux',
    'CUDA',
  ],
  experiences: [
    {
      company: 'ARX.NET S.A.',
      position: 'Desktop Applications Developer',
      from: 'Mar 2024',
      to: 'present',
      companyLink: 'https://example.com',
    },
    {
      company: 'ARX.NET S.A.',
      position: 'Back-end .NET Developer',
      from: 'September 2022',
      to: 'February 2024',
      companyLink: 'https://web.arx.net/',
    },
  ],
  certifications: [
    {
      name: 'IELTS Academic',
      body: 'Overall Band Score: 7.5',
      year: 'Nov 2023',
      //link: 'https://example.com',
    },
    {
      name: 'English Proficiency C2',
      body: 'University of Central Lancashire',
      year: 'May 2020',
      //link: 'https://example.com',
    },
    {
      name: 'Fundamentals of Accelerated Computing with CUDA - Python',
      body: 'NVIDIA',
      year: 'Nov 2022',
      link: 'https://learn.nvidia.com/certificates?id=19204e2641414fd09f40dd98e7f71223',
    },
  ],
  educations: [
    {
      institution: 'Technical University of Denmark',
      degree: 'MSc in Computer Science & Engineering',
      from: 'September 2024',
      to: 'June 2026',
    },
    {
      institution: 'International Hellenic University',
      degree: 'BEng in Informatics Engineering',
      from: 'October 2018',
      to: 'October 2023',
    },
    {
      institution: 'Czech University of Life Sciences',
      degree: 'Exchange Studies in Informatics',
      from: 'September 2020',
      to: 'February 2021',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 2, // How many articles to display. Max is 10.
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
    defaultTheme: 'retro',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      //'light',
      //'dark',
      //'cupcake',
      //'bumblebee',
      //'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      //'valentine',
      //'halloween',
      //'garden',
      //'forest',
      //'aqua',
      //'lofi',
      //'pastel',
      //'fantasy',
      //'wireframe',
      //'black',
      //'luxury',
      //'dracula',
      //'cmyk',
      //'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      // 'night',
      // 'coffee',
      // 'winter',
      // 'dim',
      // 'nord',
      // 'sunset',
      // 'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
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

  enablePWA: true,
};

export default CONFIG;
