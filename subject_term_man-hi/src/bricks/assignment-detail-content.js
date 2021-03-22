//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useContext } from "uu5g04-hooks";
import Calls from "calls";
//import TermManInstanceContext from "./term-man-instance-context";
import Config from "./config/config";
import Css from "./assignment-detail-content.css";
import Lsi from "../config/lsi.js";
//@@viewOff:imports

function Line({ icon, content }) {
  return (
    <div className={Css.line()}>
      <UU5.Bricks.Icon className={Css.icon()} icon={icon} />
      {content}
    </div>
  );
}

const AssignmentDetailContent = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "AssignmentDetailContent",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    assignment: UU5.PropTypes.shape({
      name: UU5.PropTypes.string.isRequired,
      credits: UU5.PropTypes.number.isRequired,
      degree: UU5.PropTypes.string.isRequired,
      goal: UU5.PropTypes.string,
      description: UU5.PropTypes.string,
      language: UU5.PropTypes.string,
      semester: UU5.PropTypes.string,
      supervisor: UU5.PropTypes.string,
    }).isRequired
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    assignment: null
  },
  //@@viewOff:defaultProps

  render({ assignment }) {
    //@@viewOn:hooks
    //@@viewOff:hooks

    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:render
    return (
      <div>
        <Line icon="uubml-field-of-study" content={assignment.subjectName} />
        <Line icon=" uubml-visual-component" content={assignment.typeOfA} />
        <Line icon="uubml-role-description" content={assignment.description} />
        <Line icon="uubml-money" content={assignment.numberOfPointsForFulfillment} />
      </div>
    );
    //@@viewOff:render
  }
});

export default AssignmentDetailContent;