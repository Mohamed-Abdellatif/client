import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from './Sidebar';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe('Sidebar', () => {
  it('renders sidebar title', () => {
    render(<Sidebar mobileOpen={false} handleDrawerToggle={jest.fn()} />);
    expect(screen.getByText('coligo')).toBeInTheDocument();
  });
}); 