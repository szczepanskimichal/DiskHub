
function renderComments(diskIndex) {
    const selectedDiskIndex = typeof diskIndex === 'number' ? diskIndex : model.app.selectedDiskIndex || 0;
    const disk = model.data.disks[selectedDiskIndex];
    let html = `
        <div style="display:flex; flex-direction:column; align-items:center; max-width:500px; margin:auto;">
            <h2>Comments for: <i>${disk.name}</i></h2>
            <form onsubmit="addComment(event)" style="display:flex; flex-direction:column; max-width:400px; align-items: center; width:100%;">
                <div style="margin-bottom:1em; width:100%; display:flex; flex-direction:column; gap:0.5em;">
                    <input id="author" placeholder="Your name" required />
                    <textarea id="text" placeholder="Your comment" required></textarea>
                    <label for="rating">Rating:</label>
                    <input id="rating" type="number" min="1" max="5" placeholder="1-5" required />
                    <button type="submit">Add comment</button>
                </div>
            </form>
            <ul style="padding-left:0; width:100%;">
        `;
    for (const comment of disk.comments) {
        let stars = '';
        if (comment.rating) {
            for (let i = 0; i < 5; i++) {
                stars += i < comment.rating ? '⭐' : '☆';
            }
        }
        html += `
            <li style="margin-bottom:1em; list-style:none; border-bottom:1px solid #eee; padding-bottom:0.5em;">
                <b>${comment.author}</b> (${comment.date}):<br>
                ${comment.text} <br>Rating: ${stars}
            </li>
        `;
    }
    html += `</ul></div>`;
    return html;
}


function addComment(event) {
    event.preventDefault();
    const disk = model.data.disks[model.app.selectedDiskIndex];
    const authorInput = document.getElementById('author');
    const textInput = document.getElementById('text');
    const ratingInput = document.getElementById('rating');
    const author = authorInput && authorInput.value ? authorInput.value : '';
    const text = textInput && textInput.value ? textInput.value : '';
    const rating = ratingInput && ratingInput.value ? parseInt(ratingInput.value) : 0;
    if (!disk.comments) disk.comments = [];
    disk.comments.push({
        author: author,
        text: text,
        date: new Date().toISOString().slice(0, 10),
        rating: rating
    });
    showDisk(model.app.selectedDiskIndex);
}