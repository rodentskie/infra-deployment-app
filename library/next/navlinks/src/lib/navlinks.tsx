import { Anchor } from '@mantine/core';
import { INavLinksProps } from '@infra-deployment-app/types';

import classes from './style.module.css';

export function Navlinks(props: INavLinksProps) {
  const { links } = props;

  return (
    <>
      {links.length > 0 &&
        links.map((data) => {
          return (
            <Anchor
              className={classes.link}
              href={data.link}
              underline="hover"
              id={data.link}
              key={data.label}
            >
              {data.label}
            </Anchor>
          );
        })}
    </>
  );
}

export default Navlinks;
