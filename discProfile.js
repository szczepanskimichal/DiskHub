//vise fram bilde av disc + metadata
console.log("Discprofile.js finnes! hurra!")

function showDisk(diskIndex) {
    console.log("showDisk info kjører ", diskIndex)
    model.app.selectedDiskIndex = diskIndex;
    app.innerHTML = `
    <div class="disc-profile">
    <h1>${model.data.disks[diskIndex].name}</h1>
        <img src="${model.data.disks[diskIndex].img}" alt="${model.data.disks[diskIndex].name}">
        <p><span>Producer:</span> ${model.data.disks[diskIndex].producer}</p>
        <p><span>Flight Number:</span> ${model.data.disks[diskIndex].flightnumber}</p>
        <p><span>Color:</span> ${model.data.disks[diskIndex].color}</p>
        <p><span>Weight:</span> ${model.data.disks[diskIndex].weight_in_grams} grams</p>
        <button class="button" onclick="toggleBag(${model.data.disks[diskIndex].id})"> BAG IT</button>

    <button class="button" onclick="goHome()"> BACK</button>

    </div >
    <div> ${renderComments(model.app.selectedDiskIndex)}</div>

    `;

}

function goHome() {
    updateView();
}



