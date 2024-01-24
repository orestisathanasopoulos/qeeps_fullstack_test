import { screen, act, waitFor } from '@testing-library/react';
import { render } from '../test-utils';
import AgentPageTitle from '../components/Main';
import axios from 'axios';
import { mockCandidate } from '../__mocks__/candidate';


const jestCandidate = jest.mocked(mockCandidate);
afterAll(() => jest.clearAllMocks());

test('should handle API fetch errors and set error message state', async () => {
  jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error('API fetch issue'));

  render(<AgentPageTitle />);

  waitFor(() => {
    expect(screen.getByText('Error:API fetch issue')).toBeInTheDocument;
  });
  expect(axios.get).toBeCalledTimes(1);
});

test('should handle API fetch errors and set error message state', async () => {
  jest.spyOn(axios, 'get').mockResolvedValue([mockCandidate]);

  render(<AgentPageTitle />);

  waitFor(() => {
    expect(screen.getByText('Bricard')).toBeInTheDocument;
  });
  expect(axios.get).toBeCalledTimes(1);
});
