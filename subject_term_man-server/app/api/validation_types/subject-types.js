/* eslint-disable */
const subjectCreateDtoInType = shape({
  name: string(200).isRequired(),
  credits: integer().isRequired(),
  supervisor: string().isRequired(),
  goal: string(400),
  degree: string(400),
  language: string(400),
  semester: string(400),
  description: string(400)
});

const subjectGetDtoInType = shape({
  id: id().isRequired()
});

const subjectUpdateDtoInType = shape({
  id: id().isRequired(),
  name: string(200).isRequired(),
  credits: integer().isRequired(),
  supervisor: string().isRequired(),
  goal: string(400),
  degree: string(400),
  language: string(400),
  semester: string(400),
  description: string(400)
});

const subjectListDtoInType = shape({
  order: oneOf(["asc", "desc"]),
  pageInfo: shape({
    pageIndex: integer(),
    pageSize: integer()
  })
});

const subjectDeleteDtoInType = shape({
  id: id().isRequired()
});


