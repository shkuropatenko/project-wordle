import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ guess });
    setGuess("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        maxLength={5}
        minLength={5}
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
