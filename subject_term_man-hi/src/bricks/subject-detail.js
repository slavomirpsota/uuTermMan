//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponentWithRef, useRef, useImperativeHandle } from "uu5g04-hooks";
import Config from "./config/config";
import SubjectDetailContent from "./subject-detail-content";
import Css from "./subject-detail.css";
//@@viewOff:imports

const SubjectDetail = createVisualComponentWithRef({
  //@@viewOn:statics
  displayName: Config.TAG + "SubjectDetail",
  //@@viewOff:statics

  render(props, ref) {
    //@@viewOn:hooks
    const modalRef = useRef();

    useImperativeHandle(ref, () => ({
      open: subject => {
        modalRef.current.open({
          header: subject.name,
          content: <SubjectDetailContent subject={subject} />,
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

export default SubjectDetail;