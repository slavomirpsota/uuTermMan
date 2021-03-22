//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponentWithRef, useRef, useImperativeHandle } from "uu5g04-hooks";
import Config from "./config/config";
import AssignmentDetailContent from "./assignment-detail-content";
import Css from "./assignment-detail.css";
//@@viewOff:imports

const AssignmentDetail = createVisualComponentWithRef({
  //@@viewOn:statics
  displayName: Config.TAG + "AssignmentDetail",
  //@@viewOff:statics

  render(props, ref) {
    //@@viewOn:hooks
    const modalRef = useRef();

    useImperativeHandle(ref, () => ({
      open: assignment => {
        modalRef.current.open({
          header: assignment.name,
          content: <AssignmentDetailContent assignment={assignment} />,
          className: Css.main()
        });
      }
    }));
    //@@viewOff:hooks

    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:render
    return <UU5.Bricks.Modal ref_={modalRef} />;
    //@@viewOff:render
  }
});

export default AssignmentDetail;