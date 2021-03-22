//@@viewOn:imports
import { createComponent, useDataList } from "uu5g04-hooks";
import Calls from "calls";
import Config from "./config/config";
//@@viewOff:imports

const AssignmentProvider = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "AssignmentProvider",
  //@@viewOff:statics

  render({ children }) {
    //@@viewOn:hooks
    let listDataValues = useDataList({
      pageSize: 200,
      handlerMap: {
        load: Calls.listAssignments,
        createAssignment: Calls.createAssignment,
        updateAssignment: Calls.updateAssignment,
        deleteAssignment: Calls.deleteAssignment
      }
    });

    let { state, data, newData, pendingData, errorData, handlerMap } = listDataValues;
    //@@viewOff:hooks

    //@@viewOn:render
    return children({
      state,
      data,
      newData,
      pendingData,
      errorData,
      handlerMap
    });
    //@@viewOff:render
  }
});

export default AssignmentProvider;