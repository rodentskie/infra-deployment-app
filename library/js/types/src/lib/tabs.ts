export interface ITabs {
  value: string;
  label: string;
}

export interface ITabsProps {
  defaultValue: string;
  tabs: ITabs[];
}
