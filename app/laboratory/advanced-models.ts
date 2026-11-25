const radians = (value: number) => value * Math.PI / 180;

export function frictionTrial(force: number, mass: number, surface: number) {
  const normal = mass * 9.81;
  const staticLimit = surface * normal;
  const kinetic = 0.8 * staticLimit;
  const moving = force > staticLimit;
  const resistance = moving ? kinetic : force;
  return { moving, resistance, net: force - resistance, acceleration: (force - resistance) / mass };
}

export function refractedAngle(incident: number, entryIndex: number, exitIndex: number): number | null {
  const sine = entryIndex / exitIndex * Math.sin(radians(incident));
  if (sine > 1 + 1e-10) return null;
  return Math.asin(Math.min(1, sine)) * 180 / Math.PI;
}
