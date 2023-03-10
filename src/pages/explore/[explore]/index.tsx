import ExploreLayout from "@/src/layouts/ExploreLayout";
import { QueryItemType, SideBarItems } from "@/src/lib/types";
import type { GetStaticPropsContext } from "next";

export async function getStaticPaths() {
  return {
    paths: SideBarItems.map((item) => {
      return { params: { explore: item } };
    }),
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  // console.log(context.params.explore);
  return {
    props: { queryItem: context?.params?.explore },
  };
}

const index = ({ queryItem }: QueryItemType) => {
  return <ExploreLayout queryItem={queryItem} />;
};

export default index;
