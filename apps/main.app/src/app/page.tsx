import { ModeSwitch } from '@infra-deployment-app/mode-switch';
import { Logo } from '@infra-deployment-app/logo';
import { Container, Group } from '@mantine/core';
import { Navlinks } from '@infra-deployment-app/navlinks';
import { links } from '@infra-deployment-app/constants';
import { BurgerNav } from '@infra-deployment-app/burger-nav';
import { HeroHome } from '@infra-deployment-app/hero-home';

export default function HomePage() {
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
      <HeroHome />
    </>
  );
}
