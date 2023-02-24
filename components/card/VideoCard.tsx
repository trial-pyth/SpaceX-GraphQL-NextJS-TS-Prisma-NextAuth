import { mediaData } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import SkeletonLoader from "../skeleton/SkeletonLoader";
import Tags from "./Tags";

type VideoCardProps = {
  mediaData: mediaData;
  inView: boolean;
};

const VideoCard = ({ mediaData, inView }: VideoCardProps) => {
  // console.log(mediaData);

  const router = useRouter();

  const { title, imgUrl, videoId, date } = mediaData;
  return inView && mediaData ? (
    <Link href={`/video/${videoId}`}>
      <section className="w-[200px] my-3 bg-black h-[310px] border-2 border-white/50 rounded-md overflow-hidden cursor-pointer">
        <div className="relative mt-5 h-1/2 max-w-[175px] mx-auto rounded-lg overflow-hidden object-cover">
          {imgUrl.url && (
            <Image
              src={imgUrl.url}
              alt="card-picture"
              fill
              className="max-h-1/4 w-full rounded-md border-2 border-gray-500/60"
            />
          )}
        </div>
        <div className="card-content w-5/6 mx-5 mt-3 space-y-2 ">
          <div className="w-full text-left rounded-md text-sm font-regular ">
            {title}
          </div>
          <div className="tags w-full rounded-md overflow-y-visible ">
            <Tags tag={date} />
          </div>
        </div>
      </section>
    </Link>
  ) : (
    <section className="w-[200px] my-3 h-[310px] border-2 border-rose-300/25 rounded-md overflow-hidden">
      <SkeletonLoader />;
    </section>
  );

  // return (
  //   <section className="w-[200px] my-3 h-[310px] border-2 border-rose-300/25 rounded-md overflow-hidden">
  //     <SkeletonLoader />;
  //   </section>
  // );
};

export default VideoCard;
