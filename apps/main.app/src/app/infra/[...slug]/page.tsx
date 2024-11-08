import { notFound } from 'next/navigation';

import {
  infraLiveSideLinks,
  infraTabs,
  ValidInfraType,
  validInfraTypes,
  infraNonLiveSideLinks,
} from '@infra-deployment-app/constants';
import { TabHeadNavigation } from '@infra-deployment-app/tab-navi';
import { ISlugs } from '@infra-deployment-app/types';
import { SideNav } from '@infra-deployment-app/side-nav';

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
      
      {slug[0] === 'live' ? (
        <SideNav props={infraLiveSideLinks} />
      ) : (
        <SideNav props={infraNonLiveSideLinks} />
      )}
    </div>
  );
}
