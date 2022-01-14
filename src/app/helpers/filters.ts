import { FilterForm, setComma } from "./filter-form";

const dateFilter: FilterForm<string> = {
  value: "",
  key: "date",
  label: "Date",
  options: [],
  component: "text",
  applyMask: (e: any) => setComma(e),
};

const colorFilter: FilterForm<string> =  {
  value: "",
  key: "color",
  label: "Color",
  options: [
    { key: "", value: "All" },
    { key: "yellow", value: "Yellow" },
    { key: "green", value: "Green" },
  ],
  applyMask: (e: any) => setComma(e),
  component: "select",
};

export { colorFilter, dateFilter }

