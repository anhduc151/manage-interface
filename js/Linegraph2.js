//Script for registrations graph
//Both Applicant and Recruiter registrations graph are made here
var regline1=document.getElementById("regline1").getContext("2d");
var regline2=document.getElementById("regline2").getContext("2d");
var configregline={
    type:"line",
    data:{
      labels: ['1-July','8-July','8-July','16-July','24-July','31-July'],
      datasets: [{
      data: [50000,85000,38000,65000,45000],
      label:'Registrations',
      fill: false,
      borderColor: 'rgba(14,110,161,255)',
      tension: 0.1,
      lineTension:0.4,
      pointRadius:4 ,
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
          suggestedMax:100000,
          grid: {
              
            display: true,
            borderDash:[8,4],
          }
        }
      }
  }
  
}

var lch1=new Chart(regline1,configregline);
var lch2=new Chart(regline2,configregline);