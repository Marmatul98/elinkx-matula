export interface Region {
  value: string;
  label: string;
}
const REGIONS: Region[] = [
  { value: "PHA", label: "Hlavní město Praha" },
  { value: "STC", label: "Středočeský kraj" },
  { value: "JHC", label: "Jihočeský kraj" },
  { value: "PLK", label: "Plzeňský kraj" },
  { value: "KVK", label: "Karlovarský kraj" },
  { value: "ULK", label: "Ústecký kraj" },
  { value: "LBK", label: "Liberecký kraj" },
  { value: "HKK", label: "Královéhradecký kraj" },
  { value: "PAK", label: "Pardubický kraj" },
  { value: "VYS", label: "Kraj Vysočina" },
  { value: "JMK", label: "Jihomoravský kraj" },
  { value: "OLK", label: "Olomoucký kraj" },
  { value: "ZLK", label: "Zlínský kraj" },
  { value: "MSK", label: "Moravskoslezský kraj" },
];

export function fetchRegions(): Promise<Region[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(REGIONS);
    }, 1500);
  });
}
