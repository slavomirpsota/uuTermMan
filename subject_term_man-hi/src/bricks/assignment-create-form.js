//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5g04-forms";
import Lsi from "../config/lsi.js";
//@@viewOff:imports

const AssignmentCreateForm = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "AssignmentCreateForm",
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
              <UU5.Forms.Text 
              label={<UU5.Bricks.Lsi lsi={Lsi.assignment.name} />} 
              name="name" 
              required />
            </UU5.Bricks.Column>
            <UU5.Bricks.Column colWidth="m-6">
              <UU5.Forms.Number
                label={<UU5.Bricks.Lsi lsi={Lsi.assignment.numberOfPointsForFulfillment} />}
                name="numberOfPointsForFulfillment"
              />
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>
        </UU5.Bricks.U>

        <UU5.Forms.Text
        label={<UU5.Bricks.Lsi lsi={Lsi.assignment.description} />}
         name="description" 
         required />

        <UU5.Bricks.U>
          <UU5.Bricks.Row>
            <UU5.Bricks.Column colWidth="m-6">
              <UU5.Forms.Text 
              label={<UU5.Bricks.Lsi lsi={Lsi.assignment.subject} />} 
              name="subjectName" 
              required />
            </UU5.Bricks.Column>
            <UU5.Bricks.Column colWidth="m-6">
              <UU5.Forms.Select
                label={<UU5.Bricks.Lsi lsi={Lsi.assignment.type} />}
                openedGlyphicon="glyphicon-minus"
                closedGlyphicon="glyphicon-plus"
                required
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

        <UU5.Forms.Controls />
      </UU5.Forms.Form>
    );
    //@@viewOff:render
  },
});

export default AssignmentCreateForm;
