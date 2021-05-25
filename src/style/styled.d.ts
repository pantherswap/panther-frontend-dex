// eslint-disable-next-line import/no-unresolved
import { CustomTheme } from './theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends CustomTheme {}
}
