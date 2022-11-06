export const ChartFilterType = {
  imp: "노출수",
  click: "클릭수",
  cost: "비용",
  conv: "전환수",
  convValue: "전환가치",
  ctr: "클릭률",
  cvr: "전환율",
  cpc: "클릭당비용",
  cpa: "전환당비용",
  roas: "ROAS"
} as const;

export type ChartFilterType =
  typeof ChartFilterType[keyof typeof ChartFilterType];
export type ChartFilterTypeKey = keyof typeof ChartFilterType;
