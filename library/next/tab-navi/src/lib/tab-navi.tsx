'use client';

import { Container, Flex, Group, Tabs } from '@mantine/core';
import classes from './styles.module.css';

export function TabHeadNavigation() {
  return (
    <Tabs defaultValue="first" variant={'unstyled'} classNames={classes}>
      <Container>
        <Tabs.List>
          <Tabs.Tab value="first">First tab</Tabs.Tab>
          <Tabs.Tab value="second">Second tab</Tabs.Tab>
          <Tabs.Tab value="third">Third tab</Tabs.Tab>
        </Tabs.List>
      </Container>
    </Tabs>
  );
}

export default TabHeadNavigation;
