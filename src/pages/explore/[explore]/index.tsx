import ExploreLayout from "@/src/layouts/ExploreLayout";
import { QueryItemType, SideBarItems } from "@/src/lib/types";
import type { GetServerSidePropsContext, GetStaticPropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryItem = await context?.params?.explore;

  if (queryItem && SideBarItems.includes(queryItem as string) === true) {
    return {
      props: { queryItem: context?.params?.explore },
    };
  } else {
    return { notFound: true };
  }
}

const index: React.FC<{ queryItem: QueryItemType }> = ({ queryItem }) => {
  return <ExploreLayout queryItem={queryItem} />;
};

export default index;
