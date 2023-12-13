document.addEventListener("DOMContentLoaded", () => {
  const weekExpenses = [
    { id: 1, amount: 22.3, day: "Mon" },
    { id: 2, amount: 39.89, day: "Tue" },
    { id: 3, amount: 52.36, day: "Wed" },
    { id: 4, amount: 31.07, day: "Thu" },
    { id: 5, amount: 25.28, day: "Fri" },
    { id: 6, amount: 45.76, day: "Sat" },
    { id: 7, amount: 27.6, day: "Sun" },
  ];
  weekExpenses.map((item) => {
    let barChart = document.querySelector("div.bar-chart");
    barChart.innerHTML += `<div class="chart-contents">
      <div class="bar" style=${`height:${item.amount+50/5+item.amount}px`}>
      <div class="amount">$${item.amount}</div>
      </div>
      <div class="day">
        ${item.day}
      </div>
    </div>`;
  });
});
