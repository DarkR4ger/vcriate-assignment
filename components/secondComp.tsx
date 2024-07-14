"use client";
import { SecondCompResponseType } from "@/utils/incomingType";
import {
  DetailsDataType,
  SecondCompComponentsType,
  SecondCompContentType,
  SecondCompDataType,
  SecondCompDetailsType,
} from "@/utils/secondCompDataType";
import {
  ArrowDown,
  ArrowUp,
  Cloud,
  Crosshair,
  FileText,
  Lock,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

export type DataPropsType = {
  icon: JSX.Element;
  details: DetailsDataType;
  title: string;
};

const Behaviours = ({ props }: { props: DataPropsType }) => {
  const { icon, details, title } = props;
  const { percentage_increase, percentage_loss } = details;
  const increaseLength = percentage_increase.length;
  const decreaseLength = percentage_loss.length;
  const percentageInc = parseInt(
    percentage_increase.substring(0, increaseLength - 1),
  );
  const percentageLoss = parseInt(
    percentage_loss.substring(0, decreaseLength - 1),
  );
  return (
    <div className="flex items-center justify-between bg-[#2B2B2B] py-2 px-8 rounded-full">
      <div className="flex items-center gap-4">
        {icon}
        <p className="font-medium opacity-75">
          {title} &#40;{details.main}&#41;
        </p>
      </div>
      <div className="flex items-center gap-x-1">
        {percentageInc > 0 ? (
          <>
            <ArrowDown className="text-success" />
            <p className={`text-success ${percentageInc < 9 ? "pr-1" : ""}`}>
              {percentageInc}&#37;
            </p>
          </>
        ) : (
          <>
            <ArrowUp className="text-failure" />
            <span
              className={`text-failure ${percentageLoss < 9 ? "pr-1" : ""}`}
            >
              {percentageLoss}&#37;
            </span>
          </>
        )}
      </div>
    </div>
  );
};

const SecondComp = () => {
  const [data, setData] = useState<SecondCompContentType | null>(null);
  const [dataProps, setDataProps] = useState<DataPropsType[] | null>(null);

  const getData = async () => {
    try {
      const res = await fetch("/api/seconddata");
      const body: SecondCompResponseType = await res.json();
      if (body.success) {
        const data: SecondCompDataType = body.data!;
        const content = data.content[0];
        const components = content.components[0];
        const details = components.details;
        const dataprops = [
          {
            icon: <Lock className="text-orange-500 size-5" />,
            details: details.data["Password Reuse"],
            title: "Password Reuse",
          },
          {
            icon: <Lock className="text-orange-500 size-5" />,
            details: details.data["Compromised Password"],
            title: "Compromised Password",
          },
          {
            icon: <Crosshair className="text-[#F93873] size-5" />,
            details: details.data["Highly Targeted with Social Engineering"],
            title: "Highly Targeted with Social Engineering",
          },
          {
            icon: <FileText className="text-[#90F7BC] size-5" />,
            details: details.data["Access to Unused Sensitive Data"],
            title: "Access to Unused Sensitive Data",
          },
          {
            icon: <Cloud className="text-[#60B5EF] size-5" />,
            details: details.data["Unapproved SaaS Usage"],
            title: "Unapproved SaaS Usage",
          },
          {
            icon: <Lock className="text-orange-500 size-5" />,
            details: details.data["Weak Password"],
            title: "Weak Password",
          },
          {
            icon: <Sparkles className="text-[#DDD58A] size-5" />,
            details: details.data["Sensitive Data Used on Public AI Apps"],
            title: "Sensitive Data Used on Public AI Apps",
          },
        ];

        setData(content);
        setDataProps(dataprops);
      } else {
        console.log(body.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-compBg p-8 rounded-md max-w-[750px] flex flex-col gap-2 justify-center ">
      {!data && <div>Loading...</div>}
      {data && (
        <>
          {dataProps?.map((props, index) => {
            return <Behaviours key={index} props={props} />;
          })}
          <div className="flex items-center justify-between mt-6">
            <p className="text-left font-medium text-[16px] opacity-75">
              {data.title}
            </p>
            <button className="py-2 font-medium text-success px-5 border-2 border-success/30 rounded-full">
              View all
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SecondComp;
