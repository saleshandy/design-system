import { SearchInput } from "../components/search-input";

// Define Class Names Prefix
const classesPrefix = 'shd-';

// Define Component Class Names
const ComponentClassNames: Record<string, string> = {
  Avatar: 'avatar',
  Button: 'button',
  DragAndDrop: 'drag-and-drop',
  ImageIcon: 'image-icon',
  EmptyList: 'empty-list',
  Toast: 'toast',
  Pills: 'pills',
  Accordion: 'accordion',
  Carousel: 'carousel',
  Input: 'input',
  SearchInput: 'search-input',
};

// Embed Prefix With Class Names
Object.keys(ComponentClassNames).forEach((component) => {
  ComponentClassNames[
    component
  ] = `${classesPrefix}${ComponentClassNames[component]}`;
});

export { ComponentClassNames };
