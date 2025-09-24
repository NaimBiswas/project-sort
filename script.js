function sort(width, height, length, mass) {
  const volume = width * height * length;
  const isBulky = volume >= 1000000 || width >= 150 || height >= 150 || length >= 150;
  const isHeavy = mass >= 20;

  if (isBulky && isHeavy) return "REJECTED";
  if (isBulky || isHeavy) return "SPECIAL";
  return "STANDARD";
}

document.getElementById("packageForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const width = parseFloat(document.getElementById("width").value);
  const height = parseFloat(document.getElementById("height").value);
  const length = parseFloat(document.getElementById("length").value);
  const mass = parseFloat(document.getElementById("mass").value);

  const result = sort(width, height, length, mass);
  document.getElementById("result").textContent = `Package goes to: ${result}`;
});