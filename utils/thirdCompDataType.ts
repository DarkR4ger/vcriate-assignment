export type ThirdDataType = {
  totalUsers: number;
  status: string;
  groups: string[];
};

export type ThirdDataHumanBehaviourType = {
  total_users: number;
  status: string;
  groups: string[];
}

export type ThirdCompDetailsType = {
  data: {
    "Account Breach": ThirdDataType[];
    "Compromised Password": ThirdDataType[];
    "Human Behaviour / Security Training": ThirdDataHumanBehaviourType;
  };
};

export type ThirdCompComponentsType = {
  name: string;
  type: string;
  details: ThirdCompDetailsType;
  totalElements: number;
  size: number;
};

export type ThirdCompContentType = {
  widget_id: string;
  template_id: string;
  title: string;
  components: ThirdCompComponentsType[];
  user_id: null;
  subscriber: null;
};

export type ThirdCompDataType = {
  content: ThirdCompContentType[];
  query_params: object;
};

