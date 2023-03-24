("use client");
import SkeletonLoader from "../skeleton/SkeletonLoader";
import { useQuery } from "@apollo/client";
import ErrorIcon from "@mui/icons-material/Error";
import { LibraryAdd } from "@mui/icons-material";
import Image from "next/image";
import { gqlQuery } from "@/src/lib/gqlQuery";
import InfoCard from "./InfoCard";
import { QueryItemType } from "@/src/lib/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Info: React.FC<{ queryItem: QueryItemType; gqlId: string }> = ({
  queryItem,
  gqlId,
}) => {
  const queryPath = gqlQuery[queryItem as string];
  const variables = { [`${queryItem}Id`]: gqlId };
  const { data: session, status } = useSession();

  const { loading, error, data } = useQuery(queryPath, {
    variables,
  });

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
            onClick={() => console.log(gqlId)}
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
