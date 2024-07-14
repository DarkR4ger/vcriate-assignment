"use client";

import { ThirdCompResponseType } from "@/utils/incomingType";
import {
  ThirdCompContentType,
  ThirdCompDataType,
} from "@/utils/thirdCompDataType";
import { useEffect, useState } from "react";

type IssuesType = {
  type: string;
  tags: string[];
  status: string;
  totalUsers: number;
};

const ThirdComp = () => {
  const [data, setData] = useState<ThirdCompContentType | null>(null);
  const [issues, setIssues] = useState<IssuesType[] | null>(null);
  const getData = async () => {
    try {
      const res = await fetch("/api/thirddata");
      const body: ThirdCompResponseType = await res.json();
      if (body.success) {
        const data: ThirdCompDataType = body.data!;
        const content = data.content[0];
        const components = content.components[0];
        const details = components.details;
        const issues: IssuesType[] = [
          {
            type: "Account Breach",
            tags: details.data["Account Breach"][0].groups,
            status: details.data["Account Breach"][0].status,
            totalUsers: details.data["Account Breach"][0].totalUsers,
          },
          {
            type: "Compromised Password",
            tags: details.data["Compromised Password"][0].groups,
            status: details.data["Compromised Password"][0].status,
            totalUsers: details.data["Compromised Password"][0].totalUsers,
          },
          {
            type: "Human Behaviour / Security Training",
            tags: details.data["Human Behaviour / Security Training"].groups,
            status: details.data["Human Behaviour / Security Training"].status,
            totalUsers:
              details.data["Human Behaviour / Security Training"].total_users,
          },
        ];
        setData(content);
        setIssues(issues);
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
    <div className="bg-compBg p-8 rounded-md max-w-[750px]">
      {!data && <div>Loading...</div>}
      {data && (
        <div className="flex flex-col justify-center gap-y-4">
          <h2 className="font-medium">{data.title}</h2>
          <table className="w-full">
            <thead>
              <tr className="flex items-center justify-between bg-[#121212] px-4 text-[12px] py-2 rounded-xl text-white/40 w-full ">
                <th className="font-light">TYPE</th>
                <th className="font-light">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {issues?.map((issue, index) => {
                return (
                  <tr
                    key={index}
                    className="flex items-center py-4 border-b border-b-gray-500/30 justify-between"
                  >
                    <td className="flex flex-col justify-center gap-3">
                      <p className="font-medium">
                        {issue.type} &#40;{issue.totalUsers}&#41;
                      </p>
                      <div className="flex items-center gap-3">
                        {issue.tags.map((tag, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 rounded-xl font-medium ${tag.startsWith("UI") ? "text-cyan-400 bg-cyan-400/20" : tag.startsWith("Eng") ? "text-[#23BD8B] bg-[#23BD8B]/30 " : tag.startsWith("India") ? "text-orange-500 bg-orange-500/30" : tag.startsWith("Admin") ? "text-[#FFB2B2] bg-[#FFB2B2]/30" : tag.startsWith("VIP") ? "text-[#D6D0A5] bg-[#6F6B00] " : "text-pink-500 bg-pink-500/30"}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="">
                      <button
                        className={`px-3 py-2 font-medium w-[120px] rounded-md ${issue.status.startsWith("In") ? "bg-[#C6FAB2] text-black" : "bg-[#FAE0B9] text-black"}`}
                      >
                        {issue.status}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-end mt-6">
            <button className="py-2 font-medium text-success px-5 border-2 border-success/30 rounded-full">
              View all
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThirdComp;
