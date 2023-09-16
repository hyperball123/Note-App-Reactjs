import React from "react";
import "./NoteCreation.css";

export default function NoteCreation({ finalData }) {
  return (
    <div className="Note-Creation">
      {finalData.map((dataItem, index) => (
        <div key={index} className="Note-container">
          {/* <div className="note-no">{`Note - ${index}`}</div> */}

          <ul className="note-list">
            <p>
              {dataItem.frontend && <li>Frontend</li>}
              {dataItem.backend && <li>Backend</li>}
              {dataItem.infrastructure && <li>Infrastructure</li>}
              {dataItem.devops && <li>DevOps</li>}
            </p>
            <li>
              <span>Title:</span> {dataItem.title}
            </li>
            <li>
              <span>Description: </span>
              {dataItem.description}
            </li>
            <li>
              <span>Mobile:</span> {dataItem.mobile}
            </li>
            <li>
              <span>Gender: </span>
              {dataItem.male ? "Male" : "Female"}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
