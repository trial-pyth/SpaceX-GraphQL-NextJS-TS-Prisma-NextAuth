import SkeletonLoader from "../skeleton/SkeletonLoader";

type Props = {};

const Info = (props: Props) => {
  return (
    <div className="fixed right-0 w-[20vw] h-[calc(100vh_-_64px)]  flex flex-col flex-grow overflow-hidden overflow-y-auto">
      <SkeletonLoader />
      {/* <SkeletonLoader /> */}
    </div>
  );
};

export default Info;
