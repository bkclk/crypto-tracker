import React, { useEffect } from "react";
import { CoinContainer, CoinItems, Divcolor, HomeLink } from "./Coin.style";
import { connect } from "react-redux";
import { getCoin, clearCoin } from "../../actions";
const Coin = ({ getCoin, coin }) => {
  useEffect(() => {
    getCoin(window.location.pathname);
    return () => clearCoin();
  }, []);
  const renderList = () => {
    if (coin.length < 1) {
      console.log("boş");
    } else {
      return (
        <>
          <img src={coin.image.large} alt="" />
          <div>{coin.name}</div>
          <div>{coin.symbol}</div>
          <div>Rank: {coin.market_cap_rank}</div>
          <div>{coin.market_data.current_price.usd}</div>
          <Divcolor
            color={
              coin.market_data.price_change_percentage_24h < 0 ? "red" : "green"
            }
          >
            {coin.market_data.price_change_percentage_24h}
          </Divcolor>
          <a href={coin.links.homepage[0]}>{coin.links.homepage[0]} </a>
        </>
      );
    }
  };
  return (
    <CoinContainer>
      <CoinItems>{renderList()}</CoinItems>
      <HomeLink to="/">Home</HomeLink>
    </CoinContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    coin: state.coin,
  };
};
export default connect(mapStateToProps, { getCoin, clearCoin })(Coin);
