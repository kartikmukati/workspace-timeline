import React, {useState} from "react";
import { Avatar } from "rsuite";

import "./UICard.css";

const UICard = (props) => {

  const [cardSelection, setCardSelection] = useState('For myself'); 

  const onCardSelectionClick = () => {
    setCardSelection(() => {
      if(cardSelection === 'For myself')
      return 'With my team';
      else {
        return 'For myself';
      }
    })
  }

  return (
    <>
      {props.formFields.map((form) => {
        if (form.type === "text" || form.type === "email") {
          return (
            <div className="form-group mb-3">
              <label className="form-label">{form.label}</label>
              <input
                type={form.type}
                placeholder={form.placeholder}
                className="form-control"
                name={form.name}
              />
            </div>
          );
        } else if (form.type === "url") {
          return (
            <>
              <label for="basic-url" className="form-label">
                {form.label}
              </label>
              <label class="form-text">{form.text}</label>
              <div className="input-group mb-3">
                <span className="input-group-text text-muted" id="basic-addon3">
                  www.eden.com/
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </div>
            </>
          );
        } else if (form.type === "card") {
          console.log("CARD TYPE FORM");

          return (
            <div className="col-6 btn-card">
              <div className="card mb-4 btn-card" style={{border:`${cardSelection === form.label   ? "1px solid #8000ff" : ''}`}} onClick={onCardSelectionClick}>
                <div className="card-body">
                  {form.icon}
                  <h5 className="card-subtitle mt-3 mb-1">{form.label}</h5>
                  <p className="form-text">{form.text}</p>
                </div>
              </div>
            </div>
          );
        } else if (form.type === "success") {
          return <div className="text-center mt-5 pt-2 mb-4 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">{form.icon}</div>;
        }
      })}
      {props.buttonTitle !== "Launch Eden" ? (
        
        <button
          type="submit"
          style={{ background: "#8000ff", border: "1px solid #8000ff" }}
          className="btn btn-primary mt-2 col-xl-12 col-lg-12 col-md-12 col-sm-12 offset-sm-0"
          onClick={props.onclick}
        >
          {props.buttonTitle}
        </button>
        
      ) : null}
    </>
  );
};

export default UICard;
