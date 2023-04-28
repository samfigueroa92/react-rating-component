import icon from "../src/illustration-thank-you.svg";

const Back = ({rating}) => {
  return (
    <div className="Back">
      <div className="Back_img">
        <img src={icon} alt="thank-you" />
      </div>
      <div className="Back_banner">
        <p>You selected {rating} out of 5</p>
      </div>
      <div className="Back_text">
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default Back;
