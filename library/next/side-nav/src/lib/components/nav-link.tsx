'use client';

import { NavLink } from '@mantine/core';
import { usePathname, useRouter } from 'next/navigation';

interface IProps {
  id: string;
  link: string;
  label: string;
  topic: string;
}

export default function NavigationLink({ id, link, label, topic }: IProps) {
  const path = usePathname();

  const active = [id, topic].every((item) => path.split('/').includes(item));
  return (
    <>
      <NavLink
        key={id}
        href={link}
        label={label}
        px={4}
        active={active}
      />
    </>
  );
}
