import Info from "@/components/info/Info";
import ExploreLayout from "@/src/layouts/ExploreLayout";
import { QueryItemType } from "@/src/lib/types";
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

const gqlInfo = (props) => {
  const { queryItem, gqlId } = props;
  const {} = props;
  return (
    <>
      <ExploreLayout queryItem={queryItem} />
      <Info />
    </>
  );
};

export default gqlInfo;
