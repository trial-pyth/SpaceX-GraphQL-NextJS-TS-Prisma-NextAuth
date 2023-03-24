import LinkIcon from "@mui/icons-material/Link";
import Link from "next/link";
import { GqlDataType } from "@/src/lib/types";

const StarlinkQueryCard: React.FC<{
  gqlData: GqlDataType;
}> = ({ gqlData }) => {
  return (
    <div className="space-y-5 rounded-2xl h-max w-11/12 mx-auto bg-gray-700-900/10 py-4">
      <div className="object-fill h-32 w-32 bg-slate-500/20 rounded-full mx-auto" />
      <div className="w-full flex space-y-1 flex-col">
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">NAME</span>
          <span className="text-white/90">
            {gqlData.spaceTrack?.OBJECT_NAME.toString()}
          </span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">VERSION</span>
          <span className="text-white/90">{gqlData.version?.toString()}</span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">ORBIT CENTER</span>
          <span className="text-white/90">
            {gqlData.spaceTrack?.["CENTER_NAME"]?.toString()}
          </span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">LAUNCH DATE</span>
          <span className="text-white/90">
            {" "}
            {gqlData.spaceTrack?.["LAUNCH_DATE"]?.toString()}
          </span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">DECAY DATE</span>
          <span className="text-white/90">
            {" "}
            {gqlData.spaceTrack?.["DECAY_DATE"]?.toString()}
          </span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">SITE</span>
          <span className="text-white/90">
            {" "}
            {gqlData.spaceTrack?.["SITE"]?.toString()}
          </span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">PERIOD</span>
          <span className="text-white/90">
            {" "}
            {gqlData.spaceTrack?.["PERIOD"]?.toString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StarlinkQueryCard;
