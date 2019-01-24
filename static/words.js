const words = [

  {
    word: "word",
    pronounced: "wurd",
    origin: "origin",
    word_type: "noun|verb|etc",
    synonyms: [
      // A word or phrase that means exactly or nearly the same as another word or phrase in the same language,
      // for example shut is a synonym of close.
      // {word object}
    ],
    category: {
      id: 1,
      title: "Category",
      slug: "category",
      words: [
        // {...}
      ],
    },
    tags: [
      {
        id: 1,
        title: "Tag[n]",
        slug: "tag[n]",
      },
    ],
    alternatives: [
      "text",
      "copy",
    ],
    examples: [
      {
        type: "code-block",
        code: "<code></code>",
      },
      {
        type: "codepen",
        link: "url here"
      }
    ],
  },

];


export default words;
