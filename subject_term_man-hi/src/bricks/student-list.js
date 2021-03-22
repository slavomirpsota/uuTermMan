//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Student from "./student";
//@@viewOff:imports

const StudentList = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "StudentList",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    Students: UU5.PropTypes.array,
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    students: [],
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {},
  },
  //@@viewOff:defaultProps

  render({ students, onDetail, onUpdate, onDelete }) {
    //@@viewOn:render
    if (students.length === 0) {
      return <UU5.Common.Error content="No students!" />;
    }

    return (
      <div>
        {students.map((student) => (
          <Student
            key={student.data.id}
            student={student.data}
            colorSchema="yellow"
            onDetail={onDetail}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
    //@@viewOff:render
  },
});

export default StudentList;
