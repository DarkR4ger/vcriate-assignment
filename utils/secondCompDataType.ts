export type DetailsDataType = {
  main: number;
  percentage_increase: string;
  percentage_loss: string;
  color: string;
}

export type SecondCompDetailsType = {
  data: {
    "Password Reuse": DetailsDataType
    "Compromised Password": DetailsDataType
    "Highly Targeted with Social Engineering": DetailsDataType
    "Access to Unused Sensitive Data": DetailsDataType
    "Unapproved SaaS Usage": DetailsDataType
    "Weak Password": DetailsDataType
    "Sensitive Data Used on Public AI Apps": DetailsDataType
  }
}

export type SecondCompComponentsType = {
  name: string;
  type: string;
  details: SecondCompDetailsType
  totalElements: number;
  size: number;
}
export type SecondCompContentType = {
  widget_id: string;
  template_id: string;
  title: string;
  components: SecondCompComponentsType[];
  user_id: null;
  subscriber: null;
}

export type SecondCompDataType = {
  content: SecondCompContentType[];
  query_params: object
}
