export function resistiveCircuit(voltage: number, first: number, second: number, parallel: boolean) {
  const resistance = parallel ? first * second / (first + second) : first + second;
  const current = voltage / resistance;
  return {
    resistance, current,
    firstCurrent: parallel ? voltage / first : current,
    secondCurrent: parallel ? voltage / second : current,
    firstVoltage: parallel ? voltage : first * current,
    secondVoltage: parallel ? voltage : second * current,
  };
}
