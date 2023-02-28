---
title: Alert
---

# Alert

Alerts should be used when there are tips or information that a user can benefit from.

## Import

```javascript
import { VAlert } from 'vuetify'
```

## Usage

<WrapView vertical>
  <v-alert variant="primary">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam minima atque possimus exercitationem
    repellendus adipisci tenetur aliquid ab optio in odio distinctio placeat, suscipit recusandae, est nulla dicta
    nemo fugiat nobis dolores debitis quisquam. Temporibus excepturi illo assumenda culpa velit fuga, accusantium
    dicta ipsam totam, deserunt accusamus iste qui.
  </v-alert>
</WrapView>

```html
<v-alert variant="primary"> Lorem ipsum </v-alert>
```

### Alert variants

<WrapView vertical>
  <v-alert variant="primary">Lorem ipsum</v-alert>
  <v-alert variant="success">Lorem ipsum dolor sit amet.</v-alert>
  <v-alert variant="warning"> Lorem ipsum dolor sit amet. </v-alert>
  <v-alert variant="danger"> Lorem ipsum dolor sit amet. </v-alert>
</WrapView>

```html
<v-alert variant="primary">Lorem ipsum</v-alert>
<v-alert variant="success">Lorem ipsum dolor sit amet.</v-alert>
<v-alert variant="warning"> Lorem ipsum dolor sit amet. </v-alert>
<v-alert variant="danger"> Lorem ipsum dolor sit amet. </v-alert>
```

### Alert without controls

<WrapView vertical>
  <v-alert variant="primary" :controls="false">Lorem ipsum</v-alert>
</WrapView>

```html
<v-alert variant="primary" :controls="false">Lorem ipsum</v-alert>
```

### Alert without text

<WrapView vertical>
  <v-alert variant="primary" :controls="false" />
</WrapView>

```html
<v-alert variant="primary" :controls="false" />
```

### Alert with different label

<WrapView vertical>
  <v-alert variant="primary" label="Different Label"> Lorem ipsum </v-alert>
</WrapView>

```html
<v-alert variant="primary" label="Different Label"> Lorem ipsum </v-alert>
```
