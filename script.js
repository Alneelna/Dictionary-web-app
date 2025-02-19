const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;

    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            
            let meanings = data[0].meanings;
            let phonetics = data[0].phonetics.find(p => p.audio); // Find first available audio
            let synonyms = meanings.flatMap(m => m.synonyms).filter(s => s).join(", ") || "None";
            let antonyms = meanings.flatMap(m => m.antonyms).filter(a => a).join(", ") || "None";

            let meaningHTML = meanings.map(m => `
                <div class="detail">
                    <p><strong>${m.partOfSpeech}</strong></p>
                    <p class="word-meaning">${m.definitions[0]?.definition || "No definition available"}</p>
                </div>`).join("");

            result.innerHTML = `
                <div class="word">
                    <h3>${inpWord}</h3>
                    <button onclick="playSound()">
                        <i class="fa fa-volume-up" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="details">
                    <p>/${data[0].phonetic || "N/A"}/</p>
                </div>
                ${meaningHTML}
                <p class="synonyms"><strong>Synonyms:</strong> ${synonyms}</p>
                <p class="antonyms"><strong>Antonyms:</strong> ${antonyms}</p>`;

            if (phonetics) {
                sound.setAttribute("src", phonetics.audio);
            }
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});

function playSound() {
    if (sound.src) {
        sound.play();
    }
}

// Theme Toggle
document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("theme-toggle");
    const fontSelect = document.getElementById("font-select");
    const body = document.body;

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggleSwitch.checked = true;
    }

    // Load saved font
    let savedFont = localStorage.getItem("font") || "Poppins";
    body.style.fontFamily = savedFont;
    fontSelect.value = savedFont;

    // Theme Toggle Event
    toggleSwitch.addEventListener("change", () => {
        body.classList.toggle("dark-mode");
        localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
    });

    // Font Change Event
    fontSelect.addEventListener("change", () => {
        let selectedFont = fontSelect.value;
        body.style.fontFamily = selectedFont;
        localStorage.setItem("font", selectedFont);
    });
});

