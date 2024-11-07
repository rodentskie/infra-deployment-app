'use client';

import {
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from '@mantine/core';
import { useRouter } from 'next/navigation';
import { IconCheck } from '@tabler/icons-react';
import { HomeImage } from '@infra-deployment-app/svg';

import classes from './styles.module.css';

export function HeroHome({ link }: { link: string }) {
  const router = useRouter();

  function onStartClick() {
    router.push(link);
  }

  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            <span className={classes.highlight}>Infrastructure</span>,
            <br />
            <span className={classes.highlight}>releases</span>
            monitoring
          </Title>
          <Text c="dimmed" mt="md">
            Easily monitor your AWS infrastructure and releases to live and
            non-live servers - our platform provides robust tools and
            integration for real-time visibility.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Detailed Insights</b> - gain actionable insights with real-time
              data
            </List.Item>
            <List.Item>
              <b>Free and open source</b> - our platform is MIT-licensed, making
              it flexible and accessible for any project
            </List.Item>
          </List>

          <Group mt={30} justify="flex-end">
            <Button radius="xl" size="md" className={classes.control} onClick={onStartClick}>
              Get started
            </Button>
          </Group>
        </div>
        <HomeImage className={classes.image} />
      </div>
    </Container>
  );
}

export default HeroHome;
