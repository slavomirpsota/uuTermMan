/* eslint-disable */

const initDtoInType = shape({
  uuAppProfileAuthorities: uri().isRequired("uuBtLocationUri"),
  uuBtLocationUri: uri(),
  name: uu5String(512),
  sysState: oneOf(["active","restricted","readOnly"]),
  adviceNote: shape({
    message: uu5String().isRequired(),
    severity: oneOf(["debug", "info", "warning", "error", "fatal"]),
    estimatedEndTime: datetime(),
  }),
});
const subjectTermManInstanceLoadDtoInType = shape({

});

const subjectTermManInstanceUpdateDtoInType = shape({
  state: oneOf(["active", "closed"]),
  name: uu5String(4000)
})
