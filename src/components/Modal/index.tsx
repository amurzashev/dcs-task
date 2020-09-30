import React, { FC, useEffect } from "react";
import RModal from "react-modal";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import { Body } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { getModalForecast } from "actions/forecast";
import style from "./style";
import { RootState } from "duck";

RModal.setAppElement("body");

const Modal: FC = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.modal);
  const lat = queryString.parse(location.search).lat as string;
  const lng = queryString.parse(location.search).lng as string;
  const forecast = useSelector((state: RootState) => state.forecasts[modal]);
  const isOpen = Boolean(lat) && Boolean(lng);
  useEffect(() => {
    if (isOpen && !forecast) {
      dispatch(getModalForecast());
    }
  }, [isOpen, dispatch, forecast]);
  return (
    <RModal
      isOpen={isOpen}
      onRequestClose={() => history.push("/")}
      style={style}
    >
      <Body />
    </RModal>
  );
};

export default Modal;
