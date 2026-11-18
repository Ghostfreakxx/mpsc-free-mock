import { CanvasTexture, SRGBColorSpace } from "three";

function texture(width: number, height: number, paint: (ctx: CanvasRenderingContext2D) => void) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Study room textures require a 2D canvas.");
  paint(context);
  const map = new CanvasTexture(canvas);
  map.colorSpace = SRGBColorSpace;
  map.anisotropy = 4;
  return map;
}

export function makeRoomTextures() {
  let seed = 41;
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };

  const wood = texture(512, 256, (ctx) => {
    ctx.fillStyle = "#75492f";
    ctx.fillRect(0, 0, 512, 256);
    for (let row = 0; row < 600; row += 1) {
      const y = random() * 256;
      ctx.strokeStyle = row % 3 ? "rgba(33,14,8,.18)" : "rgba(233,161,91,.21)";
      ctx.beginPath();
      ctx.moveTo(-10, y);
      ctx.bezierCurveTo(180, y + random() * 12 - 6, 300, y - random() * 8, 522, y);
      ctx.stroke();
    }
  });
  const cover = texture(384, 512, (ctx) => {
    ctx.fillStyle = "#682323";
    ctx.fillRect(0, 0, 384, 512);
    for (let i = 0; i < 10000; i += 1) {
      ctx.fillStyle = i % 2 ? "rgba(255,170,115,.12)" : "rgba(18,5,3,.22)";
      ctx.fillRect(random() * 384, random() * 512, 1 + random() * 2, 1);
    }
    ctx.strokeStyle = "#d9b777";
    ctx.lineWidth = 3;
    ctx.strokeRect(20, 20, 344, 472);
    ctx.lineWidth = 1;
    ctx.strokeRect(27, 27, 330, 458);
    ctx.fillStyle = "#edce8f";
    ctx.textAlign = "center";
    ctx.font = "18px Georgia, serif";
    ctx.fillText("THE", 192, 170);
    ctx.font = "35px Georgia, serif";
    ctx.fillText("CONSTITUTION", 192, 222);
    ctx.fillText("OF INDIA", 192, 269);
    ctx.beginPath();
    ctx.arc(192, 351, 23, 0, Math.PI * 2);
    ctx.stroke();
    for (let spoke = 0; spoke < 24; spoke += 1) {
      const angle = (spoke * Math.PI) / 12;
      ctx.beginPath();
      ctx.moveTo(192, 351);
      ctx.lineTo(192 + 22 * Math.cos(angle), 351 + 22 * Math.sin(angle));
      ctx.stroke();
    }
  });
  const paper = texture(256, 64, (ctx) => {
    ctx.fillStyle = "#d6b78c";
    ctx.fillRect(0, 0, 256, 64);
    for (let y = 1; y < 64; y += 2) {
      ctx.fillStyle = y % 3 ? "#bc9c76" : "#e9d1aa";
      ctx.fillRect(0, y, 256, 1);
    }
  });
  const preamble = texture(512, 704, (ctx) => {
    ctx.fillStyle = "#e4d1ac";
    ctx.fillRect(0, 0, 512, 704);
    for (let i = 0; i < 9000; i += 1) {
      ctx.fillStyle = "rgba(96,62,22,.09)";
      ctx.fillRect(random() * 512, random() * 704, 1, 1);
    }
    ctx.strokeStyle = "#b99b68";
    ctx.lineWidth = 2;
    ctx.strokeRect(27, 25, 458, 654);
    ctx.fillStyle = "#483825";
    ctx.textAlign = "center";
    ctx.font = "22px Georgia, serif";
    ctx.fillText("CONSTITUTION OF INDIA", 256, 125);
    ctx.font = "bold 49px Georgia, serif";
    ctx.fillText("Preamble", 256, 202);
    ctx.font = "28px Georgia, serif";
    ctx.fillText("WE, THE PEOPLE OF INDIA,", 256, 295);
    ["having solemnly resolved", "to constitute India into a", "SOVEREIGN SOCIALIST", "SECULAR DEMOCRATIC", "REPUBLIC"].forEach((line, index) => {
      ctx.fillText(line, 256, 348 + index * 44);
    });
    ctx.font = "21px Georgia, serif";
    ctx.fillText("1", 256, 635);
  });
  const plaster = texture(512, 512, (ctx) => {
    ctx.fillStyle = "#766358";
    ctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 17000; i += 1) {
      ctx.fillStyle = i % 2 ? "rgba(195,167,144,.15)" : "rgba(31,21,16,.15)";
      ctx.fillRect(random() * 512, random() * 512, 1 + random() * 2, 1 + random());
    }
  });
  const hills = texture(512, 384, (ctx) => {
    const sky = ctx.createLinearGradient(0, 0, 0, 384);
    sky.addColorStop(0, "#373452");
    sky.addColorStop(0.49, "#bc7182");
    sky.addColorStop(0.69, "#f3ae81");
    sky.addColorStop(1, "#714a53");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, 512, 384);
    const sun = ctx.createRadialGradient(382, 163, 4, 382, 163, 92);
    sun.addColorStop(0, "#ffe0b5");
    sun.addColorStop(0.14, "#ffd4a6");
    sun.addColorStop(1, "#ff9e6800");
    ctx.fillStyle = sun;
    ctx.fillRect(0, 0, 512, 384);
    ["#87647a", "#665570", "#49485f", "#323c4d", "#22333b"].forEach((color, ridge) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(0, 384);
      for (let x = 0; x <= 512; x += 4) {
        const y = 196 + ridge * 31 + 30 * Math.sin(x / 116 + ridge)
          + 11 * Math.cos(x / 39 + ridge * 1.5) + random() * 3;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(512, 384);
      ctx.fill();
    });
  });
  const weave = texture(128, 256, (ctx) => {
    ctx.fillStyle = "#722e28";
    ctx.fillRect(0, 0, 128, 256);
    for (const x of [16, 23, 32, 58, 67, 94, 105]) {
      ctx.fillStyle = x % 2 ? "#e0bd84" : "#252627";
      ctx.fillRect(x, 0, x === 58 ? 9 : 4, 256);
    }
    for (let y = 1; y < 256; y += 3) {
      ctx.fillStyle = "rgba(31,17,18,.3)";
      ctx.fillRect(0, y, 128, 1);
    }
  });
  return { wood, cover, paper, preamble, plaster, hills, weave };
}
