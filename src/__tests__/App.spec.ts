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
    // Given: initial path & render
    await router.push('/');
    const screen = render(App, { global: { plugins: [router] } });

    expect(router.currentRoute.value.path).toBe('/');

    // When: click 'About' link
    userEvent.click(screen.getByText('About'));

    // Then: path should be /about
    await waitFor(() => expect(router.currentRoute.value.path).toBe('/about'));
  });
});
