import React, { FC } from "react";
import RModal from "react-modal";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

RModal.setAppElement("#root");

const Modal: FC = () => {
  const location = useLocation();
  const history = useHistory();
  const lat = queryString.parse(location.search).lat;
  const lng = queryString.parse(location.search).lng;
  const isOpen = Boolean(lat) && Boolean(lng);
  return (
    <RModal isOpen={isOpen} onRequestClose={() => history.push("/")}>
      modal
    </RModal>
  );
};

export default Modal;
