import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import "./chart.css";
const Chart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#7bc3ae",
      },
    ],
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

  return (
    <div className="chartWrapper">
      <ButtonGroup className="chartBtns">
        <Button variant="secondary" className="mr-2">
          1 D
        </Button>
        <Button variant="secondary" className="mr-2">
          1 W
        </Button>
        <Button variant="secondary" className="mr-2">
          1 M
        </Button>
        <Button variant="secondary" className="mr-2">
          1 Y
        </Button>
      </ButtonGroup>
      <Line data={data} legend={legend} options={options} />
    </div>
  );
};

export default Chart;
