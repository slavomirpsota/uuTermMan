//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Subject from "./subject";
//@@viewOff:imports

const SubjectList = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "SubjectList",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    Subjects: UU5.PropTypes.array,
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    subjects: [],
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {},
  },
  //@@viewOff:defaultProps

  render({ subjects, onDetail, onUpdate, onDelete }) {
    //@@viewOn:render
    if (subjects.length === 0) {
      return <UU5.Common.Error content="No subjects!" />;
    }

    return (
      <div>
        {subjects.map((subject) => (
          <Subject
            key={subject.data.id}
            subject={subject.data}
            colorSchema="green"
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

export default SubjectList;
