import React from 'react';
import PropTypes from 'prop-types';
import CategoryCloud from './CategoryCloud/CategoryCloud';
import WordCategoryCloud from './WordCategoryCloud/WordCategoryCloud';
import TagCloud from './TagCloud/TagCloud';
import WordTagCloud from './WordTagCloud/WordTagCloud';

const LabelCloud = ({ className, taxonomy }) => {
  let cloud;

  switch (taxonomy) {
    case 'category':
      cloud = <CategoryCloud className={className} />;
      break;

    case 'word_category':
      cloud = <WordCategoryCloud className={className} />;
      break;

    case 'post_tag':
      cloud = <TagCloud className={className} />;
      break;

    case 'word_tag':
      cloud = <WordTagCloud className={className} />;
      break;

    default:
      cloud = <></>;
  }

  return cloud;
};

LabelCloud.defaultProps = {
  className: undefined,
};

LabelCloud.propTypes = {
  className: PropTypes.string,
  taxonomy: PropTypes.oneOf([
    'category',
    'word_category',
    'post_tag',
    'word_tag',
  ]).isRequired,
};

export default LabelCloud;
