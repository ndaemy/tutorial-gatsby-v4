import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/layout";

type DataProps = {
  allFile: {
    nodes: {
      name: string;
    }[];
  };
};

const BlogPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map(node => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
