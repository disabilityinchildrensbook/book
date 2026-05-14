const ranges = {
  ci: 5,
  nd: 40,
  pd: 30,
  sld: 10
};


function pickRandomID() {
  const prefixes = Object.keys(ranges);

  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const max = ranges[prefix];

  const num = Math.floor(Math.random() * max) + 1;

  return `${prefix}${String(num).padStart(4, "0")}`;
}

document.getElementById("randomBookBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const id = pickRandomID();
  const url = `masterlist.html?profile=${id}`;

  console.log("Redirecting to:", url);

  window.location.href = url;
});