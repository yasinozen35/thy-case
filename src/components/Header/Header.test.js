import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { ROUTE } from '@/utils/constants/routes';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

describe('Header Component', () => {
  const mockDict = {
    header_search: 'Search',
    header_flight_challenge: 'Flight Challenge',
  };

  const useRouterMock = require('next/navigation').useRouter;
  const usePathnameMock = require('next/navigation').usePathname;

  beforeEach(() => {
    usePathnameMock.mockReturnValue('/');
    useRouterMock.mockReturnValue({
      push: jest.fn(),
      pathname: '/',
    });
  });

  it('renders the Header component', () => {
    render(<Header dict={mockDict} />);

    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText('Flight Challenge')).toBeInTheDocument();
    expect(screen.getByText('EN')).toBeInTheDocument();
    expect(screen.getByText('TR')).toBeInTheDocument();
  });

  it('changes language to English when EN button is clicked', () => {
    const pushMock = jest.fn();
    useRouterMock.mockReturnValueOnce({
      push: pushMock,
      pathname: '/',
    });

    render(<Header dict={mockDict} />);

    fireEvent.click(screen.getByText('EN'));
    expect(pushMock).toHaveBeenCalledWith(ROUTE.enBase);
  });

  it('changes language to Turkish when TR button is clicked', () => {
    const pushMock = jest.fn();
    useRouterMock.mockReturnValueOnce({
      push: pushMock,
      pathname: '/',
    });

    render(<Header dict={mockDict} />);

    fireEvent.click(screen.getByText('TR'));
    expect(pushMock).toHaveBeenCalledWith(ROUTE.base);
  });
});
