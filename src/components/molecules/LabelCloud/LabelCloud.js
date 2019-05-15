import React from 'react';
import PropTypes from 'prop-types';
import CategoryCloud from './CategoryCloud/CategoryCloud';
import WordCategoryCloud from './WordCategoryCloud/WordCategoryCloud';
import TagCloud from './TagCloud/TagCloud';
import WordTagCloud from './WordTagCloud/WordTagCloud';

const LabelCloud = ({ classes, taxonomy }) => {
  let cloud;

  switch (taxonomy) {
    case 'category':
      cloud = <CategoryCloud classes={classes} />;
      break;

    case 'word_category':
      cloud = <WordCategoryCloud classes={classes} />;
      break;

    case 'post_tag':
      cloud = <TagCloud classes={classes} />;
      break;

    case 'word_tag':
      cloud = <WordTagCloud classes={classes} />;
      break;

    default:
      cloud = <></>;
  }

  return cloud;
};

LabelCloud.defaultProps = {
  classes: undefined,
};

LabelCloud.propTypes = {
  classes: PropTypes.string,
  taxonomy: PropTypes.oneOf([
    'category',
    'word_category',
    'post_tag',
    'word_tag',
  ]).isRequired,
};

export default LabelCloud;
