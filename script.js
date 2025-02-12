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
        nivel: 6,
        fuerza: 8,
        inteligencia: 9,
        defensa: 6,
        valor: 7.5,
        habilidad: 10,
        habilidadDestacada: "DiBUJAR GOD",
        debilidad: "ES ANSIOSO",
        photo: "images/foto1.jpg"
      },
      {
        id: 2,
        name: "Ignacio Hugo Paredes",
        age: 16,
        gustos: "los juegos, Musica, Cocinar",
        pasatiempos: "Jugar",
        nivel: 4.5,
        fuerza: 7,
        inteligencia: 6,
        defensa: 8,
        valor: 8,
        habilidad: 7.5,
        habilidadDestacada: "ADAPTASER A CUALQUIER JUEGO",
        debilidad: "DEFICIT DE ATENCION",
        photo: "images/foto2.jpg"
      },
      {
        id: 3,
        name: "Bruno Carrasco Suarez",
        age: 15,
        gustos: "Los juegos, Musica, tecnologia",
        pasatiempos: "Jugar, programar",
        nivel: 3,
        fuerza: 2,
        inteligencia: 8,
        defensa: 1,
        valor: 7.5,
        habilidad: 10,
        habilidadDestacada: "COPIAR TODO",
        debilidad: "NO PUEDE COPIAR COSAS COMPLEJAS",
        photo: "images/foto3.jpg"
      },
      {
        id: 4,
        name: "Bautista Millan Cofre",
        age: 16,
        gustos: "Furros, Futbol",
        pasatiempos: "Jugar,Ver futbol,ser Bautista",
        nivel: 2,
        fuerza: 2,
        inteligencia: 8,
        defensa: 4,
        valor: 10,
        habilidad: 3,
        habilidadDestacada: "HABLA INGLES",
        debilidad: "ES DESPISTADO",
        photo: "images/foto4.jpg"
      },
      {
        id: 5,
        name: "Gastón Iturrisa",
        age: 18,
        gustos: "Juegos,Libros,Filosofia,Historia",
        pasatiempos: "Jugar,Leer,Escuchar teorias",
        nivel: 3.5,
        fuerza: 5,
        inteligencia: 9,
        defensa: 6,
        valor: 7,
        habilidad: 3,
        habilidadDestacada: "TIRAR FACTOS",
        debilidad: "LUGARES CON MUCHO RUIDO",
        photo: "images/foto5.jpg"
      },
      {
        id: 6,
        name: "Agustín Silva",
        age: 16,
        gustos: "Juegos,Ver tiktoks",
        pasatiempos: "Jugar,Chambear,Escuchar Musica",
        nivel: 3.5,
        fuerza: 6,
        inteligencia: 4,
        defensa: 6,
        valor: 7,
        habilidad: 7,
        habilidadDestacada: "CHAMBEAR",
        debilidad: "SE ENOJA FACILMENTE",
        photo: "images/foto6.jpg"
      },
      {
        id: 7,
        name: "Agustín Artero",
        age: 16,
        gustos: "Juegos",
        pasatiempos: "Jugar Fre,db legends,brawl stars,etc",
        nivel: 2,
        fuerza: 4,
        inteligencia: 5,
        defensa: 6,
        valor: 7,
        habilidad: 3,
        habilidadDestacada: "JUGAR",
        debilidad: "USA MUCHO EL CELULAR",
        photo: "images/foto7.jpg"
      },
      {
        id: 8,
        name: "Tiziano Ezequiel Cardenas",
        age: 16,
        gustos: "Juegos,Musica,Gym",
        pasatiempos: "Jugar Fre,Guardaespaldas,Salir",
        nivel: 6,
        fuerza: 9,
        inteligencia: 9,
        defensa: 8,
        valor: 7,
        habilidad: 10,
        habilidadDestacada: "FUERZA",
        debilidad: "ES VAGO",
        photo: "images/foto8.jpg"
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

    // Sección de foto
    const photoDiv = document.createElement("div");
    photoDiv.className = "photo";
    const img = document.createElement("img");
    img.src = data.photo;
    img.alt = "Foto de " + data.name;
    photoDiv.appendChild(img);
    card.appendChild(photoDiv);

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

    card.appendChild(infoDiv);

    // Sección del radar chart
    const chartDiv = document.createElement("div");
    chartDiv.className = "chart";
    const radarChart = createRadarChart({
      fuerza: data.fuerza,
      inteligencia: data.inteligencia,
      defensa: data.defensa,
      valor: data.valor,
      habilidad: data.habilidad
    });
    chartDiv.appendChild(radarChart);
    card.appendChild(chartDiv);

    // Mostrar la habilidad destacada debajo del radar
    const destacaP = document.createElement("p");
    destacaP.className = "destaca";
    destacaP.innerHTML = "<strong>Habilidad:</strong> " + data.habilidadDestacada;
    card.appendChild(destacaP);

    // Mostrar la debilidad debajo de la habilidad destacada
    const debilidadP = document.createElement("p");
    debilidadP.className = "debilidad";
    debilidadP.innerHTML = "<strong>Debilidad:</strong> " + data.debilidad;
    card.appendChild(debilidadP);

    return card;
  }

  // Función para crear el radar chart (SVG) con etiquetas de dos líneas (nombre y valor)
  function createRadarChart(values) {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 300 300");
    const centerX = 150, centerY = 150, maxRadius = 100;
    // Definir los atributos con sus valores y ángulos fijos
    const attributes = [
      { name: "Fuerza", value: Number(values.fuerza), angle: -90 },
      { name: "Inteligencia", value: Number(values.inteligencia), angle: -18 },
      { name: "Defensa", value: Number(values.defensa), angle: 54 },
      { name: "Valor", value: Number(values.valor), angle: 126 },
      { name: "Habilidad", value: Number(values.habilidad), angle: 198 }
    ];

    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }

    // Dibujar círculos concéntricos de referencia
    for (let i = 1; i <= 4; i++) {
      const circle = document.createElementNS(svgNS, "circle");
      circle.setAttribute("cx", centerX);
      circle.setAttribute("cy", centerY);
      circle.setAttribute("r", (maxRadius / 4) * i);
      circle.setAttribute("class", "circle-ref");
      svg.appendChild(circle);
    }

    // Dibujar el borde exterior (polígono máximo)
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

    // Dibujar los ejes
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

    // Dibujar el polígono de datos
    let dataPoints = attributes.map(attr => {
      const angleRad = deg2rad(attr.angle);
      const radius = (attr.value / 10) * maxRadius;
      const x = centerX + radius * Math.cos(angleRad);
      const y = centerY + radius * Math.sin(angleRad);
      return `${x},${y}`;
    }).join(" ");
    const dataPolygon = document.createElementNS(svgNS, "polygon");
    dataPolygon.setAttribute("points", dataPoints);
    dataPolygon.setAttribute("class", "data-polygon");
    svg.appendChild(dataPolygon);

    // Dibujar las etiquetas fuera del radar, con dos líneas: una para el nombre y otra para el valor
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

      // Primera línea: el nombre del atributo
      const tspanName = document.createElementNS(svgNS, "tspan");
      tspanName.textContent = attr.name;
      tspanName.setAttribute("x", x);
      text.appendChild(tspanName);

      // Segunda línea: el valor del atributo
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
