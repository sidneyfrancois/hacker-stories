function InputWithLabel({ id, label, value, type, onInputChange }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      &nbsp;
      <input id={id} type={type} onChange={onInputChange} value={value} />
    </>
  );
}

export default InputWithLabel;
