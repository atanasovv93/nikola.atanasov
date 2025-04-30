export enum GradeLevel {
  FRESHMAN,
  SOPHOMORE,
  JUNIOR,
  SENIOR
}

export function getGradeLevel(age: number): GradeLevel {
  if (age <= 14) return GradeLevel.FRESHMAN;
  if (age <= 15) return GradeLevel.SOPHOMORE;
  if (age <= 16) return GradeLevel.JUNIOR;
  return GradeLevel.SENIOR;
}
