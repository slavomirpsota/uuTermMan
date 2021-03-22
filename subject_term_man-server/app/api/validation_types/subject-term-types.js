/* eslint-disable */
const subjectTermDeleteDtoInType = shape({
	id: id().isRequired()
})

const subjectTermCreateDtoInType = shape({
	name: string(200).isRequired(),
	points: integer(),
	mark: integer()
})

const subjectTermGetDtoInType = shape({
	id: id().isRequired()
})

const subjectTermUpdateDtoInType = shape({
	id: id().isRequired(),
	name: string(200).isRequired(),
	points: integer(),
	mark: integer()
})

const studentListDtoInType = shape({
	order: oneOf(["asc", "desc"]),
	pageInfo: shape({
		pageIndex: integer(),
		pageSize: integer()
	})
})
