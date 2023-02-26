import "../../styles/App.css";
import { useEffect, useState } from "react";
import {
  getSecondsForStartDay,
  getSecondsForStartMonth,
  getSecondsForStartWeek,
  getSecondsForStartYear,
} from "../../logic/date";
import { getStaticsOfUsers } from "../../service/CFStatics";
import handles from "../../data/handles";
import Table from "../table/Table";

export default function StandingPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [interval, setInterval] = useState("Week");
  const options = ["Day", "Week", "Month", "Year", "All"];

  useEffect(() => {
    setLoading(true);
    // getStaticsOfUsers(handles, getSecondsForStartWeek())
    let seconds = 0;
    if (interval === "Day") seconds = getSecondsForStartDay();
    else if (interval === "Month") seconds = getSecondsForStartMonth();
    else if (interval === "Week") seconds = getSecondsForStartWeek();
    else if (interval === "Year") seconds = getSecondsForStartYear();

    getStaticsOfUsers(handles, seconds)
      .then((e) => {
        let idx = 0;
        e = e.map((e) => {
          e.id = idx++;
          return e;
        });
        console.table(e);
        setData(e);
      })
      .catch((e) => {
        setData([{ id: "error" }]);
      })
      .finally((e) => {
        setLoading(false);
      });
  }, [interval]);

  const columns = [
    { label: "Handle", accessor: "handle", sortable: false },
    { label: "Count Of ACs", accessor: "countOfAC", sortable: true },
    { label: "Count Of Live", accessor: "countOfLive", sortable: true },
    { label: "Count Of Virtual", accessor: "countOfVirtual", sortable: true },
    { label: "Max Rate", accessor: "maxRate", sortable: true },
    {
      label: "Count Of Submessions",
      accessor: "countOfSubmessions",
      sortable: true,
    },
  ];

  //   const dat = data.map((e) => {
  //     return <div>{e.handle}</div>;
  //   });
  //   console.log(data);
  //   data.forEach((e) => console.table(e));
  console.log(data);
  return (
    <div>
      <h1>
        standing
        <select
          editable="false"
          value={interval}
          onChange={(e) => {
            setInterval(e.target.value);
          }}
        >
          {options.map((e) => (
            <option selected={e === interval ? "selected" : ""}>{e}</option>
          ))}
        </select>
      </h1>
      <div className="standing">
        {loading ? (
          "loading....."
        ) : (
          <Table
            caption="Developers currently enrolled in this course. The table below is ordered (descending) by the Gender column."
            data={data}
            columns={columns}
          />
        )}
      </div>
    </div>
  );
}
