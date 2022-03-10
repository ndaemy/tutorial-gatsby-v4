import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

type DataProps = {
  allMdx: {
    nodes: {
      frontmatter: {
        date: string;
        title: string;
      };
      id: string;
      body: string;
      parent: {
        modifiedTime: string;
      };
    }[];
  };
};

const BlogPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map(node => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <MDXRenderer>{node.body}</MDXRenderer>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
        parent {
          ... on File {
            modifiedTime
          }
        }
      }
    }
  }
`;

export default BlogPage;
