import { useRouter } from "next/router";
type Props = {
  video: {};
};

export async function getStaticPaths() {
  const listOfVideos = ["Q_s_7iTydYU", "07umAHbXYyk", "TeVbYCIFVa8"];

  const paths = listOfVideos.map((videoId) => ({
    params: { videoId },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps() {
  const video = {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    publishedAt: "2000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vel ex totam. Soluta suscipit consequuntur voluptas sit exercitationem, nam consequatur deserunt, dolor ut eaque neque nulla quis. Molestiae beatae debitis ipsum omnis, in saepe, aperiam sit at, eos fuga rerum enim voluptate. Ab, explicabo soluta? Officiis eveniet maiores labore id!",
    channelTitle: "SpaceX",
    viewCount: 10000,
  };

  return {
    props: {
      video,
    },
    revalidate: 10,
  };
}

const Video = ({ video }: Props) => {
  const router = useRouter();

  return (
    <div className="border-2 border-gray-500 shadow-white drop-shadow-xl w-2/3 h-[800px] rounded-lg mt-20 space-y-4 mx-auto p-6 flex flex-col">
      <div className="player w-full h-[60%]  bg-rose-100/30 rounded-lg">
        <iframe
          id="player"
          className="h-full mx-auto w-full"
          // type="text/html"
          src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
          frameBorder="0"
        ></iframe>
      </div>
      <div className="details flex h-[40%] flex-row space-x-3">
        <div className="description w-2/3 h-full rounded-lg overflow-y-auto bg-red-100/30">
          Description
        </div>
        <div className="description w-1/3 h-full rounded-lg bg-red-100/30">
          details
        </div>
      </div>
    </div>
  );
};

export default Video;
