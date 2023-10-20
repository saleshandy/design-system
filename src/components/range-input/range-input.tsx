import React, { useState } from 'react';
import { Range } from 'react-range';
import type { RangeInputType } from './types';

const STEP = 1;
const MIN = 1;
const MAX = 6;

export const RangeInput: React.FC<RangeInputType> = ({ onChange }) => {
  const [values, setValues] = useState<number[]>([3]);

  const handleChange = (v: number[]) => {
    setValues(v);
    onChange(v);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={false}
        onChange={(values) => handleChange(values)}
        renderMark={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '2px',
              width: '2px',
              borderRadius: '50px',
              backgroundColor: '#3B82F6',
            }}
          />
        )}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: '#BFDBFE',
                alignSelf: 'center',
                paddingRight: '4px',
                paddingLeft: '4px',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '16px',
              width: '16px',
              borderRadius: '50px',
              outlineStyle: 'solid',
              outlineColor: '#1D4ED8',
              outlineWidth: '4px',
              backgroundColor: '#FFF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 2px 6px #AAA',
            }}
          />
        )}
      />
      <output style={{ marginTop: '30px' }}>{values[0].toFixed(1)}</output>
    </div>
  );
};
