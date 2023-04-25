import { GlobalComponentConstructor, ComponentConstructor } from './utils/ts-helper'
import plugin from './index'

import { VButtonComponent, VButtonProps, VButtonSlots } from './components/Button/types'
import { VInputComponent, VInputProps, VInputSlots } from './components/Input/types'
import { VAccordionComponent, VAccordionSlots, VAccordionProps } from './components/Accordion/types'
import { VAlertComponent, VAlertProps, VAlertSlots, VAvatarSlots } from './components/Alert/types'
import { VAvatarComponent, VAvatarProps } from './components/Avatar/types'
import { VAvatarGroupComponent, VAvatarGroupProps, VAvatarGroupSlots } from './components/AvatarGroup/types'
import { VBadgeComponent, VBadgeProps, VBadgeSlots } from './components/Badge/types'
import { VMenuComponent, VMenuSlots } from './components/Menu/types'
import { VNotificationComponent, VNotificationProps, VNotificationSlots } from './components/Notification/types'
import { VPaginationComponent, VPaginationProps } from './components/Pagination/types'
import { VSwitchComponent, VSwitchSlots, VSwitchProps } from './components/Switch/types'
import { VTabsComponent, VTabsProps, VTabsSlots } from './components/Tabs/types'
import { VSelectComponent, VSelectProps, VSelectSlots } from './components/Select/types'
import { VTableComponent, VTableProps } from './components/Table/types'
import { VUTableComponent, VUTableProps } from './components/UTable/types'
import { VToastComponent, VToastProps } from './components/Toast/types'
import { VTextareaComponent, VTextareaProps, VTextareaSlots } from './components/Textarea/types'
import { VPhoneInputComponent, VPhoneInputProps } from './components/types'
import type { VModalComponent, VModalProps, VModalSlots } from './components/Modal/types'
import type { VCheckboxComponent, VCheckboxProps } from './components/Checkbox/types'
import type { VRadioButtonComponent, VRadioButtonProps } from './components/Radio/types'

import type {VNodeProps} from "vue";

export declare const VAccordion: ComponentConstructor<VAccordionComponent>
export declare const VAlert: ComponentConstructor<VAlertComponent>
export declare const VAvatar: ComponentConstructor<VAvatarComponent>
export declare const VAvatarGroup: ComponentConstructor<VAvatarGroupComponent>
export declare const VButton: ComponentConstructor<VButtonComponent>
export declare const VInput: ComponentConstructor<VInputComponent>
export declare const VBadge: ComponentConstructor<VBadgeComponent>
export declare const VMenu: ComponentConstructor<VMenuComponent>
export declare const VNotification: ComponentConstructor<VNotificationComponent>
export declare const VPagination: ComponentConstructor<VPaginationComponent>
export declare const VSwitch: ComponentConstructor<VSwitchComponent>
export declare const VTabs: ComponentConstructor<VTabsComponent>
export declare const VTable: ComponentConstructor<VTableComponent>
export declare const VUTable: ComponentConstructor<VUTableComponent>
export declare const VSelect: ComponentConstructor<VSelectComponent>
export declare const VToast: ComponentConstructor<VToastComponent>
export declare const VModal: ComponentConstructor<VModalComponent>
export declare const VTextarea: ComponentConstructor<VTextareaComponent>
export declare const VCheckbox: ComponentConstructor<VCheckboxComponent>
export declare const VPhoneInput: ComponentConstructor<VPhoneInputComponent>
export declare const VRadioButton: ComponentConstructor<VRadioButtonComponent>

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    VAccordion: GlobalComponentConstructor<VAccordionProps, VAccordionSlots>
    VAlert: GlobalComponentConstructor<VAlertProps, VAlertSlots>
    VAvatar: GlobalComponentConstructor<VAvatarProps, VAvatarSlots>
    VAvatarGroup: GlobalComponentConstructor<VAvatarGroupProps, VAvatarGroupSlots>
    VBadge: GlobalComponentConstructor<VBadgeProps, VBadgeSlots>
    VButton: GlobalComponentConstructor<VButtonProps, VButtonSlots>
    VInput: GlobalComponentConstructor<VInputProps, VInputSlots>
    VMenu: GlobalComponentConstructor<{}, VMenuSlots>
    VNotification: GlobalComponentConstructor<VNotificationProps, VNotificationSlots>
    VPagination: GlobalComponentConstructor<VPaginationProps, VNodeProps>
    VSwitch: GlobalComponentConstructor<VSwitchProps, VSwitchSlots>
    VTabs: GlobalComponentConstructor<VTabsProps, VTabsSlots>
    VSelect: GlobalComponentConstructor<VSelectProps, VSelectSlots>
    VTable: GlobalComponentConstructor<VTableProps, VNodeProps>
    VUTable: GlobalComponentConstructor<VUTableProps, VNodeProps>
    VToast: GlobalComponentConstructor<VToastProps, VNodeProps>
    VModal: GlobalComponentConstructor<VModalProps, VModalSlots>
    VTextarea: GlobalComponentConstructor<VTextareaProps, VTextareaSlots>
    VCheckbox: GlobalComponentConstructor<VCheckboxProps, VNodeProps>
    VPhoneInput: GlobalComponentConstructor<VPhoneInputProps, VNodeProps>
    VRadioButton: GlobalComponentConstructor<VRadioButtonProps, VNodeProps>
  }
}

export default plugin
