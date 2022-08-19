import { createStore } from "vuex";

type FormState = { name: null | string }

export default createStore<FormState>({
  state() {
    return { name: null };
  },
  mutations: {
    setName(state: FormState, name: string) {
      state.name = name
    }
  }
})