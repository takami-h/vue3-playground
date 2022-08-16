import { render, waitFor } from '@testing-library/vue';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import App from '../App.vue';
import { createRouter, createWebHistory } from 'vue-router';

describe('App', () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: []
  });
  it('should forward to /about on click', async () => {
    const screen = render(App, { global: { plugins: [router] } });
    userEvent.click(screen.getByText('About'));

    await waitFor(() => expect(router.currentRoute.value.path).toBe('/about'));
  });
});
