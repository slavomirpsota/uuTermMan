//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5g04-forms";
import Lsi from "../config/lsi.js";
//@@viewOff:imports

const StudentCreateForm = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "StudentCreateForm",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onSubmit: UU5.PropTypes.func,
    onCancel: UU5.PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onSubmit: () => {},
    onCancel: () => {},
  },
  //@@viewOff:defaultProps

  render({ onSave, onCancel }) {
    //@@viewOn:render
    return (
      <UU5.Forms.Form onSave={onSave} onCancel={onCancel} labelColWidth="xs-12 p-1" inputColWidth="xs-12 m-11">
        <UU5.Bricks.U>
          <UU5.Bricks.Row>
            <UU5.Bricks.Column colWidth="m-6">
              <UU5.Forms.Text label={<UU5.Bricks.Lsi lsi={Lsi.student.name} />} name="name" required />
            </UU5.Bricks.Column>
            <UU5.Bricks.Column colWidth="m-6">
              <UU5.Forms.Text label={<UU5.Bricks.Lsi lsi={Lsi.student.surname} />} name="surname" required />
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
                required
              />
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>
        </UU5.Bricks.U>

        <UU5.Forms.Controls />
      </UU5.Forms.Form>
    );
    //@@viewOff:render
  },
});

export default StudentCreateForm;
