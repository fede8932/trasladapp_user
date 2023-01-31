import SheetApp from "../components/sheet/SheetApp";
import React, { useCallback, useMemo, useRef } from "react";

const SheetContainer = function () {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["33%", "100%"], []);
  const handleSheetChanges = useCallback((index) => {
    // console.log("handleSheetChanges", index);
  }, []);
  return <SheetApp bottomSheetRef={bottomSheetRef} snapPoints={snapPoints} handleSheetChanges={handleSheetChanges} />;
};

export default SheetContainer;
