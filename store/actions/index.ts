export const UPDATE_LOTTERY = 'UPDATE_LOTTERY';
export const CLEAR_LOTTERY = 'CLEAR_LOTTERY';

export function updateLottery() {
  return { type: UPDATE_LOTTERY };
}

export function clearLottery() {
  return { type: CLEAR_LOTTERY };
}
