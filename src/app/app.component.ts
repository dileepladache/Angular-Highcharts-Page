import { AfterViewInit, Component } from '@angular/core';
// import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import HighchartsSunburst from 'highcharts/modules/sunburst';
import * as Dashboards from '@highcharts/dashboards';
import Highcharts from "highcharts/highmaps";
// import worldMap from "@highcharts/map-collection/custom/world.geo.json";
import * as worldMap from '@highcharts/map-collection/custom/world.geo.json';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);
HighchartsSunburst(Highcharts);

// const worldMap = require('@highcharts/map-collection/custom/world.geo.json');

const DataCursor = Dashboards.DataCursor;
const DataTable = Dashboards.DataTable;
// const cursor = new DataCursor();
// const vegeTable = buildVegeTable();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {

    Highcharts: typeof Highcharts = Highcharts;
    chartConstructor = "mapChart";
    chartData = [{ code3: "ABW", z: 105 }, { code3: "AFG", z: 35530 }];
  
    constructor( ){

    }

    title = 'app';
    chart: any;
    updateFromInput = false;
    highcharts = Highcharts;
    chartCallback: any;
    chartOptions1;
    chartOptions2;
    chartOptions3;
    chartOptions4;
    chartOptions5;
    chartOptions6;
    activity = {
      xData: [
        0.001567, 0.011765, 0.022194, 0.032316, 0.04266, 0.063668, 0.074477,
        0.085323, 0.09576, 0.106078,
      ],
      datasets: [
        {
          name: 'Speed',
          data: [
            13.833, 12.524, 11.441, 10.651, 9.961, 4.566, 4.617, 4.728, 4.823,
            4.844,
          ],
          unit: 'km/h',
          type: 'column',
          valueDecimals: 1,
        },
        {
          name: 'Elevation',
          data: [
            26.857, 27, 27.111, 27.2, 27.272, 30.545, 32.181, 33.818, 35.272,
            36.545,
          ],
          unit: 'm',
          type: 'column',
          valueDecimals: 0,
        },
        {
          name: 'Heart rate',
          data: [
            101, 98, 103, 115, 124, 128, 133, 138, 138, 141,
          ],
          unit: 'bpm',
          type: 'pie',
          valueDecimals: 0,
        },
        {
          name: 'Speed',
          data: [
            13.833, 12.524, 11.441, 10.651, 9.961, 4.566, 4.617, 4.728, 4.823,
            4.844,
          ],
          unit: 'km/h',
          type: 'column',
          valueDecimals: 1,
        },
        {
          name: 'Elevation',
          data: [
            26.857, 27, 27.111, 27.2, 27.272, 30.545, 32.181, 33.818, 35.272,
            36.545,
          ],
          unit: 'm',
          type: 'column',
          valueDecimals: 0,
        },
        {
          name: 'Heart rate',
          data: [
            101, 98, 103, 115, 124, 128, 133, 138, 138, 141,
          ],
          unit: 'bpm',
          type: 'pie',
          valueDecimals: 0,
        },
      ],
    };
  
    tableData = [];
    revenueTableData = [
      {type: 'Net Revenue', percentage: '6.11 %' , this:'$1.04M', last: '$1.11M'},
      {type: 'Returns', percentage: '78.72 %' , this:'$21.04K', last: '$98.84K'},
      {type: 'Return Rate', percentage: '75.80 %' , this:'1.98%', last: '8.17'},
    ];

  public ngAfterViewInit(): void {
    this.createChartbubble();
    this.createChartPie();
    this.createChartColumn();
    this.createChartLine();
    this.createChartPieComb();
    this.createChartStackedArea();
  }

  ngOnInit() {
    this.comboCharts();

  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  private createChartbubble(): void {
    const chart = Highcharts.chart('chart-bubble', {

        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy'
        },
    
        legend: {
            enabled: false
        },
    
        title: {
            text: 'Sugar and fat intake per country'
        },
    
    
        accessibility: {
          
        },
    
        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Value spent(cr)'
            },
            labels: {
                format: '{value} Cr'
            },
            plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 65,
                label: {
                    rotation: 0,
                    y: 15,
                    style: {
                        fontStyle: 'italic'
                    },
                    text: 'Safe fat intake 65g/day'
                },
                zIndex: 3
            }],
            accessibility: {
                rangeDescription: 'Range: 60 to 100 grams.'
            }
        },
    
        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'Percentage of price change'
            },
            labels: {
                format: '{value} Cr'
            },
            maxPadding: 0.2,
            plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 50,
                label: {
                    align: 'right',
                    style: {
                        fontStyle: 'italic'
                    },
                    text: 'Safe sugar intake 50g/day',
                    x: -10
                },
                zIndex: 3
            }],
            accessibility: {
                rangeDescription: 'Range: 0 to 160 grams.'
            }
        },
    
        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>',
            footerFormat: '</table>',
            followPointer: true
        },
    
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
    
        series: [{
            data: [
                { x: 95, y: 95, z: 13.8, name: 'Ethyl Acetat', country: 'Ethyl Acetat' },
                { x: 86.5, y: 102.9, z: 14.7, name: 'Methyl Acet', country: 'Methyl Aceto' },
                { x: 80.8, y: 91.5, z: 15.8, name: 'Di-methyl Ma', country: 'Di-methyl Ma' },
                { x: 80.4, y: 102.5, z: 12, name: 'Caustic Soda', country: 'Caustic Soda' },
                { x: 80.3, y: 86.1, z: 11.8, name: '2, 6 -Difluoro', country: '2, 6 -Difluoro' },
                { x: 78.4, y: 70.1, z: 16.6, name: 'Para Chloro', country: 'Para Chloro' },
                { x: 74.2, y: 68.5, z: 14.5, name: '1,3 Dichloro', country: '1,3 Dichloro' },
              
            ],
            colorByPoint: true
        }]
    
    } as any);

    // setInterval(() => {
    //   chart.series[0].points[0].update(this.getRandomNumber(0, 100));
    // }, 1000);
  }

  private createChartPie(): void {
    let date = new Date();
    const data: any[] = [];

    for (let i = 0; i < 5; i++) {
      date.setDate(new Date().getDate() + i);
      data.push({
        name: `${date.getDate()}/${date.getMonth() + 1}`,
        y: this.getRandomNumber(0, 1000),
      });
    }

    const chart = Highcharts.chart('chart-pie', {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Pie Chart',
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        headerFormat: `<span class="mb-2">Date: {point.key}</span><br>`,
        pointFormat: '<span>Amount: {point.y}</span>',
        useHTML: true,
      },
      series: [{
        name: null,
        innerSize: '50%',
        data,
      }],
    } as any);

    // setInterval(() => {
    //   date.setDate(date.getDate() + 1);
    //   chart.series[0].addPoint({
    //     name: `${date.getDate()}/${date.getMonth() + 1}`,
    //     y: this.getRandomNumber(0, 1000),
    //   }, true, true);
    // }, 1500);
  }

  private createChartStackedArea(): void {

    const chart = Highcharts.chart('chart-stacked-area', {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Greenhouse gases from Norwegian economic activity',
            align: 'left'
        },
       
        yAxis: {
            title: {
                useHTML: true,
                text: 'Million tonnes CO<sub>2</sub>-equivalents'
            }
        },
        tooltip: {
            shared: true,
            headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
        },
        plotOptions: {
            series: {
                pointStart: 2012
            },
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Bharuch',
            data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214]
        }, {
            name: 'Pune',
            data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039]
    
        }, {
            name: 'Noida',
            data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913]
        }, {
            name: 'Bharuch-SEZU',
            data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550]
    
        }]
    } as any);

  }

  private createChartPieComb(): void {
    let date = new Date();
    const data: any[] = [];

    // for (let i = 0; i < 5; i++) {
    //   date.setDate(new Date().getDate() + i);
    //   data.push({
    //     name: `${date.getDate()}/${date.getMonth() + 1}`,
    //     y: this.getRandomNumber(0, 1000),
    //   });
    // }

    const chart = Highcharts.chart('chart-pie', {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Pie Chart',
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        headerFormat: `<span class="mb-2">Date: {point.key}</span><br>`,
        pointFormat: '<span>Amount: {point.y}</span>',
        useHTML: true,
      },
      series: [{
        type: 'pie',
        name: 'Total',
        data: [{
            name: 'Baruch',
            y: 500,
            color: 'red', // 2020 color
            dataLabels: {
                enabled: true,
                distance: -50,
                format: '{point.percentage} %',
                style: {
                    fontSize: '15px'
                }
            }
        }, {
            name: 'Rest',
            y: 500,
            color: 'blue' // 2021 color
        }],
        center: [75, 65],
        colorIndex:[3, 5],
        size: 100,
        innerSize: '70%',
        showInLegend: true,
        dataLabels: {
            enabled: false
        }
    },
    {
        type: 'pie',
        name: 'Total',
        data: [{
            name: 'Pune',
            y: 600,
            color: 'red', // 2020 color
            dataLabels: {
                enabled: true,
                distance: -50,
                format: '{point.percentage} %',
                style: {
                    fontSize: '15px'
                }
            }
        }, {
            name: 'Rest',
            y: 200,
            color: 'blue' // 2021 color
        }],
        center: [205, 65],
        size: 100,
        innerSize: '70%',
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    },
    {
        type: 'pie',
        name: 'Total',
        data: [{
            name: 'Noida',
            y: 400,
            color: 'red', // 2020 color
            dataLabels: {
                enabled: true,
                distance: -50,
                format: '{point.percentage} %',
                style: {
                    fontSize: '15px'
                }
            }
        }, {
            name: 'Rest',
            y: 600,
            color: 'blue' // 2021 color
        }],
        center: [205, 195],
        size: 100,
        innerSize: '70%',
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    },
    {
        type: 'pie',
        name: 'Total',
        data: [{
            name: 'Baruch-SEZU',
            y: 200,
            color: 'red', // 2020 color
            dataLabels: {
                enabled: true,
                distance: -50,
                format: '{point.percentage} %',
                style: {
                    fontSize: '15px'
                }
            }
        }, {
            name: 'Rest',
            y: 600,
            color: 'blue' // 2021 color
        }],
        center: [75, 195],
        size: 100,
        innerSize: '70%',
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }],
    } as any);

    // setInterval(() => {
    //   date.setDate(date.getDate() + 1);
    //   chart.series[0].addPoint({
    //     name: `${date.getDate()}/${date.getMonth() + 1}`,
    //     y: this.getRandomNumber(0, 1000),
    //   }, true, true);
    // }, 1500);
  }

  private createChartColumn(): void {
    let date = new Date();
    const data: any[] = [];


    const chart = Highcharts.chart('chart-column' as any, {
      chart: {
        type: "bar"
      },
      title: {
        text: "Revenue vs Quota"
      },
      xAxis: {
        categories: ["Sue", "Robert", "Eric", "Annie"],
        title: {
          text: null
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: "In Thousand of Rupees",
          align: "high"
        },
        labels: {
          overflow: "justify"
        }
      },
      tooltip: {
        valuePrefix: "Rs. "
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "top",
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [
        {
         
          data: [
              ['Sue', 107],
              ['Robert', 168],
              ['Eric', 51],
              ['Annie', 210.7],
          ],}
      ]
    } as any);

  }

  private createChartLine(): void {
    let date = new Date();
    const data: any[] = [];

    // for (let i = 0; i < 10; i++) {
    //   date.setDate(new Date().getDate() + i);
    //   data.push([`${date.getDate()}/${date.getMonth() + 1}`, this.getRandomNumber(0, 1000)]);
    // }

    const chart = Highcharts.chart('chart-line', {

        chart: {
            type: 'line',
          },

        title: {
            text: 'Monthly Sale Trends',
            align: 'center'
        },
    
        yAxis: {
            title: {
                text: 'Revenue'
            }
        },
    
        xAxis: {
            
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        // accessibility: {
        //   rangeDescription: 'Range: 2010 to 2020'
        // }
        },
    
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                // pointStart: 2010
            }
        },
    
        series: [{
            name: 'Installation & Developers',
            data: [43934, 48656, 65165, 81827, 112143, 142383,
                171533, 165174, 155157, 161454, 154610]
        }, {
            name: 'Manufacturing',
            data: [24916, 37941, 29742, 29851, 32490, 30282,
                38121, 36885, 33726, 34243, 31050]
        }, 
        // {
        //     name: 'Sales & Distribution',
        //     data: [11744, 30000, 16005, 19771, 20185, 24377,
        //         32147, 30912, 29243, 29213, 25663]
        // }, {
        //     name: 'Operations & Maintenance',
        //     data: [null, null, null, null, null, null, null,
        //         null, 11164, 11218, 10077]
        // }, {
        //     name: 'Other',
        //     data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
        //         17300, 13053, 11906, 10073]
        // }
    ],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    
    } as any);

    // setInterval(() => {
    //   date.setDate(date.getDate() + 1);
    //   chart.series[0].addPoint([`${date.getDate()}/${date.getMonth() + 1}`, this.getRandomNumber(0, 1000)], true, true);
    // }, 1500);
  }

  chartOptions: Highcharts.Options = {
    chart: {
      map: worldMap
    },
    title: {
      text: "Highmaps basic demo"
    },
    subtitle: {
      text:
        'Source map: <a href="http://code.highcharts.com/mapdata/custom/world.js">World, Miller projection, medium resolution</a>'
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: "spacingBox"
      }
    },
    legend: {
      enabled: true
    },
    colorAxis: {
      min: 0
    },
    series: [
      {
        type: "map",
        name: "Random data",
        states: {
          hover: {
            color: "#BADA55"
          }
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}"
        },
        allAreas: false,
        data: [
          ["fo", 0],
          ["um", 1],
          ["us", 2],
          ["jp", 3],
          ["sc", 4],
          ["in", 5],
          ["fr", 6],
          ["fm", 7],
          ["cn", 8],
          ["pt", 9],
          ["sw", 10],
          ["sh", 11],
          ["br", 12],
          ["ki", 13],
          ["ph", 14],
          ["mx", 15],
          ["es", 16],
          ["bu", 17],
          ["mv", 18],
          ["sp", 19],
          ["gb", 20],
          ["gr", 21],
          ["as", 22],
          ["dk", 23],
          ["gl", 24],
          ["gu", 25],
          ["mp", 26],
          ["pr", 27],
          ["vi", 28],
          ["ca", 29],
          ["st", 30],
          ["cv", 31],
          ["dm", 32],
          ["nl", 33],
          ["jm", 34],
          ["ws", 35],
          ["om", 36],
          ["vc", 37],
          ["tr", 38],
          ["bd", 39],
          ["lc", 40],
          ["nr", 41],
          ["no", 42],
          ["kn", 43],
          ["bh", 44],
          ["to", 45],
          ["fi", 46],
          ["id", 47],
          ["mu", 48],
          ["se", 49],
          ["tt", 50],
          ["my", 51],
          ["pa", 52],
          ["pw", 53],
          ["tv", 54],
          ["mh", 55],
          ["cl", 56],
          ["th", 57],
          ["gd", 58],
          ["ee", 59],
          ["ag", 60],
          ["tw", 61],
          ["bb", 62],
          ["it", 63],
          ["mt", 64],
          ["vu", 65],
          ["sg", 66],
          ["cy", 67],
          ["lk", 68],
          ["km", 69],
          ["fj", 70],
          ["ru", 71],
          ["va", 72],
          ["sm", 73],
          ["kz", 74],
          ["az", 75],
          ["tj", 76],
          ["ls", 77],
          ["uz", 78],
          ["ma", 79],
          ["co", 80],
          ["tl", 81],
          ["tz", 82],
          ["ar", 83],
          ["sa", 84],
          ["pk", 85],
          ["ye", 86],
          ["ae", 87],
          ["ke", 88],
          ["pe", 89],
          ["do", 90],
          ["ht", 91],
          ["pg", 92],
          ["ao", 93],
          ["kh", 94],
          ["vn", 95],
          ["mz", 96],
          ["cr", 97],
          ["bj", 98],
          ["ng", 99],
          ["ir", 100],
          ["sv", 101],
          ["sl", 102],
          ["gw", 103],
          ["hr", 104],
          ["bz", 105],
          ["za", 106],
          ["cf", 107],
          ["sd", 108],
          ["cd", 109],
          ["kw", 110],
          ["de", 111],
          ["be", 112],
          ["ie", 113],
          ["kp", 114],
          ["kr", 115],
          ["gy", 116],
          ["hn", 117],
          ["mm", 118],
          ["ga", 119],
          ["gq", 120],
          ["ni", 121],
          ["lv", 122],
          ["ug", 123],
          ["mw", 124],
          ["am", 125],
          ["sx", 126],
          ["tm", 127],
          ["zm", 128],
          ["nc", 129],
          ["mr", 130],
          ["dz", 131],
          ["lt", 132],
          ["et", 133],
          ["er", 134],
          ["gh", 135],
          ["si", 136],
          ["gt", 137],
          ["ba", 138],
          ["jo", 139],
          ["sy", 140],
          ["mc", 141],
          ["al", 142],
          ["uy", 143],
          ["cnm", 144],
          ["mn", 145],
          ["rw", 146],
          ["so", 147],
          ["bo", 148],
          ["cm", 149],
          ["cg", 150],
          ["eh", 151],
          ["rs", 152],
          ["me", 153],
          ["tg", 154],
          ["la", 155],
          ["af", 156],
          ["ua", 157],
          ["sk", 158],
          ["jk", 159],
          ["bg", 160],
          ["qa", 161],
          ["li", 162],
          ["at", 163],
          ["sz", 164],
          ["hu", 165],
          ["ro", 166],
          ["ne", 167],
          ["lu", 168],
          ["ad", 169],
          ["ci", 170],
          ["lr", 171],
          ["bn", 172],
          ["iq", 173],
          ["ge", 174],
          ["gm", 175],
          ["ch", 176],
          ["td", 177],
          ["kv", 178],
          ["lb", 179],
          ["dj", 180],
          ["bi", 181],
          ["sr", 182],
          ["il", 183],
          ["ml", 184],
          ["sn", 185],
          ["gn", 186],
          ["zw", 187],
          ["pl", 188],
          ["mk", 189],
          ["py", 190],
          ["by", 191],
          ["cz", 192],
          ["bf", 193],
          ["na", 194],
          ["ly", 195],
          ["tn", 196],
          ["bt", 197],
          ["md", 198],
          ["ss", 199],
          ["bw", 200],
          ["bs", 201],
          ["nz", 202],
          ["cu", 203],
          ["ec", 204],
          ["au", 205],
          ["ve", 206],
          ["sb", 207],
          ["mg", 208],
          ["is", 209],
          ["eg", 210],
          ["kg", 211],
          ["np", 212]
        ]
      }
    ]
  };

 
  private comboCharts(): void{
    this.activity.datasets.forEach((dataset, i) => {
      // Add X values
      const data = dataset.data.map((val, j) => [this.activity.xData[j], val]);

      this['chartOptions' + (i + 1)] = {
        chart: {
          marginLeft: 40, // Keep all charts left aligned
          spacingTop: 20,
          spacingBottom: 20,
          height: 220,
        },
        title: {
          text: dataset.name,
          align: 'left',
          margin: 0,
          x: 30,
        },
        credits: {
          enabled: false,
        },
        legend: {
          enabled: false,
        },
        xAxis: {
          crosshair: true,
          events: {
            setExtremes: function (e) {
              const thisChart = this.chart;

              if (e.trigger !== 'syncExtremes') {
                // Prevent feedback loop
                Highcharts.charts.forEach((chart) => {
                  if (chart !== thisChart) {
                    if (chart.xAxis[0].setExtremes) {
                      // It is null while updating
                      chart.xAxis[0].setExtremes(
                        e.min,
                        e.max,
                        undefined,
                        false,
                        {
                          trigger: 'syncExtremes',
                        }
                      );
                    }
                  }
                });
              }
            },
          },
          labels: {
            format: '{value} km',
          },
        },
        yAxis: {
          title: {
            text: null,
          },
        },
        plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false,
                  format: '<b>{point}</b>: {point.percentage:.1f} %'
              }
          }
      },
        tooltip: {
          positioner: function () {
            return {
              // right aligned
              x: this.chart.chartWidth - this.label.width,
              y: 10, // align to title
            };
          },
          borderWidth: 0,
          backgroundColor: 'none',
          pointFormat: '{point.y}',
          headerFormat: '',
          shadow: false,
          style: {
            fontSize: '18px',
          },
          valueDecimals: dataset.valueDecimals,
        },
        series: [
          {
            data: data,
            name: dataset.name,
            type: dataset.type,
            color: Highcharts.getOptions().colors[i],
            fillOpacity: 0.3,
            tooltip: {
              valueSuffix: ' ' + dataset.unit,
            },
          },
        ],
      };
    });

    this.tableData = [
      {material:'Anthracene-9-carboxylic acid', spend: 1768, avgPriceOptions1: this.chartOptions1, avgPriceOptions2: this.chartOptions2,  value: this.chartOptions3, },
      {material:'5-cyanoindole', spend: 574, avgPriceOptions1: this.chartOptions4, avgPriceOptions2: this.chartOptions5,  value: this.chartOptions6, },
    ];
  }


}
