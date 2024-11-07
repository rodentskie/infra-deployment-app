'use client';

import { Container, Flex, Group, Tabs } from '@mantine/core';

import { ITabsProps } from '@infra-deployment-app/types';

import classes from './styles.module.css';

export function TabHeadNavigation(props: ITabsProps & { defaultValue: string }) {
  const { tabs,defaultValue } = props;
  

  return (
    <Tabs defaultValue={defaultValue} variant={'unstyled'} classNames={classes}>
      <Container size={'xl'}>
        <Tabs.List>
          {tabs.length > 0 &&
            tabs.map((data) => {
              return (
                <Tabs.Tab value={data.value} id={data.value} key={data.value}>
                  {data.label}
                </Tabs.Tab>
              );
            })}
        </Tabs.List>
      </Container>
    </Tabs>
  );
}

export default TabHeadNavigation;
