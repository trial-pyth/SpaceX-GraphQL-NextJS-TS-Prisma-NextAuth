import { launchPad, mediaData } from "@/src/lib/types";
import Launch from "../launch/Launch";
import Media from "../media/Media";

type ListProps = {
  title: string;
  launchData?: launchPad[];
  mediaData?: mediaData[];
  display: "launch" | "media";
};

const ListSlider = ({ title, launchData, mediaData, display }: ListProps) => {
  if (display === "launch") {
    return (
      <section className="list w-full my-11 mx-0">
        <Launch title={title} launchData={launchData} />
      </section>
    );
  }
  if (display === "media") {
    return (
      <section className="list w-full my-11 mx-0">
        <Media title={title} mediaData={mediaData} />
      </section>
    );
  }

  return <></>;
};

export default ListSlider;
