//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponentWithRef, useLsiValues, useContext, useRef, useImperativeHandle } from "uu5g04-hooks";
import Config from "./config/config";
import Lsi from "./assignment-delete-form.lsi";

//@@viewOff:imports

const AssignmentDeleteForm = createVisualComponentWithRef({
  //@@viewOn:statics
  displayName: Config.TAG + "AssignmentDeleteForm",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onSave: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onSave: () => {}
  },
  //@@viewOff:defaultProps

  render({ onSave }, ref) {
    //@@viewOn:hooks
   // const inputLsi = useLsiValues(Lsi);
    const imageRef = useRef();
    const modalRef = useRef();
    const assignmentRef = useRef();

    useImperativeHandle(ref, () => ({
      open: assignment => {
        assignmentRef.current = assignment;
        modalRef.current.open({
          header: renderHeader(),
          content: renderForm(del),
          footer: renderControls()
        });
      }
    }));
    //@@viewOn:hooks

    //@@viewOn:private
    function handleDelete(opt) {
      modalRef.current.close(true, () => {
        onSave(handleDelete);
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
          content="mmmmm"
          info="mmmm"
        />
      );
    }

    function renderControls() {
      return <UU5.Forms.ContextControls buttonSubmitProps={{ content: "mmm" }} />;
    }

    function renderForm(assignment) {
        return (
          <UU5.Forms.ContextForm onSave={handleDelete} onCancel={handleCancel}>
            <UU5.Forms.Text
            label={assignment.name}
            name="name"
            value={assignment.name}
            inputAttrs={{ maxLength: 255 }}
            controlled={false}
            required
          />
          </UU5.Forms.ContextForm>
        );
      }
  
  
      return <UU5.Forms.ContextModal ref_={modalRef} overflow />;

  
  }});

export default AssignmentDeleteForm;