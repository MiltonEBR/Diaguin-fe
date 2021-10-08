import React from 'react';

function TextInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}): JSX.Element {
  return (
    <input
      className="bg-blue-ligth bg-opacity-40 p-2 rounded-xl text-blue-dark"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

TextInput.defaultProps = {
  placeholder: '',
};

export default TextInput;
