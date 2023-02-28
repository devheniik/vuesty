---
title: Menu
---

# Menu

Menus offer an easy way to build custom, accessible dropdown components with robust support for keyboard navigation.

## Import

```javascript
import { VMenu } from 'vuetify'
```

## Usage

<WrapView vertical>
  <v-menu>
    <template #menuItems>
      <MenuItem>
        <a href="#"> Documentation </a>
      </MenuItem>
      <MenuItem disabled>
        <span class="opacity-75">Invite a friend (coming soon!)</span>
      </MenuItem>
    </template>
  </v-menu>
</WrapView>

```html
<v-menu>
  <template #menuItems>
    <menuitem>
      <a href="#"> Documentation </a>
    </menuitem>
    <menuitem disabled>
      <span class="opacity-75">Invite a friend (coming soon!)</span>
    </menuitem>
  </template>
</v-menu>
```
