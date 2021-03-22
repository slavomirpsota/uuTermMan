//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponentWithRef, useLsiValues, useContext, useRef, useImperativeHandle } from "uu5g04-hooks";
import Config from "./config/config";
import Lsi from "../config/lsi.js";
//@@viewOff:imports

const SubjectUpdateForm = createVisualComponentWithRef({
  //@@viewOn:statics
  displayName: Config.TAG + "SubjectUpdateForm",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onSave: UU5.PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onSave: () => {},
  },
  //@@viewOff:defaultProps

  render({ onSave }, ref) {
    //@@viewOn:hooks
    const inputLsi = useLsiValues(Lsi);
    // const imageRef = useRef();
    const modalRef = useRef();
    const subjectRef = useRef();

    useImperativeHandle(ref, () => ({
      open: (subject) => {
        subjectRef.current = subject;
        modalRef.current.open({
          header: renderHeader(),
          content: renderForm(subject),
          footer: renderControls(),
        });
      },
    }));
    //@@viewOn:hooks

    //@@viewOn:private
    function validateText(opt) {
      let result = { feedback: "initial", value: opt.value };
      // when there is no event, validation comes from "isValid" method
      if (opt.event === undefined) {
        // text is empty, check file
        if (!opt.value) {
          result.feedback = "error";
          result.message = <UU5.Bricks.Lsi lsi={Lsi.subject.textOrFile} />;
          opt.component.setFeedback(result.feedback, result.message);
        }
      }
      return result;
    }

    function handleSave(opt) {
      modalRef.current.close(true, () => {
        onSave(subjectRef.current, opt.values);
      });
    }

    function handleCancel() {
      modalRef.current.close();
    }
    //@@viewOff:private

    //@@viewOn:render
    function renderHeader() {
      return (
        <UU5.Forms.ContextHeader
          content={<UU5.Bricks.Lsi lsi={Lsi.subject.header} />}
          info={<UU5.Bricks.Lsi lsi={Lsi.subject.info} />}
        />
      );
    }

    function renderControls() {
      return <UU5.Forms.ContextControls buttonSubmitProps={{ content: <UU5.Bricks.Lsi lsi={Lsi.subject.submit} /> }} />;
    }

    function renderForm(subject) {
      return (
        <UU5.Forms.ContextForm onSave={handleSave} onCancel={handleCancel}>
          <UU5.Bricks.U>
            <UU5.Bricks.Row>
              <UU5.Bricks.Column colWidth="m-6">
                <UU5.Forms.Text
                  label={<UU5.Bricks.Lsi lsi={Lsi.subject.name} />}
                  name="name"
                  value={subject.name}
                  inputAttrs={{ maxLength: 255 }}
                  controlled={false}
                  required
                />
              </UU5.Bricks.Column>
              <UU5.Bricks.Column colWidth="m-6">
                <UU5.Forms.Number
                  label={<UU5.Bricks.Lsi lsi={Lsi.subject.credits} />}
                  name="credits"
                  value={subject.credits}
                  controlled={false}
                  required
                />
              </UU5.Bricks.Column>
            </UU5.Bricks.Row>
          </UU5.Bricks.U>

          <UU5.Bricks.U>
            <UU5.Bricks.Row>
              <UU5.Bricks.Column colWidth="m-6">
                <UU5.Forms.Select
                  label={<UU5.Bricks.Lsi lsi={Lsi.subject.supervisor} />}
                  openedGlyphicon="glyphicon-minus"
                  closedGlyphicon="glyphicon-plus"
                  required
                  value={subject.supervisor}
                  controlled={false}
                  valueType={String}
                  name="supervisor"
                >
                  <UU5.Forms.Select.Option value="Monika Biela" />
                  <UU5.Forms.Select.Option value="Igor Čierny" />
                  <UU5.Forms.Select.Option value="Dávid Nový" />
                  <UU5.Forms.Select.Option value="Daniel Verný" />
                  <UU5.Forms.Select.Option value="Lívia Obrovská" />
                  <UU5.Forms.Select.Option value="Otakar Mladší" />
                  <UU5.Forms.Select.Option value="Igor Policajný" />
                  <UU5.Forms.Select.Option value="Radomíra Tišnavská" />
                </UU5.Forms.Select>
              </UU5.Bricks.Column>
              <UU5.Bricks.Column colWidth="m-6">
                <UU5.Forms.Select
                  label={<UU5.Bricks.Lsi lsi={Lsi.subject.languageOfStudy} />}
                  openedGlyphicon="glyphicon-minus"
                  closedGlyphicon="glyphicon-plus"
                  required
                  valueType={String}
                  value={subject.language}
                  controlled={false}
                  name="language"
                >
                  <UU5.Forms.Select.Option value="CZ" />
                  <UU5.Forms.Select.Option value="EN" />
                </UU5.Forms.Select>
              </UU5.Bricks.Column>
            </UU5.Bricks.Row>
          </UU5.Bricks.U>

          <UU5.Forms.TextArea 
          label={<UU5.Bricks.Lsi lsi={Lsi.subject.goalOfTheSubject} />} 
          name="goal" 
          value={subject.goal}
          controlled={false}
          required />

          <UU5.Bricks.U>
            <UU5.Bricks.Row>
              <UU5.Bricks.Column colWidth="m-6">
                <UU5.Forms.Select
                  label={<UU5.Bricks.Lsi lsi={Lsi.subject.degree} />}
                  openedGlyphicon="glyphicon-minus"
                  closedGlyphicon="glyphicon-plus"
                  required
                  valueType={String}
                  value={subject.degree}
                  controlled={false}
                  name="degree"
                >
                  <UU5.Forms.Select.Option value="Bc." />
                  <UU5.Forms.Select.Option value="Ing." />
                </UU5.Forms.Select>
              </UU5.Bricks.Column>
              <UU5.Bricks.Column colWidth="m-6">
                <UU5.Forms.Select
                  label={<UU5.Bricks.Lsi lsi={Lsi.subject.semester} />}
                  openedGlyphicon="glyphicon-minus"
                  closedGlyphicon="glyphicon-plus"
                  valueType={String}
                  required
                  value={subject.semester}
                  controlled={false}
                  name="semester"
                >
                  <UU5.Forms.Select.Option value="winter" />
                  <UU5.Forms.Select.Option value="summer" />
                </UU5.Forms.Select>
              </UU5.Bricks.Column>
            </UU5.Bricks.Row>
          </UU5.Bricks.U>

          <UU5.Forms.TextArea
            label={<UU5.Bricks.Lsi lsi={Lsi.subject.description} />}
            value={subject.description}
            controlled={false}
            name="description"
          />
        </UU5.Forms.ContextForm>
      );
    }
    return <UU5.Forms.ContextModal ref_={modalRef} overflow />;
    //@@viewOff:render
  },
});

export default SubjectUpdateForm;
