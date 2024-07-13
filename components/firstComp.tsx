"use client";

import {
  FirstCompDataType,
  FirstCompContentType,
  FirstCompMigrationType,
  FirstCompBehaviourType,
  FirstCompRiskPreventionType,
  FirstCompEfficiencyType,
} from "@/utils/firstCompDataType";
import { FirstCompResponseType } from "@/utils/incomingType";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const FirstComp = () => {
  const [data, setData] = useState<FirstCompContentType | null>(null);

  const getData = async () => {
    try {
      const res = await fetch("/api/firstcomp");
      const body: FirstCompResponseType = await res.json();
      if (body.success) {
        const data: FirstCompDataType = body.data!;
        const content = data.content[0];
        setData(content);
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
    <div className="bg-compBg p-10 max-w-[40%] rounded-md">
      {!data && <div>Loading...</div>}
      {data &&
        data.components.map((comp, index) => {
          const findingMitigation = comp.details.data.findings_mitigation;
          const behaviourEnhancement =
            comp.details.data.behaviour_and_posture_enhancement;
          const riskPrevention = comp.details.data.risk_prevention;
          const efficiency = comp.details.data.efficiency_and_impact;
          return (
            <div key={index} className="">
              <section className="flex justify-between">
                <Mitigations data={findingMitigation[0]} />
                <Behaviour data={behaviourEnhancement[0]} />
              </section>

              <section className="flex justify-between">
                <RiskPrevention data={riskPrevention[0]} />
                <Efficiency data={efficiency[0]} />
              </section>
              <section className="flex items-center justify-between">
                <p className="text-left font-medium text-[16px] opacity-75">
                  {data.title}
                </p>
                <button className="py-2 font-medium text-success px-5 border-2 border-success/30 rounded-full">Explore</button>
              </section>
            </div>
          );
        })}
    </div>
  );
};

const Mitigations = ({ data }: { data: FirstCompMigrationType }) => {
  return (
    <div className="pb-10 pr-10 w-[50%] border-r border-b  border-r-gray-500/30 border-b-gray-500/30 flex flex-col gap-2">
      <h2 className="opacity-75 text-left font-medium">Finding Mitigation</h2>
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-center">
          <p className="text-[40px]">{data.findings_processed}</p>
          <p className="text-[12px] text-left w-20 opacity-60">
            Findings Processed
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[40px]">{data.self_resolved_findings}</p>
          <p className="text-[12px] text-left w-20 opacity-60">
            Self-Resolved Findings
          </p>
        </div>
      </div>
    </div>
  );
};

const Behaviour = ({ data }: { data: FirstCompBehaviourType }) => {
  return (
    <div className="pb-10 pl-10 w-[50%] border-b border-b-gray-500/30 flex flex-col gap-2">
      <h2 className="opacity-75 text-left font-medium">
        Behaviour &amp; Posture Enhancement
      </h2>
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 ">
            <p className="text-[40px]">{data.behaviours_improved}</p>
            <div className="flex">
              <ArrowUp className="text-success" />
              <span className="text-success">8&#37;</span>
            </div>
          </div>
          <p className="text-[12px] text-left w-20 opacity-60">
            Behaviors Improved
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 ">
            <p className="text-[40px]">{data.postures_improved}</p>
            <div className="flex">
              <ArrowUp className="text-success" />
              <span className="text-success">8&#37;</span>
            </div>
          </div>
          <p className="text-[12px] text-left w-20 opacity-60">
            Postures Improved
          </p>
        </div>
      </div>
    </div>
  );
};

const RiskPrevention = ({ data }: { data: FirstCompRiskPreventionType }) => {
  return (
    <div className="pb-10 pt-10 pr-10 w-[50%] flex flex-col gap-2">
      <h2 className="opacity-75 text-left font-medium">Risk Prevention</h2>
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-center">
          <p className="text-[40px]">{data.breaches_prevented}</p>
          <p className="text-[12px] text-left w-20 opacity-60">
            Breaches Prevented
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[40px]">{data.risks_blocked}</p>
          <p className="text-[12px] text-left w-10 opacity-60">Risk Blocked</p>
        </div>
      </div>
    </div>
  );
};

const Efficiency = ({ data }: { data: FirstCompEfficiencyType }) => {
  const time = data.time_saved.substring(0, 3);
  const unit = data.time_saved.substring(3);

  return (
    <div className="pt-10 pl-10 w-[50%] border-l border-l-gray-500/30 flex flex-col gap-2">
      <h2 className="opacity-75 text-left font-medium">
        Efficiency &amp; Impact
      </h2>
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 ">
            <p className="text-[40px]">
              {time}
              <span className="text-[15px] tracking-tight font-light">
                {unit}
              </span>
            </p>
          </div>
          <p className="text-[12px] text-left w-20 opacity-60">
            Behaviors Improved
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 ">
            <p className="text-[40px]">{data.users_interactions}</p>
          </div>
          <p className="text-[12px] text-left w-20 opacity-60">
            Postures Improved
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstComp;
