/* eslint-disable */
const schoolGetDtoInType = shape({
  id: id().isRequired()
});

const schoolUpdateDtoInType = shape({
  id: id().isRequired(),
  name: string(200),
  description: uu5String(4000)
});