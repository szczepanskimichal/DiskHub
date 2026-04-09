function showAllDisks() {
    model.input.selectedCategory = "";
    updateView();
}

function showInMyBag() {
    model.input.selectedCategory = "bag";
    updateView();
}

function toggleBag(diskIndex) {
    let disk = model.data.disks[diskIndex];
    disk.inmybag = !disk.inmybag;
    updateView();
}

function createDiskCard(disk, diskIndex) {
    return /*HTML*/`
        <div class="card">
            <img src="${disk.img}" width="150"/>
            <h3>${disk.name}</h3>
            <p>${disk.producer}</p>
            <p>Flight: ${disk.flightnumber}</p>
            <p>Farge: ${disk.color}</p>
            <p>Vekt: ${disk.weight_in_grams}g</p>
            <button onclick="toggleBag(${diskIndex})">
                ${disk.inmybag ? "Fjern fra bag" : "Legg i bag"}
            </button>
        </div>
    `;
}

// function updateView() {
//     let discsToShow = model.input.selectedCategory === "bag"
//         ? model.data.disks.filter(d => d.inmybag)
//         : model.data.disks;

//     let html = /*HTML*/`
//         <h1 style="text-align:center;">MyPreciousDisc</h1>
//         <div style="text-align:center;">
//             <button onclick="showAllDiscs()">Alle disker</button>
//             <button onclick="showInMyBag()">In My Bag</button>
//         </div>
//         <div class="grid">
//             ${discsToShow.map(createDiscCard).join("")}
//         </div>
//     `;
//     document.getElementById("app").innerHTML = html;
// }
