/* eslint-disable */
const studentCreateDtoInType = shape({
    name: string(200).isRequired(),
    surname: string(200).isRequired(),
    gender: string(200).isRequired(),
    dateOfBirth: string(200).isRequired()
  })

  const studentGetDtoInType = shape({
    id: id().isRequired()
  })

  const studentUpdateDtoInType = shape({
    id: id().isRequired(),
    name: string(200),
    surname: string(200),
    gender: string(200),
    dateOfBirth: string(200),
  })
  const studentListDtoInType = shape({
    order: oneOf(["asc", "desc"]),
    // subjectId: id(),
    pageInfo: shape({
      pageIndex: integer(),
      pageSize: integer()
    })
  })
  const studentDeleteDtoInType = shape({
    id: id().isRequired()
  })