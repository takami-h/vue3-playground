import { render } from "@testing-library/vue";
import "@testing-library/jest-dom";

import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const screen = render(HelloWorld, { props: { msg: "Hello Vitest" } });
    expect(screen.getByText("Hello Vitest")).toBeInTheDocument();
  })
})
