//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponentWithRef, useLsiValues, useContext, useRef, useImperativeHandle } from "uu5g04-hooks";
import Config from "./config/config";
import Lsi from "../config/lsi.js";
//@@viewOff:imports

const AssignmentUpdateForm = createVisualComponentWithRef({
  //@@viewOn:statics
  displayName: Config.TAG + "AssignmentUpdateForm",
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
    const assignmentRef = useRef();

    useImperativeHandle(ref, () => ({
      open: (assignment) => {
        assignmentRef.current = assignment;
        modalRef.current.open({
          header: renderHeader(),
          content: renderForm(assignment),
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
          result.message = <UU5.Bricks.Lsi lsi={Lsi.assignment.textOrFile} />;
          opt.component.setFeedback(result.feedback, result.message);
        }
      }
      return result;
    }

    function handleSave(opt) {
      modalRef.current.close(true, () => {
        onSave(assignmentRef.current, opt.values);
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
          content={<UU5.Bricks.Lsi lsi={Lsi.assignment.header} />}
          info={<UU5.Bricks.Lsi lsi={Lsi.assignment.info} />}
        />
      );
    }

    function renderControls() {
      return <UU5.Forms.ContextControls buttonSubmitProps={{ content: <UU5.Bricks.Lsi lsi={Lsi.assignment.submit} /> }} />;
    }

    function renderForm(assignment) {
      return (
        <UU5.Forms.ContextForm onSave={handleSave} onCancel={handleCancel}>
          <UU5.Bricks.U>
          <UU5.Bricks.Row>
            <UU5.Bricks.Column colWidth="m-6">
              <UU5.Forms.Text 
              label={<UU5.Bricks.Lsi lsi={Lsi.assignment.name} />} 
              name="name" 
              value={assignment.name}
              controlled={false}
              required />
            </UU5.Bricks.Column>
            <UU5.Bricks.Column colWidth="m-6">
              <UU5.Forms.Number
                label={<UU5.Bricks.Lsi lsi={Lsi.assignment.numberOfPointsForFulfillment} />}
                name="numberOfPointsForFulfillment"
                value={assignment.numberOfPointsForFulfillment}
                controlled={false}
              />
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>
        </UU5.Bricks.U>

        <UU5.Forms.Text
        label={<UU5.Bricks.Lsi lsi={Lsi.assignment.description} />}
         name="description" 
         value={assignment.description}
         controlled={false}
         required />

        <UU5.Bricks.U>
          <UU5.Bricks.Row>
            <UU5.Bricks.Column colWidth="m-6">
              <UU5.Forms.Text 
              label={<UU5.Bricks.Lsi lsi={Lsi.assignment.subject} />} 
              name="subjectName" 
              value={assignment.subjectName}
              controlled={false}
              required />
            </UU5.Bricks.Column>
            <UU5.Bricks.Column colWidth="m-6">
              <UU5.Forms.Select
                label={<UU5.Bricks.Lsi lsi={Lsi.assignment.type} />}
                openedGlyphicon="glyphicon-minus"
                closedGlyphicon="glyphicon-plus"
                required
                value={assignment.typeOfA}
                controlled={false}
                valueType={String}
                name="typeOfA"
              >
                <UU5.Forms.Select.Option value="test" />
                <UU5.Forms.Select.Option value="homework" />
                <UU5.Forms.Select.Option value="workshop" />
                <UU5.Forms.Select.Option value="hackaton" />
              </UU5.Forms.Select>
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

export default AssignmentUpdateForm;
