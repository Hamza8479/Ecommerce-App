import React, { useState } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import ImplementContent from "../../components/ImplementContent/ImplementContent";
import ShowControls from "../../components/ShowControls/ShowControls";
const Builder = (props) => {
  const [state, setState] = useState({
    content: {
      cont: 2,
      cont1: 1,
      cont2: 1,
    },
  });

  return (
    <Auxiliary>
      <ImplementContent content={state.content} />
      <ShowControls />
    </Auxiliary>
  );
};

export default Builder;
