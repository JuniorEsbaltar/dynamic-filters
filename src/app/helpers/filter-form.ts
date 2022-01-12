export class FilterForm<T> {
  value: T | undefined;
  key: string;
  label: string;
  options: { key: string; value: string }[];
  component: string;

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      options?: { key: string; value: string }[];
      component?: string;
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || "";
    this.label = options.label || "";
    this.options = options.options || [];
    this.component = options.component || "";
  }
}
