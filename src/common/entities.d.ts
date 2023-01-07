interface ContactEntity {
  id: number,
  sort?: number,
  phone_number: string,
  working_schedule: string,
  email: { email: string }[],
  subway: string,
  map: string,
  translations?: [],
}