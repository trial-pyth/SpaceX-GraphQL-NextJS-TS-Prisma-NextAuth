import { fetchSpaceXVideo } from "@/src/lib/fetchSpaceXAPI";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const videoData = await fetchSpaceXVideo(context?.query?.videoId as string);
  if (videoData === undefined) return { notFound: true };
  const video = {
    id: videoData.id as string,
    title: videoData.snippet.title as string,
    publishedAt: parseInt(
      videoData.snippet.publishedAt.split("-")[0] as string
    ),
    description: videoData.snippet.description as string,
    channelTitle: "SpaceX",
    viewCount: 10000,
  };

  return {
    props: {
      video,
    },
  };
}

const Video: React.FC<{
  video: {
    id: string;
    title: string;
    publishedAt: number;
    description: string;
    channelTitle: string;
    viewCount: number;
  };
}> = ({ video }) => {
  const router = useRouter();

  return (
    <div className="border-2 border-gray-500 shadow-white drop-shadow-xl w-2/3 h-[400px] max-w-4xl rounded-lg mt-20 space-y-4 mx-auto p-6 flex flex-col">
      <div className="player w-full h-full  bg-rose-100/30 rounded-lg">
        <iframe
          id="player"
          className="h-full mx-auto w-full"
          // type="text/html"
          src={`http://www.youtube.com/embed/${video.id}?enablejsapi=1&origin=http://example.com`}
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
