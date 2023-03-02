import ExploreLayout from "./components/ExploreLayout";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";

type Props = {};

const queryClient = new QueryClient();

const index = (props: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ExploreLayout />
    </QueryClientProvider>
  );
};

export default index;
