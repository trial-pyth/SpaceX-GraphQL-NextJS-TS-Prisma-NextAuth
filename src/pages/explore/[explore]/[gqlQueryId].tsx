import Info from "@/src/components/info/Info";
import ExploreLayout from "@/src/layouts/ExploreLayout";
import type { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // console.log(context.params?.explore);

  return {
    props: {
      queryItem: context?.params?.explore,
      gqlId: context?.params?.gqlQueryId,
    },
  };
}

const gqlInfo = (props: { queryItem: string; gqlId: string }) => {
  const { queryItem, gqlId } = props;
  return (
    <ExploreLayout queryItem={queryItem}>
      <Info />
    </ExploreLayout>
  );
};

export default gqlInfo;
