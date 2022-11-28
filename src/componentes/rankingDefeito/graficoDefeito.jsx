import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Flex } from '@chakra-ui/react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import "chartjs-plugin-datalabels";

export function GraficoDefeito() {

    ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

    ChartJS.defaults.set('plugins.datalabels', {
        color: 'black',
        font: { weight: 'normal', size: 15 },
        align: 'center',
        anchor: 'center',
        rotation: 0,
    });

    var labels = [];
    var dados = [];

    // for (var i = 0; i < props.data.length; i++) {
    //     labels.push(props.data[i]['descmotivoparada'])
    // }

    // for (var i = 0; i < props.data.length; i++) {
    //     dados.push(props.data[i]['percentualnum'])
    // }

    const options = {

        responsive: true,
        maintainAspectRatio: false,
        layout: {
            autoPadding: true,
        },
        plugins: {
            datalabels: {
                color: 'black',
                font: { weight: 'normal', size: 11 },
                align: 'start',
                anchor: 'end',
                // clamp: true,
                // clip: true,
                rotation: 0,
                formatter: function (value, context) {
                    return Math.round(value * 100) / 100 + '%';
                }
            },
            legend: {
                align: 'center',
                position: 'bottom',
                display: true,
                textAlign: 'left',

                labels: {
                    boxWidth: 15,
                    boxHeight: 15,
                    color: 'black'
                }
            },
        }
    }

    const data = {

        // labels: 'labels',

        datasets: [
            {
                labels: 'X',
                // ['50', '35', '10', '26', '78','51', '32', '11', '21', '71', '35', '13', '31', '22', '17']
                data: ['13', '31', '22', '17'],
                backgroundColor: [
                    'rgba(255, 255, 0, 0.5)', 'rgba(100, 100, 0, 0.5)',
                    'rgba(131, 155, 107, 0.5)', 'rgba(100, 255, 100, 0.5)',
                    'rgba(100, 0, 255, 0.5)', 'rgba(255, 0, 0, 0.5)',
                    'rgba(150, 10, 80, 0.5)', 'rgba(12, 12, 12, 0.5)',
                    'rgba(255, 99, 132, 0.5)', 'rgba(150, 246, 255, 0.5)'],

                borderWidth: 1,
            },
        ],
    };

    return (
        <Flex h='100%' pt='5px'> <Doughnut options={options} data={data} /> </Flex>
    )
}