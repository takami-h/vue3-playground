import { render, waitFor } from '@testing-library/vue';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import FormView from '../FormView.vue';

describe('FormView', () => {
  it('should show "no error" if name presented', async () => {
    const screen = render(FormView);
    userEvent.type(screen.getByLabelText('name'), 'John Doe');
    userEvent.click(screen.getByText('save'));

    await waitFor(() => expect(screen.getByText('no error')).toBeInTheDocument());
  });
  it('should show an error if name is empty', async () => {
    const screen = render(FormView);
    userEvent.click(screen.getByText('save'));

    await waitFor(() => expect(screen.getByText('name is required.')).toBeInTheDocument());
  });
});