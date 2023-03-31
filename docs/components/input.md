---
title: Input
---

# Input

Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.

## Import

```javascript
import { VInput } from 'vuetify'
```

## Basic usage

<WrapView>
  <v-input />
</WrapView>

```html
<v-input v-model="text" />
```

## Rules

`allocate-valid` mean that valid inpit will highlight with green color

<WrapView vertical>
  <v-input allocate-valid v-model="text" rules="numbers" />
  <v-input allocate-valid v-model="text" rules="email" />
  <v-input prevent allocate-valid v-model="text" rules="string" />
  <v-input allocate-valid v-model="text" rules="currency" />
</WrapView>

```html
<v-input allocate-valid v-model="text" rules="numbers" />
<v-input allocate-valid v-model="text" rules="email" />
<v-input prevent allocate-valid v-model="text" rules="string" />
<v-input allocate-valid v-model="text" rules="currency" />
```

## Basic usage

<WrapView>
  <v-input v-model="text">
    <template #icon-left>
      <MagnifyingGlassIcon />
    </template>
    <template #icon-right>
      <CircleInfoIcon />
    </template>
  </v-input>
</WrapView>

```html
<v-input v-model="text" />
```
