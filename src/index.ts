import * as components from './components';

const plugin = {
  install(vue: any) {
    Object.keys(components).forEach((componentName) => {
      vue.component(componentName, components[componentName as keyof typeof components]);
    });
  },
};

export * from './components';

export default plugin;
