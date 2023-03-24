import LinkIcon from "@mui/icons-material/Link";
import Link from "next/link";
import { GqlDataType } from "@/src/lib/types";

const LaunchQueryCard: React.FC<{
  gqlData: GqlDataType;
}> = ({ gqlData }) => {
  return (
    <div className="space-y-5 rounded-2xl h-max w-11/12 mx-auto bg-gray-700-900/10 py-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-400">
      <img
        src={gqlData.links?.patch?.small.toString()}
        className="object-fill h-32 w-32 bg-slate-500/20 rounded-full mx-auto"
      />
      <div className="w-full flex space-y-1 flex-col">
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">NAME</span>
          <span className="text-white/90">{gqlData.name.toString()}</span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">FLIGHT NUMBER</span>
          <span className="text-white/90">
            {gqlData.flightNumber.toString()}
          </span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">SUCCESS</span>
          <span className="text-white/90">{gqlData.success.toString()}</span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">WEBCAST</span>
          <Link href={gqlData.links?.webcast} target="_blank">
            <LinkIcon className="text-white/90" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LaunchQueryCard;
