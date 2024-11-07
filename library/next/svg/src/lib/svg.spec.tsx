import { render } from '@testing-library/react';

import Svg from './home';

describe('Svg', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Svg />);
    expect(baseElement).toBeTruthy();
  });
});
