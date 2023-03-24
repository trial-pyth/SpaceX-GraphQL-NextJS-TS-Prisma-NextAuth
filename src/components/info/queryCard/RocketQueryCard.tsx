import { GqlDataType } from "@/src/lib/types";

const RocketQueryCard: React.FC<{
  gqlData: GqlDataType;
}> = ({ gqlData }) => {
  return (
    <div className="space-y-5 rounded-2xl h-max w-11/12 mx-auto bg-gray-700-900/10 py-4">
      <div className="object-contain h-32 w-32 bg-slate-500/20 rounded-full mx-auto" />
      <div className="w-full flex space-y-1 flex-col">
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">NAME</span>
          <span className="text-white/90">{gqlData.name.toString()}</span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">STAGES</span>
          <span className="text-white/90">{gqlData.stages.toString()}</span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">PROPELLANT</span>
          <span className="text-white/90">
            {gqlData.engines.propellant1?.toString()}
          </span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">ENGINE</span>
          <span className="text-white/90">
            {gqlData.engines.type?.toUpperCase()}
          </span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">HEIGHT(FT.)</span>
          <span className="text-white/90">
            {gqlData.height.feet?.toString()}
          </span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">COST</span>
          <span className="text-white/90">
            ${gqlData.costPerLaunch / 1000000}M
          </span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">SUCCESS %</span>
          <span className="text-white/90">
            {gqlData.successRatePct?.toString()}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default RocketQueryCard;
