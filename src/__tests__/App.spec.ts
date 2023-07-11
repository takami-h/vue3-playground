import { render, waitFor } from '@testing-library/vue';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import App from '../App.vue';
import { createRouter, createWebHistory } from 'vue-router';

describe('App', () => {
  it('should forward to /about on click', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: []
    });

    const screen = render(App, { global: { plugins: [router] } });
    userEvent.click(screen.getByText('About'));

    await waitFor(() => expect(router.currentRoute.value.path).toBe('/about'));
  });
});
