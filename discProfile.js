//vise fram bilde av disc + metadata
console.log("Discprofile.js finnes! hurra!")

function showDisk(diskIndex) {
    console.log("showDisk info kjører ", diskIndex)
    const disk = model.data.disks[diskIndex];
    model.app.selectedDiskIndex = diskIndex;
    app.innerHTML = `
    <div class="disc-profile">
    <h1>${disk.name}</h1>
        <img src="${disk.img}" alt="${disk.name}">
        <p><span>Producer:</span> ${disk.producer}</p>
        <p><span>Flight Number:</span> ${disk.flightnumber}</p>
        <p><span>Color:</span> ${disk.color}</p>
        <p><span>Weight:</span> ${disk.weight_in_grams} grams</p>
        <button class="button" onclick="toggleBag(${model.app.selectedDiskIndex})"> BAG IT</button>

    <button class="button" onclick="goHome()"> BACK</button>

    </div >
    <div> ${renderComments(model.app.selectedDiskIndex)}</div>

    `;

}

function goHome() {
    updateView();
}



