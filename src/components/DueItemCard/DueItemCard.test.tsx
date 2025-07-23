import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DueItemCard from './DueItemCard';
import GenericCard from '../GenericCard/GenericCard';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe('DueItemCard', () => {
  const mockItem = {
    _id: 1,
    type: 'Quiz',
    course: 'Math',
    details: 'Chapter 1',
    due: '2024-06-01',
    action: 'Start Quiz',
  };

  it('renders due item details correctly', () => {
    render(
      <DueItemCard item={mockItem} />
    );
    expect(screen.getByText('Quiz')).toBeInTheDocument();
    expect(screen.getByText('course Math')).toBeInTheDocument();
    expect(screen.getByText('topic Chapter 1')).toBeInTheDocument();
    expect(screen.getByText('due 2024-06-01')).toBeInTheDocument();
    expect(screen.getByText('start_quiz')).toBeInTheDocument();
  });

  it('renders divider when not last item', () => {
    render(
      <GenericCard showDivider>
        <DueItemCard item={mockItem} />
      </GenericCard>
    );
    expect(screen.getByTestId('divider')).toBeInTheDocument();
  });

  it('does not render divider for last item', () => {
    render(
      <GenericCard showDivider={false}>
        <DueItemCard item={mockItem} />
      </GenericCard>
    );
    expect(screen.queryByTestId('divider')).not.toBeInTheDocument();
  });
}); 