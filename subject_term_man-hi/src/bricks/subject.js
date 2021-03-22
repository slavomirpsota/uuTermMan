//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Css from "./karticka.css.js";
import Lsi from "../config/lsi.js";
//@@viewOff:imports

const Subject = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Subject",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    subject: UU5.PropTypes.shape({
      name: UU5.PropTypes.string,
      credits: UU5.PropTypes.number,
      degree: UU5.PropTypes.string,
    }),
    colorSchema: UU5.PropTypes.string,
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    subject: null,
    colorSchema: "blue",
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {},
  },
  //@@viewOff:defaultProps

  render({ subject, colorSchema, onDetail, onUpdate, onDelete }) {
    //@@viewOn:private
    function handleDetail() {
      onDetail(subject);
    }

    function handleUpdate() {
      onUpdate(subject);
    }

    function handleDelete() {
      onDelete(subject);
    }
    //@@viewOff:private

    //@@viewOn:render
    if (!subject) {
      return null;
    }

    return (
      <UU5.Bricks.Card className={Css.main()} colorSchema={colorSchema}>
        <div className={Css.header()} onClick={handleDetail}>
          {subject.name}
        </div>
        <div className={Css.content()} onClick={handleDetail}>
          <div className={Css.text()}>
            <UU5.Bricks.Lsi lsi={Lsi.subject.credits} /> {subject.credits}
            {subject.image && (
              <UU5.Bricks.Image
                className={Css.image()}
                src={Calls.getCommandUri(`/uu-app-binarystore/getBinaryData?code=${subject.image}`)}
                authenticate
              />
            )}
          </div>
        </div>
        <div className={Css.footer()}>
          {subject.degree}
          <div>
            <UU5.Bricks.Button colorSchema="primary" content={<UU5.Bricks.Lsi lsi={Lsi.subject.studySubject} />} />
            <UU5.Bricks.Button onClick={handleUpdate} bgStyle="transparent">
            <UU5.Bricks.Icon  className={Css.edit()} icon="mdi-pencil" />
            </UU5.Bricks.Button>
            <UU5.Bricks.Button onClick={handleDelete} bgStyle="transparent">
              <UU5.Bricks.Icon className={Css.mazanie()} icon="mdi-delete" />
            </UU5.Bricks.Button>
          </div>
        </div>
      </UU5.Bricks.Card>
    );
    //@@viewOff:render
  },
});

export default Subject;
