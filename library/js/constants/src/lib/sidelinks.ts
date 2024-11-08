import { ISideLinkProps } from '@infra-deployment-app/types';

export const infraLiveSideLinks: ISideLinkProps[] = [
  {
    topic: 'p2-aus',
    subTopics: [
      {
        label: 'Certificates',
        value: '/infra/live/p2-aus/certificates',
      },
      {
        label: 'Health Check',
        value: '/infra/live/p2-aus/health-check',
      },
    ],
  },
  {
    topic: 'p2-euk',
    subTopics: [
      {
        label: 'Certificates',
        value: '/infra/live/p2-euk/certificates',
      },
      {
        label: 'Health Check',
        value: '/infra/live/p2-euk/health-check',
      },
    ],
  },
  {
    topic: 'p2-usa',
    subTopics: [
      {
        label: 'Certificates',
        value: '/infra/live/p2-usa/certificates',
      },
      {
        label: 'Health Check',
        value: '/infra/live/p2-usa/health-check',
      },
    ],
  },
];

export const infraNonLiveSideLinks: ISideLinkProps[] = [
  {
    topic: 'p2-sandbox',
    subTopics: [
      {
        label: 'Certificates',
        value: '/infra/non-live/p2-sandbox/certificates',
      },
      {
        label: 'Health Check',
        value: '/infra/non-live/p2-sandbox/health-check',
      },
    ],
  },
  {
    topic: 'p2-stage',
    subTopics: [
      {
        label: 'Certificates',
        value: '/infra/non-live/p2-stage/certificates',
      },
      {
        label: 'Health Check',
        value: '/infra/non-live/p2-stage/health-check',
      },
    ],
  },
  {
    topic: 'p2-prerelease',
    subTopics: [
      {
        label: 'Certificates',
        value: '/infra/non-live/p2-prerelease/certificates',
      },
      {
        label: 'Health Check',
        value: '/infra/non-live/p2-prerelease/health-check',
      },
    ],
  },
];
