import { useState } from "react";

const Form = () => {
  const [, setDates] = useState("");

  const manageDates = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDates(event.target.value);
  };

  return (
    <form className="search-form">
      <div className="row">
        <label htmlFor="search" className="col-1 col-form-label">
          Search:{" "}
        </label>
        <div className="col-4">
          <input
            type="text"
            id="search"
            className="search form-control"
            onChange={manageDates}
          />
        </div>
        <button type="submit" className="btn btn-info btn-sm col-1">
          Go
        </button>
      </div>
    </form>
  );
};

export default Form;
