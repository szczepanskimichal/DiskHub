function updateView() {
    let disksToShow = model.input.selectedCategory === "bag"
        ? model.data.disks.filter(d => d.inmybag)
        : model.data.disks;

    let html = /*HTML*/`
         <h1 style="text-align:center;">MyPreciousDisc</h1>
        <div style="text-align:center;">
            <button onclick="showAllDisks()">Alle disker</button>
            <button onclick="showInMyBag()">In My Bag</button>
      </div>

      <div>${updateSortedListView()}</div>


        `;
    document.getElementById("app").innerHTML = html;
}

//     <div class="grid">
//        ${disksToShow.map(createDiskCard).join("")}
//    </div>