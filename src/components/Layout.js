import PanelStepper from "./PanelStepper";
import NavBar from "./NavBar";

import Introduction from "./panels/Introduction";
import DigitalRoots from "./panels/DigitalRoots";
import ModularArithmetic from "./panels/ModularArithmetic";
import PlaceValueNotation from "./panels/PlaceValueNotation";
import Magic9 from "./panels/Magic9";

const Layout = ({ children }) => {
  const panels = [
    ["Introduction", <Introduction />],
    ["Digital Roots", <DigitalRoots />],
    ["Modular Arithmetic", <ModularArithmetic />],
    ["Place Value Notation", <PlaceValueNotation />],
    ["Magic 9", <Magic9 />],
  ];
  return (
    <div>
      <NavBar />
      {children}
      <PanelStepper panels={panels} />
    </div>
  );
};

export default Layout;
