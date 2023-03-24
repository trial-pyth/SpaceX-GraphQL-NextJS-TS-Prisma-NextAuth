import { GqlDataType } from "@/src/lib/types";

const CapsuleQueryCard: React.FC<{
  gqlData: GqlDataType;
}> = ({ gqlData }) => {
  return (
    <div className="space-y-5 rounded-2xl h-max w-11/12 mx-auto bg-gray-700-900/10 py-4">
      <div className="object-contain h-32 w-32 bg-slate-500/20 rounded-full mx-auto" />
      <div className="w-full flex space-y-1 flex-col">
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">SERIAL</span>
          <span className="text-white/90">{gqlData.serial.toString()}</span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">REUSE COUNT</span>
          <span className="text-white/90">{gqlData.reuseCount.toString()}</span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">STATUS</span>
          <span className="text-white/90">{gqlData.status.toString()}</span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">TYPE</span>
          <span className="text-white/90">{gqlData.type.toString()}</span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">WATER LANDINGS</span>
          <span className="text-white/90">
            {gqlData.waterLandings.toString()}
          </span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">LAND LANDINGS</span>
          <span className="text-white/90">
            {gqlData.landLandings.toString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CapsuleQueryCard;
