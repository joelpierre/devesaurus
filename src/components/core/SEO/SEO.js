import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

export const PureSEO = ({
  data,
  description,
  lang,
  meta,
  keywords,
  title,
  ogType,
}) => {
  const metaDescription = description || data.site.siteMetadata.description;

  return (
    <Helmet
      data-test="seo-helmet"
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: ogType,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  );
};

const SEO = props => (
  <StaticQuery
    query={detailsQuery}
    render={data => (
      <PureSEO data-test="seo-helmet-query" data={data} {...props} />
    )}
  />
);

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [
    'Devesaurus',
    'Dev thesaurus',
    'Dev dictionary',
    'Joel Pierre',
    'Joel Pierre-Powell',
  ],
  description: '',
  ogType: 'website',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  ogType: PropTypes.string,
  meta: PropTypes.instanceOf(Array),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
