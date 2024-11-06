import { BurgerNav } from '@infra-deployment-app/burger-nav';
import { IconMathGreater } from '@tabler/icons-react';
import { Breadcrumbs, Divider, Flex, Text } from '@mantine/core';

import classes from './styles.module.css';

export function BreadcrumbsNav() {
  const items = [
    { title: 'Mantine', href: '#' },
    { title: 'Mantine hooks', href: '#' },
    { title: 'use-id', href: '#' },
  ].map((item, index) => (
    <Text key={index} className={classes.link}>
      {item.title}
    </Text>
  ));

  return (
    <div className={classes.root}>
      <Flex justify="flex-start" align="center" direction="row">
        <BurgerNav size="xs" />

        <Breadcrumbs
          separator={<IconMathGreater size={12} />}
          separatorMargin={4}
          mt={2}
          px={2}
          className={classes.crumbs}
        >
          {items}
        </Breadcrumbs>
      </Flex>

      <Divider my={3} variant="dashed" className={classes.divider} />
    </div>
  );
}

export default BreadcrumbsNav;
