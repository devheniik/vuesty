---
title: Avatar
---

# Avatar

Avatar (aka Userpic) — is a component used to represent a user's profile picture

## Import

```javascript
import { VAvatar } from 'vuetify'
```

## Usage

<WrapView vertical >
<div class="flex justify-center">
  <v-avatar text="Trevis Hotwings" />
  <v-avatar class="ml-2" src="../public/avatar.svg" />
</div>

</WrapView>

```html
<v-avatar text="Trevis Hotwings" /> <v-avatar src="[path]" />
```

## Sizes

<WrapView vertical >
  <div class="flex justify-center">
    <v-avatar src="../public/avatar.svg" size="tiny" />
    <v-avatar src="../public/avatar.svg" size="small" />
    <v-avatar src="../public/avatar.svg" size="medium" />
    <v-avatar src="../public/avatar.svg" size="big" />
    <v-avatar src="../public/avatar.svg" size="large"  />
    <v-avatar src="../public/avatar.svg" size="huge" />
    <v-avatar src="../public/avatar.svg" size="gigantic" />
  </div>

</WrapView>

```html
<v-avatar src="[path]" size="tiny" />
<v-avatar src="[path]" size="small" />
<v-avatar src="[path]" size="medium" />
<v-avatar src="[path]" size="big" />
<v-avatar src="[path]" size="large" />
<v-avatar src="[path]" size="huge" />
<v-avatar src="[path]" size="gigantic" />
```

## With Status

<WrapView vertical >
  <v-avatar src="../public/avatar.svg" status="success" />
  <v-avatar src="../public/avatar.svg" status="warning" />
  <v-avatar src="../public/avatar.svg" status="primary" />
  <v-avatar src="../public/avatar.svg" status="danger" />
</WrapView>

```html
<v-avatar src="[path]" status="success" />
<v-avatar src="[path]" status="warning" />
<v-avatar src="[path]" status="primary" />
<v-avatar src="[path]" status="danger" />
```
