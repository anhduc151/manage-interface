//script for donut chart
var dch = document.getElementById("donutchart").getContext("2d");

//plugin variable for writing content in center of doughnut
const centerDoughnutPlugin = {
  id: "annotateDoughnutCenter",
  beforeDraw: (chart) => {
    let width = chart.width;
      let height = chart.height;
      let ctx = chart.ctx;
  
      ctx.restore();
      let fontSize = (height / 114).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "middle";
  
      let text = "$59,456";
      let textX = Math.round((width - ctx.measureText(text).width) / 2);
      let textY = height / 1.87;
  
      console.log("text x: ", textX);
      console.log("text y: ", textY);

      
  
      ctx.fillText(text, textX, textY);
      ctx.save();
    
  },
};




//chart setup
var configdchart = {
  type: "doughnut",
  plugins:[centerDoughnutPlugin],
  data: {
    labels: ["Applicant Subscriptions", "Recruiter Subscriptions"],
    datasets: [
      {
        data: [46256, 13200],
        backgroundColor: ["rgba(26,117,232,255)","rgb(100, 200, 255)"],
        hoverOffset: 4,
        rotation:180,
        cutout:'85%' ,
        radius:100,
      },
    ],
    options: {
      plugin_attribute:true,
      responsive:true,
      plugins:{
        legend: {
          position: 'right',
          labels:{
            boxWidth:20,
            display:true,
            align:'end',
            textAlign:'right'}
      },
    },
    },
  },
  
};

var chart = new Chart(dch, configdchart);