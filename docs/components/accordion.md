---
title: Accordion
---

# Accordion

An accordion is a user interface component that allows the user to hide or reveal content.

## Import

```javascript
import { VAccordion } from 'vuetify'
```

## Usage

<WrapView>
  <v-accordion>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium incidunt temporibus in fuga culpa. Esse rem
    dolor velit praesentium accusamus ullam deserunt illum! Corporis id, vel vitae quasi vero esse dolorem impedit
    reiciendis tempore molestias est cupiditate quisquam minus dolor aliquid ratione ea consectetur magni ipsa
    facilis! Soluta, porro nesciunt.
  </v-accordion>
</WrapView>

```html
<v-accordion> Lorem ipsum </v-accordion>
```

### Accordion with nested #header slot

<WrapView vertical>
    <v-accordion>
      <template #header> Different Label </template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium incidunt temporibus in fuga culpa. Esse rem
      dolor velit praesentium accusamus ullam deserunt illum! Corporis id, vel vitae quasi vero esse dolorem impedit
      reiciendis tempore molestias est cupiditate quisquam minus dolor aliquid ratione ea consectetur magni ipsa
      facilis! Soluta, porro nesciunt.
    </v-accordion>
</WrapView>

```html
<v-accordion>
  <template #header> Different Label </template>
  Lorem ipsum
</v-accordion>
```

### Accordion with label prop

<WrapView vertical>
  <v-accordion label="Another Label">Lorem ipsum dolor sit amet.</v-accordion>
</WrapView>

```html
<v-accordion label="Another Label">Lorem ipsum dolor sit amet.</v-accordion>
```

### Accordion without background

<WrapView vertical>
  <v-accordion :bg="false"
    >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id ipsum voluptatem dolores! Quasi animi omnis quis?
    Enim voluptas corporis officiis hic repellat quaerat pariatur praesentium? Doloremque aspernatur eveniet corrupti
    quaerat qui ipsum sapiente odio, eos voluptatem repudiandae enim laudantium possimus deleniti molestiae quasi
    accusamus dignissimos vitae consequuntur. Dolore, incidunt! Excepturi expedita placeat repellat distinctio cumque
    nam unde voluptas neque molestias. Ea aut ducimus debitis nobis iste optio sit enim est incidunt. Numquam illo
    officiis quidem, placeat sequi tenetur voluptatum esse sunt ipsa laboriosam ut? Beatae, deleniti nisi officiis
    blanditiis delectus vel repellat ipsa. Quasi deserunt aliquam voluptatem odit eos et!</v-accordion>
</WrapView>

```html
<v-accordion :bg="false">Lorem ipsum </v-accordion>
```
