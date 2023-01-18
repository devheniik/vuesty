import { GlobalComponentConstructor, ComponentConstructor } from './utils/ts-helper'

import { VButtonComponent, VButtonProps, VButtonSlots } from '../components/Button/types'
import { VAccordionComponent, VAccordionSlots,  VAccordionProps } from '../components/Accordion/types'
import { VAlertComponent, VAlertProps, VAlertSlots, VAvatarSlots } from '../components/Alert/types'
import { VAvatarComponent, VAvatarProps } from '../components/Avatar/types'
import { VAvatarGroupComponent, VAvatarGroupProps, VAvatarGroupSlots } from '../components/AvatarGroup/types'
import { VBadgeComponent, VBadgeProps, VBadgeSlots } from '../components/Badge/types'
import { VButtonComponent, VButtonProps, VButtonSlots } from '../components/Button/types'
import { VMenuComponent, VMenuSlots } from '../components/Menu/types'
import { VNotificationComponent, VNotificationProps, VNotificationSlots } from '../components/Norification/types'
import { VPaginationComponent, VPaginationProps } from '../components/Pagination/types'
import { VSwitchComponent, VSwitchSlots } from '../components/Switch/types'
import { VTabsComponent, VTabsProps, VTabsSlots } from '../components/Tabs/types'

export declare const VAccordion: ComponentConstructor<VAccordionComponent>
export declare const VAlert: ComponentConstructor<VAlertComponent>
export declare const VAvatar: ComponentConstructor<VAvatarComponent>
export declare const VAvatarGroup: ComponentConstructor<VAvatarGroupComponent>
export declare const VButton: ComponentConstructor<VButtonComponent>
export declare const VBadge: ComponentConstructor<VBadgeComponent>
export declare const VMenu: ComponentConstructor<VMenuComponent>
export declare const VNotification: ComponentConstructor<VNotificationComponent>
export declare const VPagination: ComponentConstructor<VPaginationComponent>
export declare const VSwitch: ComponentConstructor<VSwitchComponent>
export declare const VTabs: ComponentConstructor<VTabsComponent>

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    VAccordion: GlobalComponentConstructor<VAccordionProps, VAccordionSlots>
    VAlert: GlobalComponentConstructor<VAlertProps, VAlertSlots>
    VAvatar: GlobalComponentConstructor<VAvatarProps, VAvatarSlots>
    VAvatarGroup: GlobalComponentConstructor<VAvatarGroupProps, VAvatarGroupSlots>
    VBadge: GlobalComponentConstructor<VBadgeProps, VBadgeSlots>
    VButton: GlobalComponentConstructor<VButtonProps, VButtonSlots>
    VMenu: GlobalComponentConstructor<{}, VMenuSlots>
    VNotification: GlobalComponentConstructor<VNotificationProps, VNotificationSlots>
    VPagination: GlobalComponentConstructor<{}, VPaginationProps>
    VSwitch: GlobalComponentConstructor<{}, VSwitchSlots>
    VTabs: GlobalComponentConstructor<VTabsProps, VTabsSlots>
  }
}
