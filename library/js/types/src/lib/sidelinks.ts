export interface ISideLinks {
  value: string;
  label: string;
}

export interface ISideLinkProps {
  topic: string;
  subTopics: ISideLinks[];
}
