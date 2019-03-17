import React from 'react';
import PropTypes from 'prop-types';

import PrimaryHeader from '../components/organisms/PrimaryHeader/PrimaryHeader';
import PrimaryFooter from '../components/organisms/PrimaryFooter/PrimaryFooter';
import SEO from '../utils/seo';

const CoreLayout = ({ children, metaTitle, metaDescription }) => (
  <>
    <SEO title={metaTitle} description={metaDescription}/>
    <PrimaryHeader/>
    <main className="primary-main">
      {children}
    </main>
    <PrimaryFooter/>
  </>
);

CoreLayout.defaultProps = {
  metaTitle: 'Default Title',
  metaDescription: 'Default description',
};

CoreLayout.propTypes = {
  metaTitle: PropTypes.string,
  metaDescription: PropTypes.string,
};

export default CoreLayout;

const optionsQuery = graphql`
{
  allWordpressAcfOptions{
    edges{
      node{
        options{
          company_name
          company_slogan
          address
          general_email
          mailchimp_list_id
          facebook
          twitter
          instagram
          linkedin
          youtube
          testimonials{
            name
            content
          }
          sponsors{
            name
            short_description
            image{
              link
              alt_text
              media_details{
                width
                height
              }
            }
          }
        }
      }
    }
  }
}
`;
