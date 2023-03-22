("use client");
import SkeletonLoader from "../skeleton/SkeletonLoader";
import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
import { GET_CREW } from "@/src/lib/gqlQuery";

const Info: React.FC<{ queryItem: string | undefined; gqlId: string }> = ({
  queryItem,
  gqlId,
}) => {
  const { loading, error, data } = useQuery(GET_CREW, {
    variables: {
      crewId: gqlId,
    },
  });
  /**
   * 
  console.log({ data });
  console.log({ error });
  */
  return (
    <div className="fixed right-0 w-[20vw] h-[calc(100vh_-_64px)]  flex flex-col flex-grow overflow-hidden overflow-y-auto">
      <h2 className="mx-auto text-gray-500">
        Powered by{" "}
        <Image
          src={"/static/img/graphql.svg"}
          className="inline"
          width="90"
          height="45"
          alt="GraphQL"
        />{" "}
      </h2>
      <p>{data?.crew?.name}</p>
      {loading && <SkeletonLoader />}
    </div>
  );
};

export default Info;
