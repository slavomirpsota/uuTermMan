//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useRef } from "uu5g04-hooks";
import Config from "./config/config";
import StudentList from "../bricks/student-list";
import StudentProvider from "../bricks/student-provider";
import StudentCreate from "../bricks/student-create";
import Lsi from "../config/lsi.js";
import StudentUpdateForm from "../bricks/student-update-form";
//@@viewOff:imports

const Students = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Students",
  //@@viewOff:statics

  render() {
    //@@viewOn:hooks
    const createStudentRef = useRef();
    const updateStudentRef = useRef();
    const deleteStudentRef = useRef();
    const updateFormRef = useRef();
    //@viewOff:hooks

    //@@viewOn:private
    function showError(content) {
      UU5.Environment.getPage().getAlertBus().addAlert({
        content,
        colorSchema: "red",
      });
    }

    async function handleCreateStudent(student) {
      try {
        await createStudentRef.current(student);
      } catch {
        showError(`Creation of ${student.name} failed!`);
      }
    }

    / eslint no-unused-vars: "off" /;
    async function handleUpdateStudent(student, values) {
      try {
        await updateStudentRef.current({ id: student.id, ...values });
      } catch {
        showError(`Update of ${student.name} failed!`);
      }
    }

    async function handleDeleteStudent(student) {
      try {
        await deleteStudentRef.current({ id: student.id });
      } catch {
        showError(`Deletion of ${student.name} failed!`);
      }
    }
    //@@viewOff:private

    //@@viewOn:render
    function renderLoad() {
      return <UU5.Bricks.Loading />;
    }

    function renderReady(students) {
      console.log(students);
      return (
        <>
          <div>
            <center>
              <UU5.Bricks.Header level="1" underline={true} content={<UU5.Bricks.Lsi lsi={Lsi.left.students} />} />
            </center>
          </div>
          <StudentCreate onCreate={handleCreateStudent} />
          <StudentList students={students} onUpdate={openUpdateForm} onDelete={handleDeleteStudent} />
          <StudentUpdateForm ref={updateFormRef} onSave={handleUpdateStudent} />
        </>
      );
    }

    function openUpdateForm(student) {
      updateFormRef.current.open(student);
    }
    function renderError(errorData) {
      switch (errorData.operation) {
        case "load":
        case "loadNext":
        default:
          return <UU5.Bricks.Error content="Error happened!" error={errorData.error} errorData={errorData.data} />;
      }
    }

    return (
      <UU5.Bricks.Container>
        <StudentProvider>
          {({ state, data, errorData, pendingData, handlerMap }) => {
            createStudentRef.current = handlerMap.createStudent;
            updateStudentRef.current = handlerMap.updateStudent;
            deleteStudentRef.current = handlerMap.deleteStudent;

            switch (state) {
              case "pending":
              case "pendingNoData":
                return renderLoad();
              case "error":
              case "errorNoData":
                return renderError(errorData);
              case "itemPending":
              case "ready":
              case "readyNoData":
              default:
                return renderReady(data);
            }
          }}
        </StudentProvider>
      </UU5.Bricks.Container>
    );
    //@@viewOff:render
  },
});

export default Students;
