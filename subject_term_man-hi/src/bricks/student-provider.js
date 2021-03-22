//@@viewOn:imports
import { createComponent, useDataList } from "uu5g04-hooks";
import Calls from "calls";
import Config from "./config/config";
//@@viewOff:imports

const StudentProvider = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "StudentProvider",
  //@@viewOff:statics

  render({ children }) {
    //@@viewOn:hooks
    let listDataValues = useDataList({
      pageSize: 200,
      handlerMap: {
        load: Calls.listStudents,
        createStudent: Calls.createStudent,
        updateStudent: Calls.updateStudent,
        deleteStudent: Calls.deleteStudent
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

export default StudentProvider;
