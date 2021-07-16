let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

// Increment Button
function increment() {
	count += 1;
	countEl.textContent = count;
}

// Save Button
function save() {
	saveEl.textContent += count + " - ";
	count = 0;
	countEl.textContent = 0;
}