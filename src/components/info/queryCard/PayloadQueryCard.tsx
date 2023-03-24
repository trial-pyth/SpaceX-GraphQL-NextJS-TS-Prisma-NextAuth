import LinkIcon from "@mui/icons-material/Link";
import Link from "next/link";
import { GqlDataType } from "@/src/lib/types";

const PayloadQueryCard: React.FC<{
  gqlData: GqlDataType;
}> = ({ gqlData }) => {
  return (
    <div className="space-y-5 rounded-2xl h-max w-11/12 mx-auto bg-gray-700-900/10 py-4">
      <img className="object-contain h-32 w-32 bg-slate-500/20 rounded-full mx-auto" />
      <div className="w-full flex space-y-1 flex-col">
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">NAME</span>
          <span className="text-white/90">{gqlData.name?.toString()}</span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">MASS (KG)</span>
          <span className="text-white/90">{gqlData.massKg?.toString()}</span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">ORBIT</span>
          <span className="text-white/90">{gqlData.orbit?.toString()}</span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">REUSED</span>
          <span className="text-white/90">{gqlData.reused?.toString()}</span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">TYPE</span>
          <span className="text-white/90">{gqlData.type?.toString()}</span>
        </div>

        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">CUSTOMER</span>
          <span className="text-white/90">
            {gqlData.customers[0]?.toString()}
          </span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">MANUFACTURERS</span>
          <span className="text-white/90">
            {gqlData.manufacturers[0]?.toString()}
          </span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">COUNTRY</span>
          <span className="text-white/90">
            {gqlData.nationalities[0]?.toString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PayloadQueryCard;
