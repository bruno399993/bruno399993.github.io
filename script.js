// ===============================
// DATOS EDITABLES DE LA PÁGINA
// ===============================
const gamesData = [
  {
    id: "game-01",
    name: "Cuphead ",
    code: "Cuphead",
    // RUTAS DE TUS IMÁGENES AQUÍ:
    iconImg: "juegos/Cuphead/icon.webp",      
    coverImg: "juegos/Cuphead/icon.webp",    
    genre: "Puzzle / dibujos",
    size: "1.69 GB",
    description: "Cuphead es un juego de acción clásico estilo dispara y corre que se centra en combates contra el jefe. Inspirado en los dibujos animados de los años 30, los aspectos visual y sonoro están diseñados con esmero empleando las mismas técnicas de la época, es decir, animación tradicional a mano, fondos de acuarela y grabaciones originales de jazz. Juega como Cuphead o Mugman (en modo de un jugador o cooperativo) y cruza mundos extraños, adquiere nuevas armas, aprende poderosos supermovimientos y descubre secretos ocultos mientras procuras saldar tu deuda con el diablo. ",
    requirements: {
      os: "Windows 7",
      cpu: "Intel Core2 Duo E8400, 3.0GHz or AMD Athlon 64 X2 6000+, 3.0GHz or higher",
      ram: "3 GB",
      gpu: "Geforce 9600 GT or AMD HD 3870 512MB or higher",
      storage: "1.69 GB"
    },
    download: "https://download2388.mediafire.com/l8a9mqh6zo9g8Bc7LjsBhikZlKT9wiBb8aKmb81Xq6dQ4ovAqr0gEaO3V8hmSHfHfEFCqJMDz3B1-GezUmWC-5k6a_pJ1RVgMnVCs35f0U93JYJAfMkybeQJ_9Wow8Tp2KJFrd2j9KoBXb8xPPz5dh379V26ro3g7KvwwFYo1jVRZg4/n023i97wiob8jih/Cuphead+LITE.7z",
    // CAPTURAS DE PANTALLA:
    mediaImgs: [
      "juegos/Cuphead/capturas/cap1.jpg",
      "juegos/Cuphead/capturas/cap2.jpg",
      "juegos/Cuphead/capturas/cap3.jpg",
      "juegos/Cuphead/capturas/cap4.jpg"
    ]
  },
  {
    id: "game-02",
    name: "Plants vs. Zombies",
    code: "pvz",
    iconImg: "juegos/pvz/icon.webp",
    coverImg: "juegos/pvz/icon.webp",
    genre: "estrategia / horror",
    size: "17 MB",
    description: "¡Un nuevo juego de acción y estrategia de la mano de PopCap, los creadores de Bejeweled y Peggle! Los zombis están invadiendo tu hogar, ¡y la única defensa es tu arsenal de plantas! Armado con 49 plantas fulmina-zombis como el lanzaguisantes y las bombas cereza, tendrás que pensar rápido y plantar aún más rápido para detener a los 26 tipos de zombis. Obstáculos como una puesta de sol, una niebla densa o una piscina hacen que el reto sea más interesante, además hay cinco modos de juego para descubrir. ¡La diversión no acabará nunca! ",
    requirements: {
      os: "Windows XP / Vista / 7",
      cpu: "1.2 GHz",
      ram: "1 GB",
      gpu: "128 MB de memoria gráfica, color de 16 bits o 32 bits",
      storage: "17 MB"
    },
    download: "https://download2354.mediafire.com/3cp7g9tdp5pgFYgLkzn7UfDJ12JfGFRROD3nFJTRKHAy6HOvN5AgkITRLZPf4O32vKPoQOo42eEDgRVF8Rm2SYL8lUXzGagYE0uEXw08A2UOF-d4Yh0DeujiNv2vrt9FF8swem30uviYCFZjNi5kPMI_jxvz7jBHzv6RvkADeoCtsaU/yswh4afgrs0jo9f/Plantas+VS+Zombies+GOTY.7z",
    mediaImgs: [
      "juegos/pvz/Capturas/cap1.jpg",
      "juegos/pvz/Capturas/cap2.jpg",
      "juegos/pvz/Capturas/cap3.jpg",
      "juegos/pvz/Capturas/cap4.jpg"
    ]
  }
];

const peopleData = [
  {
    id: "DOC-001",
    name: "Sujeto de Prueba",
    birth: "Desconocido",
    number: "EXP-01",
    likes: "Sistemas operativos, customización de terminales, desarrollo de motores lógicos.",
    strength: "Resolución algorítmica y análisis de mecánicas complejas.",
    avatar: "◈",
    activities: ["PROYECTO 01", "LABORATORIO"]
  }
];

// ===============================
// LÓGICA DE LA RUEDA DE JUEGOS
// ===============================
const wheel = document.getElementById("gameWheel");
const preview = document.getElementById("gamePreview");
const mediaWheel = document.getElementById("mediaWheel");
let selectedGame = 0;
let wheelCooldown = false;

function renderGameWheel() {
  wheel.innerHTML = "";
  gamesData.forEach((game, index) => {
    const button = document.createElement("button");
    button.className = "game-item";
    button.type = "button";
    
    // Aquí inyectamos la imagen del icono real en lugar de un texto
    button.innerHTML = `
      <img src="${game.iconImg}" alt="Icono" style="width: 42px; height: 42px; border-radius: 8px; object-fit: cover; margin-bottom: 5px; border: 1px solid rgba(255,255,255,0.2);">
      <span class="game-name">${game.name}</span>
      <span class="game-index">0${index + 1}</span>
    `;
    button.addEventListener("click", () => selectGame(index));
    wheel.appendChild(button);
  });
  updateWheel();
}

function updateWheel() {
  const items = [...document.querySelectorAll(".game-item")];
  const count = gamesData.length;

  items.forEach((item, index) => {
    let offset = index - selectedGame;

    if (offset > count / 2) offset -= count;
    if (offset < -count / 2) offset += count;

    const abs = Math.abs(offset);
    const normalized = Math.min(abs, 4);

    const y = offset * 70;
    const rotation = offset * 23;
    const depth = -Math.min(abs * 75, 260);
    const scale = index === selectedGame ? 1.12 : Math.max(.70, 1 - normalized * .095);
    const opacity = index === selectedGame ? 1 : Math.max(.18, 1 - normalized * .20);
    const blur = index === selectedGame ? 0 : Math.min(3.8, normalized * .75);

    item.style.top = `calc(50% + ${y}px)`;
    item.style.opacity = opacity;
    item.style.filter = `blur(${blur}px)`;
    item.style.zIndex = String(20 - Math.round(abs * 2));

    item.style.transform =
      `translate(-50%, -50%) perspective(800px)
       rotateX(${rotation}deg)
       translateZ(${depth}px)
       scale(${scale})`;

    item.classList.toggle("active", index === selectedGame);
  });
}

function selectGame(index) {
  if (index < 0 || index >= gamesData.length) return;
  selectedGame = index;
  updateWheel();
  openGameDetails();
}

// CORRECCIÓN DEL SCROLL CON EL RATÓN
wheel.addEventListener("wheel", event => {
  event.preventDefault();
  event.stopPropagation();

  if (wheelCooldown) return;
  wheelCooldown = true;

  const direction = event.deltaY > 0 ? 1 : -1;
  const next = (selectedGame + direction + gamesData.length) % gamesData.length;

  selectedGame = next;
  updateWheel(); 
  
  if (!preview.classList.contains("hidden")) {
      preview.classList.add("hidden");
      wheel.classList.remove("shifted");
      updateBackButton();
  }

  window.setTimeout(() => {
    wheelCooldown = false;
  }, 95);
}, { passive: false });

wheel.addEventListener("scroll", event => event.preventDefault(), { passive: false });

// ===============================
// ABRIR INFORMACIÓN DEL JUEGO
// ===============================
function openGameDetails() {
  const game = gamesData[selectedGame];
  preview.classList.remove("hidden");
  wheel.classList.add("shifted");

  // Actualizar textos
  document.getElementById("gameTitle").textContent = game.name;
  document.getElementById("gameCoverName").textContent = game.name;
  document.getElementById("gameCoverCode").textContent = game.code;
  document.getElementById("gameGenre").textContent = game.genre;
  document.getElementById("gameSize").textContent = game.size;
  document.getElementById("gameDescription").textContent = game.description;

  document.getElementById("reqOS").textContent = game.requirements.os;
  document.getElementById("reqCPU").textContent = game.requirements.cpu;
  document.getElementById("reqRAM").textContent = game.requirements.ram;
  document.getElementById("reqGPU").textContent = game.requirements.gpu;
  document.getElementById("reqStorage").textContent = game.requirements.storage;

  // Actualizar PORTADA GRANDE (usando CSS backgroundImage en el contenedor original)
  const coverContainer = document.getElementById("gameCoverName").parentElement;
  coverContainer.style.backgroundImage = `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 100%), url('${game.coverImg}')`;
  coverContainer.style.backgroundSize = "cover";
  coverContainer.style.backgroundPosition = "center";
  coverContainer.style.border = "1px solid rgba(255,255,255,0.1)";

  // Actualizar GALERÍA / RUEDA DE IMÁGENES
  mediaWheel.innerHTML = "";
  game.mediaImgs.forEach((imgSrc, i) => {
    const card = document.createElement("div");
    card.className = "media-card";
    
    // Le asignamos la imagen como fondo a la tarjeta de la galería
    card.style.backgroundImage = `url('${imgSrc}')`;
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "center";
    card.style.border = "1px solid #333";
    card.style.cursor = "pointer";

    card.addEventListener("click", () => openMedia(i));
    mediaWheel.appendChild(card);
  });

  updateBackButton();
}

document.getElementById("downloadBtn").addEventListener("click", () => {
  const game = gamesData[selectedGame];
  if (game.download) {
    const link = document.createElement("a");
    link.href = game.download;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    link.remove();
    showToast("Descarga iniciada.");
  } else {
    showToast("El enlace de descarga no está disponible aún.");
  }
});

// ===============================
// MODAL DE VISUALIZACIÓN DE IMÁGENES
// ===============================
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const modalClose = document.getElementById("modalClose");

function openMedia(index) {
  const game = gamesData[selectedGame];
  const imgSrc = game.mediaImgs[index];

  // Inyectamos la etiqueta de imagen real en el visor
  modalImage.innerHTML = `<img src="${imgSrc}" style="max-width: 90vw; max-height: 80vh; border-radius: 4px; box-shadow: 0 10px 40px rgba(0,0,0,0.8);">`;
  modalCaption.textContent = `${game.name}  ·  Captura 0${index + 1}`;
  imageModal.classList.remove("hidden");
}

function closeMedia() {
  imageModal.classList.add("hidden");
}

modalClose.addEventListener("click", closeMedia);
imageModal.addEventListener("click", event => {
  if (event.target === imageModal) closeMedia();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeMedia();
});

// ===============================
// NAVEGACIÓN Y RESTO DEL CÓDIGO
// ===============================
function switchSection(sectionId) {
  document.querySelectorAll(".page-section").forEach(section => {
    section.classList.toggle("active", section.id === sectionId);
  });

  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.section === sectionId);
  });
}

document.querySelectorAll(".nav-btn:not(:disabled)").forEach(btn => {
  btn.addEventListener("click", () => switchSection(btn.dataset.section));
});

document.getElementById("dataBtn").addEventListener("click", () => {
  switchSection("data");
});

const backBtn = document.getElementById("backBtn");
function updateBackButton() {
  const gamesVisible = document.getElementById("games").classList.contains("active");
  const detailOpen = gamesVisible && !preview.classList.contains("hidden");
  backBtn.classList.toggle("hidden-back", !detailOpen);
}

backBtn.addEventListener("click", () => {
  const gamesVisible = document.getElementById("games").classList.contains("active");

  if (gamesVisible && !preview.classList.contains("hidden")) {
    preview.classList.add("hidden");
    wheel.classList.remove("shifted");
    selectedGame = 0;
    updateWheel();
    updateBackButton();
    return;
  }

  switchSection("games");
  updateBackButton();
});

const originalSwitchSection = switchSection;
switchSection = function(sectionId) {
  originalSwitchSection(sectionId);
  updateBackButton();
};

updateBackButton();

// ===============================
// ARCHIVO CLASIFICADO (DATOS)
// ===============================
const ACCESS_KEY = "mahoraga30"; 

const passwordForm = document.getElementById("passwordForm");
const loginPanel = document.getElementById("loginPanel");
const archivePanel = document.getElementById("archivePanel");

passwordForm.addEventListener("submit", event => {
  event.preventDefault();

  const value = document.getElementById("passwordInput").value.trim();
  const error = document.getElementById("passwordError");

  if (value.toLowerCase() === ACCESS_KEY.toLowerCase()) {
    loginPanel.classList.add("hidden");
    archivePanel.classList.remove("hidden");
    error.textContent = "";
    renderPeople();
    showToast("Archivo desbloqueado.");
  } else {
    error.textContent = "Clave incorrecta.";
  }
});

document.getElementById("lockAgain").addEventListener("click", () => {
  archivePanel.classList.add("hidden");
  loginPanel.classList.remove("hidden");
  document.getElementById("passwordInput").value = "";
});

function renderPeople() {
  const fileGrid = document.getElementById("fileGrid");
  fileGrid.innerHTML = "";

  peopleData.forEach(person => {
    const card = document.createElement("article");
    card.className = "file-card";
    card.innerHTML = `
      <div class="file-photo">${person.avatar}</div>
      <div class="file-id">${person.id}</div>
      <h3>${person.name}</h3>
      <div class="file-summary">
        Registro resumido. Presiona "Abrir documento" para acceder a la información clasificada.
      </div>
      <button class="file-open">Abrir documento</button>

      <div class="person-detail">
        <p><strong>Nombre:</strong> ${person.name}</p>
        <p><strong>Fecha de nacimiento:</strong> ${person.birth}</p>
        <p><strong>Número:</strong> ${person.number}</p>
        <p><strong>Le gusta:</strong> ${person.likes}</p>
        <p><strong>Mayor fortaleza:</strong> ${person.strength}</p>
        <div class="sample-images">
          <div class="sample-image">${person.activities[0]}</div>
          <div class="sample-image">${person.activities[1]}</div>
        </div>
      </div>
    `;

    card.querySelector(".file-open").addEventListener("click", event => {
      card.classList.toggle("open");
      event.currentTarget.textContent = card.classList.contains("open")
        ? "Cerrar documento"
        : "Abrir documento";
    });

    fileGrid.appendChild(card);
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

renderGameWheel();
