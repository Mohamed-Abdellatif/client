import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Mock i18n to return keys
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe('Integration: Login/Logout Flow and Route Protection', () => {
  function renderApp() {
    const queryClient = new QueryClient();
    return render(
      <Provider store={store}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </BrowserRouter>
      </Provider>
    );
  }

  it('redirects to home if not logged in and trying to access dashboard', () => {
    window.history.pushState({}, 'Test page', '/dashboard');
    renderApp();
    expect(screen.getByText('login_heading')).toBeInTheDocument();
    expect(screen.queryByText('announcements')).not.toBeInTheDocument();
  });

  it('logs in and sees dashboard, then logs out and is redirected', async () => {
    renderApp();
    // Should see login button
    const loginButton = screen.getByRole('button', { name: 'login_button' });
    fireEvent.click(loginButton);
    // Wait for dashboard to appear (check for 'announcements' heading)
    await screen.findByText('announcements', {}, { timeout: 2000 });
    // Click logout (in Navbar, AccountCircle icon)
    const logoutButtons = screen.getAllByRole('button');
    // Find the AccountCircle button by its aria-label or fallback to last button
    const logoutButton = logoutButtons.find(
      (btn) => btn.querySelector('svg') && btn.innerHTML.includes('AccountCircle')
    ) || logoutButtons[logoutButtons.length - 1];
    fireEvent.click(logoutButton);
    // Should be redirected to login
    await screen.findByText('login_heading', {}, { timeout: 1000 });
  });
}); 