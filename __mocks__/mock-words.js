export const mockWord = {
  title: 'Graphic Design',
  slug: 'graphic-design',
  terms: [
    {
      name: 'Design',
      slug: 'design',
      taxonomy: 'word_tag',
    },
    {
      name: 'Graphic Design',
      slug: 'graphic-design',
      taxonomy: 'word_category',
    },
  ],
  acf: {
    definition: '<p>The art or skill of combining text and pictures in advertisements, magazines, or books.</p>\n',
    origin: {
      value: 'GB',
      label: 'United Kingdom',
    },
    syllables: {
      count: '4',
      list: [
        {
          item: 'gra',
        },
        {
          item: 'phic',
        },
        {
          item: 'de',
        },
        {
          item: 'sign',
        },
      ],
    },
    pronunciation: 'graphic-de-sign',
    part_of_speech: 'noun',
    synonyms: [
      {
        post_title: 'Web Development',
        post_status: 'publish',
        post_name: 'web-development',
      },
    ],
    examples: false,
  },
};

export const mockWords = [
  mockWord,
  {
    title: 'Web Development',
    slug: 'web-development',
    terms: [
      {
        name: 'CSS',
        slug: 'css',
        taxonomy: 'word_tag',
      },
      {
        name: 'HTML5',
        slug: 'html5',
        taxonomy: 'word_tag',
      },
      {
        name: 'Web Development',
        slug: 'web-development',
        taxonomy: 'word_category',
      },
    ],
    acf: {
      definition: '<p>Web development is the work involved in developing a web site for the Internet (World Wide Web) or an intranet (a private network). Among web professionals, "web development" usually refers to the main non-design aspects of building web sites: writing markup and coding</p>\n',
      origin: {
        value: 'GB',
        label: 'United Kingdom',
      },
      syllables: {
        count: '5',
        list: [
          {
            item: 'web',
          },
          {
            item: 'de',
          },
          {
            item: 've',
          },
          {
            item: 'lop',
          },
          {
            item: 'ment',
          },
        ],
      },
      pronunciation: 'web~develop~ment',
      part_of_speech: 'noun',
      synonyms: [
        {
          post_title: 'Graphic Design',
          post_status: 'publish',
          post_name: 'graphic-design',
        },
      ],
      examples: [
        {
          type: 'code-block',
          codepen_url: '',
          code: '<p><code></p>\n<header>\ntest<br />\n</header>\n<p></code></p>\n',
        },
      ],
    },
  },
];
