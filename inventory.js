const chemicals = [
  "Acetamide",
  "Acetic Acid",
  "Acetanilide",
  "Acetone",
  "Acetyl Salicylic Acid (OOH)",
  "Activated Zinc metal Powder",
  "Agar Agar Powder",
  "Alizarine",
  "Aluminium Sulphate",
  "Ammonia",
  "Ammonium Chloride",
  "Ammonium Ferrous Sulfate",
  "Ammonium Hydroxide",
  "Ammonium Iron (II) Sulphate)",
  "Ammonium Oxalate",
  "Ammonium Thiocyanate",
  "Aniline",
  "Barium Chloride",
  "Barium Hydroxide",
  "Benzaldehyde",
  "Benzamide",
  "Benzene",
  "Benzoic Acid",
  "Benzoinoxime",
  "Benzidine",
  "Bleaching Powder",
  "Brass Fillings",
  "Bromine water",
  "Buffer capsules",
  "Butan-2-one Extrapure",
  "Calcon Carboxylic Acid",
  "Calcium Carbonate",
  "Calcium Chloride",
  "Calcium Tetrachloride",
  "Carboxy Methyl Cellulose",
  "Cellulose Powder",
  "Cetylpyridinium bromide",
  "Charcoal Powder",
  "Cobalt Nitrate",
  "Cobaltous Chloride",
  "Cobaltous chloride",
  "Copper filings",
  "Copper Sulphate",
  "Cyclohexanone",
  "Dextrose",
  "Diethyl Ether",
  "Dimethyl Glyoxime",
  "di-Sodium Phosphate",
  "Diphenylamine Ind.",
  "Dithiozone",
  "Dolomite Powder",
  "EDTA",
  "2,4-Dinitrophenol",
  "Ethyl Acetate",
  "Ethyl Alcohol",
  "Ethyl Benzoate",
  "Ethyl Benzoate for Synthesis",
  "Ethyl Cellulose",
  "Ethyl Methyl Ketone",
  "Ethylenediamine",
  "Ethanol",
  "Ether Solvent",
  "Fumaric Acid",
  "Formaldehyde",
  "Formalin",
  "Formic Acid",
  "Furfuraldehyde",
  "Furfuryl Alcohol",
  "Fehling Solution A",
  "Fehling Solution B",
  "Ferric Chloride",
  "Ferrous Sulphate",
  "Glacial Acetic Acid",
  "Glucose (Dextrose/AVOS?)",
  "Glycerin (Glycanine/Glycerol?)",
  "Glycine",
  "Guar Gum",
  "Hexane",
  "Hydrochloric Acid",
  "Hydrogen Peroxide",
  "Hydroxyethyl Cellulose",
  "L-Alginine",
  "L-Cystine",
  "Iodine",
  "Iodine Crystal",
  "Iron Metal (Powder)",
  "L-Volume for biochemistry",
  "Liquid Paraffin (hard)",
  "Liquid Paraffin (Light)",
  "Lime Water",
  "Leasel Acatate",
  "Leal Nitrade",
  "Methyl Cellulose",
  "n-Butyl Alcohol",
  "Magnesium Sulphate",
  "Ortho Phosphoric Acid",
  "2-Nitrophenol",
  "3-Nitro Aniline",
  "Oxalic Acid",
  "Nitrobenzene",
  "Methyl Acetate",
  "Nickel Chloride",
  "Mercuric Chloride",
  "Picric Acid",
  "Phthalic Acid",
  "1-Naphthol",
  "Methyl Orange",
  "Polyvinyl Alcohol (cold)",
  "Potassium Carbonate",
  "Potassium Dichromate",
  "p-Nitroaniline",
  "Methylene Blue",
  "Potassium Nitrate",
  "Ninhydrin",
  "Methanesulfonic Acid",
  "n-Butyl Acetate",
  "Phthalic Anhydride",
  "Potassium Chloride",
  "Methyl Alcohol",
  "Nitroso-R Salt",
  "Nickel Nitrate",
  "Methanol",
  "β-Naphthol",
  "α-Naphthol",
  "Naphthalene",
  "p-Nitrophenol",
  "Nitrobenzene",
  "Potassium Permanganate",
  "Potassium Persulfate",
  "Potassium Bromide",
  "Potassium Fluoride",
  "Potassium Thiocyanate",
  "Potassium Iodide",
  "Potassium Dithionite",
  "Nitric Acid",
  "Orthophosphate",
  "Nickel Acetate Hexahydrate",
  "Phosphoric Acid",
  "Nickel Sulphate",
  "Potassium Hydroxide",
  "Potassium Ferrocyanide",
  "Phenolphthalein Indicator",
  "Phenol",
  "Potassium Chromate",
  "p-Toluidine",
  "Petroleum Ether",
  "1,10-Phenanthroline Hydrate",
  "Potassium Carbonate Anhydrous",
  "Phenyl Hydrazine",
  "Hydroquinone",
  "Paraffin Wax Pure",
  "Phthalic Anhydride",
  "Rubeanic Acid",
  "Resorcinol",
  "Sodium Carbonate",
  "Sodium Nitrate",
  "Sodium Hydroxide Pellets",
  "Sodium Phosphate Dibasic",
  "Sodium Thiosulfate",
  "Semicarbazide Hydrochloride",
  "Sodium Potassium Tartrate",
  "Sodium Sulphate Anhydrous",
  "Sodium Azide",
  "Sodium Iodide",
  "Sodium Acetate",
  "Sodium Sulphate",
  "Sulphur Powder",
  "Sodium Bicarbonate",
  "Sodium Nitroprusside",
  "Schiff's Reagent",
  "Stannous Chloride",
  "Urease",
  "Sodium Sulphite Flakes",
  "Starch Indicator",
  "Silver Nitrate (AgNO₃)",
  "Sodium Acetate",
  "Sulfuric Acid",
  "Spirit (Rectified Spirit)",
  "Salicylic Acid",
  "Thiourea",
  "Tollens Reagent",
  "Tollene",
  "Urea",
  "Zinc Sulphate",
  "Zinc Choloride Powder",
  "Zinc Oxide Pure",
  "Zinc Dust",
];

document.addEventListener("DOMContentLoaded", () => {
  loadChemicals();
  setupThemeToggle();
  displayLoggedInUser();
  setupSearch();
});

function loadChemicals() {
  const list = document.getElementById("chemicalList");
  if (!list) return;

  list.innerHTML = "";
  let hasChemicals = false; // Flag to check if any chemical is added

  chemicals.forEach((chemical) => {
    if (chemical.trim() === "") return;
    hasChemicals = true; // Set flag to true if a chemical is found
    let storedData = localStorage.getItem(chemical);
    let storedQuantity = 0;
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
        storedQuantity = parsed.quantity || 0;
      } catch {
        storedQuantity = storedData; // fallback if it's still a plain number
      }
    }
    let item = document.createElement("div");
    item.className = "chemical-item";
    item.innerHTML = `
            <h3 class="chemical-name">${chemical}</h3>
            <div class="quantity-controls">
                <label for="set-${chemical}">Set Quantity:</label>
                <input type="number" id="set-${chemical}" placeholder="Set Quantity" min="0">
                <button onclick="setQuantity('${chemical}')">Set</button>
            </div>
            <div class="quantity-controls">
                <label for="use-${chemical}">Use Quantity:</label>
                <input type="number" id="use-${chemical}" placeholder="Use Quantity" min="0">
                <button onclick="useQuantity('${chemical}')">Use</button>
                <p class="available-quantity">Available: <span id="quantity-${chemical}">${storedQuantity}</span></p>
            </div>
        `;
    list.appendChild(item);
  });

  if (!hasChemicals) {
    list.innerHTML = "<p>No chemicals found.</p>";
  }
}

function goBack() {
  window.location.href = "./homepage.html";
}

function setQuantity(chemical) {
  let quantityInput = document.getElementById(`set-${chemical}`);
  if (!quantityInput) return;

  let quantity = quantityInput.value;
  if (quantity !== "") {
    localStorage.setItem(chemical, quantity);
    document.getElementById(`quantity-${chemical}`).innerText = quantity;
    quantityInput.value = "";
  }
}

function useQuantity(chemical) {
  let usedInput = document.getElementById(`use-${chemical}`);
  if (!usedInput) return;

  let used = parseInt(usedInput.value) || 0;
  let stored = 0;
  let storedData = localStorage.getItem(chemical);
  if (storedData) {
    try {
      const parsed = JSON.parse(storedData);
      stored = parseInt(parsed.quantity) || 0;
    } catch {
      stored = parseInt(storedData) || 0;
    }
  }
  let newQuantity = Math.max(stored - used, 0);
  localStorage.setItem(chemical, newQuantity);
  document.getElementById(`quantity-${chemical}`).innerText = newQuantity;
  usedInput.value = "";
}

const now = new Date();
const updatedData = {
  quantity: newQuantity,
  lastUpdatedDate: now.toLocaleDateString(),
  lastUpdatedTime: now.toLocaleTimeString(),
};
localStorage.setItem(chemical, JSON.stringify(updatedData));

function resetQuantities() {
  chemicals.forEach((chemical) => localStorage.removeItem(chemical));
  loadChemicals();
}

function setupThemeToggle() {
  const toggleButton = document.getElementById("toggleTheme");
  if (!toggleButton) return;

  const body = document.body;
  const isDarkMode = localStorage.getItem("darkMode") === "enabled";

  if (isDarkMode) {
    body.classList.add("dark-mode");
    toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
  }

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const currentMode = localStorage.getItem("darkMode");
    const newMode = currentMode === "enabled" ? "disabled" : "enabled";
    localStorage.setItem("darkMode", newMode);

    if (newMode === "enabled") {
      toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
      toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    }
  });
}

function displayLoggedInUser() {
  const userNameSpan = document.getElementById("user-name");
  const userEmailSpan = document.getElementById("user-email");
  if (!userNameSpan || !userEmailSpan) return;

  // Simulate retrieving user data.  Replace this with your actual user data retrieval.
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  userNameSpan.textContent = `Name: ${user.name}`;
  userEmailSpan.textContent = `Email: ${user.email}`;
}

function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const chemicalItems = document.querySelectorAll(".chemical-item");

    chemicalItems.forEach((item) => {
      const chemicalName = item
        .querySelector(".chemical-name")
        .textContent.toLowerCase();
      if (chemicalName.includes(searchTerm)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
}

function report() {
  window.location.href = "inventory-report.html";
}

function setQuantity(chemical) {
  let quantityInput = document.getElementById(`set-${chemical}`);
  if (!quantityInput) return;

  let quantity = quantityInput.value;
  if (quantity !== "") {
    const now = new Date();
    const lastUpdatedDate = now.toLocaleDateString();
    const lastUpdatedTime = now.toLocaleTimeString();

    const dataToStore = {
      quantity: quantity,
      lastUpdatedDate: lastUpdatedDate,
      lastUpdatedTime: lastUpdatedTime,
    };

    localStorage.setItem(chemical, JSON.stringify(dataToStore));
    document.getElementById(`quantity-${chemical}`).innerText = quantity;
    quantityInput.value = "";

    console.log(
      `Saved ${chemical} with quantity ${quantity} at ${lastUpdatedDate} ${lastUpdatedTime}`
    ); // For debugging
  }
}

function munual() {
  const chemicalBoxes = document.querySelectorAll('.chemical-item');

  chemicalBoxes.forEach(box => {
    box.classList.add('highlight-edit'); // Add highlight

    // Only allow one click per edit mode
    box.onclick = () => {
      const name = box.querySelector('strong').innerText.trim();
      let chemicals = JSON.parse(localStorage.getItem("chemicals")) || [];
      const index = chemicals.findIndex(chem => chem.name.trim().toLowerCase() === name.toLowerCase());

      if (index !== -1) {
        const newName = prompt("Enter new name:", chemicals[index].name)?.trim() || chemicals[index].name;
        const newQuantity = prompt("Enter new quantity:", chemicals[index].quantity)?.trim() || chemicals[index].quantity;
        const newUnit = prompt("Enter new unit:", chemicals[index].unit)?.trim() || chemicals[index].unit;

        chemicals[index] = {
          name: newName,
          quantity: newQuantity,
          unit: newUnit
        };

        localStorage.setItem("chemicals", JSON.stringify(chemicals));
        displayChemicals(); // Refresh list
        alert("Chemical updated successfully.");
      }

      // Remove highlight from all boxes and their click events
      chemicalBoxes.forEach(b => {
        b.classList.remove('highlight-edit');
        b.onclick = null;
      });
    };
  });
}
