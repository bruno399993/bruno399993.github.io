document.addEventListener("DOMContentLoaded", function() {
    const profilesContainer = document.getElementById("profiles-container");
  
    // Arreglo con 3 perfiles predefinidos
    const profiles = [
      {
        id: 1,
        name: "Angel Gabriel Frete",
        age: 15,
        gustos: "Música, dibujar, guitarra",
        pasatiempos: "tocar la guitarra, dibujar",
        nivel: 8.1,
        fuerza: 8,
        IQ: 8,
        resistencia: 7,
        valor: 7.5,
        agilidad: 10,
        habilidadDestacada: "DiBUJAR GOD",
        debilidad: "ES ANSIOSO",
        photo: "images/foto1.jpg",
        glowColor: "#950101",    // Color para los costados del glow
        glowCenter: "#3D0000",   // Color para el centro del glow
        glowSpeed: "1.5s",         // Velocidad de la animación del glow
        radarColor: "#ff5733"    // Color personalizado para el radar (se usará para el relleno y trazo)
      },
      {
        id: 2,
        name: "Ignacio Hugo Paredez",
        age: 16,
        gustos: "los juegos, Musica, Cocinar",
        pasatiempos: "Jugar, voley",
        nivel: 7.1,
        fuerza: 7,
        IQ: 6,
        resistencia: 7,
        valor: 8,
        agilidad: 7.5,
        habilidadDestacada: "ADAPTASER A CUALQUIER JUEGO",
        debilidad: "ESQUIZOFRENICO CERTIFICADO",
        photo: "images/foto2.jpg",
        glowColor: "#008405",
        glowCenter: "#006007",
        glowSpeed: "3.5s",
        radarColor: "#00ff00"
      },
      {
        id: 3,
        name: "Bruno Carrasco Suarez",
        age: 15,
        gustos: "Los juegos, Musica, tecnologia",
        pasatiempos: "Jugar, programar",
        nivel: 5.9,
        fuerza: 1.5,
        IQ: 6,
        resistencia: 4.5,
        valor: 7.5,
        agilidad: 10,
        habilidadDestacada: "COPIAR TODO",
        debilidad: "NO PUEDE COPIAR COSAS COMPLEJAS",
        photo: "images/foto3.jpg",
        glowColor: "#A98307",
        glowCenter: "#000000",
        glowSpeed: "4s",
        radarColor: "#000000"
      },
      {
        id: 4,
        name: "Bautista Millan Cofre",
        age: 16,
        gustos: "Furros, Futbol",
        pasatiempos: "Jugar,Ver futbol,ser Bautista",
        nivel: 5.4,
        fuerza: 2,
        IQ: 8,
        resistencia: 4,
        valor: 10,
        agilidad: 3,
        habilidadDestacada: "HABLA INGLES",
        debilidad: "ES DESPISTADO",
        photo: "images/foto4.jpg",
        glowColor: "#950101",
        glowSpeed: "3s",
        glowCenter: "#3D0000",
        radarColor: "#ff5733"
      },
      {
        id: 5,
        name: "Gastón Iturrisa",
        age: 18,
        gustos: "Juegos,Libros,Filosofia,Historia",
        pasatiempos: "Jugar,Leer,Escuchar teorias",
        nivel: 6,
        fuerza: 5,
        IQ: 9,
        resistencia: 6,
        valor: 7,
        agilidad: 3,
        habilidadDestacada: "TIRAR FACTOS",
        debilidad: "LUGARES CON MUCHO RUIDO",
        photo: "images/foto5.jpg",
        glowColor: "#008405",
        glowCenter: "#006007",
        glowSpeed: "2.5s",
        radarColor: "#00ff00"
      },
      {
        id: 6,
        name: "Agustín Silva",
        age: 16,
        gustos: "Juegos,Ver tiktoks",
        pasatiempos: "Jugar,Chambear,Escuchar Musica",
        nivel: 5.8,
        fuerza: 6,
        IQ: 4,
        resistencia: 6,
        valor: 7,
        agilidad: 6,
        habilidadDestacada: "CHAMBEAR",
        debilidad: "SE ENOJA FACILMENTE",
        photo: "images/foto6.jpg",
        glowColor: "#008405",
        glowCenter: "#006007",
        glowSpeed: "2.5s",
        radarColor: "#00ff00"
      },
      {
        id: 7,
        name: "Agustín Artero",
        age: 16,
        gustos: "Juegos",
        pasatiempos: "Jugar Fre,db legends,brawl stars,etc",
        nivel: 5,
        fuerza: 4,
        IQ: 5,
        resistencia: 6,
        valor: 7,
        agilidad: 3,
        habilidadDestacada: "JUGAR",
        debilidad: "USA MUCHO EL CELULAR",
        photo: "images/foto7.jpg",
        glowColor: "#008405",
        glowCenter: "#006007",
        glowSpeed: "2.5s",
        radarColor: "#00ff00"
      },
      {
        id: 8,
        name: "Tiziano Ezequiel Cardenas",
        age: 16,
        gustos: "Juegos,Musica,Gym",
        pasatiempos: "Jugar Fre,Guardaespaldas,Salir",
        nivel:8.6,
        fuerza: 9,
        IQ: 9,
        resistencia: 8,
        valor: 7,
        agilidad: 10,
        habilidadDestacada: "FUERZA",
        debilidad: "ES VAGO",
        photo: "images/foto8.jpg",
        glowColor: "#008405",
        glowCenter: "#006007",
        glowSpeed: "2.5s",
        radarColor: "#00ff00"
      },
    ];
    
  // Recorrer el arreglo y crear la tarjeta de cada perfil
  profiles.forEach(data => {
    const card = createProfileCard(data);
    profilesContainer.appendChild(card);
  });

  // Función para crear la tarjeta de perfil
  function createProfileCard(data) {
    const card = document.createElement("div");
    card.className = "profile-card";
    
    // Configuración de variables para el glow (dos colores y velocidad)
    card.style.setProperty("--glow-color", data.glowColor || "#ff5733");
    card.style.setProperty("--glow-center", data.glowCenter || "#ffe066");
    card.style.setProperty("--glow-speed", data.glowSpeed || "3s");
  
    // Crear un contenedor para el contenido (para que quede por encima del glow)
    const contentDiv = document.createElement("div");
    contentDiv.className = "profile-card-content";
  
    // Sección de foto
    const photoDiv = document.createElement("div");
    photoDiv.className = "photo";
    const img = document.createElement("img");
    img.src = data.photo;
    img.alt = "Foto de " + data.name;
    photoDiv.appendChild(img);
    contentDiv.appendChild(photoDiv);
  
    // Sección de información
    const infoDiv = document.createElement("div");
    infoDiv.className = "info";
    const h2 = document.createElement("h2");
    h2.textContent = data.name;
    infoDiv.appendChild(h2);
    const ageP = document.createElement("p");
    ageP.innerHTML = "<strong>Edad:</strong> " + data.age;
    infoDiv.appendChild(ageP);
    const gustosP = document.createElement("p");
    gustosP.innerHTML = "<strong>Gustos:</strong> " + data.gustos;
    infoDiv.appendChild(gustosP);
    const pasatiemposP = document.createElement("p");
    pasatiemposP.innerHTML = "<strong>Pasatiempos:</strong> " + data.pasatiempos;
    infoDiv.appendChild(pasatiemposP);
    const nivelP = document.createElement("p");
    nivelP.innerHTML = "<strong>Nivel:</strong> " + data.nivel;
    infoDiv.appendChild(nivelP);
    contentDiv.appendChild(infoDiv);
  
    // Sección del radar chart, pasándole además el color personalizado para el radar
    const chartDiv = document.createElement("div");
    chartDiv.className = "chart";
    const radarChart = createRadarChart({
        fuerza: data.fuerza,
        IQ: data.IQ,
        resistencia: data.resistencia,
        valor: data.valor,
        agilidad: data.agilidad
    }, data.radarColor);
    chartDiv.appendChild(radarChart);
    contentDiv.appendChild(chartDiv);
  
    // Habilidad destacada
    const destacaP = document.createElement("p");
    destacaP.className = "destaca";
    destacaP.innerHTML = "<strong>Habilidad:</strong> " + data.habilidadDestacada;
    contentDiv.appendChild(destacaP);
  
    // Debilidad
    const debilidadP = document.createElement("p");
    debilidadP.className = "debilidad";
    debilidadP.innerHTML = "<strong>Debilidad:</strong> " + data.debilidad;
    contentDiv.appendChild(debilidadP);
  
    card.appendChild(contentDiv);
    return card;
  }
  

function hexToRgba(hex, opacity) {
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}


  // Función para crear el radar chart (SVG) con etiquetas de dos líneas (nombre y valor)
  function createRadarChart(values, radarColor) {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 300 300");
    const centerX = 150, centerY = 150, maxRadius = 100;
  
    const attributes = [
      { name: "Fuerza", value: Number(values.fuerza), angle: -90 },
      { name: "IQ", value: Number(values.IQ), angle: -18 },
      { name: "Resistencia", value: Number(values.resistencia), angle: 54 },
      { name: "Valor", value: Number(values.valor), angle: 126 },
      { name: "Agilidad", value: Number(values.agilidad), angle: 198 }
    ];
  
    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }
  
    // Círculos de referencia
    for (let i = 1; i <= 4; i++) {
      const circle = document.createElementNS(svgNS, "circle");
      circle.setAttribute("cx", centerX);
      circle.setAttribute("cy", centerY);
      circle.setAttribute("r", (maxRadius / 4) * i);
      circle.setAttribute("class", "circle-ref");
      svg.appendChild(circle);
    }
  
    // Borde exterior
    let maxPoints = attributes.map(attr => {
      const angleRad = deg2rad(attr.angle);
      const x = centerX + maxRadius * Math.cos(angleRad);
      const y = centerY + maxRadius * Math.sin(angleRad);
      return `${x},${y}`;
    }).join(" ");
    const maxPolygon = document.createElementNS(svgNS, "polygon");
    maxPolygon.setAttribute("points", maxPoints);
    maxPolygon.setAttribute("class", "max-polygon");
    svg.appendChild(maxPolygon);
  
    // Ejes
    attributes.forEach(attr => {
      const angleRad = deg2rad(attr.angle);
      const x = centerX + maxRadius * Math.cos(angleRad);
      const y = centerY + maxRadius * Math.sin(angleRad);
      const line = document.createElementNS(svgNS, "line");
      line.setAttribute("x1", centerX);
      line.setAttribute("y1", centerY);
      line.setAttribute("x2", x);
      line.setAttribute("y2", y);
      line.setAttribute("class", "axis");
      svg.appendChild(line);
    });
  
    // Polígono de datos
    let dataPoints = attributes.map(attr => {
      const angleRad = deg2rad(attr.angle);
      const radius = (attr.value / 10) * maxRadius;
      const x = centerX + radius * Math.cos(angleRad);
      const y = centerY + radius * Math.sin(angleRad);
      return `${x},${y}`;
    }).join(" ");
    const dataPolygon = document.createElementNS(svgNS, "polygon");
    dataPolygon.setAttribute("points", dataPoints);
  
    // Si se definió un color para el radar, lo usamos; de lo contrario, valores por defecto.
    let fillColor = radarColor ? hexToRgba(radarColor, 0.2) : "rgba(0,128,255,0.2)";
    let strokeColor = radarColor || "#0055aa";
    dataPolygon.setAttribute("fill", fillColor);
    dataPolygon.setAttribute("stroke", strokeColor);
    dataPolygon.setAttribute("stroke-width", 2);
  
    dataPolygon.addEventListener("mouseover", function() {
      dataPolygon.setAttribute("fill", radarColor ? hexToRgba(radarColor, 0.4) : "rgba(0,128,255,0.4)");
    });
    dataPolygon.addEventListener("mouseout", function() {
      dataPolygon.setAttribute("fill", fillColor);
    });
    svg.appendChild(dataPolygon);
  
    // Etiquetas
    attributes.forEach(attr => {
      const angleRad = deg2rad(attr.angle);
      const offset = 20;
      const x = centerX + (maxRadius + offset) * Math.cos(angleRad);
      const y = centerY + (maxRadius + offset) * Math.sin(angleRad);
      const text = document.createElementNS(svgNS, "text");
      text.setAttribute("x", x);
      text.setAttribute("y", y);
      if (Math.cos(angleRad) < -0.1) {
        text.setAttribute("text-anchor", "end");
      } else if (Math.cos(angleRad) > 0.1) {
        text.setAttribute("text-anchor", "start");
      } else {
        text.setAttribute("text-anchor", "middle");
      }
      text.setAttribute("class", "label");
  
      // Nombre del atributo (primera línea)
      const tspanName = document.createElementNS(svgNS, "tspan");
      tspanName.textContent = attr.name;
      tspanName.setAttribute("x", x);
      text.appendChild(tspanName);
  
      // Valor del atributo (segunda línea)
      const tspanValue = document.createElementNS(svgNS, "tspan");
      tspanValue.setAttribute("x", x);
      tspanValue.setAttribute("dy", "1.2em");
      tspanValue.textContent = attr.value;
      text.appendChild(tspanValue);
  
      svg.appendChild(text);
    });
  
    return svg;
  }  
});
