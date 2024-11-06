import { ModeSwitch } from '@infra-deployment-app/mode-switch';
import { Logo } from '@infra-deployment-app/logo';
import { Anchor, Button, Container, Flex, Group, Stack } from '@mantine/core';

export default function InfraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Container p={8}>
        <Group justify="space-between">
          <Group gap={'xs'}>
            <Logo width={120} id="logo" style={{ marginRight: 24 }} />
            <Anchor href="/infrastructure" underline="hover">
              Infrastructure
            </Anchor>
            <Anchor href="/releases" underline="hover">
              Releases
            </Anchor>
          </Group>

          <ModeSwitch />
        </Group>
      </Container>
    </>
  );
}
