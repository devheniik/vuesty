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
import { VSwitchComponent, VSwitchSlots } from './components/Switch/types'
import { VTabsComponent, VTabsProps, VTabsSlots } from './components/Tabs/types'
import { VSelectComponent, VSelectProps, VSelectSlots } from './components/Select/types'
import { VTableComponent, VTableProps } from './components/Table/types'
import { VToastComponent, VToastProps } from './components/Toast/types'
import type { VModalComponent, VModalProps, VModalSlots } from './components/Modal/types'
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
export declare const VSelect: ComponentConstructor<VSelectComponent>
export declare const VToast: ComponentConstructor<VToastComponent>
export declare const VModal: ComponentConstructor<VModalComponent>

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    VAccordion: GlobalComponentConstructor<VAccordionProps, VAccordionSlots>
    VAlert: GlobalComponentConstructor<VAlertProps, VAlertSlots>
    VAvatar: GlobalComponentConstructor<VAvatarProps, VAvatarSlots>
    VAvatarGroup: GlobalComponentConstructor<VAvatarGroupProps, VAvatarGroupSlots>
    VBadge: GlobalComponentConstructor<VBadgeProps, VBadgeSlots>
    VButton: GlobalComponentConstructor<VButtonProps, VButtonSlots>
    VInput: GlobalComponentConstructor<VInputProps, VInputSlots>
    VMenu: GlobalComponentConstructor<void, VMenuSlots>
    VNotification: GlobalComponentConstructor<VNotificationProps, VNotificationSlots>
    VPagination: GlobalComponentConstructor<VPaginationProps, VNodeProps>
    VSwitch: GlobalComponentConstructor<void, VSwitchSlots>
    VTabs: GlobalComponentConstructor<VTabsProps, VTabsSlots>
    VSelect: GlobalComponentConstructor<VSelectProps, VSelectSlots>
    VTable: GlobalComponentConstructor<VTableProps, VNodeProps>
    VToast: GlobalComponentConstructor<VToastProps, VNodeProps>
    VModal: GlobalComponentConstructor<VModalProps, VModalSlots>
  }
}

export default plugin
