const stringifyArguments = (key, value) => {
  switch (typeof value) {
  case 'string':
      return `${key}="${value}"`;
  case 'boolean':
      return value ? key : '';
  default:
      return `:${key}="${value}"`;
  }
};

export const generateSource = (templateSource, args) => {
  const stringifiedArguments = Object.keys(args)
  .map((key) => stringifyArguments(key, args[key]))


  return templateSource.replace('v-bind="args"', stringifiedArguments);
};
