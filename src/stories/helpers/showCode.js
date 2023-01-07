

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

export default function(templateSource, args) {
  const stringifiesArguments = Object.keys(args)
    .map((key) => stringifyArguments(key, args[key]))


  return templateSource
    .replace('v-bind="args"', stringifiesArguments)
    .replace('{{ args.default }}', ` <!-- slot --> `);
}



