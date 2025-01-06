import React, {useState} from "react";

export default function Banner() {
  const [text, settext] = useState("");
  const [text1, settext1] = useState("");

  const countWords = (text) => {
    return text1.trim() === ""
      ? 0
      : text1
          .trim()
          .split("")
          .filter((x) => x === " ").length + 1;
  };
  const handleChange = (e) => {
    settext(e.target.value);
  };
  const renderChange = (event) => {
    settext1(event.target.value);
  };

  return (
    <>
      <div className="form">
        <h1>count of symbol: {text.length}</h1>   
        <h2>count of words: {countWords(text1)}</h2>
        <form>
          <input type="text" value={text} onChange={handleChange} />
          <br />
          <input type="text" value={text1} onChange={renderChange} />
     
        </form>
      </div>
    </>
  );
}
