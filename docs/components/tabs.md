

---
title: Tabs
---

# Tabs

Tabs are a navigation element used in web design that allow users to easily access different areas of a site or different parts of an individual page.

## Import

```javascript
import { VTabs } from 'vuetify'
```

## Usage

<WrapView >
   <!-- <v-tabs :tabs="tabs">
      <template #panels>
        <TabPanel v-for="(posts, idx) in Object.values(categories)" :key="idx">
          <ul>
            <li v-for="post in posts" :key="post.id" class="relative rounded-md p-3 hover:bg-gray-100">
              <h3 class="text-sm font-medium leading-5">
                {{ post.title }}
              </h3>
              <ul class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                <li>{{ post.date }}</li>
                <li>&middot;</li>
                <li>{{ post.commentCount }} comments</li>
                <li>&middot;</li>
                <li>{{ post.shareCount }} shares</li>
              </ul>
              <a
                href="#"
                :class="['absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2']" />
            </li>
          </ul>
        </TabPanel>
      </template>
    </v-tabs> -->
</WrapView>

```html
  <v-switch></v-switch>
```
## Custom Image

<WrapView >
  <v-switch><UserIcon class="text-white"></UserIcon></v-switch>
</WrapView>

```html
  <v-switch><UserIcon class="text-white"></UserIcon></v-switch>
```
