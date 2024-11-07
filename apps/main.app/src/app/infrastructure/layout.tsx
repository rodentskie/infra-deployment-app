import { ModeSwitch } from '@infra-deployment-app/mode-switch';
import { Logo } from '@infra-deployment-app/logo';
import {
  Anchor,
  Button,
  Container,
  Divider,
  Flex,
  Group,
  Stack,
} from '@mantine/core';
import { Navlinks } from '@infra-deployment-app/navlinks';
import { links, infraTabs } from '@infra-deployment-app/constants';
import { TabHeadNavigation } from '@infra-deployment-app/tab-navi';
import { BurgerNav } from '@infra-deployment-app/burger-nav';
import { BreadcrumbsNav } from '@infra-deployment-app/breadcrumbs-nav';

export const metadata = {
  title: 'Infrastructure | DevOps',
  description: 'Infrastructure and Release monitoring application.',
};

export default function InfraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Container p={12} size={'xl'}>
        <Group justify="space-between">
          <Group gap={'xs'}>
            <Logo width={120} id="logo" style={{ marginRight: 24 }} />
            <Navlinks {...links} />
          </Group>

          <Group>
            <ModeSwitch />
            <BurgerNav />
          </Group>
        </Group>
      </Container>

      <TabHeadNavigation {...infraTabs} />
      <Divider />
      <BreadcrumbsNav />
      {children}
    </>
  );
}
