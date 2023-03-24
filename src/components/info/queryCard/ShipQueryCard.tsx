import LinkIcon from "@mui/icons-material/Link";
import Link from "next/link";
import { GqlDataType } from "@/src/lib/types";
import { gql } from "@apollo/client";

const ShipQueryCard: React.FC<{
  gqlData: GqlDataType;
}> = ({ gqlData }) => {
  return (
    <div className="space-y-5 rounded-2xl h-max w-11/12 mx-auto bg-gray-700-900/10 py-4">
      <img
        src={gqlData.image?.toString()}
        className="object-fill h-32 w-32 bg-slate-500/20 rounded-full mx-auto"
      />
      <div className="w-full flex space-y-1 flex-col">
        <div className="w-[90%] mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">NAME</span>
          <span className="text-white/90">{gqlData.name?.toString()}</span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">MASS(KG)</span>
          <span className="text-white/90">{gqlData.massKg?.toString()}</span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">PORT</span>
          <span className="text-white/90">{gqlData.homePort?.toString()}</span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">TYPE</span>
          <span className="text-white/90">{gqlData.type?.toString()}</span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">YEAR</span>
          <span className="text-white/90">{gqlData.yearBuilt?.toString()}</span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">ROLES</span>
          <span className="text-white/90">{gqlData.roles?.[0].toString()}</span>
        </div>
        <div className="w-[90%]  mx-auto flex justify-between border-b-[1px] pb-1 items-center border-b-gray-600 text-xs">
          <span className="text-white/80">WIKI</span>
          {gqlData.link ? (
            <Link href={gqlData.link.toString()} target="_blank">
              <LinkIcon className="text-white/90" />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ShipQueryCard;
