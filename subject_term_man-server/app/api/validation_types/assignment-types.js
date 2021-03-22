/* eslint-disable */
const assignmentCreateDtoInType = shape({
    name: string(200).isRequired(),
    description: string(400), 
    subjectName: string(200).isRequired(),
    typeOfA: string(200),
    numberOfPointsForFulfillment: integer().isRequired()
  });
  const assignmentGetDtoInType = shape({
    id: id().isRequired()
  });

  const assignmentListDtoInType = shape({
    order: oneOf(["asc", "desc"]),
    pageInfo: shape({
      pageIndex: integer(),
      pageSize: integer()
  })
  });
  const assignmentUpdateDtoInType = shape({
    id: id().isRequired(),
    name: string(200).isRequired(),
    description: string(400), 
    subjectName: string(200).isRequired(),
    typeOfA: string(200),
    numberOfPointsForFulfillment: number().isRequired()
  });
  const assignmentDeleteDtoInType = shape({
    id: id().isRequired()
  });
