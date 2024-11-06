import { render } from '@testing-library/react';

import BreadcrumbsNav from './breadcrumbs-nav';

describe('BreadcrumbsNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BreadcrumbsNav />);
    expect(baseElement).toBeTruthy();
  });
});
