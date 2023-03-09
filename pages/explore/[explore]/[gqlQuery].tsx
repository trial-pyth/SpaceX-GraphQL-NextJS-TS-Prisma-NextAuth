import ExploreLayout from "@/layouts/ExploreLayout";
import { QueryItemType } from "@/lib/types";

export async function getServerSideProps() {}

const gqlInfo = ({ queryItem }: QueryItemType) => {
  return <ExploreLayout queryItem={queryItem} />;
};

export default gqlInfo;
