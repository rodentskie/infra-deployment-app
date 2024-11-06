import { ModeSwitch } from '@infra-deployment-app/mode-switch';
import { Logo } from '@infra-deployment-app/logo';
import { Anchor, Button, Container, Flex, Group, Stack } from '@mantine/core';
import { Navlinks } from '@infra-deployment-app/navlinks';
import { INavLinksProps } from '@infra-deployment-app/types';

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
      <Container p={8}>
        <Group justify="space-between">
          <Group gap={'xs'}>
            <Logo width={120} id="logo" style={{ marginRight: 24 }} />
            <Navlinks {...links} />
          </Group>

          <ModeSwitch />
        </Group>
      </Container>
    </>
  );
}
