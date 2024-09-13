import React from "react";
import chevron from "../../img/icon-chevron-down.png";
import plus from "../../img/plus.png";
import plus1 from "../../img/plus1.png";

import "../filter/filter.css";
const Filter = () => {
  return (
    <div className="mainFilter">
      <div className="filter">
        <section className="filterSection">
          <h1 className="filterH1">რეგიონი</h1>
          <img src={chevron} alt="chevron" className="chevron" />
        </section>
        <section className="filterSection">
          <h1 className="filterH1">საფასო კატეგორია</h1>
          <img src={chevron} alt="chevron" />
        </section>
        <section className="filterSection">
          <h1 className="filterH1">ფართობი</h1>
          <img src={chevron} alt="chevron" />
        </section>
        <section className="filterSection">
          <h1 className="filterH1">საძინებლების რაოდენობა</h1>
          <img src={chevron} alt="chevron" />
        </section>
      </div>

      <div className="add">
        <div className="addlisting">
          <img src={plus} alt="plus" />
          <h1 className="addh1">ლისტინგის დამატება</h1>
        </div>
        <div className="addagent">
          <img src={plus1} alt="plus1" />
          <h1 className="addh1">აგენტის დამატება</h1>
        </div>
      </div>
    </div>
  );
};

export default Filter;
