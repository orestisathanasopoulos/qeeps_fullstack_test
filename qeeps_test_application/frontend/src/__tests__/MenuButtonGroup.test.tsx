import { MenuButtonGroup } from '../components/AgentView/Details/DetailMenu';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '../test-utils';
import { mockCandidate } from '../__mocks__/candidate';

describe('testing the <MenuButtonGroup> component', () => {
  const jestCandidate = jest.mocked(mockCandidate);

  test('testing interactions on the detail menu tabs', () => {
    render(<MenuButtonGroup candidate={jestCandidate} />);
    const coCandidats = screen.getByText('Co-candidats');
    expect(coCandidats).toBeVisible();

    fireEvent.click(coCandidats);
    const candidats = screen.getByText('candidats');
    expect(candidats).toBeVisible();
    const documents = screen.getByRole('tab', { name: 'Documents' });
    fireEvent.click(documents);
    expect(candidats).not.toBeVisible();
  });
});
