import { screen, act, waitFor } from '@testing-library/react';
import { render } from '../test-utils';
import Main from '../components/Main';
import axios from 'axios';
import { mockCandidate } from '../__mocks__/candidate';

describe('Testing the <Main> component', () => {
  const jestCandidate = jest.mocked(mockCandidate);
  afterAll(() => jest.clearAllMocks());

  test('should handle API fetch errors and set error message state', async () => {
    jest
      .spyOn(axios, 'get')
      .mockRejectedValueOnce(new Error('API fetch issue'));

    render(<Main />);

    waitFor(() => {
      expect(screen.getByText('Error:API fetch issue')).toBeInTheDocument;
    });
    expect(axios.get).toBeCalledTimes(1);
  });

  test('should display data received from the API', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue([mockCandidate]);

    render(<Main />);

    waitFor(() => {
      expect(screen.getByText('Bricard')).toBeInTheDocument;
    });
    expect(axios.get).toBeCalledTimes(1);
  });
});
