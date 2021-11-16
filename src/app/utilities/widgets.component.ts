import {Component, OnInit} from '@angular/core';
import {AppBreadcrumbService} from '../app.breadcrumb.service';
import {PrimeIcons} from 'primeng/api';

@Component({
    templateUrl: './widgets.component.html'
})
export class WidgetsComponent implements OnInit{
    timelineEvents: any;

    visitorChart: any;

    visitorChartOptions: any;

    revenueChart: any;

    revenueChartOptions: any;

    customerChart: any;

    customerChartOptions: any;

    constructor(private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Utilities' },
            { label: 'Widgets', routerLink: ['/utilities/widgets'] }
        ]);
    }

    ngOnInit() {
        this.timelineEvents = [
            {transaction: 'Payment from #28492', amount: '+$250.00', date: 'June 13, 2020 11:09 AM',
                icon: PrimeIcons.CHECK, iconColor: '#0F8BFD', amountColor: '#00D0DE'},
            {transaction: 'Process refund to #94830', amount: '-$570.00', date: 'June 13, 2020 08:22 AM',
                icon: PrimeIcons.REFRESH, iconColor: '#FC6161', amountColor: '#FC6161'},
            {transaction: 'New 8 user to #5849', amount: '+$50.00', date: 'June 12, 2020 02:56 PM',
                icon: PrimeIcons.PLUS, iconColor: '#0BD18A', amountColor: '#0BD18A'},
            {transaction: 'Payment from #3382', amount: '+$3830.00', date: 'June 11, 2020 06:11 AM',
                icon: PrimeIcons.CHECK, iconColor: '#0F8BFD', amountColor: '#00D0DE'},
            {transaction: 'Payment from #4738', amount: '+$845.00', date: 'June 11, 2020 03:50 AM',
                icon: PrimeIcons.CHECK, iconColor: '#0F8BFD', amountColor: '#00D0DE'},
            {transaction: 'Payment failed form #60958', amount: '$1450.00', date: 'June 10, 2020 07:54 PM',
                icon: PrimeIcons.EXCLAMATION_TRIANGLE, iconColor: '#EC4DBC', amountColor: '#EC4DBC'},
            {transaction: 'Payment from #5748', amount: '+$50.00', date: 'June 09, 2020 11:37 PM',
                icon: PrimeIcons.CHECK, iconColor: '#0F8BFD', amountColor: '#00D0DE'},
            {transaction: 'Removed 32 users from #5849', amount: '-$240.00', date: 'June 09, 2020 08:40 PM',
                icon: PrimeIcons.MINUS, iconColor: '#FC6161', amountColor: '#FC6161'},
        ];

        this.visitorChart = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Plan',
                    data: [630, 630, 695, 695, 695, 760, 760, 760, 840, 840, 840, 840],
                    borderColor: [
                        '#FC6161',
                    ],
                    pointBorderColor: 'transparent',
                    pointBackgroundColor: 'transparent',
                    type: 'line',
                    fill: false,
                    barPercentage: 0.5,
                    stepped: true
                },
                {
                    label: 'Groth actual',
                    data: [600, 671, 660, 665, 700, 610, 810, 790, 710, 860, 810, 780],
                    backgroundColor: getComputedStyle(document.body).getPropertyValue('--primary-color') ,
                    fill: true,
                    barPercentage: 0.5,
                    stepped: true
                }
            ]
        };

        this.visitorChartOptions = {
            plugins: {
                legend: {
                    position: 'top',
                    align: 'end'
                }
            },
            responsive: true,
            hover: {
                mode: 'index'
            },
            scales: {
                y: {
                    min: 500,
                    max: 900,
                    grid: {
                        display: false
                    }
                },
                x: {
                    barPercentage: 0.5,
                    grid: {
                        display: false
                    }
                }
            }
        };

        this.revenueChart = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Sales',
                    data: [37, 34, 21, 27, 10, 18, 15],
                    borderColor: '#EEE500',
                    pointBackgroundColor: '#EEE500',
                    backgroundColor: 'rgba(238, 229, 0, 0.05)',
                    fill: true,
                    tension: .4
                },
                {
                    label: 'Revenue',
                    data: [31, 27, 30, 37, 23, 29, 20],
                    borderColor: '#00D0DE',
                    pointBackgroundColor: '#00D0DE',
                    backgroundColor: 'rgba(0, 208, 222, 0.05)',
                    fill: true,
                    tension: .4
                },
                {
                    label: 'Expenses',
                    data: [21, 7, 13, 3, 19, 11, 6],
                    borderColor: '#FC6161',
                    pointBackgroundColor: '#FC6161',
                    backgroundColor: 'rgba(253, 72, 74, 0.05)',
                    fill: true,
                    tension: .4
                },
                {
                    label: 'Customer',
                    data: [47, 31, 35, 20, 46, 39, 25],
                    borderColor: '#0F8BFD',
                    pointBackgroundColor: '#0F8BFD',
                    backgroundColor: 'rgba(15, 139, 253, 0.05)',
                    fill: true,
                    tension: .4
                }]
        };

        this.revenueChartOptions = {
            responsive: true,
            hover: {
                mode: 'index'
            },
            scales: {
                y: {
                    min: 0,
                    max: 60,
                    stepSize: 5
                }
            }
        };

        this.customerChart = {
            labels: ['January', 'March', 'May', 'Agust', 'October', 'December'],
            datasets: [
                {
                    data: [10, 25, 48, 35, 54, 70],
                    backgroundColor: '#AAABDD',
                    hoverBackgroundColor: '#AAABDD',
                    fill: true,
                    categoryPercentage: 1.0,
                    barPercentage: 1.0
                },
                {
                    data: [18, 35, 23, 30, 59, 65],
                    backgroundColor: '#A0A0D9',
                    hoverBackgroundColor: '#A0A0D9',
                    fill: true,
                    categoryPercentage: 1.0,
                    barPercentage: 1.0
                },
                {
                    data: [20, 47, 46, 46, 61, 70],
                    backgroundColor: '#ACADDE',
                    hoverBackgroundColor: '#ACADDE',
                    fill: true,
                    categoryPercentage: 1.0,
                    barPercentage: 1.0
                },
                {
                    data: [17, 34, 18, 48, 67, 68],
                    backgroundColor: '#ABABDD',
                    hoverBackgroundColor: '#ABABDD',
                    fill: true,
                    categoryPercentage: 1.0,
                    barPercentage: 1.0
                },
                {
                    data: [9, 37, 47, 50, 60, 62],
                    backgroundColor: '#A2A3D9',
                    hoverBackgroundColor: '#A2A3D9',
                    fill: true,
                    categoryPercentage: 1.0,
                    barPercentage: 1.0
                },
                {
                    data: [8, 48, 40, 52, 72, 75],
                    backgroundColor: '#A3A4DA',
                    hoverBackgroundColor: '#A3A4DA',
                    fill: true,
                    categoryPercentage: 1.0,
                    barPercentage: 1.0
                },
                {
                    data: [10, 18, 50, 47, 63, 80],
                    backgroundColor: '#A2A3D9',
                    hoverBackgroundColor: '#A2A3D9',
                    fill: true,
                    categoryPercentage: 1.0,
                    barPercentage: 1.0
                },
                {
                    data: [20, 36, 39, 58, 59, 85],
                    backgroundColor: '#8485CD',
                    hoverBackgroundColor: '#8485CD',
                    fill: true,
                    categoryPercentage: 1.0,
                    barPercentage: 1.0
                },
                {
                    data: [30, 45, 35, 50, 54, 81],
                    backgroundColor: '#7D7ECA',
                    hoverBackgroundColor: '#7D7ECA',
                    fill: true,
                    categoryPercentage: 1.0,
                    barPercentage: 1.0
                },
                {
                    data: [28, 35, 52, 56, 60, 77],
                    backgroundColor: '#8384CD',
                    hoverBackgroundColor: '#8384CD',
                    fill: true,
                    categoryPercentage: 1.0,
                    barPercentage: 1.0
                },
                {
                    data: [40, 40, 38, 45, 68, 86],
                    backgroundColor: '#8F90D2',
                    hoverBackgroundColor: '#8F90D2',
                    fill: true,
                    categoryPercentage: 1.0,
                    barPercentage: 1.0
                },
                {
                    data: [50, 23, 27, 34, 65, 90],
                    backgroundColor: '#8C8DD0',
                    hoverBackgroundColor: '#8C8DD0',
                    fill: true,
                    categoryPercentage: 1.0,
                    barPercentage: 1.0
                },
                {
                    data: [29, 27, 29, 42, 55, 84],
                    backgroundColor: '#9495D4',
                    hoverBackgroundColor: '#9495D4',
                    fill: true,
                    categoryPercentage: 1.0,
                    barPercentage: 1.0
                },
                {
                    data: [10, 37, 47, 29, 59, 80],
                    backgroundColor: '#9696D4',
                    hoverBackgroundColor: '#9696D4',
                    fill: true,
                    categoryPercentage: 1.0,
                    barPercentage: 1.0
                },
                {
                    data: [10, 54, 42, 38, 63, 83],
                    backgroundColor: '#7273C6',
                    hoverBackgroundColor: '#7273C6',
                    fill: true,
                    categoryPercentage: 1.0,
                    barPercentage: 1.0
                },
                {
                    data: [25, 44, 50, 56, 65, 92],
                    backgroundColor: '#5F60BE',
                    hoverBackgroundColor: '#5F60BE',
                    fill: true,
                    categoryPercentage: 1.0,
                    barPercentage: 1.0
                },
                {
                    data: [30, 43, 48, 45, 73, 78],
                    backgroundColor: '#5C5DBD',
                    hoverBackgroundColor: '#5C5DBD',
                    fill: true,
                    categoryPercentage: 1.0,
                    barPercentage: 1.0
                },
                {
                    data: [29, 47, 54, 60, 77, 86],
                    backgroundColor: '#5C5DBD',
                    hoverBackgroundColor: '#5C5DBD',
                    fill: true,
                    categoryPercentage: 1.0,
                    barPercentage: 1.0
                }
            ]
        };

        this.customerChartOptions = {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    display: false,
                },
                x: {
                    grid : {
                        display : false
                    }
                }
            },
        };
    }
}
