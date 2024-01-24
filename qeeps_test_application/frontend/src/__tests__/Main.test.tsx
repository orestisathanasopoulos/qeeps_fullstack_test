import { screen, act, waitFor } from '@testing-library/react';
import { render } from '../test-utils';
import Main from '../components/Main';
import axios from 'axios';
import { mockCandidate } from '../__mocks__/candidate';


const jestCandidate = jest.mocked(mockCandidate);
afterAll(() => jest.clearAllMocks());

test('should handle API fetch errors and set error message state', async () => {
  jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error('API fetch issue'));

  render(<Main />);

  waitFor(() => {
    expect(screen.getByText('Error:API fetch issue')).toBeInTheDocument;
  });
  expect(axios.get).toBeCalledTimes(1);
});

test('should handle API fetch errors and set error message state', async () => {
  jest.spyOn(axios, 'get').mockResolvedValue([mockCandidate]);

  render(<Main />);

  waitFor(() => {
    expect(screen.getByText('Bricard')).toBeInTheDocument;
  });
  expect(axios.get).toBeCalledTimes(1);
});
