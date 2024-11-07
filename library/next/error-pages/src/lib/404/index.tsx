'use client';

import { Container, Title, Text, Button, SimpleGrid } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { NotFoundImage } from '@infra-deployment-app/svg';
import classes from './styles.module.css';

export function NotFoundPage() {
  const router = useRouter();

  function goBack() {
    router.back();
  }

  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <NotFoundImage className={classes.mobileImage} />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text c="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Button
            variant="outline"
            size="md"
            mt="xl"
            className={classes.control}
            onClick={goBack}
          >
            Go Back
          </Button>
        </div>
        <NotFoundImage className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  );
}

export default NotFoundPage;
