import { render } from '@testing-library/react';

import Navlinks from './navlinks';

describe('Navlinks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navlinks />);
    expect(baseElement).toBeTruthy();
  });
});
