

export type FirstCompMigrationType = {
  findings_processed: number;
  self_resolved_findings: number;
}

export type FirstCompBehaviourType = {
  behaviours_improved: number;
  percentage_behaviour_improved: string;
  postures_improved: number;
  percentage_posture_improved: string;
}

export type FirstCompRiskPreventionType = {
  breaches_prevented: number;
  risks_blocked: number;
}

export type FirstCompEfficiencyType = {
  time_saved: "string";
  users_interactions: number;
}


export type FirstCompDetailsType = {
  data: {
    findings_mitigation: FirstCompMigrationType[];
    behaviour_and_posture_enhancement: FirstCompBehaviourType[];
    risk_prevention: FirstCompRiskPreventionType[];
    efficiency_and_impact: FirstCompEfficiencyType[];
  }
}

export type FirstCompComponentsType = {
  name: string;
  type: string;
  details: FirstCompDetailsType
  totalElements: number;
  size: number;
}

export type FirstCompContentType = {
  widget_id: string;
  template_id: string;
  title: string;
  components: FirstCompComponentsType[];
  user_id: null;
  subscriber: null;
}


export type FirstCompDataType = {
  content: FirstCompContentType[];
  query_params: object
}
