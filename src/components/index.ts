import { defineAsyncComponent } from 'vue'

export const VButton = defineAsyncComponent(() => import('./Button/VButton.vue'))
export const VInput = defineAsyncComponent(() => import('./Input/VInput.vue'))
export const VAvatarGroup = defineAsyncComponent(() => import('./AvatarGroup/VAvatarGroup.vue'))
export const VBadge = defineAsyncComponent(() => import('./Badge/VBadge.vue'))
export const VMenu = defineAsyncComponent(() => import('./Menu/VMenu.vue'))
export const VNotification = defineAsyncComponent(() => import('./Notification/VNotification.vue'))
export const VAvatar = defineAsyncComponent(() => import('./Avatar/VAvatar.vue'))
export const VAlert = defineAsyncComponent(() => import('./Alert/VAlert.vue'))
export const VSwitch = defineAsyncComponent(() => import('./Switch/VSwitch.vue'))
export const VPagination = defineAsyncComponent(() => import('./Pagination/VPagination.vue'))
export const VTabs = defineAsyncComponent(() => import('./Tabs/VTabs.vue'))
export const VTable = defineAsyncComponent(() => import('./Table/VTable.vue'))
