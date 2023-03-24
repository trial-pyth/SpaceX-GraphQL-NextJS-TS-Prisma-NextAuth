import LinkIcon from "@mui/icons-material/Link";
import Link from "next/link";
import { GqlDataType } from "@/src/lib/types";

const LandpadQueryCard: React.FC<{
  gqlData: GqlDataType;
}> = ({ gqlData }) => {
  return (
    <div className="space-y-5 rounded-2xl h-max w-11/12 mx-auto bg-gray-700-900/10 py-4">
      <img
        src={gqlData.images?.large[0]}
        className="object-fill h-32 w-32 bg-slate-500/20 rounded-full mx-auto"
      />
      <div className="w-full flex space-y-1 flex-col">
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">NAME</span>
          <span className="text-white/90">{gqlData.fullName.toString()}</span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">ATTEMPTS</span>
          <span className="text-white/90">
            {gqlData.landingAttempts.toString()}
          </span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">SUCCESS</span>
          <span className="text-white/90">
            {gqlData.landingSuccesses.toString()}
          </span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">STATUS</span>
          <span className="text-white/90">{gqlData.status.toString()}</span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">LOCALITY</span>
          <span className="text-white/90">{gqlData.locality.toString()}</span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">TYPE</span>
          <span className="text-white/90">{gqlData.type.toString()}</span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">WIKI</span>
          <Link href={gqlData.wikipedia} target="_blank">
            <LinkIcon className="text-white/90" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandpadQueryCard;
