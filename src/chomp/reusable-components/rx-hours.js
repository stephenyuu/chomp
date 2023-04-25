import React from "react";

const RxHours = ({ hours }) => {
  const formatTime = (timeString) => {
    const time = new Date(
      `2000-01-01T${timeString.slice(0, 2)}:${timeString.slice(2, 4)}:00`
    );
    return time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const createRows = (hours) => {
    const weekdays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    const rows = weekdays.map((day, index) => {
      const hoursObject = hours.find((h) => h.day === index);
      const hoursText = hoursObject
        ? `${formatTime(hoursObject.start)} to ${formatTime(hoursObject.end)}`
        : "Closed";
      return (
        <tr className="table-default">
          <th scope="row">{day}</th>
          <td>{hoursText}</td>
        </tr>
      );
    });

    return rows;
  };

  const yelpHours = hours[0].open;
  const rows = createRows(yelpHours);
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Hours
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <table className="table table-hover">
              <tbody>{rows}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RxHours;
