
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExamPosterContent from './ExamPosterContent';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe('ExamPosterContent', () => {
  it('renders exam poster content with translation keys', () => {
    render(<ExamPosterContent />);
    expect(screen.getByText('exams_time')).toBeInTheDocument();
    expect(screen.getByText('exams_time_subtitle')).toBeInTheDocument();
    expect(screen.getByText('exams_time_quote')).toBeInTheDocument();
    expect(screen.getByText('view_exams_tips')).toBeInTheDocument();
  });
}); 