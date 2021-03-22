//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent } from "uu5g04-hooks";
import Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-bricks";
import Config from "./config/config.js";
import Lsi from "../config/lsi.js";
import WelcomeRow from "../bricks/welcome-row.js";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "School",
  //@@viewOff:statics
};

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

export const School = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = UU5.Common.VisualComponent.getAttrs(props);
    return (
      <div {...attrs}>
        <Plus4U5.App.ArtifactSetter territoryBaseUri="" artifactId="" />
        <center>
          <UU5.Bricks.Header level="1" underline={true} content={<UU5.Bricks.Lsi lsi={Lsi.left.school} />} />

          <UU5.Bricks.U>
            <UU5.Bricks.Row>
              <UU5.Bricks.Column colWidth="m-6">
                <WelcomeRow textPadding="14px" icon="uubml-strategy-4">
                  <UU5.Bricks.Lsi lsi={Lsi.auth.intro} />
                </WelcomeRow>
              </UU5.Bricks.Column>
              <UU5.Bricks.Column colWidth="m-6">
                <WelcomeRow textPadding="14px" icon="uubml-info">
                  <UU5.Bricks.Lsi lsi={Lsi.auth.clientSide} />
                </WelcomeRow>
              </UU5.Bricks.Column>
            </UU5.Bricks.Row>
          </UU5.Bricks.U>

          <UU5.Bricks.Row>
            <UU5.Bricks.Column colWidth="m-6">
              <UU5.Bricks.P className="font-size-l center">
                <UU5.Bricks.Em>
                  <UU5.Bricks.Lsi lsi={Lsi.school.building} />
                </UU5.Bricks.Em>
              </UU5.Bricks.P>

              <Plus4U5.Bricks.Image
                src="https://cdn.pixabay.com/photo/2016/08/13/15/29/johns-hopkins-university-1590925_960_720.jpg"
                style="maxHeight: 400px"
              />
            </UU5.Bricks.Column>
            <UU5.Bricks.Column colWidth="m-6">
              <UU5.Bricks.P className="font-size-l center">
                <UU5.Bricks.Em>
                  <UU5.Bricks.Lsi lsi={Lsi.school.mascot} />
                </UU5.Bricks.Em>
              </UU5.Bricks.P>
              <Plus4U5.Bricks.Image
                src="https://cdn.pixabay.com/photo/2016/11/23/01/15/adorable-1851650_960_720.jpg"
                style="maxHeight: 400px"
              />
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>
          <UU5.Bricks.P>
            <UU5.Bricks.P className="font-size-l center">
              <UU5.Bricks.Em>
                <UU5.Bricks.Lsi lsi={Lsi.school.location} />
              </UU5.Bricks.Em>
            </UU5.Bricks.P>
            <UU5.Bricks.GoogleMap
              mapType="roadmap"
              width="50%"
              height="300px"
              latitude={50.0755381}
              longitude={14.43780049999998}
              googleApiKey="AIzaSyBkv-K9tpS-MrvvRKOpIGEj7H5wwdHD9pA"
              markers={[
                {
                  latitude: 50.0755381,
                  longitude: 14.43780049999998,
                  label: "Prague",
                  title: "Capital city",
                  icon:
                    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
                },
                {
                  latitude: 50.0754616,
                  longitude: 14.43686409999998,
                  animation: "drop",
                  onClick: (map, marker, event) => console.log(map, marker, event),
                },
              ]}
            />
          </UU5.Bricks.P>
        </center>
      </div>
    );
    //@@viewOff:render
  },
});

export default School;
