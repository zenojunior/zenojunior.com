import type { Period } from '../types';

function formatDuration(start: Date, end: Date): string {
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const remaining = months % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} year${years > 1 ? 's' : ''}`);
  if (remaining) parts.push(`${remaining} month${remaining > 1 ? 's' : ''}`);
  return parts.join(' ');
}

export function formatMonth(d: string): string {
  return new Date(d).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function formatPeriod(period: Period) {
  if (!period.start && period.end) {
    const year = new Date(period.end).getFullYear();
    return { range: String(year), duration: undefined, isOngoing: false, startISO: '' };
  }

  if (!period.start) {
    return { range: '', duration: undefined, isOngoing: false, startISO: '' };
  }

  const range = formatMonth(period.start) + (period.end ? ` - ${formatMonth(period.end)}` : ' - Present');
  const isOngoing = !period.end;

  let duration: string | undefined;
  if (period.hours) {
    duration = `${period.hours} hours`;
  } else {
    duration = formatDuration(new Date(period.start), period.end ? new Date(period.end) : new Date());
  }

  return { range, duration, isOngoing, startISO: period.start };
}
