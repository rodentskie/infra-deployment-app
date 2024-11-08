import { SideNav } from '@infra-deployment-app/side-nav';
import { infraLiveSideLinks } from '@infra-deployment-app/constants';

export default function InfraPage() {
  return (
    <>
      <SideNav props={infraLiveSideLinks} />
    </>
  );
}
