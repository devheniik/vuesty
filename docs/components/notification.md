---
title: Notification
---

# Notification

Notification is any system update that we want to share with the user.

## Import

```javascript
import { VNotification } from 'vuetify'
```

## Usage

<WrapView horizontal>
  <v-notification />
  <v-notification :count="20" />
  <v-notification :count="4981" />
</WrapView>

```html
<v-notification />
<v-notification :count="20" />
<v-notification :count="4981" />
```
## Custom Image

<WrapView horizontal>
  <v-notification><UserIcon /></v-notification>
</WrapView>

```html
<v-notification><UserIcon /></v-notification>
```
