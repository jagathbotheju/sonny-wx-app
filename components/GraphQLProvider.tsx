"use client";
import { getClient } from "@/apollo-client";
import { ApolloProvider } from "@apollo/client";

interface IGraphQLProvider {
  children: React.ReactNode;
}

const client = getClient();

const GraphQLProvider = ({ children }: IGraphQLProvider) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphQLProvider;
