("use client");
import SkeletonLoader from "../skeleton/SkeletonLoader";
import { useQuery } from "@apollo/client";
import ErrorIcon from "@mui/icons-material/Error";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { LibraryAdd } from "@mui/icons-material";
import Image from "next/image";
import { gqlQuery } from "@/src/lib/gqlQuery";
import InfoCard from "./InfoCard";
import { QueryItemType } from "@/src/lib/types";
import useFavourites from "@/src/hooks/useFavourites";
import useCurrentUser from "@/src/hooks/useCurrentUser";
import { useCallback, useMemo } from "react";
import axios from "axios";

const Info: React.FC<{ queryItem: QueryItemType; gqlId: string }> = ({
  queryItem,
  gqlId,
}) => {
  const queryPath = gqlQuery[queryItem as string];
  const variables = { [`${queryItem}Id`]: gqlId };

  const { loading, error, data } = useQuery(queryPath, {
    variables,
  });
  const { mutate: mutateSavedCards } = useFavourites();
  const { data: currentUser, mutate } = useCurrentUser();

  const isSaved = useMemo(() => {
    const list = currentUser?.savedCard || [];
    return list.includes(gqlId);
  }, [currentUser, gqlId]);

  const toggleSaved = useCallback(async () => {
    let response;

    if (isSaved) {
      response = await axios.delete("/api/favourite", { data: { gqlId } });
    } else {
      response = await axios.post("/api/favourite", { gqlId, queryItem });
    }

    const updatedSavedCard = response?.data?.savedCard;

    mutate({
      ...currentUser,
      savedCard: updatedSavedCard,
    });
    mutateSavedCards();
  }, [gqlId, isSaved, currentUser, mutate, mutateSavedCards]);

  const Icon = isSaved ? BookmarkAddedIcon : LibraryAdd;

  return (
    <div className="fixed right-0 w-[25vw] h-[calc(100vh_-_64px)]  flex flex-col flex-grow overflow-hidden overflow-y-auto">
      <h2 className="mx-auto text-xs text-gray-500">
        Powered by{" "}
        <Image
          src={"/static/img/graphql.svg"}
          className="inline"
          width="60"
          height="30"
          alt="GraphQL"
        />{" "}
      </h2>
      {loading && <SkeletonLoader />}
      {error && (
        <ErrorIcon className="text-gray-600/80 mx-auto mt-10 w-20 h-20" />
      )}
      {data && (
        <>
          <div
            className="mx-auto text-sm cursor-pointer text-slate-400"
            onClick={toggleSaved}
          >
            <LibraryAdd /> Click to Save
          </div>
          <InfoCard
            queryItem={queryItem as QueryItemType}
            gqlData={data[Object.keys(data)[0]]}
          />
        </>
      )}
    </div>
  );
};

export default Info;
