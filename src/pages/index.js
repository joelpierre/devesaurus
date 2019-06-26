import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql, StaticQuery } from 'gatsby';

import FeaturedWords from '../components/organisms/FeaturedWords/FeaturedWords';
import HeroSearch from '../components/organisms/HeroSearch/HeroSearch';
import BasicLayout from '../layouts/BasicLayout';

export class Index extends PureComponent {
  render() {
    const { isMenuOpen } = this.props;

    return (
      <BasicLayout
        isMenuOpen={isMenuOpen}
        title="Find a word"
        data-test="page-index"
      >
        <HeroSearch title="Devesaurus" />

        <StaticQuery
          query={query}
          render={({ allWordpressWpWord }) => {
            const { edges: words } = allWordpressWpWord;
            return <FeaturedWords words={words} theme="gradient-brand" />;
          }}
        />
      </BasicLayout>
    );
  }
}

Index.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

/* istanbul ignore next */
const mapStateToProps = ({ core: { isMenuOpen } }) => ({
  isMenuOpen,
});

// export default Index;
export default connect(mapStateToProps)(Index);

const query = graphql`
  {
    allWordpressWpWord(
      limit: 10
      filter: { word_tags: { elemMatch: { slug: { eq: "featured" } } } }
      sort: { fields: [title], order: [ASC] }
    ) {
      edges {
        node {
          id
          title
          slug
          acf {
            pronunciation
            origin {
              value
              label
            }
          }
          word_tags {
            id
            slug
            name
            taxonomy
          }
          word_cats {
            id
            slug
            name
            taxonomy
          }
        }
      }
    }
  }
`;
