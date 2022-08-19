import type { Store } from "vuex"
import type { FormState } from './store/index'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<FormState>
  }
}