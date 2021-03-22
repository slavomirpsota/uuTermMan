//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent, useRef } from "uu5g04-hooks";
import Config from "./config/config";
import "uu_plus4u5g01-bricks";
import TermList from "../bricks/term-list";
import TermProvider from "../bricks/term-provider";
import TermCreate from "../bricks/term-create";
import WelcomeRow from "../bricks/welcome-row.js";
import Lsi from "../config/lsi.js";
import Plus4U5 from "uu_plus4u5g01";
import TermUpdateForm from "../bricks/term-update-form";
//@@viewOff:imports

const SubjectTerm = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "SubjectTerm",
  //@@viewOff:statics

  render() {
    //@@viewOn:hooks
    const createTermRef = useRef();
    const updateTermRef = useRef();
    const deleteTermRef = useRef();
    const updateFormRef = useRef();
    const CLASS_NAMES = {
      welcomeRow: () => Config.Css.css`
        padding: 56px 0 20px;
        max-width: 624px;
        margin: 0 auto;
        text-align: center;
      
        ${UU5.Utils.ScreenSize.getMinMediaQueries("s", `text-align: left;`)}
      
        .uu5-bricks-header {
          margin-top: 8px;
        }
        
        .plus4u5-bricks-user-photo {
          margin: 0 auto;
        }
      `,
    };
    
    
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

    async function handleCreateTerm(term) {
      try {
        await createTermRef.current(term);
      } catch {
        showError(`Creation of ${term.name} failed!`);
      }
    }

    /* eslint no-unused-vars: "off" */
    async function handleUpdateTerm(term, values) {
      try {
        await updateTermRef.current({ id: term.id, ...values });
      } catch {
        showError(`Update of ${term.name} failed!`);
      }
    }

    async function handleDeleteTerm(term) {
      try {
        await deleteTermRef.current({ id: term.id });
      } catch {
        showError(`Deletion of ${term.name} failed!`);
      }
    }
    //@@viewOff:private

    //@@viewOn:render
    function renderLoad() {
      return <UU5.Bricks.Loading />;
    }

    function renderReady(terms) {
      return (
        <>
        
        <div>
          <UU5.Bricks.Row className={CLASS_NAMES.welcomeRow()}>
            <UU5.Bricks.Column colWidth="x-12 s-3">
              <Plus4U5.Bricks.UserPhoto width="100px" />
            </UU5.Bricks.Column >
            <UU5.Bricks.Column colWidth="x-12 s-9">
              <UU5.Bricks.Header level="2" content={<UU5.Bricks.Lsi lsi={Lsi.auth.welcome} />} />
              <UU5.Common.Identity >
                {({ identity }) => <UU5.Bricks.Header  level="2" content={identity.name} />}
              </UU5.Common.Identity>
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>
        </div>
        <center>
          <UU5.Bricks.Header level="1" underline={true} content={<UU5.Bricks.Lsi lsi={Lsi.left.subjectTerm} />} />
        </center>

          <TermCreate onCreate={handleCreateTerm} />
          <TermList terms={terms} onUpdate={openUpdateForm} onDelete={handleDeleteTerm} />
          <TermUpdateForm ref={updateFormRef} onSave={handleUpdateTerm} />
        </>
      );
    }

    function openUpdateForm(term) {
      updateFormRef.current.open(term);
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
        <TermProvider>
          {({ state, data, errorData, pendingData, handlerMap }) => {
            createTermRef.current = handlerMap.createTerm;
            updateTermRef.current = handlerMap.updateTerm;
            deleteTermRef.current = handlerMap.deleteTerm;

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
        </TermProvider>
      </UU5.Bricks.Container>
    );
    //@@viewOff:render
  }
});

export default SubjectTerm;