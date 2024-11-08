import { notFound } from 'next/navigation';

import {
  infraTabs,
  ValidInfraType,
  validInfraTypes,
} from '@infra-deployment-app/constants';
import { TabHeadNavigation } from '@infra-deployment-app/tab-navi';
import { ISlugs } from '@infra-deployment-app/types';

export default function InfraPage(prop: ISlugs) {
  const { slug } = prop.params;

  if (!validInfraTypes.includes(slug[0] as ValidInfraType)) {
    notFound();
  }

  return (
    <div>
      <TabHeadNavigation
        {...infraTabs}
        defaultValue={slug[0]}
        currentPath={'/infra'}
      />
    </div>
  );
}
