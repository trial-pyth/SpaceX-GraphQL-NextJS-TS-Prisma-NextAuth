import { NextPageContext } from "next/types";
import { getSession } from "next-auth/react";
import CircularProgress from "@mui/material/CircularProgress";
import useCurrentUser from "../hooks/useCurrentUser";
import useFavourites from "../hooks/useFavourites";
import CrewQueryCard from "../components/info/queryCard/CrewQueryCard";
import { gqlQuery } from "../lib/gqlQuery";
import { useQuery } from "react-query";
import { DocumentNode } from "graphql";
import InfoCard from "../components/info/InfoCard";
import { QueryItemType } from "../lib/types";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const SavedList = () => {
  const { data: user } = useCurrentUser();
  const { data: savedCards = [], isLoading, error } = useFavourites();
  console.log({ savedCards });
  return (
    <div className="mt-20 text-zinc-300 ml-8">
      <span className="text-3xl font-normal">My Saved Cards</span>
      <div className="text-gray-400 text-2xl">{user?.email}</div>
      <div className="grid-grid-cols-6 gap-4 mx-auto">
        {isLoading && <CircularProgress className="mx-auto text-slate-400" />}
        {/* {savedCards.length &&
          savedCards?.map(
            async (card: {
              id: string;
              gqlId: string;
              queryItem: QueryItemType;
            }) => {
              const queryPath = gqlQuery[card.queryItem];
              const variables = { [`${card.queryItem}Id`]: card.gqlId };
              const { loading, error, data } = await useQuery(queryPath, {
                variables,
              });

              return <CrewQueryCard gqlData={data[Object.keys(data)[0]]} />;
            }
          )} */}
      </div>
    </div>
  );
};

export default SavedList;
