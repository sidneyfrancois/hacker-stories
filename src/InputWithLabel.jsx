import { useEffect, useRef } from "react";

function InputWithLabel({
  id,
  value,
  type,
  onInputChange,
  children,
  isFocused,
}) {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
      />
    </>
  );
}

export default InputWithLabel;
