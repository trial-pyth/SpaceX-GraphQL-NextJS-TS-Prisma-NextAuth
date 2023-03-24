import { GqlDataType, QueryItemType } from "@/src/lib/types";
import React from "react";
import CapsuleQueryCard from "./queryCard/CapsuleQueryType";
import CrewQueryCard from "./queryCard/CrewQueryCard";
import LandpadQueryCard from "./queryCard/LandpadQueryCard";
import LaunchQueryCard from "./queryCard/LaunchQueryCard";
import PayloadQueryCard from "./queryCard/PayloadQueryCard";
import RocketQueryCard from "./queryCard/RocketQueryCard";
import ShipQueryCard from "./queryCard/ShipQueryCard";
import StarlinkQueryCard from "./queryCard/StarlinkQueryCard";

const InfoCard: React.FC<{
  queryItem: QueryItemType;
  gqlData: GqlDataType;
}> = ({ queryItem, gqlData }) => {
  if (queryItem === "crew") {
    return <CrewQueryCard gqlData={gqlData} />;
  }
  if (queryItem === "launches") {
    return <LaunchQueryCard gqlData={gqlData} />;
  }
  if (queryItem === "landpads") {
    return <LandpadQueryCard gqlData={gqlData} />;
  }
  if (queryItem === "payloads") {
    return <PayloadQueryCard gqlData={gqlData} />;
  }
  if (queryItem === "capsules") {
    return <CapsuleQueryCard gqlData={gqlData} />;
  }
  if (queryItem === "rockets") {
    return <RocketQueryCard gqlData={gqlData} />;
  }
  if (queryItem === "ships") {
    return <ShipQueryCard gqlData={gqlData} />;
  }
  if (queryItem === "starlink") {
    return <StarlinkQueryCard gqlData={gqlData} />;
  }

  return <div>Error</div>;
};

export default InfoCard;
