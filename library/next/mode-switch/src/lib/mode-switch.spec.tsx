import { render } from '@testing-library/react';

import ModeSwitch from './mode-switch';

describe('ModeSwitch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModeSwitch />);
    expect(baseElement).toBeTruthy();
  });
});
