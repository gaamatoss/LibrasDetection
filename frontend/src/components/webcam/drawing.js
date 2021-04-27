// Juntas dos dedos
const fingerJoints = {
    thumb: [0, 1, 2, 3, 4], //dedão
    indexFinger: [0, 5, 6, 7, 8], //indicador
    middleFinger: [0, 9, 10, 11, 12], //dedo do meio
    ringFinger: [0, 13, 14, 15, 16], //anelar
    pinky: [0, 17, 18, 19, 20], //mindinho
  };
  
  const style = {
    0: { color: "red", size: 5 },
    1: { color: "red", size: 5 },
    2: { color: "red", size: 5 },
    3: { color: "red", size: 5 },
    4: { color: "red", size: 5 },
    5: { color: "red", size: 5 },
    6: { color: "red", size: 5 },
    7: { color: "red", size: 5 },
    8: { color: "red", size: 5 },
    9: { color: "red", size: 5 },
    10: { color: "red", size: 5 },
    11: { color: "red", size: 5 },
    12: { color: "red", size: 5 },
    13: { color: "red", size: 5 },
    14: { color: "red", size: 5 },
    15: { color: "red", size: 5 },
    16: { color: "red", size: 5 },
    17: { color: "red", size: 5 },
    18: { color: "red", size: 5 },
    19: { color: "red", size: 5 },
    20: { color: "red", size: 5 },
  };
  
  // Função para realizar o desenho
  export const drawHand = (predictions, ctx) => {
    if (predictions.length > 0) {
      // Loop para cada previsão
      predictions.forEach((prediction) => {
        const landmarks = prediction.landmarks;
        // Loop nos dedos
        for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
          let finger = Object.keys(fingerJoints)[j];
          //  Loop em cada par de dedo
          for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
            const firstJointIndex = fingerJoints[finger][k];
            const secondJointIndex = fingerJoints[finger][k + 1];
  
            // Desenha o caminho entre cada junta
            ctx.beginPath();
            ctx.moveTo(
              landmarks[firstJointIndex][0],
              landmarks[firstJointIndex][1]
            );
            ctx.lineTo(
              landmarks[secondJointIndex][0],
              landmarks[secondJointIndex][1]
            );
            ctx.strokeStyle = "red";
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }
  
        // Loop through landmarks and draw em
        for (let i = 0; i < landmarks.length; i++) {
          // Get x point
          const x = landmarks[i][0];
          // Get y point
          const y = landmarks[i][1];
          // Start drawing
          ctx.beginPath();
          ctx.arc(x, y, style[i]["size"], 0, 3 * Math.PI);
  
          // Set line color
          ctx.fillStyle = style[i]["color"];
          ctx.fill();
        }
      });
    }
  };