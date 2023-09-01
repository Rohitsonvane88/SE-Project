import React from "react";
import "./css/WidgetContent.css";

function WidgetContent() {
  return (
    <div className=" widget__contents">
      <div className="widget__content">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5738/5738077.png"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Mobile App Programmer</h5>
          <p>The best Mobile App Development Company</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2210/2210153.png"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Web Developers</h5>
          <p>The best Mobile App Development Company</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5190/5190582.png"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Machine Learning Engineer</h5>
          <p>The best Mobile App Development Company</p>
        </div>
      </div>
    </div>
  );
}

export default WidgetContent;
