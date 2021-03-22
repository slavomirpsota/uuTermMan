//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5g04-forms";
import Lsi from "../config/lsi.js";
//@@viewOff:imports

const SubjectCreateForm = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "SubjectCreateForm",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onSubmit: UU5.PropTypes.func,
    onCancel: UU5.PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onSubmit: () => {},
    onCancel: () => {},
  },
  //@@viewOff:defaultProps

  render({ onSave, onCancel }) {
    //@@viewOn:render
    return (
      <UU5.Forms.Form onSave={onSave} onCancel={onCancel} labelColWidth="xs-12 p-1" inputColWidth="xs-12 m-11">
        <UU5.Bricks.U>
          <UU5.Bricks.Row>
            <UU5.Bricks.Column colWidth="m-6">
              <UU5.Forms.Text label={<UU5.Bricks.Lsi lsi={Lsi.subject.name} />} name="name" required />
            </UU5.Bricks.Column>
            <UU5.Bricks.Column colWidth="m-6">
              <UU5.Forms.Number label={<UU5.Bricks.Lsi lsi={Lsi.subject.credits} />} name="credits" required />
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
                name="language"
              >
                <UU5.Forms.Select.Option value="CZ" />
                <UU5.Forms.Select.Option value="EN" />
              </UU5.Forms.Select>
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>
        </UU5.Bricks.U>

        <UU5.Forms.TextArea label={<UU5.Bricks.Lsi lsi={Lsi.subject.goalOfTheSubject} />} name="goal" required />

        <UU5.Bricks.U>
          <UU5.Bricks.Row>
            <UU5.Bricks.Column colWidth="m-6">
              <UU5.Forms.Select
                label={<UU5.Bricks.Lsi lsi={Lsi.subject.degree} />}
                openedGlyphicon="glyphicon-minus"
                closedGlyphicon="glyphicon-plus"
                required
                valueType={String}
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
                name="semester"
              >
                <UU5.Forms.Select.Option value="winter" />
                <UU5.Forms.Select.Option value="summer" />
              </UU5.Forms.Select>
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>
        </UU5.Bricks.U>

        <UU5.Forms.TextArea label={<UU5.Bricks.Lsi lsi={Lsi.subject.description} />} name="description" />
        <UU5.Forms.Controls />
      </UU5.Forms.Form>
    );
    //@@viewOff:render
  },
});

export default SubjectCreateForm;
