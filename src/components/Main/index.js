import React, { useEffect } from "react";

import {
  Container,
  Nav,
  Img,
  SearchInput,
  CryptoRow,
  Divcolor,
} from "./Main.style";
import ImgNav from "../../crypto-logo.jpg";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { getCryptos } from "../../actions";

let Main = (props) => {
  useEffect(() => {
    props.getCryptos();
  });

  const renderList = () => {
    return props.cryptoList.map((crypto) => (
      <CryptoRow key={crypto.id} to={`/${crypto.id}`}>
        <img src={crypto.image} alt="" />
        <div>{crypto.name}</div>
        <div>{crypto.symbol}</div>
        <div>{crypto.current_price}</div>

        <Divcolor
          color={crypto.price_change_percentage_24h < 0 ? "red" : "green"}
        >
          {crypto.price_change_percentage_24h}
        </Divcolor>
        <div className="market">Market Cap:{crypto.market_cap}</div>
      </CryptoRow>
    ));
  };

  const change = (formValues) => {
    const inputvalue = formValues.target.value.toLowerCase();

    props.getCryptos(inputvalue);
  };

  return (
    <>
      <Container>
        <Nav>
          <Img src={ImgNav} alt="" />
        </Nav>
        <SearchInput
          onChange={change}
          name="searchbar"
          component="input"
          label="Search"
          type="text"
        />

        <br />
        {renderList()}
      </Container>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    formInput: state.form.searchForm,
    cryptoList: state.crypto,
  };
};
Main = reduxForm({
  form: "searchForm",
})(Main);
export default connect(mapStateToProps, { getCryptos })(Main);
