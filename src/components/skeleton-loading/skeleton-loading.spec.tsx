import React from 'react';
import { render } from '@testing-library/react';
import { SkeletonLoading } from './skeleton-loading';

const skeletonSelector = 'span.react-loading-skeleton';

function getAllSkeletons(): HTMLElement[] {
  return Array.from(document.querySelectorAll<HTMLElement>(skeletonSelector));
}

function getSkeleton(): HTMLElement {
  const skeleton = document.querySelector<HTMLElement>(skeletonSelector);
  if (!skeleton) throw new Error('Could not find skeleton.');

  return skeleton;
}

describe('SkeletonLoading', () => {
  it('should renders a skeleton with default styles', () => {
    render(<SkeletonLoading />);

    const skeletonElements = getAllSkeletons();

    expect(skeletonElements).toHaveLength(1);
    expect(skeletonElements[0]).toBeVisible();
    expect(skeletonElements[0]).toHaveStyle({
      width: '50px',
      height: '14px',
      borderRadius: '4px',
    });
  });

  it('should renders the required number of skeletons', () => {
    render(<SkeletonLoading count={4} />);

    const skeletonElements = getAllSkeletons();

    expect(skeletonElements).toHaveLength(4);
  });

  it('should changes the color of the skeleton', () => {
    render(<SkeletonLoading baseColor="purple" highlightColor="red" />);

    const skeleton = getSkeleton();

    expect(skeleton.style.getPropertyValue('--base-color')).toBe('purple');
    expect(skeleton.style.getPropertyValue('--highlight-color')).toBe('red');
  });

  it('should renders a skeleton with styles', () => {
    render(<SkeletonLoading width={50} height={50} borderRadius={10} />);

    const skeleton = getSkeleton();

    expect(skeleton).toHaveStyle({
      width: '50px',
      height: '50px',
      borderRadius: '10px',
    });
  });

  it('should render a circle skeleton loader', () => {
    render(<SkeletonLoading circle />);

    expect(getSkeleton()).toHaveStyle({ borderRadius: '50%' });
  });
});
