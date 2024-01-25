let p=document.querySelector(".p");
let btn=document.querySelector("button");
let n=document.querySelector(".n");
let me=document.querySelector(".me");
let pa=document.querySelector("#pa");
let ti=document.querySelector("#ti");
let ta=document.querySelector("#ta");
let r=document.querySelector(".r");

let ran=1000000;
let dom=173969;
btn.addEventListener("click",function(){
    let pp=p.value;
    let rr=r.value/12/100;
    let nn=n.value*12;
    let emi=pp * rr * ((1+rr) **nn)/ ((1+rr) ** nn-1);
    let tt=emi*nn;
    let ttii=tt-pp;

    let la=Number(pp);
pa.innerHTML=pp;

me.innerHTML=Math.round(emi);

ta.innerHTML=Math.round(tt);

ti.innerHTML=Math.round(ttii);

Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'EMI Chart',
        align: 'left'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Loan Amount',
            y:la,
            // sliced: true,
            // selected: true
        },  {
            name: 'Total Interest',
            y: ttii,
        },]
    }]
});


})
Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'EMI Chart',
        align: 'left'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Loan Amount',
            y: ran,
            sliced: true,
            selected: true
        },  {
            name: 'Total Interest',
            y: dom
        }, ]
    }]
});