import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { UploadIcon, UploadIconWithBg } from '../../svgs';
import { DragAndDropProps } from './types';
import { ComponentClassNames } from '../../utils/constants';
import { getClassNameByModifier } from '../../utils/classname-modifiers';

export const DragAndDrop = React.forwardRef<HTMLDivElement, DragAndDropProps>(
  (
    {
      title,
      description,
      dragging,
      isHidden,
      setDragging,
      handleDroppedFiles,
      backgroundVariant,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const componentClasses = classNames(
      ComponentClassNames.DragAndDrop,
      className
    );
    const componentOverlayClasses = classNames(
      getClassNameByModifier(ComponentClassNames.DragAndDrop, 'overlay'),
      getClassNameByModifier(ComponentClassNames.DragAndDrop, backgroundVariant)
    );

    let dragCounter = 0;

    const overrideEventDefaults = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };

    const onDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
      overrideEventDefaults(event);

      if (dragCounter === 0) {
        dragCounter += 1;
      }
      if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
        setDragging(true);
      }
    };

    const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
      overrideEventDefaults(event);

      if (dragCounter > 0) {
        dragCounter -= 1;
      } else if (dragCounter === 0) {
        setDragging(false);
      }
    };

    const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
      overrideEventDefaults(event);

      /**
       * The files has been dropped, we can now hide the dragging UI
       */
      setDragging(false);

      const { files } = event.dataTransfer;

      handleDroppedFiles(files);

      /**
       * The files has been passed to the parent component,
       * we can now clear the data from event object because
       * if we don't clear the data, same files cannot be
       * dropped twice in a row
       */
      event.dataTransfer.clearData();
    };

    return (
      <div
        ref={ref}
        onDrag={overrideEventDefaults}
        onDragStart={overrideEventDefaults}
        onDragEnd={overrideEventDefaults}
        onDragOver={overrideEventDefaults}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={componentClasses}
        {...rest}
      >
        {children}
        {!isHidden && dragging && (
          <div className={componentOverlayClasses}>
            <div className={`${ComponentClassNames.DragAndDrop}--icon`}>
              {backgroundVariant === 'solid' && <UploadIcon />}
              {backgroundVariant === 'blurred' && <UploadIconWithBg />}
            </div>
            <h2 className={`${ComponentClassNames.DragAndDrop}--title`}>
              {title}
            </h2>
            {description && (
              <p className={`${ComponentClassNames.DragAndDrop}--text`}>
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

DragAndDrop.displayName = 'DragAndDrop';

DragAndDrop.propTypes = {
  children: PropTypes.node,
  dragging: PropTypes.bool.isRequired,
  setDragging: PropTypes.func.isRequired,
  handleDroppedFiles: PropTypes.func.isRequired,
  isHidden: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  backgroundVariant: PropTypes.oneOf(['solid', 'blurred']),
};

DragAndDrop.defaultProps = {
  backgroundVariant: 'blurred',
};
