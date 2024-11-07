'use client';

import {
  AppShell,
  Button,
  Container,
  Flex,
  rem,
  ScrollArea,
  Skeleton,
  Stack,
} from '@mantine/core';

import classes from './styles.module.css';
export function SideNav() {
  return (
    <>
      <Container size={'xl'}>
        <aside className={classes.side}>
          {Array(60)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={28} mt="sm" animate={false} />
            ))}
        </aside>
      </Container>
    </>
  );
}

export default SideNav;
