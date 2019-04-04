const sortWordObj = (word) => {
  if (word) {
    delete word.author_id;
    delete word.author;
    delete word.author_nicename;
    delete word.content;
    delete word.date_modified;
    delete word.excerpt;
    delete word.id;
    delete word.yoast;

    return word;
  }

  return false;
};

export default sortWordObj;
