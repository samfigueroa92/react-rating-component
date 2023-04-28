import star from "../src/icon-star.svg";


const Front = ({setToggle, setRating}) => {

  const handleRating = (e) => {
    const { value } = e.target;
    setRating(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setToggle(true)
  }
  
  return (
    <div className="Front">
      <div className="Front_star">
        <div className="Front_star_container">
          <img src={star} alt="" />
        </div>
      </div>
      <div className="Front_text">
        <h1>How did we do?</h1>
        <p>
          <span>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </span>
        </p>
      </div>
      <div>
      <form className="Front_numbers">
        <input type="button" className="number" value="1" onClick={handleRating}></input>
        <input type="button" className="number" value="2" onClick={handleRating}></input>
        <input type="button" className="number" value="3" onClick={handleRating}></input>
        <input type="button" className="number" value="4" onClick={handleRating}></input>
        <input type="button" className="number" value="5" onClick={handleRating}></input>
      </form>
      </div>
      <div className="Front_submit">
      <input type="submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Front;