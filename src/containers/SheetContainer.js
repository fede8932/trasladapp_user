import SheetApp from "../components/sheet/SheetApp";
import React, { useCallback, useMemo, useRef } from "react";

const SheetContainer = function () {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["28%", "100%"], []);
  const handleSheetChanges = useCallback((index) => {
    // console.log("handleSheetChanges", index);
  }, []);
  const indexCero = () => {
    bottomSheetRef.current.collapse()
  }
  return (
    <SheetApp
      bottomSheetRef={bottomSheetRef}
      snapPoints={snapPoints}
      handleSheetChanges={handleSheetChanges}
      indexCero={indexCero}
    />
  );
};

export default SheetContainer;
