import React from 'react'
import Chart from 'react-apexcharts'
function ResultsModel(props) {
    let time = { props.time }
    let joy = { props.joy }

    let attention = { props.attention }

    let surprise = { props.surpise }

    let confusion = { props.confusion }

    const state = {
        options: {
            chart: {
                group: "BacktestCharts",
                id: "1",
                animations: {
                    enabled: false
                },
                stacked: false,
                zoom: {
                    type: "x",
                    enabled: true
                },
                toolbar: {
                    autoSelected: "zoom",
                    show: true
                },
                background: "#fff"
            },
            annotations: {
                points: []
            },
            fill: {
                type: "solid",
                opacity: [0.35, 1]
            },
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 0
            },

            xaxis: {
                categories: time
            },
            stroke: {
                width: 1.5
            },
            legend: {
                show: false
            },

        },

        series: [
            {
                data: attention,
                name: "Attention",
                type: "line"
            },
            {
                data: surprise,
                name: "Surprise",
                type: "line"
            },
            {
                data: joy,
                name: "Joy",
                type: "line"
            },
            {
                data: confusion,
                name: "Confusion",
                type: "line"
            },

        ],
    };



    const chartOptions = {
        series: [73.23, 16.77, 10],
        chart: {
            width: 200,
            type: "pie"
        },
        labels: ["Engaged", "Distracted", "Not fully engaged"],
        dataLabels: {
            enabled: false
        },
        colors: ["#FF0000", "#FFFF00", "#FF00FF"],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: "bottom"
                    }
                }
            }
        ]
    };
    return (
        <>
            <div className="absolute w-full h-full bg-black opacity-20 z-10">.</div>
            <div className="absolute bg-white rounded-lg z-50 px-6 py-5 w-2/4 self-center">
                <h1 className=" font-rfregular text-2xl border-b border-black mt-4">Activity results</h1>
                <div className="w-full">
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="line"
                        height="300"
                        width="100%"
                    />

                    <h1 className=" font-rfregular text-2xl border-b border-black">A glimpse at how your class went</h1>


                    <div className="">
                        <Chart
                            options={chartOptions}
                            series={chartOptions.series}
                            type="pie"
                            width={500}
                        />
                    </div>




                </div>
            </div>

        </>
    )
}

export default ResultsModel
