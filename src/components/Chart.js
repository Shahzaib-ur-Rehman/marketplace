import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import "./chart.css";
const Chart = () => {
  const [dataAsets, setDataAsets] = useState([
    {
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "#7bc3ae",
    },
  ]);
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: dataAsets,
  };

  const legend = {
    display: false,
    position: "bottom",
    labels: {
      fontColor: "#323130",
      fontSize: 14,
    },
  };

  const options = {
    title: {
      display: true,
      text: "",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      ],
    },
  };
  const handleClick = (value) => {
    if (value === 1) {
      setDataAsets([
        {
          data: [25, 45, 75, 51, 44, 65],
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "#7bc3ae",
        },
      ]);
    } else if (value === 2) {
      setDataAsets([
        {
          data: [15, 35, 85, 51, 44, 65],
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "#7bc3ae",
        },
      ]);
    } else if (value === 3) {
      setDataAsets([
        {
          data: [45, 35, 95, 51, 44, 65],
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "#7bc3ae",
        },
      ]);
    } else if (value === 4) {
      setDataAsets([
        {
          data: [10, 35, 70, 51, 44, 65],
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "#7bc3ae",
        },
      ]);
    }
  };

  return (
    <div className="chartWrapper">
      <ButtonGroup className="chartBtns">
        <Button
          variant="secondary"
          className="mr-2"
          onClick={handleClick.bind(null, 1)}
        >
          1 D
        </Button>
        <Button
          variant="secondary"
          className="mr-2"
          onClick={handleClick.bind(null, 2)}
        >
          1 W
        </Button>
        <Button
          variant="secondary"
          className="mr-2"
          onClick={handleClick.bind(null, 3)}
        >
          1 M
        </Button>
        <Button
          variant="secondary"
          className="mr-2"
          onClick={handleClick.bind(null, 4)}
        >
          1 Y
        </Button>
      </ButtonGroup>
      <Line data={data} legend={legend} options={options} />
    </div>
  );
};

export default Chart;
