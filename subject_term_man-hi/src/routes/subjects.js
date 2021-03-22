//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useRef } from "uu5g04-hooks";
import Config from "./config/config";
import SubjectList from "../bricks/subject-list";
import SubjectProvider from "../bricks/subject-provider";
import SubjectCreate from "../bricks/subject-create";
import Lsi from "../config/lsi.js";
import SubjectDetail from "../bricks/subject-detail";
import SubjectUpdateForm from "../bricks/subject-update-form";
//@@viewOff:imports

const Subjects = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Subjects",
  //@@viewOff:statics

  render() {
    //@@viewOn:hooks
    const createSubjectRef = useRef();
    const updateSubjectRef = useRef();
    const deleteSubjectRef = useRef();
    const detailRef = useRef();
    const updateFormRef = useRef();
    //@viewOff:hooks

    //@@viewOn:private
    function showError(content) {
      UU5.Environment.getPage()
        .getAlertBus()
        .addAlert({
          content,
          colorSchema: "red"
        });
    }

    async function handleCreateSubject(subject) {
      try {
        await createSubjectRef.current(subject);
      } catch {
        showError(`Creation of ${subject.name} failed!`);
      }
    }

    / eslint no-unused-vars: "off" /
    async function handleUpdateSubject(subject, values) {
      try {
        await updateSubjectRef.current({ id: subject.id, ...values });
      } catch {
        showError(`Update of ${subject.name} failed!`);
      }
    }

    async function handleDeleteSubject(subject) {
      try {
        await deleteSubjectRef.current({ id: subject.id });
      } catch {
        showError(`Deletion of ${subject.name} failed!`);
      }
    }
    //@@viewOff:private

    //@@viewOn:render
    function renderLoad() {
      return <UU5.Bricks.Loading />;
    }

    function renderReady(subjects) {
      console.log(subjects);
      return (
        <>
         <div>
                  <center>
                    <UU5.Bricks.Header
                      level="1"
                      underline={true}
                      content={<UU5.Bricks.Lsi lsi={Lsi.left.subjects} />}
                    />
                  </center>
                </div>
          <SubjectCreate onCreate={handleCreateSubject} />
          <SubjectList subjects={subjects} onDetail={openDetail} onUpdate={openUpdateForm} onDelete={handleDeleteSubject} />
          <SubjectUpdateForm ref={updateFormRef} onSave={handleUpdateSubject} />
          <SubjectDetail ref={detailRef} />
        </>
      );
    }

    function renderError(errorData) {
      switch (errorData.operation) {
        case "load":
        case "loadNext":
        default:
          return <UU5.Bricks.Error content="Error happened!" error={errorData.error} errorData={errorData.data} />;
      }
    }

    function openUpdateForm(subject) {
      updateFormRef.current.open(subject);
    }

    function openDetail(subject) {
      detailRef.current.open(subject);
    }

    return (
      <UU5.Bricks.Container>
        <SubjectProvider>
          {({ state, data, errorData, pendingData, handlerMap }) => {
            createSubjectRef.current = handlerMap.createSubject;
            updateSubjectRef.current = handlerMap.updateSubject;
            deleteSubjectRef.current = handlerMap.deleteSubject;

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
        </SubjectProvider>
      </UU5.Bricks.Container>
    );
    //@@viewOff:render
  }
});

export default Subjects;