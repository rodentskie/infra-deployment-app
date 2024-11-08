'use client';

import { Container, Tabs } from '@mantine/core';
import { useRouter } from 'next/navigation';

import { ITabsProps } from '@infra-deployment-app/types';

import classes from './styles.module.css';

export function TabHeadNavigation(
  props: ITabsProps & { defaultValue: string; currentPath: string }
) {
  const router = useRouter();
  const { tabs, defaultValue, currentPath } = props;

  function tabRoute(key: string) {
    router.push(`${currentPath}/${key}`);
  }

  return (
    <Tabs defaultValue={defaultValue} variant={'unstyled'} classNames={classes}>
      <Container size={'xl'}>
        <Tabs.List>
          {tabs.length > 0 &&
            tabs.map((data) => {
              return (
                <Tabs.Tab
                  value={data.value}
                  id={data.value}
                  key={data.value}
                  onClick={() => tabRoute(data.value)}
                >
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
