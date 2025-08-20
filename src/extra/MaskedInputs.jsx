import React from 'react';
import MaskedInput from 'react-text-mask';

const MaskedInputs = React.forwardRef((props, ref) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(refInstance) => {
        if (ref) {
          if (typeof ref === 'function') {
            ref(refInstance ? refInstance.inputElement : null);
          } else if (ref.hasOwnProperty('current')) {
            ref.current = refInstance ? refInstance.inputElement : null;
          }
        }

        if (inputRef) {
          inputRef(refInstance ? refInstance.inputElement : null);
        }
      }}
      mask={[
        '(',
        '+',
        '1',
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={'\u2000'} // You can change or remove this if you don't want any placeholder character
      showMask={false} // Adjusted to show the mask only when typing
    />
  );
});

export default MaskedInputs;