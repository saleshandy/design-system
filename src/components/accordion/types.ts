import { ReactNode } from 'react';

export interface AccordionProps {
  children?: ReactNode;
  className?: string;
  //   Config Props [Optional]
  allowMultipleExpanded?: boolean; // default: false
  allowZeroExpanded?: boolean; // default: false

  // Callback which is invoked when items are expanded or collapsed.
  //   Gets passed uuids of the currently expanded AccordionItems.
  onChange?: (uuids: string[], expanded?: boolean, disabled?: boolean) => void;
}
