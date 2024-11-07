import { ITabsProps } from '@infra-deployment-app/types';

export const infraTabs: ITabsProps = {
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

export const validInfraTypes = ['live', 'non-live'] as const;
export type ValidInfraType = (typeof validInfraTypes)[number];