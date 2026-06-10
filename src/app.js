function renderScore() {
  const form = document.getElementById("scoreForm");
  const output = document.getElementById("scoreOutput");
  if (!form || !output) return;

  const data = new FormData(form);
  const checked = ["kpis", "roles", "incentives", "succession"].filter((item) => data.has(item)).length;
  const score = 42 + checked * 14;
  const label = score >= 84 ? "Investor-ready foundation" : score >= 70 ? "Promising, but uneven" : "Diagnostic recommended";
  const move =
    score >= 84
      ? "Move into value creation planning: reporting cadence, process automation, and selective equity logic."
      : score >= 70
        ? "Prioritize the weak alignment area and install a 30-90 day operating cadence."
        : "Start with the full Legacy Alignment Diagnostic before adding more initiatives.";

  output.innerHTML = `
    <span>${label}</span>
    <strong>${score}/100</strong>
    <p>${move}</p>
  `;
}

document.addEventListener("change", renderScore);
document.addEventListener("DOMContentLoaded", renderScore);
