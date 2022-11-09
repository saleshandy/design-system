export interface DragAndDropProps
  extends React.ComponentPropsWithoutRef<'div'> {
  dragging: boolean;
  setDragging: (isDragging: boolean) => void;
  handleDroppedFiles: (files: FileList) => void;
  isHidden?: boolean;
  title?: string;
  description?: string;
  backgroundVariant?: 'solid' | 'blurred';
}
