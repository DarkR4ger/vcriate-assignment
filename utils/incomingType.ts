import { FirstCompDataType } from "./firstCompDataType";
import { SecondCompDataType } from "./secondCompDataType";
import { ThirdCompDataType } from "./thirdCompDataType";

export type FirstCompResponseType = {
  success: boolean;
  message: string;
  data?: FirstCompDataType;
};
export type SecondCompResponseType = {
  success: boolean;
  message: string;
  data?: SecondCompDataType;
};
export type ThirdCompResponseType = {
  success: boolean;
  message: string;
  data?: ThirdCompDataType;
};
