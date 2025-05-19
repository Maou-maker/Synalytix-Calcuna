function renderResult() {
  const percent = parseInt(document.getElementById('percentageInput').value) || 0;
  const selectedCircle = document.getElementById('circleSelector').value;
  const circleImg = document.getElementById('baseCircle');
  const percentText = document.getElementById('percentText');

  // Set image src
  circleImg.src = `assets/Color_${selectedCircle}.png`;

  // Update progress ring
  const progressCircle = document.querySelector('.ring-progress');
  const radius = progressCircle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  progressCircle.style.strokeDasharray = `${circumference}`;
  progressCircle.style.strokeDashoffset = offset;
  percentText.textContent = `${percent}%`;

  // Pastikan tidak menumpuk jika submit ulang
  const barChart = document.getElementById('barChartContainer');
  barChart.innerHTML = ''; // Bersihkan bar sebelumnya

  for (let i = 1; i <= selectedCircle; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${(percent / 100) * 100}px`;
    barChart.appendChild(bar);
  }
}
