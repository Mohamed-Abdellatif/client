import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DueItemCard from './DueItemCard';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe('DueItemCard', () => {
  const mockItem = {
    id: 1,
    type: 'Quiz',
    course: 'Math',
    details: 'Chapter 1',
    due: '2024-06-01',
    action: 'Start Quiz',
  };

  it('renders due item details correctly', () => {
    render(
      <DueItemCard dueItemsLength={2} item={mockItem} idx={0} />
    );
    expect(screen.getByText('Quiz')).toBeInTheDocument();
    expect(screen.getByText('course Math')).toBeInTheDocument();
    expect(screen.getByText('Chapter 1')).toBeInTheDocument();
    expect(screen.getByText('due 2024-06-01')).toBeInTheDocument();
    expect(screen.getByText('start_quiz')).toBeInTheDocument();
  });

  it('renders divider when not last item', () => {
    render(
      <DueItemCard dueItemsLength={2} item={mockItem} idx={0} />
    );
    expect(screen.getByTestId('divider')).toBeInTheDocument();
  });

  it('does not render divider for last item', () => {
    render(
      <DueItemCard dueItemsLength={2} item={mockItem} idx={1} />
    );
    expect(screen.queryByTestId('divider')).not.toBeInTheDocument();
  });
}); 