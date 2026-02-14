const card = document.getElementById("card");
const proposeBtn = document.getElementById("proposeBtn");
const nameInput = document.getElementById("nameInput");

let rejectBtn;
let rejectActive = false;

proposeBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (name === "") {
        alert("Please enter the name");
        return;
    }

    card.innerHTML = `
        <div class="quote">
            Dear ${name},<br><br>
            I don’t know when it happened,<br>
            but my favorite part of every day somehow became you.<br><br>
            Will you be my Valentine?
        </div>

        <div class="button-group">
            <button class="accept-btn" id="acceptBtn">Accept</button>
            <div class="reject-slot" id="rejectSlot">
                <button class="reject-btn" id="rejectBtn">Reject</button>
            </div>
        </div>

    `;

    const acceptBtn = document.getElementById("acceptBtn");
    rejectBtn = document.getElementById("rejectBtn");

    setTimeout(() => {
        const rect = rejectBtn.getBoundingClientRect();

        rejectBtn.style.position = "fixed";
        rejectBtn.style.left = rect.left + "px";
        rejectBtn.style.top = rect.top + "px";

        rejectBtn.style.margin = "0";

        rejectActive = true;
    }, 600);





    acceptBtn.addEventListener("click", () => {
        document.body.innerHTML = `
            <div style="
                height:100vh;
                display:flex;
                justify-content:center;
                align-items:center;
                background:linear-gradient(135deg,#ff9a9e,#fad0c4);
                text-align:center;
                font-size:2.5rem;
                color:#ffffff;
                font-family:'Poppins', 'Segoe UI', Arial, sans-serif;
                font-weight:600;
                letter-spacing:1px;
                text-shadow:0 4px 12px rgba(0,0,0,0.25);
            ">
            <div>
                <div>
                    You just made my day… no, my life. <br><br>
                    This is the beginning of something beautiful.
                </div>
            </div>
        `;
    });
});

document.addEventListener("mousemove", (e) => {
if (!rejectActive || !rejectBtn) return;

const rect = rejectBtn.getBoundingClientRect();

const centerX = rect.left + rect.width / 2;
const centerY = rect.top + rect.height / 2;

const distance = Math.hypot(
    e.clientX - centerX,
    e.clientY - centerY
);

if (distance < 140) {

    const padding = 40;

    const maxX = window.innerWidth - rect.width - padding;
    const maxY = window.innerHeight - rect.height - padding;

    let newX = Math.random() * maxX + padding;
    let newY = Math.random() * maxY + padding;

    if (newX < e.clientX) newX -= 120;
    if (newX > e.clientX) newX += 120;
    if (newY < e.clientY) newY -= 120;
    if (newY > e.clientY) newY += 120;

    newX = Math.max(padding, Math.min(newX, maxX));
    newY = Math.max(padding, Math.min(newY, maxY));

    rejectBtn.style.left = newX + "px";
    rejectBtn.style.top = newY + "px";
}
});