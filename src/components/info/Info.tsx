import SkeletonLoader from "../skeleton/SkeletonLoader";

type Props = {};

const Info = (props: Props) => {
  return (
    <div className="fixed right-0 w-[20vw] h-[calc(100vh_-_64px)]  flex flex-col flex-grow overflow-hidden border-red-400 border-2">
      {/* <SkeletonLoader /> */}
    </div>
  );
};

export default Info;
