//script for line chart
var lch=document.getElementById("linechart").getContext("2d");
var configlchart={
  type:"line",
  data:{
    labels: ['2020-1','2020-2','2020-3','2020-4','2020-5','2020-6','2020-7','2020-8','2020-9','2020-10','2020-11','2020-12'],
    datasets: [{
    label: 'Actual',
    data: [50, 90, 120, 90, 165,110 , 125,155,130,170,98,110,180],
    fill: {target: 'origin',above: 'rgb(100, 200, 255,0.08)',},
    borderColor: 'rgba(172,228,233,255)',
    tension: 0.1,
    lineTension:0.3,
    pointRadius:0 ,
  },{
    label: 'Target',
    data: [145, 105, 205,125,110, 165, 145, 180, 164, 130,210,180,245],
    fill: {target: 'origin',above: 'rgb(40, 100, 135,0.08)',},
    borderColor: 'rgb(40, 100, 135)',
    tension: 0.1,
    lineTension:0.3,
    pointRadius:0 ,
  }]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        
        grid: {
          display: false,
          hoverBorderDash:[8,4]
        }
      },
      y: {
        suggestedMin:0,
        suggestedMax:300,
        grid: {
            
          display: true,
          borderDash:[8,4],
        }
      }
    }
}

}
var lchart=new Chart(lch,configlchart);