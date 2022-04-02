export const getCryptos = (inputvalue) => async (dispatch) => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );
  const data = await res.json();
  let list = await data;
  if (inputvalue) {
    list = await data.filter((coin) =>
      coin.name.toLowerCase().includes(inputvalue)
    );
  }
  dispatch({ type: "GET_CRYPTO", payload: list });
};

export const getCoin = (id) => async (dispatch) => {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins${id}`);
  const data = await res.json();
  dispatch({ type: "GET_COIN", payload: data });
};

export const clearCoin = () => {
  return {
    type: "CLEAR_COIN",
  };
};
