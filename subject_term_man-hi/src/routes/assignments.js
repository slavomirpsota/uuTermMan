//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useRef } from "uu5g04-hooks";
import Config from "./config/config";
import AssignmentList from "../bricks/assignment-list";
import AssignmentProvider from "../bricks/assignment-provider";
import AssignmentCreate from "../bricks/assignment-create";
import Lsi from "../config/lsi.js";
import AssignmentDetail from "../bricks/assignment-detail";
import AssignmentUpdateForm from "../bricks/assignment-update-form";
//@@viewOff:imports

const Assignments = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Assignments",
  //@@viewOff:statics

  render() {
    //@@viewOn:hooks
    const createAssignmentRef = useRef();
    const updateAssignmentRef = useRef();
    const deleteAssignmentRef = useRef();
    const detailRef = useRef();
    const updateFormRef = useRef();
    //@viewOff:hooks

    //@@viewOn:private
    function showError(content) {
      UU5.Environment.getPage().getAlertBus().addAlert({
        content,
        colorSchema: "red",
      });
    }

    async function handleCreateAssignment(assignment) {
      try {
        await createAssignmentRef.current(assignment);
      } catch {
        showError(`Creation of ${assignment.name} failed!`);
      }
    }

    /* eslint no-unused-vars: "off" */
    async function handleUpdateAssignment(assignment, values) {
      try {
        await updateAssignmentRef.current({ id: assignment.id, ...values });
      } catch {
        showError(`Update of ${assignment.name} failed!`);
      }
    }

    async function handleDeleteAssignment(assignment) {
      try {
        await deleteAssignmentRef.current({ id: assignment.id });
      } catch {
        showError(`Deletion of ${assignment.name} failed!`);
      }
    }
    //@@viewOff:private

    //@@viewOn:render
    function renderLoad() {
      return <UU5.Bricks.Loading />;
    }

    function renderReady(assignments) {
      console.log(assignments);
      return (
        <>
          <div>
            <center>
              <UU5.Bricks.Header level="1" underline={true} content={<UU5.Bricks.Lsi lsi={Lsi.left.assignments} />} />
            </center>
          </div>
          <AssignmentCreate onCreate={handleCreateAssignment} />
          <AssignmentList
            assignments={assignments}
            onDetail={openDetail}
            onUpdate={openUpdateForm}
            onDelete={handleDeleteAssignment}
          />
          <AssignmentUpdateForm ref={updateFormRef} onSave={handleUpdateAssignment} />
          <AssignmentDetail ref={detailRef} />
        </>
      );
    }

    function openDetail(assignment) {
      detailRef.current.open(assignment);
    }

    function openUpdateForm(assignment) {
      updateFormRef.current.open(assignment);
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
        <AssignmentProvider>
          {({ state, data, errorData, pendingData, handlerMap }) => {
            createAssignmentRef.current = handlerMap.createAssignment;
            updateAssignmentRef.current = handlerMap.updateAssignment;
            deleteAssignmentRef.current = handlerMap.deleteAssignment;

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
        </AssignmentProvider>
      </UU5.Bricks.Container>
    );
    //@@viewOff:render
  },
});

export default Assignments;
