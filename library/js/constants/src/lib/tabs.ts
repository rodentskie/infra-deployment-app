import { ITabsProps } from '@infra-deployment-app/types';

export const infraTabs: ITabsProps = {
  defaultValue: 'live',
  tabs: [
    {
      value: 'live',
      label: 'Live',
    },
    {
      value: 'non-live',
      label: 'Non-live',
    },
  ],
};
