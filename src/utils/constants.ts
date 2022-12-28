// Define Class Names Prefix
const classesPrefix = 'shd-';

// Define Component Class Names
const ComponentClassNames: Record<string, string> = {
  Avatar: 'avatar',
  Button: 'button',
  DragAndDrop: 'drag-and-drop',
  Icon: 'icon',
  ImageIcon: 'image-icon',
  EmptyList: 'empty-list',
  Toast: 'toast',
};

// Embed Prefix With Class Names
Object.keys(ComponentClassNames).forEach((component) => {
  ComponentClassNames[
    component
  ] = `${classesPrefix}${ComponentClassNames[component]}`;
});

export { ComponentClassNames };
