import { render } from '@testing-library/react';

import TabNavi from './tab-navi';

describe('TabNavi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TabNavi />);
    expect(baseElement).toBeTruthy();
  });
});
