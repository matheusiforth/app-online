import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut  } from 'react-chartjs-2';
import { Flex } from '@chakra-ui/react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import "chartjs-plugin-datalabels";
// import { BoxPizzaGrafico } from '../../../pages/Home/HomeStyles';

export function GraficoTeste(){

  ChartJS.register( ArcElement, Tooltip, Legend,ChartDataLabels );

  ChartJS.defaults.set('plugins.datalabels', {
    color: 'black',
    font: {weight: 'normal', size: 15},
    align: 'center',
    anchor: 'center',
    rotation: 0,
  });

var labels = []
var dia = []
var mes  = []
var titulo = ''

const options= {
  
   responsive: true,
   maintainAspectRatio: false,
  layout: {
    autoPadding: true,
  },
  plugins: {
    datalabels:{
    color: 'black',
    font: {weight: 'normal', size: 11},
    align: 'start',
    anchor: 'end',
    // clamp: true,
    // clip: true,
    rotation: 0,
    formatter: function(value, context) {
      return Math.round(value* 100) / 100 + '%';
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
    }
}
}

 const data = {

  // labels: labels,

    datasets: [
    {
      labels: 'X',
      // ['50', '35', '10', '26', '78','51', '32', '11', '21', '71', '35', '13', '31', '22', '17']
      data: ['71', '35', '13', '31', '22', '17'],
      backgroundColor: [
      'rgba(255, 255, 0, 0.5)', 'rgba(100, 100, 0, 0.5)', 
      'rgba(131, 155, 107, 0.5)', 'rgba(100, 255, 100, 0.5)', 
      'rgba(100, 0, 255, 0.5)', 'rgba(255, 0, 0, 0.5)',
      'rgba(150, 10, 80, 0.5)', 'rgba(12, 12, 12, 0.5)', 
      'rgba(255, 99, 132, 0.5)', 'rgba(150, 246, 255, 0.5)' ],

      borderWidth: 1,
    },
  ],
};

  return(
        <Flex h='100%' pt='5px'> < Doughnut options={options} data={data}/> </Flex>
 )
}

// import { Flex } from '@chakra-ui/react';
// import { Pie } from 'react-chartjs-2';

// export function GraficoTeste() {

//   const data = {

//     // labels: labels,

//     datasets: [
//       {
//         labels: 'X',
//         // ['50', '35', '10', '26', '78','51', '32', '11', '21', '71', '35', '13', '31', '22', '17']
//         data: ['13', '31', '22', '17',],
//         backgroundColor: [
//           'rgba(255, 255, 0, 0.5)', 'rgba(100, 100, 0, 0.5)',
//           'rgba(131, 155, 107, 0.5)', 'rgba(100, 255, 100, 0.5)',
//           'rgba(100, 0, 255, 0.5)', 'rgba(255, 0, 0, 0.5)',
//           'rgba(150, 10, 80, 0.5)', 'rgba(12, 12, 12, 0.5)',
//           'rgba(255, 99, 132, 0.5)', 'rgba(150, 246, 255, 0.5)'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <Flex w='100vw' h='100vh' pt='5px'> <Pie data={data} /> </Flex>
//   )
// }

// {/* <ResponsivePie
//       data={data}
//       margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
//       innerRadius={0.5}
//       padAngle={0.7}
//       cornerRadius={3}
//       activeOuterRadiusOffset={8}
//       borderWidth={1}
//       borderColor={{
//         from: 'color',
//         modifiers: [
//           [
//             'darker',
//             0.2
//           ]
//         ]
//       }}
//       arcLinkLabelsSkipAngle={10}
//       arcLinkLabelsTextColor="#333333"
//       arcLinkLabelsThickness={2}
//       arcLinkLabelsColor={{ from: 'color' }}
//       arcLabelsSkipAngle={10}
//       arcLabelsTextColor={{
//         from: 'color',
//         modifiers: [
//           [
//             'darker',
//             2
//           ]
//         ]
//       }}
//       defs={[
//         {
//           id: 'dots',
//           type: 'patternDots',
//           background: 'inherit',
//           color: 'rgba(255, 255, 255, 0.3)',
//           size: 4,
//           padding: 1,
//           stagger: true
//         },
//         {
//           id: 'lines',
//           type: 'patternLines',
//           background: 'inherit',
//           color: 'rgba(255, 255, 255, 0.3)',
//           rotation: -45,
//           lineWidth: 6,
//           spacing: 10
//         }
//       ]}
//       fill={[
//         {
//           match: {
//             id: 'ruby'
//           },
//           id: 'dots'
//         },
//         {
//           match: {
//             id: 'c'
//           },
//           id: 'dots'
//         },
//         {
//           match: {
//             id: 'go'
//           },
//           id: 'dots'
//         },
//         {
//           match: {
//             id: 'python'
//           },
//           id: 'dots'
//         },
//         {
//           match: {
//             id: 'scala'
//           },
//           id: 'lines'
//         },
//         {
//           match: {
//             id: 'lisp'
//           },
//           id: 'lines'
//         },
//         {
//           match: {
//             id: 'elixir'
//           },
//           id: 'lines'
//         },
//         {
//           match: {
//             id: 'javascript'
//           },
//           id: 'lines'
//         }
//       ]}
//       legends={[
//         {
//           anchor: 'bottom',
//           direction: 'row',
//           justify: false,
//           translateX: 0,
//           translateY: 56,
//           itemsSpacing: 0,
//           itemWidth: 100,
//           itemHeight: 18,
//           itemTextColor: '#999',
//           itemDirection: 'left-to-right',
//           itemOpacity: 1,
//           symbolSize: 18,
//           symbolShape: 'circle',
//           effects: [
//             {
//               on: 'hover',
//               style: {
//                 itemTextColor: '#000'
//               }
//             }
//           ]
//         }
//       ]}
//     />
//     */}