export interface ISideLinks {
  key: string;
  value: string;
  label: string;
}

export interface ISideLinkProps {
  topic: string;
  subTopics: ISideLinks[];
}
