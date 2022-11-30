// Define Class Names Prefix
const classesPrefix = 'shd-';

// Define Component Class Names
const ComponentClassNames: Record<string, string> = {
  Button: 'button',
  DragAndDrop: 'drag-and-drop',
  Icon: 'icon',
  ImageIcon: 'image-icon',
  EmptyList: 'empty-list',
};

// Embed Prefix With Class Names
Object.keys(ComponentClassNames).forEach((component) => {
  ComponentClassNames[
    component
  ] = `${classesPrefix}${ComponentClassNames[component]}`;
});

export { ComponentClassNames };
