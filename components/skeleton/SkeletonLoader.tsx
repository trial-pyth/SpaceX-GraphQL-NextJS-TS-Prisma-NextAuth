type Props = {};

const Skeleton = (props: Props) => {
  return (
    <div className="space-y-5 rounded-2xl h-full w-full bg-white/5 p-4">
      <div className="animate-pulse rounded-lg w-full h-1/2 bg-rose-100/20"></div>
      <div className="space-y-3">
        <div className="animate-pulse h-3 w-3/5 rounded-lg bg-rose-100/10"></div>
        <div className="animate-pulse h-3 w-4/5 rounded-lg bg-rose-100/20"></div>
        <div className="animate-pulse h-3 w-2/5 rounded-lg bg-rose-100/20"></div>
        <div className="animate-pulse rounded-full h-[25px] w-[50px] bg-gray-200/30 text-slate-900 font-bold py-2 px-4"></div>
      </div>
    </div>
  );
};

export default Skeleton;
