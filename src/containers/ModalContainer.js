import ModalApp from "../components/modal/ModalApp";
import { useState } from "react";

const ModalContainer = function (props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ModalApp
      {...props}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    />
  );
};

export default ModalContainer;
