import axios from "axios";

export const spacexAPI = axios.create({
  baseURL: "https://api.spacexdata.com/v4",
});

export const getSpaceXData = async (
  exploreItem: string = "crew",
  options = {
    pageNum: 1,
    limit: 5,
  }
) => {
  //   console.log(exploreItem);

  const result = await spacexAPI.post(`/${exploreItem}/query`, {
    options: { page: options.pageNum, limit: options.limit },
  });

  return result;

  //   console.log(
  //     spacexAPI.post(`/${exploreItem}/query`, {
  //       options: { page: options.pageParam, limit: options.limit },
  //     })
  //   );
};
