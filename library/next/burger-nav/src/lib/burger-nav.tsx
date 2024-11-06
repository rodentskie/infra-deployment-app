'use client';

import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';
import classes from './styles.module.css';

export function BurgerNav({ size }: { size?: string }) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <Burger
      size={size || 'sm'}
      className={classes.burger}
      opened={opened}
      onClick={toggle}
      aria-label="Toggle navigation"
    />
  );
}

export default BurgerNav;
