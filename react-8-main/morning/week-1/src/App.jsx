import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Fruit } from "./components/Fruit";
import { CapitalizeWords } from "./mapping/CapitalizeWords";
import { RenderFromData } from "./mapping/RenderFromData";
import { EvensOnly } from "./filtering/EvensOnly";
import { PreFilter } from "./filtering/PreFilter";
import { SumNumbers } from "./reducing/SumNumbers";
import { CountOccurences } from "./reducing/CountOccurences";
import ProblemCard from "./extras/ProblemCard";
import { ConditionalRender } from "./mapping/ConditionalRender";
import { DoubleNumbers } from "./mapping/DoubleNumbers";
import { FormatPrices } from "./mapping/FormatPrices";
import { RankedList } from "./mapping/RankedList";
import { RenderFruitList } from "./mapping/FruitList"
import { FullNames } from "./mapping/FullNames"
import { RenderObjects } from "./mapping/RenderObjects";
import { RenderNumbers }  from "./mapping/RenderNumbers"
import { AdminsOnly } from "./filtering/AdminsOnly";
import { CaseInsensitive } from "./filtering/CaseInsensitive";
import { EmptyState } from "./filtering/EmptyState";
import { LongWordsOnly } from "./filtering/LongWordsOnly";
import { MultipleConditions } from "./filtering/MultipleConditions";
import { PriceGreaterThan20 } from "./filtering/PriceGreaterThan20";
import { CartTotal } from "./reducing/CartTotal"
import { CountItems } from "./reducing/CountItems"
import { GroupUsers } from "./reducing/GroupUsers"
import { LookUp } from "./reducing/LookUp"
import { Stats } from "./reducing/Stats";
import { SumPrices } from "./reducing/SumPrices";


// component
function App() {
  // html

  const cars = [{ name: "BMW", color: "red" }, "Honda", "Toyota"];

  return (
    <>
      {/* Mapping */}
      <RenderFruitList />
      <RenderNumbers />
      <CapitalizeWords />
      <RenderObjects />
      <DoubleNumbers />
      <RenderFromData />
      <ConditionalRender />
      <RankedList/>
      <FormatPrices />
      <FullNames />
      {/* Filtering */}
      <EvensOnly />
      <LongWordsOnly/>
      <AdminsOnly />
      <PriceGreaterThan20 />
      <CaseInsensitive />
      <MultipleConditions/>
      <EmptyState/>
      <PreFilter />
      {/* Reducing */}
      <SumNumbers />
      <CountItems />
      <SumPrices/>
      <GroupUsers />
      <CountOccurences />
      <LookUp/>
      <CartTotal/>
      <Stats/>
    </>
  );
}

export default App;