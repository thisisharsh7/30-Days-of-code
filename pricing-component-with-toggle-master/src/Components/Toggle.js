import React from "react";

const Toggle = (props) => {
  return (
    <>
      <article>
        <section>
          <div className="toggle-body">
            <span>Annualy</span>
            <div className="toggle-bg">
              <div className="toggle-outer">
                <div onClick={props.moveHorizon} className="toggle-inner"></div>
              </div>
            </div>
            <span>Monthly</span>
          </div>
        </section>
      </article>
    </>
  );
};

export default Toggle;
