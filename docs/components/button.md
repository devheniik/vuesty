---
title: Button
---

# Button

Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.

## Import

```javascript
import { VButton } from 'vuetify'
```

## Usage

<WrapView>
  <v-button>Button</v-button>
</WrapView>

```html
<v-button>Button</v-button>
```

### Button sizes

<WrapView horizontal>
  <v-button size="small">Small</v-button>
  <v-button size="medium">Medium</v-button>
  <v-button size="big">Big</v-button>
</WrapView>

```html
<v-button size="small">Small</v-button>
<v-button size="medium">Medium</v-button>
<v-button size="big">Big</v-button>
```

### Button colors

<WrapView horizontal vertical>
  <v-button color="primary">Primary</v-button>
  <v-button color="secondary">Secondary</v-button>
  <v-button color="light">Light</v-button>
  <v-button color="success">Success</v-button>
  <v-button color="warning">Warning</v-button>
  <v-button color="upgrade">Upgrade</v-button>
  <v-button color="tertiary">Tertiary</v-button>
  <v-button color="info">Info</v-button>
  <v-button color="neutral">Neutral</v-button>
</WrapView>

```html
<v-button color="primary">Primary</v-button>
<v-button color="secondary">Secondary</v-button>
<v-button color="light">Light</v-button>
<v-button color="success">Success</v-button>
<v-button color="warning">Warning</v-button>
<v-button color="upgrade">Upgrade</v-button>
<v-button color="tertiary">Tertiary</v-button>
<v-button color="info">Info</v-button>
<v-button color="neutral">Neutral</v-button>
```

### Button loading

<WrapView>
  <v-button loading>Loading</v-button>
</WrapView>

```html
<v-button loading>Loading</v-button>
```

### Button link

<WrapView>
  <v-button href="https://v2.tailwindcss.com/" target="_blank">Tailwindcss</v-button>
</WrapView>

```html
<v-button href="https://v2.tailwindcss.com/" target="_blank">Tailwindcss</v-button>

<!-- or you can use router link -->
<v-button :to="{ name: 'Home' }">Home</v-button>
<v-button to="/home">Home</v-button>
```
