import ExploreLayout from "../components/ExploreLayout";
import { useRouter } from "next/router";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";

type Props = {};

const queryClient = new QueryClient();

const index = (props: Props) => {
  const router = useRouter();
  // console.log(router);
  router.asPath.split("/")[2];

  return (
    <QueryClientProvider client={queryClient}>
      <ExploreLayout exploreItem={router.asPath.split("/")[2]} />
    </QueryClientProvider>
  );
};

export default index;
