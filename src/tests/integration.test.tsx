import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
jest.mock("axios");

jest.mock("../services/axiosInstance", () => ({
  __esModule: true,
  default: {
    interceptors: {
      request: { use: jest.fn() },
    },
    get: jest.fn((url) => {
      if (url === "/announcement") {
        return Promise.resolve({
          data: [
            {
              _id: 1,
              name: "Test Announcement",
              subject: "Test",
              avatar: "",
              message: "Hello",
            },
          ],
        });
      }
      if (url === "/quiz") {
        return Promise.resolve({
          data: [
            {
              _id: 1,
              type: "Quiz",
              course: "Math",
              details: "Algebra",
              due: "2024-06-01",
              action: "Start Quiz",
            },
          ],
        });
      }
      return Promise.resolve({ data: [] });
    }),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
  },
}));

// Mock i18n to return keys
jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("Integration: Login/Logout Flow and Route Protection", () => {
  beforeEach(() => {
    // Mock axios.post for login
    (axios.post as jest.Mock).mockImplementation((url: any) => {
      if (url.includes("/user/login")) {
        return Promise.resolve({
          data: { token: "mock-token", user: { username: "testuser" } },
        });
      }
      return Promise.resolve({ data: {} });
    });
  });

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

  it("redirects to home if not logged in and trying to access dashboard", () => {
    window.history.pushState({}, "Test page", "/dashboard");
    renderApp();
    expect(screen.getByText("login_heading")).toBeInTheDocument();
    expect(screen.queryByText("announcements")).not.toBeInTheDocument();
  });

  it("logs in and sees dashboard, then logs out and is redirected", async () => {
    renderApp();
    // Should see login button
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    const loginButton = screen.getByRole("button", { name: "login_button" });
    fireEvent.click(loginButton);
    // Wait for dashboard to appear (check for 'announcements' heading)
    await screen.findByText("announcements", {}, { timeout: 2000 });
    // Click logout (in Navbar, AccountCircle icon)
    const logoutButtons = screen.getAllByRole("button");
    // Find the AccountCircle button by its aria-label or fallback to last button
    const logoutButton =
      logoutButtons.find(
        (btn) =>
          btn.querySelector("svg") && btn.innerHTML.includes("AccountCircle")
      ) || logoutButtons[logoutButtons.length - 1];
    fireEvent.click(logoutButton);
    // Should be redirected to login
    await screen.findByText("login_heading", {}, { timeout: 1000 });
  });
});
