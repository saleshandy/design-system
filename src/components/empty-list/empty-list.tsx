import classNames from 'classnames';
import React from 'react';
import { EmptyListProps } from './types';
import { ImageIcon } from '../image-icon';
import { Images } from '../../utils/images';

const EmptyList: React.FC<EmptyListProps> = ({
  children,
  title,
  description,
  imgSrc = Images.EmptyData,
  className,
  isVertical = false,
}) => {
  const emptyListInnerClass = classNames([
    { 'empty-list__inner': !isVertical },
    { 'empty-list__inner-vertical': isVertical },
  ]);
  const emptyListPhotoClass = classNames([
    { 'empty-list__photo': !isVertical },
    { 'empty-list__photo-vertical': isVertical },
  ]);
  const emptyListContentClass = classNames([
    { 'empty-list__content': !isVertical },
    { 'empty-list__content-vertical': isVertical },
  ]);
  const emptyListTitleClass = classNames([
    { 'empty-list__title': !isVertical },
    { 'empty-list__title-vertical': isVertical },
  ]);
  const emptyListBodyClass = classNames([
    { 'empty-list__body': !isVertical },
    { 'empty-list__body-vertical': isVertical },
  ]);
  const emptyListButtonClass = classNames([
    { 'empty-list__buttons': !isVertical },
    { 'empty-list__buttons-vertical': isVertical },
  ]);

  return (
    <div
      className={classNames(['empty-list', className])}
      data-testid="empty-list"
    >
      <div className={emptyListInnerClass}>
        <div className={emptyListPhotoClass}>
          <ImageIcon src={imgSrc} alt="empty-data/" />
        </div>
        <div className={emptyListContentClass}>
          <div className={emptyListTitleClass}>{title}</div>
          <p className={emptyListBodyClass}>{description}</p>
          <div className={emptyListButtonClass}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default EmptyList;
