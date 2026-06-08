export const RATES: Record<number, number> = {
  5: 120,
  6: 130,
  7: 135,
  8: 150,
  9: 130,
  10: 105,
};

export interface PriceBreakdown {
  nights: number;
  subtotal: number;
  guestSupplement: number;
  total: number;
  avgNightly: number;
}

export function getNightlyRate(date: Date): number {
  const month = date.getMonth() + 1;
  return RATES[month] ?? 130;
}

export function calculateTotal(
  checkIn: Date,
  checkOut: Date,
  guests: number
): PriceBreakdown {
  if (checkOut <= checkIn) {
    return { nights: 0, subtotal: 0, guestSupplement: 0, total: 0, avgNightly: 0 };
  }

  let subtotal = 0;
  let nights = 0;
  const current = new Date(checkIn);

  while (current < checkOut) {
    subtotal += getNightlyRate(current);
    nights++;
    current.setDate(current.getDate() + 1);
  }

  const supplementPerNight = guests === 3 ? 15 : guests === 4 ? 25 : 0;
  const guestSupplement = supplementPerNight * nights;
  const total = subtotal + guestSupplement;
  const avgNightly = nights > 0 ? Math.round(total / nights) : 0;

  return { nights, subtotal, guestSupplement, total, avgNightly };
}
