//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Css from "./karticka.css.js";
import Lsi from "../config/lsi.js";
//@@viewOff:imports

const Student = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Student",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    student: UU5.PropTypes.shape({
      name: UU5.PropTypes.string.isRequired,
      surname: UU5.PropTypes.string.isRequired,
      gender: UU5.PropTypes.string.isRequired,
      dateOfBirth: UU5.PropTypes.string.isRequired,
    }),
    colorSchema: UU5.PropTypes.string,
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    student: null,
    colorSchema: "blue",
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {},
  },
  //@@viewOff:defaultProps

  render({ student, colorSchema, onDetail, onUpdate, onDelete }) {
    //@@viewOn:private
    function handleDetail() {
      onDetail(student);
    }

    function handleUpdate() {
      onUpdate(student);
    }

    function handleDelete() {
      onDelete(student);
    }
    //@@viewOff:private

    //@@viewOn:render
    if (!student) {
      return null;
    }

    return (
      <UU5.Bricks.Card className={Css.main()} colorSchema={colorSchema}>
        <div className={Css.header()} onClick={handleDetail}>
          {student.name} {student.surname}
        </div>
        <div className={Css.content()} onClick={handleDetail}>
          <div className={Css.text()}>
            {student.gender}
            {student.image && (
              <UU5.Bricks.Image
                className={Css.image()}
                src={Calls.getCommandUri(`/uu-app-binarystore/getBinaryData?code=${student.image}`)}
                authenticate
              />
            )}
          </div>
        </div>
        <div className={Css.footer()}>
          {student.dateOfBirth}
          <div>
            <UU5.Bricks.Button colorSchema="primary" content={<UU5.Bricks.Lsi lsi={Lsi.student.viewSubjectTerm} />} />
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

export default Student;
