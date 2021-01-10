
export interface chartGroup {
  name: string;
  series: chartGroupItem[];
}

export interface chartGroupItem {
  name: string;
  value: number;
}


export interface sampleData {
  impressions: number;
  clicks: number;
  cost: number;
  conversions: number;
  timestamp: string;
}
