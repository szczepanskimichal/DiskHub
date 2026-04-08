function updateSortedListView() {
    let html = /*html*/`
        <div class="sorted-disc-container">
            <h2>My disks</h2>
            <label class="sorted-disc-label">Sort by:</label>
            <div class="sorted-disc-buttons">
            <button onclick="sortDisks('producer')" 
                class="${model.input.selectedCategory === 'producer' ? 'selected-category' : ''}">Producer</button>
            <button onclick="sortDisks('flightnumber')" 
                class="${model.input.selectedCategory === 'flightnumber' ? 'selected-category' : ''}">Flight Number</button>
            <button onclick="sortDisks('color')" 
                class="${model.input.selectedCategory === 'color' ? 'selected-category' : ''}">Color</button>
            <button onclick="sortDisks('weight_in_grams')" 
                class="${model.input.selectedCategory === 'weight_in_grams' ? 'selected-category' : ''}">Weight</button>
            <div class="sorted-disc-list">${showSortedList()}</div>
        </div>
        `
    return html;
}

function showSortedList() {
    let html = ""
    let diskList = (model.data.sortedDisks && model.data.sortedDisks.length > 0)
        ? model.data.sortedDisks
        : model.data.disks;

    if (model.input.selectedCategory === "bag") {
        diskList = diskList.filter(disk => disk.inmybag === true);
    }

    for (let i = 0; i < diskList.length; i++) {
        html += /*html*/`
            <div onclick="showDisk(${i})">
                <p>${diskList[i].name}
                ${(model.input.selectedCategory && model.input.selectedCategory !== "bag") ? `- ${diskList[i][model.input.selectedCategory]}` : ""}
                </p>
            </div>
        `
    }
    return html;
}

function sortDisks(category) {
    let allDisks = model.data.disks
    // Reverses sorting if the same category is selected twice
    if (model.input.selectedCategory === category) {
        model.data.sortedDisks.reverse();
        updateView();
        return;
    }
    model.input.selectedCategory = category;
    let valueType = typeof allDisks[0][category];

    if (valueType === "string") {
        model.data.sortedDisks = allDisks.sort((a, b) => a[category].localeCompare(b[category]));
    }
    else if (valueType === "number" || valueType === "boolean") {
        model.data.sortedDisks = allDisks.sort((a, b) => a[category] - b[category]);
    }
    else {
        console.error("Invalid category type for sorting");
    }

    updateView();
}
