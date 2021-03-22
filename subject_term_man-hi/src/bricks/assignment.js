//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Css from "./karticka.css.js";
import Lsi from "../config/lsi.js";
//@@viewOff:imports

const Assignment = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Assignment",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    assignment: UU5.PropTypes.shape({
      name: UU5.PropTypes.string.isRequired,
      subjectName: UU5.PropTypes.string.isRequired,
      typeOfA: UU5.PropTypes.string.isRequired,
    }),
    colorSchema: UU5.PropTypes.string,
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    assignment: null,
    colorSchema: "blue",
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {},
  },
  //@@viewOff:defaultProps

  render({ assignment, colorSchema, onDetail, onUpdate, onDelete }) {
    //@@viewOn:private
    function handleDetail() {
      onDetail(assignment);
    }

    function handleUpdate() {
      onUpdate(assignment);
    }

    function handleDelete() {
      onDelete(assignment);
    }
    //@@viewOff:private

    //@@viewOn:render
    if (!assignment) {
      return null;
    }

    return (
      <UU5.Bricks.Card className={Css.main()} colorSchema={colorSchema}>
        <div className={Css.header()} onClick={handleDetail}>
          {assignment.name}
        </div>
        <div className={Css.content()} onClick={handleDetail}>
          <div className={Css.text()}>
            {assignment.subjectName}
          </div>
        </div>
        <div className={Css.footer()}>
          {assignment.typeOfA}
          <div>
            <UU5.Bricks.Button
              colorSchema="primary"
              content={<UU5.Bricks.Lsi lsi={Lsi.assignment.evaluateAssignment} />}
            />
            <UU5.Bricks.Button onClick={handleUpdate} bgStyle="transparent">
              <UU5.Bricks.Icon className={Css.edit()} icon="mdi-pencil" />
            </UU5.Bricks.Button>
            <UU5.Bricks.Button onClick={handleDelete} bgStyle="transparent">
              <UU5.Bricks.Icon className={Css.mazanie()} icon="mdi-delete" />
            </UU5.Bricks.Button>
          </div>
        </div>
      </UU5.Bricks.Card>
    );
    //@@viewOff:render
  },
});

export default Assignment;
