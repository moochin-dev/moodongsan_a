import React from "react";
import { NavBar } from "../../components/common/NavBar/NavBar";
import { Filters } from "../../components/common/Filters/Filters";
import { Contents } from "../../components/common/Contents/Contents";
import { Page } from "../../components/common/Page/Page";

const selectedFilters = ["평당가", "시별", "매매", "이 달 평균", "저렴한 순"];

export const Ranking = () => {
  return (
    <Page>
      <Filters selectedFilters={selectedFilters} />
      <Contents>
        <div></div>
      </Contents>
      <NavBar />
    </Page>
  );
};
