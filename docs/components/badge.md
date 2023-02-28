---
title: Badge
---

# Badge

Badge is a small overlapped UI item which indicates a status, notification, or event that appears in relativity with the underlying object.

## Import

```javascript
import { VBadge } from 'vuetify'
```

## Usage

<WrapView>
  <v-badge label="badge" />
</WrapView>

```html
<v-badge label="badge" />
```

### Badges

<WrapView horizontal>
  <v-badge />
  <v-badge color="danger" />
  <v-badge color="warning" />
  <v-badge color="primary" />
  <v-badge color="upgrade" />
  <v-badge color="tertiary" />
  <v-badge color="info" />
  <v-badge color="neutral" />
  <!-- <v-badge color="success" icon><UserIcon /></v-badge> -->
  <!-- <v-badge color="success" icon><UserIcon /></v-badge> -->

</WrapView>

```html
<v-badge />
<v-badge color="danger" />
<v-badge color="warning" />
<v-badge color="primary" />
<v-badge color="upgrade" />
<v-badge color="tertiary" />
<v-badge color="info" />
<v-badge color="neutral" />
```

### Badge chips

<WrapView horizontal vertical>
  <v-badge chip />
  <v-badge color="danger" chip />
  <v-badge color="warning" chip />
  <v-badge color="primary" chip />
  <v-badge color="upgrade" chip />
  <v-badge color="tertiary" chip />
  <v-badge color="info" chip />
  <v-badge color="neutral" chip />
</WrapView>

```html
<v-badge chip />
<v-badge color="danger" chip />
<v-badge color="warning" chip />
<v-badge color="primary" chip />
<v-badge color="upgrade" chip />
<v-badge color="tertiary" chip />
<v-badge color="info" chip />
<v-badge color="neutral" chip />
```

### Badge status

<WrapView horizontal vertical>
  <v-badge status />
  <v-badge color="danger" status />
  <v-badge color="warning" status />
  <v-badge color="primary" status />
  <v-badge color="upgrade" status />
  <v-badge color="tertiary" status />
  <v-badge color="info" status />
  <v-badge color="neutral" status />
</WrapView>

```html
<v-badge status />
<v-badge color="danger" status />
<v-badge color="warning" status />
<v-badge color="primary" status />
<v-badge color="upgrade" status />
<v-badge color="tertiary" status />
<v-badge color="info" status />
<v-badge color="neutral" status />
```

## Badge with custom image

<WrapView>
  <v-badge color="success" icon><UserIcon /></v-badge>
</WrapView>

```html
<v-badge color="success" icon><UserIcon /></v-badge>
```
