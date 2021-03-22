//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useContext } from "uu5g04-hooks";
import Calls from "calls";
//import TermManInstanceContext from "./term-man-instance-context";
import Config from "./config/config";
import Css from "./subject-detail-content.css";
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

const SubjectDetailContent = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "SubjectDetailContent",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    subject: UU5.PropTypes.shape({
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
    subject: null
  },
  //@@viewOff:defaultProps

  render({ subject }) {
    //@@viewOn:hooks
    //@@viewOff:hooks

    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:render
    return (
      <div>
        <Line icon="uubml-calendar" content={subject.semester} />
        <Line icon="uubml-money-dollars" content={subject.credits} />
        <Line icon="uubml-map" content={subject.language} />
        <Line icon="uubml-lector-teacher" content={subject.supervisor} />
        <Line icon="uubml-role-description" content={subject.description} />
        <Line icon="uubml-goal-2" content={subject.goal} />
        <Line icon="uubml-student-plus" content={subject.degree} />
      </div>
    );
    //@@viewOff:render
  }
});

export default SubjectDetailContent;