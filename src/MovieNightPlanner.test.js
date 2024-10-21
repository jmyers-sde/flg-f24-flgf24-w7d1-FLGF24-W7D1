import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieNightPlanner from './MovieNightPlanner';

describe('MovieNightPlanner', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders the Movie Night Planner', () => {
    render(<MovieNightPlanner />);
    expect(screen.getByText('Movie Night Planner')).toBeInTheDocument();
  });

  test('adds a movie to the watchlist', () => {
    render(<MovieNightPlanner />);
    const input = screen.getByPlaceholderText('Add new movie');
    const addButton = screen.getByText('Add Movie');
    fireEvent.change(input, { target: { value: 'Inception' } });
    fireEvent.click(addButton);
    expect(screen.getByText('Inception')).toBeInTheDocument();
  });

  test('picks a random movie', () => {
    render(<MovieNightPlanner />);
    const input = screen.getByPlaceholderText('Add new movie');
    const addButton = screen.getByText('Add Movie');
    const pickButton = screen.getByText('Pick a Movie');
    fireEvent.change(input, { target: { value: 'Inception' } });
    fireEvent.click(addButton);
    fireEvent.click(pickButton);
    expect(screen.getByText('Selected Movie: Inception')).toBeInTheDocument();
  });

  test('saves movies to localStorage', () => {
    const { rerender } = render(<MovieNightPlanner />);
    const input = screen.getByPlaceholderText('Add new movie');
    const addButton = screen.getByText('Add Movie');
    fireEvent.change(input, { target: { value: 'Inception' } });
    fireEvent.click(addButton);
    rerender(<MovieNightPlanner />);
    expect(screen.getByText('Inception')).toBeInTheDocument();
  });
});