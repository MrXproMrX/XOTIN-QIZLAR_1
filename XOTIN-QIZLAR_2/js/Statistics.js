const labels = [
  'Жисмоний зўравонлик',
  'Жинсий зўравонлик',
  'Иқтисодий зўравонлик',
  'Руҳий зўравонлик',
  'Тазйиқ ва таҳдид ҳолатлари',
];

const data = {
  labels: labels,
  datasets: [{
    axis: 'y',
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56,],
    fill: false,
    backgroundColor: [
      'rgba(255, 67, 168, 1)',
      'rgba(67, 142, 255, 1)',
      'rgba(93, 67, 255, 1)',
      'rgba(255, 67, 97, 1)',
      'rgba(206, 67, 255, 1)',
    ],
    borderColor: [
      'rgba(255, 67, 168, 1)',
      'rgba(67, 142, 255, 1)',
      'rgba(93, 67, 255, 1)',
      'rgba(255, 67, 97, 1)',
      'rgba(206, 67, 255, 1)',
    ],
    borderWidth: 1
  }]
};

const config = {
  type: 'bar',
  data,
  options: {
    indexAxis: 'y',
  }
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);