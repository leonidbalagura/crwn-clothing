import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./collection-preview-styles";

const CollectionPreview = ({ title, routeName, items, match }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer to={`${match.url}/${routeName}`}>{title}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
