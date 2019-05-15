import React, { PureComponent } from 'react';
import { graphql, StaticQuery } from 'gatsby';

import FeaturedWords from '../components/organisms/FeaturedWords/FeaturedWords';
import HeroSearch from '../components/organisms/HeroSearch/HeroSearch';
import BasicLayout from '../layouts/BasicLayout';

export class Index extends PureComponent {
  componentDidMount() {
    console.log();
  }

  render() {
    return (
      <BasicLayout title="Devesaurus Home" data-test="page-index">
        <HeroSearch title="Devesaurus" />

        <StaticQuery
          query={query}
          render={({ allWordpressWpWord }) => {
            const { edges } = allWordpressWpWord;
            return <FeaturedWords words={edges} theme="gradient-brand" />;
          }}
        />
      </BasicLayout>
    );
  }
}

export default Index;

const query = graphql`
  {
    allWordpressWpWord {
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
