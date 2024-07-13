import { FirstCompDataType } from "./firstCompDataType";
import { SecondCompDataType } from "./secondCompDataType";

export type FirstCompResponseType = {
  success: boolean;
  message: string;
  data?: FirstCompDataType
}
export type SecondCompResponseType = {
  success: boolean;
  message: string;
  data?: SecondCompDataType
}
