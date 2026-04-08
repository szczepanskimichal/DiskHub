

function renderComments(diskIndex) {
    const app = document.getElementById('app');
    // const diskIndex = diskIndex;
    //typeof model.viewState.selectedDiskIndex === 'number' ? model.viewState.selectedDiskIndex : 0;
    const disk = model.data.disks[diskIndex];
    let options = '';
    for (let i = 0; i < model.data.disks.length; i++) {
        const d = model.data.disks[i];
        options += `<option value="${i}" ${i == diskIndex ? 'selected' : ''}>${d.name}</option>`;
    }
    let html = `
        <form onsubmit="addComment(event)" style="display:flex; flex-direction:column; max-width:400px; align-items: center;">
            <label for="diskSelect">Select disk:</label>
            <select id="diskSelect" onchange="changeDisk(this.value)">
                ${options}
            </select>
            <h2>Comments for: <i> ${disk.name}</i></h2>
            <div style="margin-bottom:1em;">
                <input id="author" placeholder="Your name" required />
                <textarea id="text" placeholder="Your comment" required></textarea>
                <label for="rating">Rating:</label>
                <input id="rating" type="number" min="1" max="5" placeholder="1-5" required />
                <span id="ratingValue" required></span>
                <button type="submit">Add comment</button>
            </div>
        </form>
        <ul style="padding-left:50px;">
    `;
    for (const comment of disk.comments) {
        let stars = '';
        if (comment.rating) {
            for (let i = 0; i < 5; i++) {
                stars += i < comment.rating ? '⭐' : '☆';
            }
        }
        html += `
            <li>
                <b>${comment.author}</b> (${comment.date}):<br>
                ${comment.text} - Rating: ${stars}
            </li>
        `;
    }
    html += `</ul>`;
    app.innerHTML = html;
    return html;
}

function addComment(event) {
    event.preventDefault();
    // const diskIndex = typeof model.viewState.selectedDiskIndex === 'number' ? model.viewState.selectedDiskIndex : 0;
    const disk = model.data.disks[model.app.selectedDiskIndex];
    const authorInput = document.getElementById('author');
    const textInput = document.getElementById('text');
    const author = authorInput && authorInput.value ? authorInput.value : '';
    const text = textInput && textInput.value ? textInput.value : '';
    const ratingInput = document.getElementById('rating');
    const rating = ratingInput && ratingInput.value ? parseInt(ratingInput.value) : 0;
    if (!disk.comments) disk.comments = [];
    disk.comments.push({
        author: author,
        date: new Date().toISOString().slice(0, 10),
        rating: rating
    });
    renderComments();
    document.getElementById('author').value = '';
    document.getElementById('text').value = '';
}


function changeDisk(idx) {
    model.viewState.selectedDiskIndex = parseInt(idx);
    renderComments(parseInt(idx));
}