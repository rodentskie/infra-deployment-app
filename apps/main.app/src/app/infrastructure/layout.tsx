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
import { INavLinksProps } from '@infra-deployment-app/types';
import { TabHeadNavigation } from '@infra-deployment-app/tab-navi';

export const metadata = {
  title: 'Infrastructure | DevOps',
  description: 'Infrastructure and Release monitoring application.',
};

export default function InfraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links: INavLinksProps = {
    links: [
      {
        label: 'Infrastructure',
        link: '/infrastructure',
      },
      {
        label: 'Releases',
        link: '/releases',
      },
    ],
  };

  return (
    <>
      <Container p={12}>
        <Group justify="space-between">
          <Group gap={'xs'}>
            <Logo width={120} id="logo" style={{ marginRight: 24 }} />
            <Navlinks {...links} />
          </Group>

          <ModeSwitch />
        </Group>
      </Container>

      <TabHeadNavigation />
      <Divider />
    </>
  );
}
