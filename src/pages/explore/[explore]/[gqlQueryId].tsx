import Info from "@/src/components/info/Info";
import ExploreLayout from "@/src/layouts/ExploreLayout";
import type { GetServerSidePropsContext } from "next";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { QueryItemType } from "@/src/lib/types";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      queryItem: await context?.params?.explore,
      gqlId: await context?.params?.gqlQueryId,
    },
  };
}

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const gqlInfo = (props: { queryItem: QueryItemType; gqlId: string }) => {
  const { queryItem, gqlId } = props;
  return (
    <ExploreLayout queryItem={queryItem} gqlId={gqlId}>
      <ApolloProvider client={client}>
        <Info queryItem={queryItem} gqlId={gqlId} />
      </ApolloProvider>
    </ExploreLayout>
  );
};

export default gqlInfo;
