import { render } from '@testing-library/react';

import BurgerNav from './burger-nav';

describe('BurgerNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BurgerNav />);
    expect(baseElement).toBeTruthy();
  });
});
