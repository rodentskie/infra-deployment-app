import { ISideLinkProps } from '@infra-deployment-app/types';

export const infraLiveSideLinks: ISideLinkProps[] = [
  {
    topic: 'p2-aus',
    subTopics: [
      {
        key: 'certificates',
        label: 'Certificates',
        value: '/infra/live/p2-aus/certificates',
      },
      {
        key: 'health-check',
        label: 'Health Check',
        value: '/infra/live/p2-aus/health-check',
      },
    ],
  },
  {
    topic: 'p2-euk',
    subTopics: [
      {
        key: 'certificates',
        label: 'Certificates',
        value: '/infra/live/p2-euk/certificates',
      },
      {
        key: 'health-check',
        label: 'Health Check',
        value: '/infra/live/p2-euk/health-check',
      },
    ],
  },
  {
    topic: 'p2-usa',
    subTopics: [
      {
        key: 'certificates',
        label: 'Certificates',
        value: '/infra/live/p2-usa/certificates',
      },
      {
        key: 'health-check',
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
        key: 'certificates',
        label: 'Certificates',
        value: '/infra/non-live/p2-sandbox/certificates',
      },
      {
        key: 'health-check',
        label: 'Health Check',
        value: '/infra/non-live/p2-sandbox/health-check',
      },
    ],
  },
  {
    topic: 'p2-stage',
    subTopics: [
      {
        key: 'certificates',
        label: 'Certificates',
        value: '/infra/non-live/p2-stage/certificates',
      },
      {
        key: 'health-check',
        label: 'Health Check',
        value: '/infra/non-live/p2-stage/health-check',
      },
    ],
  },
  {
    topic: 'p2-prerelease',
    subTopics: [
      {
        key: 'certificates',
        label: 'Certificates',
        value: '/infra/non-live/p2-prerelease/certificates',
      },
      {
        key: 'health-check',
        label: 'Health Check',
        value: '/infra/non-live/p2-prerelease/health-check',
      },
    ],
  },
];
