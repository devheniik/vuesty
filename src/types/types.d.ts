import {
  GlobalComponentConstructor,
  ComponentConstructor,
} from './utils/ts-helper'

import {
  VButtonComponent,
  VButtonProps,
  VButtonSlots,
} from '../components/Button/types'
import {
  VSelectComponent,
  VSelectProps,
  VSelectSlots,
} from '../components/Select/types'
import { VAvatarComponent, VAvatarProps } from '../components/Avatar/types'

export declare const VButton: ComponentConstructor<VButtonComponent>
export declare const VSelect: ComponentConstructor<VSelectComponent>
export declare const VAvatar: ComponentConstructor<VAvatarComponent>

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    VSelect: GlobalComponentConstructor<VSelectProps, VSelectSlots>
    VButton: GlobalComponentConstructor<VButtonProps, VButtonSlots>
    VAvatar: GlobalComponentConstructor<VAvatarProps>
  }
}
