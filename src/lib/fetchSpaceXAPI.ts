import { apiData, dragonData, launchPad, mediaData } from "./types";

export async function fetchSpaceXAPILaunch() {
  const data = await fetch("https://api.spacexdata.com/v4/launchpads");
  const launchpads = await data.json();

  let padData: launchPad[] = [];

  launchpads.map((data: apiData) => {
    padData.push({
      id: data.id!,
      name: data.name!,
      images: data.images.large!,
      tags: [data.region ?? null, data.status ?? null],
      details: data.details,
    });
  });

  return padData;
}

export async function fetchSpaceXAPIDragon() {
  const data = await fetch("https://api.spacexdata.com/v4/dragons");
  const dragonsRaw = await data.json();

  let dragons: dragonData[] = new Array();

  dragonsRaw.map((dragon: typeof dragonsRaw[0]) => {
    dragons.push({
      id: dragon.id,
      name: dragon.name,
      type: dragon.type,
      active: dragon.active,
      crew_capacity: dragon.crew_capacity,
      diameter: dragon.diameter.feet,
      trunk: dragon.trunk.trunk_volume.cubic_meters,
      mass: dragon.dry_mass_kg,
      payload: dragon.launch_payload_mass.kg,
      height: dragon.height_w_trunk.feet,
      image: dragon.flickr_images[0],
      description: dragon.description,
      wikipedia: dragon.wikipedia,
    });
  });

  // console.log(dragons);
  return dragons;
}

export async function fetchSpaceXAPIMedia() {
  const data = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCtI0Hodo5o5dUb67FeUjDeA&maxResults=12&key=${process.env.NEXT_PUBLIC_YOUTUBE_API}`
  );
  const mediaRaw = await data.json();
  const mediaData: mediaData[] = new Array();
  mediaRaw.items.map((item: typeof mediaRaw) => {
    mediaData.push({
      videoId: item.id.videoId,
      title: item.snippet.title,
      imgUrl: item.snippet.thumbnails.high,
      description: item.snippet.description,
      date: parseInt(item.snippet.publishTime.split("-")[0]),
    });
  });

  return mediaData;
}

export async function fetchSpaceXVideo(videoId: string) {
  try {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API}`
    );

    const videoData = await data.json();
    return videoData.items[0];
  } catch (error) {
    console.log(error);
  }
}
