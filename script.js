document.addEventListener("DOMContentLoaded", function() {
    const profilesContainer = document.getElementById("profiles-container");
  
    // Arreglo con 5 perfiles predefinidos
    const profiles = [
      {
        id: 1,
        name: "Angel Gabriel Frete",
        age: 15,
        gustos: "Música, dibujar, guitarra",
        pasatiempos: "tocar la guitarra, dibujar",
        nivel: 4.5,
        fuerza: 7,
        inteligencia: 8,
        defensa: 6,
        valor: 4,
        habilidad: 10,
        habilidadDestacada: "DiBUJOS GOTIER",
        photo: "foto1.jpg"
      },
      {
        id: 2,
        name: "Ignacio Hugo Paredez",
        age: 16,
        gustos: "los juegos, Musica, Cocinar",
        pasatiempos: "Jugar",
        nivel: 3.5,
        fuerza: 7,
        inteligencia: 6,
        defensa: 7,
        valor: 8,
        habilidad: 7.5,
        habilidadDestacada: "ADAPTASER A CUALQUIER JUEGO",
        photo: "foto2.jpg"
      },
      {
        id: 3,
        name: "Bruno Carrasco Suarez",
        age: 15,
        gustos: "Los juegos, Musica, tecnologia",
        pasatiempos: "Jugar, programar",
        nivel: 3,
        fuerza: 2,
        inteligencia: 4,
        defensa: 1,
        valor: 1,
        habilidad: 10,
        habilidadDestacada: "COPIAR TODO",
        photo: "foto3.jpg"
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
  
      return card;
    }
  
    // Función para crear el radar chart (SVG)
    function createRadarChart(values) {
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("viewBox", "0 0 300 300");
        const centerX = 150, centerY = 150, maxRadius = 100;
      
        // Definir los atributos usando una propiedad "rawValue" (lo que ingresa el usuario)
        // y luego calcular "numericValue" que se usará para el cálculo del gráfico.
        // Si rawValue es "∞", numericValue se toma como 10.
        const attributes = [
          { name: "Fuerza", rawValue: values.fuerza, angle: -90 },
          { name: "Inteligencia", rawValue: values.inteligencia, angle: -18 },
          { name: "Defensa", rawValue: values.defensa, angle: 54 },
          { name: "Valor", rawValue: values.valor, angle: 126 },
          { name: "Habilidad", rawValue: values.habilidad, angle: 198 }
        ];
      
        const processedAttributes = attributes.map(attr => {
          // Si se ingresa el símbolo de infinito, se toma como 10; de lo contrario, se convierte a número.
          let numericValue = (attr.rawValue === "∞" ? 10 : Number(attr.rawValue));
          return {
            name: attr.name,
            rawValue: attr.rawValue,
            numericValue: numericValue,
            angle: attr.angle
          };
        });
      
        // Función para convertir grados a radianes.
        function deg2rad(deg) {
          return deg * (Math.PI / 180);
        }
      
        // Dibujar círculos concéntricos de referencia.
        for (let i = 1; i <= 4; i++) {
          const circle = document.createElementNS(svgNS, "circle");
          circle.setAttribute("cx", centerX);
          circle.setAttribute("cy", centerY);
          circle.setAttribute("r", (maxRadius / 4) * i);
          circle.setAttribute("class", "circle-ref");
          svg.appendChild(circle);
        }
      
        // Dibujar el polígono máximo (borde exterior), usando el máximo (10) para cada atributo.
        let maxPoints = processedAttributes.map(attr => {
          const angleRad = deg2rad(attr.angle);
          const x = centerX + maxRadius * Math.cos(angleRad);
          const y = centerY + maxRadius * Math.sin(angleRad);
          return `${x},${y}`;
        }).join(" ");
        const maxPolygon = document.createElementNS(svgNS, "polygon");
        maxPolygon.setAttribute("points", maxPoints);
        maxPolygon.setAttribute("class", "max-polygon");
        svg.appendChild(maxPolygon);
      
        // Dibujar los ejes.
        processedAttributes.forEach(attr => {
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
      
        // Dibujar el polígono de datos usando numericValue.
        let dataPoints = processedAttributes.map(attr => {
          const angleRad = deg2rad(attr.angle);
          const radius = (attr.numericValue / 10) * maxRadius;
          const x = centerX + radius * Math.cos(angleRad);
          const y = centerY + radius * Math.sin(angleRad);
          return `${x},${y}`;
        }).join(" ");
        const dataPolygon = document.createElementNS(svgNS, "polygon");
        dataPolygon.setAttribute("points", dataPoints);
        dataPolygon.setAttribute("class", "data-polygon");
        svg.appendChild(dataPolygon);
      
        // Dibujar las etiquetas fuera del radar, agregando dos líneas:
        // la primera con el nombre (ej. "Fuerza") y la segunda con el valor (ej. "7" o "∞").
        processedAttributes.forEach(attr => {
          const angleRad = deg2rad(attr.angle);
          const offset = 20;
          const x = centerX + (maxRadius + offset) * Math.cos(angleRad);
          const y = centerY + (maxRadius + offset) * Math.sin(angleRad);
          const text = document.createElementNS(svgNS, "text");
          text.setAttribute("x", x);
          text.setAttribute("y", y);
          // Ajustar la alineación según la posición horizontal.
          if (Math.cos(angleRad) < -0.1) {
            text.setAttribute("text-anchor", "end");
          } else if (Math.cos(angleRad) > 0.1) {
            text.setAttribute("text-anchor", "start");
          } else {
            text.setAttribute("text-anchor", "middle");
          }
          text.setAttribute("class", "label");
      
          // Primera línea: el nombre del atributo.
          const tspanName = document.createElementNS(svgNS, "tspan");
          tspanName.textContent = attr.name;
          tspanName.setAttribute("x", x);
          text.appendChild(tspanName);
      
          // Segunda línea: el valor. Se mostrará "∞" si rawValue es ese símbolo, de lo contrario el valor numérico.
          const tspanValue = document.createElementNS(svgNS, "tspan");
          tspanValue.setAttribute("x", x);
          tspanValue.setAttribute("dy", "1.2em");
          tspanValue.textContent = (attr.rawValue === "∞" ? "∞" : attr.numericValue);
          text.appendChild(tspanValue);
      
          svg.appendChild(text);
        });
      
        return svg;
      }
      
  });
  