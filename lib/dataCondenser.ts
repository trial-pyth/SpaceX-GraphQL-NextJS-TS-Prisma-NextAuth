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
  }
): [string | undefined, number | string | undefined] | [] {
  switch (queryItem) {
    case "crew":
      return [shortData?.name, shortData?.agency];
    case "launches":
      return [shortData?.name, Number(shortData?.date_utc?.split("-")[0])];
    case "landpads":
      return [shortData?.name, shortData?.region];
    case "payloads":
      return [shortData?.name, shortData?.type];
    case "capsules":
      return [shortData?.serial, shortData?.type];
    case "rockets":
      return [shortData?.name, `$ ${shortData?.cost_per_launch}`];
    case "ships":
      return [shortData?.name, shortData?.type];
    case "starlink":
      return [
        shortData?.spaceTrack?.OBJECT_NAME,
        shortData?.spaceTrack?.LAUNCH_DATE?.split("-")[0],
      ];
    default:
      return [];
  }
}
