import { ISideLinkProps } from '@infra-deployment-app/types';

export const infraLiveSideLinks: ISideLinkProps[] = [
  {
    topic: 'p2-aus',
    subTopics: [
      {
        label: 'Certificates',
        value: '/infrastructure/p2-aus/certificates',
      },
      {
        label: 'Health Check',
        value: '/infrastructure/p2-aus/health-check',
      },
    ],
  },
  {
    topic: 'p2-euk',
    subTopics: [
      {
        label: 'Certificates',
        value: '/infrastructure/p2-euk/certificates',
      },
      {
        label: 'Health Check',
        value: '/infrastructure/p2-euk/health-check',
      },
    ],
  },
  {
    topic: 'p2-usa',
    subTopics: [
      {
        label: 'Certificates',
        value: '/infrastructure/p2-usa/certificates',
      },
      {
        label: 'Health Check',
        value: '/infrastructure/p2-usa/health-check',
      },
    ],
  },
];
