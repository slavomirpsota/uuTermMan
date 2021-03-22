//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponentWithRef, useLsiValues, useContext, useRef, useImperativeHandle } from "uu5g04-hooks";
import Config from "./config/config";
import Lsi from "../config/lsi.js";
//@@viewOff:imports

const StudentUpdateForm = createVisualComponentWithRef({
  //@@viewOn:statics
  displayName: Config.TAG + "StudentUpdateForm",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onSave: UU5.PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onSave: () => {},
  },
  //@@viewOff:defaultProps

  render({ onSave }, ref) {
    //@@viewOn:hooks
    const inputLsi = useLsiValues(Lsi);
    // const imageRef = useRef();
    const modalRef = useRef();
    const studentRef = useRef();

    useImperativeHandle(ref, () => ({
      open: (student) => {
        studentRef.current = student;
        modalRef.current.open({
          header: renderHeader(),
          content: renderForm(student),
          footer: renderControls(),
        });
      },
    }));
    //@@viewOn:hooks

    //@@viewOn:private
    function validateText(opt) {
      let result = { feedback: "initial", value: opt.value };
      // when there is no event, validation comes from "isValid" method
      if (opt.event === undefined) {
        // text is empty, check file
        if (!opt.value) {
          result.feedback = "error";
          result.message = <UU5.Bricks.Lsi lsi={Lsi.student.textOrFile} />;
          opt.component.setFeedback(result.feedback, result.message);
        }
      }
      return result;
    }

    function handleSave(opt) {
      modalRef.current.close(true, () => {
        onSave(studentRef.current, opt.values);
      });
    }

    function handleCancel() {
      modalRef.current.close();
    }
    //@@viewOff:private

    //@@viewOn:render
    function renderHeader() {
      return (
        <UU5.Forms.ContextHeader
          content={<UU5.Bricks.Lsi lsi={Lsi.student.header} />}
          info={<UU5.Bricks.Lsi lsi={Lsi.student.info} />}
        />
      );
    }

    function renderControls() {
      return <UU5.Forms.ContextControls buttonSubmitProps={{ content: <UU5.Bricks.Lsi lsi={Lsi.student.submit} /> }} />;
    }

    function renderForm(student) {
      return (
        <UU5.Forms.ContextForm onSave={handleSave} onCancel={handleCancel}>
             <UU5.Bricks.U>
          <UU5.Bricks.Row>
            <UU5.Bricks.Column colWidth="m-6">
              <UU5.Forms.Text 
              label={<UU5.Bricks.Lsi lsi={Lsi.student.name} />} 
              name="name" 
              value={student.name}
              controlled={false}
              required />
            </UU5.Bricks.Column>
            <UU5.Bricks.Column colWidth="m-6">
              <UU5.Forms.Text 
              label={<UU5.Bricks.Lsi lsi={Lsi.student.surname} />} 
              name="surname" 
              value={student.surname}
              controlled={false}
              required />
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>
        </UU5.Bricks.U>

        <UU5.Bricks.U>
          <UU5.Bricks.Row>
            <UU5.Bricks.Column colWidth="m-6">
              <UU5.Forms.Select
                label={<UU5.Bricks.Lsi lsi={Lsi.student.gender} />}
                openedGlyphicon="glyphicon-minus"
                closedGlyphicon="glyphicon-plus"
                required
                value={student.gender}
              controlled={false}
                valueType={String}
                name="gender"
              >
                <UU5.Forms.Select.Option value="male" />
                <UU5.Forms.Select.Option value="female" />
              </UU5.Forms.Select>
            </UU5.Bricks.Column>
            <UU5.Bricks.Column colWidth="m-6">
              <UU5.Forms.DatePicker
                label={<UU5.Bricks.Lsi lsi={Lsi.student.dateOfBirth} />}
                valueType="string"
                size="m"
                feedback="success"
                message="success message"
                name="dateOfBirth"
                value={student.dateOfBirth}
              controlled={false}
                required
              />
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>
        </UU5.Bricks.U>

        </UU5.Forms.ContextForm>
      );
    }
    return <UU5.Forms.ContextModal ref_={modalRef} overflow />;
    //@@viewOff:render
  },
});

export default StudentUpdateForm;
