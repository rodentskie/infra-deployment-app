'use client';

import { UnstyledButton } from '@mantine/core';
import { useRouter } from 'next/navigation';

import { Logo } from './logo';

export function LogoButton(props: React.ComponentPropsWithoutRef<'svg'>) {
  const router = useRouter();

  function onLogoClick() {
    router.push('/');
  }

  return (
    <>
      <UnstyledButton onClick={onLogoClick} >
        <Logo {...props} />
      </UnstyledButton>
    </>
  );
}
