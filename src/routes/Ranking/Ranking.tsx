import { FiltersWrapper } from "./Ranking.styles";
import { Category } from "../../components/ranking/Category/Category";
import React from "react";
import { Scope } from "../../components/ranking/Scope/Scope";
import { Trade } from "../../components/ranking/Trade/Trade";
import { SortOrder } from "../../components/ranking/SortOrder/SortOrder";
import { Average } from "../../components/ranking/Average/Average";
import { Page } from "../../components/common/Page/Page";

export const Ranking = () => {
  return (
    <Page>
      <FiltersWrapper>
        <div>
          <Category />
          <Scope />
        </div>
        <div>
          <Trade />
          <SortOrder />
          <Average />
        </div>
      </FiltersWrapper>
    </Page>
  );
};
