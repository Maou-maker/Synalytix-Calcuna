const data = [];

function addData() {
  const value = parseFloat(document.getElementById("valueInput").value);
  const color = document.getElementById("colorInput").value;

  if (isNaN(value) || value <= 0) return;

  data.push({ value, color });
  renderChart();
}

function renderChart() {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const latest = data[data.length - 1];
  const percentage = ((latest.value / total) * 100).toFixed(1);

  const circle = document.querySelector(".circle-fg");
  const text = document.querySelector(".circle-text");

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - latest.value / total);

  circle.style.stroke = latest.color;
  circle.setAttribute("stroke-dasharray", circumference);
  circle.setAttribute("stroke-dashoffset", offset);
  text.textContent = `${percentage}%`;

  const barContainer = document.getElementById("barChart");
  barContainer.innerHTML = "";

  data.forEach(d => {
    const barPercent = ((d.value / total) * 100).toFixed(1);

    const bar = document.createElement("div");
    bar.className = "bar";

    const fill = document.createElement("div");
    fill.className = "bar-fill";
    fill.style.width = `${barPercent}%`;
    fill.style.backgroundColor = d.color;

    const label = document.createElement("div");
    label.className = "bar-label";
    label.textContent = `${barPercent}%`;

    bar.appendChild(fill);
    bar.appendChild(label);
    barContainer.appendChild(bar);
  });
}
