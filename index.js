const input = document.getElementById("nameInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const tagsDiv = document.getElementById("tags");
const generateBtn = document.getElementById("generateBtn");
const colsSelect = document.getElementById("cols");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let names = [];

function renderTags() {
    tagsDiv.innerHTML = "";
    names.forEach((name, i) => {
        const tag = document.createElement("div");
        tag.className = "tag";
        tag.innerHTML = name + " <span data-i='" + i + "'>×</span>";
        tagsDiv.appendChild(tag);
    });
}

function addName() {
    const name = input.value.trim();
    if (!name) return;
    names.push(name);
    input.value = "";
    renderTags();
}

addBtn.onclick = addName;
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addName();
});

tagsDiv.onclick = (e) => {
    if (e.target.tagName === "SPAN") {
        names.splice(e.target.dataset.i, 1);
        renderTags();
    }
};

clearBtn.onclick = () => {
    names = [];
    renderTags();
};

function drawCard(x, y, w, h, name) {
    ctx.fillStyle = "#333";
    ctx.font = "bold 14px Georgia";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(name, x + w / 2, y + h / 2);
}

generateBtn.onclick = () => {
    if (names.length === 0) return;

    // A4 page dimensions in pixels (at 96 DPI)
    const pageW = 595;
    const pageH = 842;
    const margin = 20;
    const lineHeight = 30;

    // Set canvas to A4 dimensions
    canvas.width = pageW;
    canvas.height = pageH;
    canvas.style.width = pageW + "px";
    canvas.style.height = pageH + "px";

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, pageW, pageH);

    // Draw names vertically
    let y = margin;
    for (let i = 0; i < names.length; i++) {
        if (y + lineHeight > pageH - margin) break; // Stop if no more space
        ctx.fillStyle = "#333";
        ctx.font = "bold 14px Georgia";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText(names[i], margin, y);
        y += lineHeight;
    }

    // Export as PDF
    canvas.toBlob((blob) => {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "px",
            format: [pageW, pageH],
        });

        const reader = new FileReader();
        reader.onload = function () {
            pdf.addImage(reader.result, "PNG", 0, 0, pageW, pageH);
            pdf.save("name-cards.pdf");
        };
        reader.readAsDataURL(blob);
    });
};