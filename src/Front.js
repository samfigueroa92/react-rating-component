import star from "../src/icon-star.svg";

const Front = () => {
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
      <div className="Front_numbers">
        <div className="number one">1</div>
        <div className="number two">2</div>
        <div className="number three">3</div>
        <div className="number four">4</div>
        <div className="number five">5</div>
      </div>
      <div className="Front_submit">
      <input type="submit" />
      </div>
    </div>
  );
};

export default Front;
