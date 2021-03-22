//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Term from "./term";
//@@viewOff:imports

const TermList = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "TermList",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    terms: UU5.PropTypes.array.isRequired,
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    terms: [],
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {},
  },
  //@@viewOff:defaultProps

  render({ terms, onDetail, onUpdate, onDelete }) {
    //@@viewOn:render
    if (terms.length === 0) {
      return <UU5.Common.Error content="No terms!" />;
    }

    return (
      <UU5.Bricks.Row>
        {terms.map((term) => (
          <UU5.Bricks.Column key={term.data.id} colWidth="xs-12 m-6 l-4 xl-3">
            <Term term={term.data} colorSchema="purple" onDetail={onDetail} onUpdate={onUpdate} onDelete={onDelete} />
          </UU5.Bricks.Column>
        ))}
        <Term />
      </UU5.Bricks.Row>
    );
    //@@viewOff:render
  },
});

export default TermList;
