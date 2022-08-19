import type { Store } from "vuex"

declare module '@vue/runtime-core' {
  interface FormState {
    name: string
  }
  interface ComponentCustomProperties {
    $store: Store<FormState>
  }
}