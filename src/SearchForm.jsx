import InputWithLabel from "./InputWithLabel";

function SearchForm({ searchTerm, onSearchInput, onSearchSubmit }) {
  return (
    <form onSubmit={onSearchSubmit}>
      <InputWithLabel
        id="search"
        value={searchTerm}
        type="text"
        onInputChange={onSearchInput}
        children
        isFocused
      >
        <strong>Search:</strong>
      </InputWithLabel>

      <button type="submit" disabled={!searchTerm}>
        Submit
      </button>
    </form>
  );
}

export default SearchForm;
