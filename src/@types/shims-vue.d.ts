/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@metamask/jazzicon' {
  export default function (diameter: number, seed: number): HTMLElement
}
