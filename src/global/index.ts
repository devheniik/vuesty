import * as heroicons from '@jonyak/icons/24/outline'
import { App } from 'vue'

export default (app: App): void => {
  console.log(heroicons)

  Object.entries(heroicons).forEach(([componentName, component]) => {
    if (componentName !== 'default') {
      app.component(String(componentName), component)
    }
  })
}
