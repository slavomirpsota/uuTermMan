//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Assignment from "./assignment";
//@@viewOff:imports

const AssignmentList = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "AssignmentList",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    Assignments: UU5.PropTypes.array.isRequired,
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    assignments: [],
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {},
  },
  //@@viewOff:defaultProps

  render({ assignments, onDetail, onUpdate, onDelete }) {
    //@@viewOn:render
    if (assignments.length === 0) {
      return <UU5.Common.Error content="No assignments!" />;
    }

    return (
      <div>
        {assignments.map((assignment) => (
          <Assignment
            key={assignment.data.id}
            assignment={assignment.data}
            colorSchema="cyan"
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

export default AssignmentList;
