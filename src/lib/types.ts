import { AxiosResponse } from "axios";
import { InfiniteData } from "react-query";

export type BannerData = {
  title: string;
  subTitle: string;
  imgUrl: string;
};

export interface launchPad {
  name: string;
  id: string;
  images: string[];
  tags: string[];
  details: string;
}

export interface apiData {
  name: string;
  id: string;
  region: string;
  status: string;
  details: string;
  images: { large: string[] };
}

export interface dragonData {
  id: string;
  name: string;
  type: string;
  active: boolean;
  crew_capacity: number;
  diameter: number;
  trunk: number;
  mass: string;
  payload: number;
  height: number;
  image: string;
  description: string;
  wikipedia: string;
}

export interface mediaData {
  videoId: string;
  title: string;
  description: string;
  imgUrl: {
    url: string;
    width: number;
    height: number;
  };
  date: number;
}

export const SideBarItems = [
  "crew",
  "launches",
  "landpads",
  "payloads",
  "capsules",
  "rockets",
  "ships",
  "starlink",
];

export type QueryItemType =
  | "crew"
  | "launches"
  | "landpads"
  | "payloads"
  | "capsules"
  | "rockets"
  | "ships"
  | "starlink";

export type ReactQueryItemType =
  | InfiniteData<AxiosResponse<any, any>>
  | undefined;

export type GqlDataType = {
  [key: string]: string | { [key: string]: string | { [key: string]: string } };
};
