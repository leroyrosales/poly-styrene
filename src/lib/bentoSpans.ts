/** 12-column grid; at most 3 cards per row (no 4-up row). Cycle: 8+4, 4+4+4, 6+6 */
const CYCLE_LEN = 7;
const FULL_PATTERN = [8, 4, 4, 4, 4, 6, 6];

/** Tail rows also cap at 3 cards (4+4+4, 6+6 pairs, or full-width). */
function tailSpans(count: number): number[] {
	const spans: number[] = [];
	let i = 0;
	while (i < count) {
		const left = count - i;
		if (left === 1) {
			spans.push(12);
			i += 1;
		} else if (left === 2) {
			spans.push(6, 6);
			i += 2;
		} else if (left === 3) {
			spans.push(4, 4, 4);
			i += 3;
		} else {
			spans.push(6, 6);
			i += 2;
		}
	}
	return spans;
}

export function getBentoSpan(index: number, total: number): number {
	const cycleStart = Math.floor(index / CYCLE_LEN) * CYCLE_LEN;
	const posInCycle = index - cycleStart;
	const rem = total - cycleStart;
	if (rem >= CYCLE_LEN) {
		return FULL_PATTERN[posInCycle] ?? 12;
	}
	const tail = tailSpans(rem);
	return tail[posInCycle] ?? 12;
}
