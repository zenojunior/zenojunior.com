import { differenceInYears } from 'date-fns'

export const useYearsWorked = (): string => {
  const startedWorkDate = '01/01/2014';
  return differenceInYears(new Date(), new Date(startedWorkDate)).toString();
}