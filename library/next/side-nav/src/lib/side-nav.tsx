import { Container, rem, ScrollArea, Title } from '@mantine/core';

import { ISideLinkProps } from '@infra-deployment-app/types';

import classes from './styles.module.css';
import NavigationLink from './components/nav-link';

export function SideNav({ props }: { props: ISideLinkProps[] }) {
  return (
    <>
      <Container size={'xl'}>
        <ScrollArea className={classes.side}>
          {props.length > 0 &&
            props.map((data, index) => {
              return (
                <div key={`div-${index}`}>
                  <Title order={5} key={`t-${index}`} mb={4}>
                    {data.topic}
                  </Title>

                  {data.subTopics.length > 0 &&
                    data.subTopics.map((e, i) => {
                      return (
                        <NavigationLink
                          id={e.key}
                          link={e.value}
                          label={e.label}
                          topic={data.topic}
                        />
                      );
                    })}

                  <div style={{ marginBottom: rem(24) }}></div>
                </div>
              );
            })}
        </ScrollArea>
      </Container>
    </>
  );
}

export default SideNav;
