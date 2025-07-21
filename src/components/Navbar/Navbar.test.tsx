import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe('Navbar', () => {
  it('renders welcome text', () => {
    render(<Navbar handleDrawerToggle={jest.fn()} />);
    expect(screen.getByText('welcome')).toBeInTheDocument();
  });
}); 