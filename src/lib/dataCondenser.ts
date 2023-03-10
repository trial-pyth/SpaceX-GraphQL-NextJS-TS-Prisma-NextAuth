export function dataCondenser(
  queryItem: string | string[] | undefined,
  shortData: {
    name?: string;
    agency?: string;
    date_utc?: string;
    region?: string;
    type?: string;
    serial?: string;
    cost_per_launch?: number;
    spaceTrack?: {
      OBJECT_NAME?: string;
      LAUNCH_DATE?: string;
    };
    id?: string;
  }
): [string | undefined, number | string | undefined, string | undefined] | [] {
  switch (queryItem) {
    case "crew":
      return [shortData?.name, shortData?.agency, shortData?.id];
    case "launches":
      return [
        shortData?.name,
        Number(shortData?.date_utc?.split("-")[0]),
        shortData?.id,
      ];
    case "landpads":
      return [shortData?.name, shortData?.region, shortData?.id];
    case "payloads":
      return [shortData?.name, shortData?.type, shortData?.id];
    case "capsules":
      return [shortData?.serial, shortData?.type, shortData?.id];
    case "rockets":
      return [
        shortData?.name,
        `$ ${shortData?.cost_per_launch}`,
        shortData?.id,
      ];
    case "ships":
      return [shortData?.name, shortData?.type, shortData?.id];
    case "starlink":
      return [
        shortData?.spaceTrack?.OBJECT_NAME,
        shortData?.spaceTrack?.LAUNCH_DATE?.split("-")[0],
        shortData?.id,
      ];
    default:
      return [];
  }
}
