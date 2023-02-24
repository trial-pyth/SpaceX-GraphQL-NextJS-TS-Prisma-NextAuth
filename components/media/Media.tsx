import { mediaData } from "@/lib/types";
// import VideoCard from "../card/VideoCard";
import { useInView } from "react-intersection-observer";
import VideoCard from "../card/VideoCard";

type MediaProps = {
  title: string;
  mediaData: mediaData[] | undefined;
};

const Media = ({ title, mediaData }: MediaProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    delay: 1.7,
    triggerOnce: true,
  });

  return (
    <div className="mx-5 mt-10 overflow-hidden ">
      <span className="text-3xl font-bold ml-8 ">{title}</span>
      <div className="mx-5 flex ">
        <div
          ref={ref}
          className="grid grid-cols-4 self-center gap-x-5 my-3 mx-auto items-center justify-center "
        >
          {mediaData?.map((media) => {
            return (
              <VideoCard
                key={media.videoId}
                mediaData={media}
                inView={inView}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Media;
