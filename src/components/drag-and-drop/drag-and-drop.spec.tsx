import React from 'react';
import { render } from '@testing-library/react';
import { DragAndDrop } from './drag-and-drop';

describe('DragAndDrop', () => {
  it('should renders a the children', async () => {
    const { getByText } = render(
      <DragAndDrop
        dragging={false}
        setDragging={() => null}
        handleDroppedFiles={() => null}
      >
        <h1>Drag and Drop Your Files Here</h1>
      </DragAndDrop>
    );

    expect(getByText('Drag and Drop Your Files Here')).toBeInTheDocument();
  });
});
