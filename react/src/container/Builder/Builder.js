import React, { useState } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import ImplementContent from "../../components/ImplementContent/ImplementContent";
import ShowControls from "../../components/ShowControls/ShowControls";
const Builder = (props) => {
  const [state, setState] = useState({
    content: {
      cont: 0,
      cont1: 0,
      cont2: 0,
    },
  });

  const addContentHandler = (type) => {
    const oldCount = state.content[type];
    const updatedCount = oldCount + 1;
    const updatedContent = {
      ...state.content,
    };
    updatedContent[type] = updatedCount;
    // const priceAddition = INGREDIENTS_PRICES[type];
    // const oldPrice = state.totalPrice;
    // const newPrice = oldPrice + priceAddition;

    setState({
      content: updatedContent,
    });
  };

  return (
    <Auxiliary>
      <ImplementContent content={state.content} />
      <ShowControls contentAdded={addContentHandler} />
    </Auxiliary>
  );
};

export default Builder;
