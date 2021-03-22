//@@viewOn:imports
import UU5 from "uu5g04";
import Calls from "calls";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Css from "./term.css.js";
import Lsi from "../config/lsi.js";
//@@viewOff:imports

const Term = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Term",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    term: UU5.PropTypes.shape({
      name: UU5.PropTypes.string.isRequired,
      points: UU5.PropTypes.number,
      mark: UU5.PropTypes.number,
    }),
    colorSchema: UU5.PropTypes.string,
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    term: null,
    colorSchema: "blue",
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {},
  },
  //@@viewOff:defaultProps

  render({ term, colorSchema, onDetail, onUpdate, onDelete }) {
    //@@viewOn:private
    function handleDetail() {
      onDetail(term);
    }

    function handleUpdate() {
      onUpdate(term);
    }

    function handleDelete() {
      onDelete(term);
    }
    //@@viewOff:private

    //@@viewOn:render
    if (!term) {
      return null;
    }

    return (
      <UU5.Bricks.Card className={Css.main()} colorSchema={colorSchema}>
        <div className={Css.header()} onClick={handleDetail}>
          {term.name}
        </div>
        <div className={Css.content()} onClick={handleDetail}>
          <div className={Css.text()}>
            <UU5.Bricks.Lsi lsi={Lsi.term.points} /> {term.points}
          </div>
        </div>
        <div className={Css.footer()}>
          <UU5.Bricks.Lsi lsi={Lsi.term.mark} /> {term.mark}  
          <div>
            <UU5.Bricks.Button onClick={handleUpdate} bgStyle="transparent">
              <UU5.Bricks.Icon icon="mdi-pencil" />
            </UU5.Bricks.Button>
            <UU5.Bricks.Button onClick={handleDelete} bgStyle="transparent">
              <UU5.Bricks.Icon icon="mdi-delete" />
            </UU5.Bricks.Button>
          </div>
        </div>
      </UU5.Bricks.Card>
    );
    //@@viewOff:render
  },
});

export default Term;
