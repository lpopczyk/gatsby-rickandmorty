import React from 'react';

export default ({
    data: {
        allSitePage: { node },
    },
}) => {
    const char = node;

    return (
        <div>
            <h1>Blog</h1>
            {char.map(post =>
                // PostLink will be a component that renders a summary of your post
                // e.g. the title, date and an excerpt
            }
        </div>
    );
};

export const pageQuery = graphql`
  query {
    allSitePage {
        edges {
          node {
            pageContext
          }
        }
      }
    }
`
