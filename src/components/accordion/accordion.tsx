import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Accordion as ReactAccordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';

import { AccordionProps } from './types';
import { ComponentClassNames } from '../../utils/constants';

interface AccordionComposition {
  Item: typeof AccordionItem;
  ItemHeading: typeof AccordionItemHeading;
  ItemButton: typeof AccordionItemButton;
  ItemPanel: typeof AccordionItemPanel;
  ItemState: typeof AccordionItemState;
}

export const Accordion: React.FC<AccordionProps> & AccordionComposition = ({
  className = '',
  children,
  onChange,
  ...rest
}) => {
  const componentClasses = classNames(ComponentClassNames.Accordion, className);

  return (
    <ReactAccordion className={componentClasses} onChange={onChange} {...rest}>
      {children}
    </ReactAccordion>
  );
};

Accordion.displayName = 'Accordion';

Accordion.Item = AccordionItem;
Accordion.ItemHeading = AccordionItemHeading;
Accordion.ItemButton = AccordionItemButton;
Accordion.ItemPanel = AccordionItemPanel;
Accordion.ItemState = AccordionItemState;

Accordion.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  allowMultipleExpanded: PropTypes.bool,
  allowZeroExpanded: PropTypes.bool,
  onChange: PropTypes.func,
};
