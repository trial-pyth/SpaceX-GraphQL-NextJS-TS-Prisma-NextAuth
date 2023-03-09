import ExploreLayout from "../../../layouts/ExploreLayout";
import { QueryItemType, SideBarItems } from "@/lib/types";
import type { GetStaticPropsContext } from "next";

export async function getStaticPaths() {
  return {
    paths: SideBarItems.map((item) => {
      return { params: { explore: item } };
    }),
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: GetStaticPropsContext) {
  // console.log(context.params.explore);
  return {
    // Passed to the page component as props
    props: { queryItem: context?.params?.explore },
  };
}

const index = ({ queryItem }: QueryItemType) => {
  return <ExploreLayout queryItem={queryItem} />;
};

export default index;
