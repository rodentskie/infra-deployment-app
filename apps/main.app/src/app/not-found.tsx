import { Container, Flex, Group } from '@mantine/core';

import { NotFoundPage } from '@infra-deployment-app/error-pages';
import { ModeSwitch } from '@infra-deployment-app/mode-switch';
import { LogoButton } from '@infra-deployment-app/logo';
import { Navlinks } from '@infra-deployment-app/navlinks';
import { links } from '@infra-deployment-app/constants';
import { BurgerNav } from '@infra-deployment-app/burger-nav';

export default function NotFound() {
  return (
    <>
      <Container p={12} size={'xl'}>
        <Group justify="space-between">
          <Group gap={'xs'}>
            <Flex gap="md" justify="flex-start" align="center">
              <LogoButton width={120} id="logo" style={{ marginRight: 24 }} />
              <Navlinks {...links} />
            </Flex>
          </Group>

          <Group>
            <ModeSwitch />
            <BurgerNav />
          </Group>
        </Group>
      </Container>
      <NotFoundPage />;
    </>
  );
}
