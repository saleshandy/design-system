import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { DragAndDrop, DragAndDropProps } from '../components/drag-and-drop';

export default {
  title: 'Components/Drag And Drop',
  component: DragAndDrop,
} as Meta;

const Template: Story<DragAndDropProps> = (args) => {
  const [dragging, setDragging] = useState(false);

  const handleDroppedFiles = (files: FileList) => {
    console.log('files', files);
  };

  return (
    <>
      <p style={{ color: 'grey', fontSize: '14px' }}>Note: -</p>
      <p style={{ color: 'grey', fontSize: '14px' }}>
        1. Below is a children component wrapped in <code>DragAndDrag</code>{' '}
        component.
      </p>
      <p style={{ color: 'grey', fontSize: '14px' }}>
        2. Styles applied to DragAndDrop wrapper here, is just for showing the
        component is storybook doc and will not required in actual code.
      </p>
      <p style={{ color: 'grey', fontSize: '14px', marginBottom: '2rem' }}>
        3. You can check the dropped files in console log.
      </p>

      <DragAndDrop
        {...args}
        dragging={dragging}
        setDragging={setDragging}
        handleDroppedFiles={handleDroppedFiles}
        title="Drop to upload your files"
        description="You can upload images, docs, sheets, presentations, videos and zip files"
        // styles is just for showing the component is storybook doc
        // and will not required in actual code
        style={{
          width: '800px',
          height: '300px',
          backgroundColor: '#d4d4d4',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center',
          fontSize: '14px',
        }}
      >
        <p>Drag and Drop your files here</p>
      </DragAndDrop>
    </>
  );
};

export const SolidBackground = Template.bind({});
SolidBackground.args = {
  backgroundVariant: 'solid',
};

export const BlurredBackground = Template.bind({});
BlurredBackground.args = {
  backgroundVariant: 'blurred',
};
