
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnnouncmentCard from './AnnouncmentCard';

describe('AnnouncmentCard', () => {
  const mockAnnouncment = {
    id: 1,
    avatar: 'A',
    name: 'John Doe',
    subject: 'Math',
    message: 'Test announcement message',
  };

  it('renders announcement details correctly', () => {
    render(
      <AnnouncmentCard announcment={mockAnnouncment} announcementsLength={2} idx={0} />
    );
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Math')).toBeInTheDocument();
    expect(screen.getByText('Test announcement message')).toBeInTheDocument();
  });

  it('renders divider when not last item', () => {
    render(
      <AnnouncmentCard announcment={mockAnnouncment} announcementsLength={2} idx={0} />
    );
    expect(screen.getByTestId('divider')).toBeInTheDocument();
  });

  it('does not render divider for last item', () => {
    render(
      <AnnouncmentCard announcment={mockAnnouncment} announcementsLength={2} idx={1} />
    );
    expect(screen.queryByTestId('divider')).not.toBeInTheDocument();
  });
}); 