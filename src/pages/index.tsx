import Banner from "../components/banner/Banner";
import { bannerContent } from "@/src/data/bannerContent";
import ListSlider from "../components/listSlider/ListSlider";
import {
  fetchSpaceXAPIDragon,
  fetchSpaceXAPILaunch,
  fetchSpaceXAPIMedia,
} from "@/src/lib/fetchSpaceXAPI";
import Dragon from "../components/dragon/Dragon";
import { BannerData, dragonData, launchPad, mediaData } from "@/src/lib/types";

export async function getStaticProps() {
  const padData: launchPad[] = await fetchSpaceXAPILaunch();
  const dragonsData: dragonData[] = await fetchSpaceXAPIDragon();
  const mediaData: mediaData[] = await fetchSpaceXAPIMedia();

  return {
    props: {
      padData,
      bannerContent,
      dragonsData,
      mediaData,
    },
    revalidate: 60,
  };
}

type HomeProps = {
  padData: launchPad[];
  bannerContent: BannerData;
  dragonsData: dragonData[];
  mediaData: mediaData[];
};

export default function Home(props: HomeProps) {
  const { padData, bannerContent, dragonsData, mediaData } = props;

  return (
    <main>
      <Banner
        title={bannerContent.title}
        subTitle={bannerContent.subTitle}
        imgUrl={bannerContent.imgUrl}
      />
      <ListSlider title="Launch Pad" launchData={padData} display="launch" />

      <Dragon dragonsData={dragonsData} />

      <ListSlider title="Media" mediaData={mediaData} display="media" />
    </main>
  );
}
