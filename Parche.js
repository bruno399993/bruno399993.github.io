
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
