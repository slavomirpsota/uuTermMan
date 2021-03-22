//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5g04-forms";
import Lsi from "../config/lsi.js";
//@@viewOff:imports

const TermCreateForm = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "TermCreateForm",
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
      <UU5.Forms.Form onSave={onSave} onCancel={onCancel}>
        <UU5.Forms.Text label={<UU5.Bricks.Lsi lsi={Lsi.assignment.subject} />}  name="name"  required/>
        <UU5.Forms.Number label={<UU5.Bricks.Lsi lsi={Lsi.term.points} />} name="points" />
        <UU5.Forms.Number label={<UU5.Bricks.Lsi lsi={Lsi.term.mark} />} name="mark" />
        <UU5.Forms.Controls />
      </UU5.Forms.Form>
    );
    //@@viewOff:render
  },
});

export default TermCreateForm;
