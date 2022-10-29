// Define Class Names Prefix
const classesPrefix = 'shd-';

// Define Component Class Names
const ComponentClassNames: Record<string, string> = {
  Button: 'button',
};

// Embed Prefix With Class Names
Object.keys(ComponentClassNames).forEach((component) => {
  ComponentClassNames[
    component
  ] = `${classesPrefix}${ComponentClassNames[component]}`;
});

export { ComponentClassNames };
