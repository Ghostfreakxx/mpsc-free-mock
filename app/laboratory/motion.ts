export function projectile(speed: number, angleDegrees: number, gravity: number) {
  const radians = angleDegrees * Math.PI / 180;
  const horizontal = speed * Math.cos(radians);
  const vertical = speed * Math.sin(radians);
  const duration = 2 * vertical / gravity;
  const range = horizontal * duration;
  const apex = vertical ** 2 / (2 * gravity);
  return {
    duration, range, apex,
    position: (time: number) => ({ x: horizontal * time, y: Math.max(0, vertical * time - gravity * time ** 2 / 2) }),
  };
}

export function pendulum(length: number, angleDegrees: number, gravity: number) {
  const amplitude = angleDegrees * Math.PI / 180;
  const frequency = Math.sqrt(gravity / length);
  return {
    period: 2 * Math.PI / frequency,
    angle: (time: number) => amplitude * Math.cos(frequency * time),
  };
}
