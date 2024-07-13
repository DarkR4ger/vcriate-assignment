import { FirstCompDataType } from "./firstCompDataType";

export type FirstCompResponseType = {
  success: boolean;
  message: string;
  data?: FirstCompDataType
}
