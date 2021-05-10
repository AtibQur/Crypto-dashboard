// Getting API's from https://www.coingecko.com/api/documentations/v3#/

// Getting API prices/info

  async function getData() {
      // BTC API
    const api_url_0 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&sparkline=false&price_change_percentage=1h'];
      const response_0 = await fetch(api_url_0);
      const data = await response_0.json();
      // BTC price
      document.getElementById('btc').textContent = data[0]["current_price"];
      // BTC Market Cap
      var btcMarketCap = parseInt(data[0]["market_cap"]) / 1000000000000;
      btcMarketCap = btcMarketCap.toFixed(2);
      document.getElementById('mcap-btc').textContent = btcMarketCap;
      // BTC 24H volume
      var btcVol = parseInt(data[0]["total_volume"]) / 1000000000;
      btcVol = btcVol.toFixed(2);
      document.getElementById("btc-volume").textContent = btcVol;
      // BTC % volume
      var btcpercentage = data[0]['price_change_percentage_1h_in_currency'];
      btcpercentage = btcpercentage.toFixed(2);
      document.getElementById('btc-percentage').textContent = btcpercentage;
      
      if (btcpercentage < 0) {
        document.getElementById('btc-percentage').style.color = negative;
      } else if (btcpercentage > 0) {
        document.getElementById('btc-percentage').style.color = positive;
      } else {
        document.getElementById('btc-percentage').style.color = "gray";
      }
      // BTC rank number
      document.getElementById('mcapbtc-rank').textContent = data[0]["market_cap_rank"];

      // ETH API
      const api_url_1 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&sparkline=false&price_change_percentage=1h'];
      const response_1 = await fetch(api_url_1);
      const data_1 = await response_1.json();
      // ETH price
      document.getElementById('eth').textContent = data_1[0]["current_price"];
      // ETH Market Cap
      var ethMarketCap = parseInt(data_1[0]["market_cap"]) / 1000000000000;
      ethMarketCap = ethMarketCap.toFixed(2);
      document.getElementById('mcap-eth').textContent = ethMarketCap;
      // ETH 24H volume
      var ethVol = parseInt(data_1[0]["total_volume"]) / 1000000000;
      ethVol = ethVol.toFixed(2);
      document.getElementById("eth-volume").textContent = ethVol;
      // ETH % volume
      var ethpercentage = data_1[0]['price_change_percentage_1h_in_currency'];
      ethpercentage = ethpercentage.toFixed(2);
      document.getElementById('eth-percentage').textContent = ethpercentage;
      
      if (ethpercentage < 0) {
        document.getElementById('eth-percentage').style.color = negative;
      } else if (ethpercentage > 0) {
        document.getElementById('eth-percentage').style.color = positive;
      } else {
        document.getElementById('eth-percentage').style.color = "gray";
      }
      // ETH rank number
      document.getElementById('mcapeth-rank').textContent = data_1[0]["market_cap_rank"];

      // BNB API
      const api_url_2 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin&sparkline=false&price_change_percentage=1h'];
      const response_2 = await fetch(api_url_2);
      const data_2 = await response_2.json();
      // BNB price
      document.getElementById('bnb').textContent = data_2[0]["current_price"];
      // BNB Market Cap
      var bnbMarketCap = parseInt(data_2[0]["market_cap"]) / 1000000000000;
      bnbMarketCap = bnbMarketCap.toFixed(5);
      document.getElementById('mcap-bnb').textContent = bnbMarketCap;
      // BNB 24H volume
      var bnbVol = parseInt(data_2[0]["total_volume"]) / 1000000000;
      bnbVol = bnbVol.toFixed(2);
      document.getElementById("bnb-volume").textContent = bnbVol;
      // BNB % volume
      var bnbpercentage = data_2[0]['price_change_percentage_1h_in_currency'];
      bnbpercentage = bnbpercentage.toFixed(2);
      document.getElementById('bnb-percentage').textContent = bnbpercentage;
      
      if (bnbpercentage < 0) {
        document.getElementById('bnb-percentage').style.color = negative;
      } else if (bnbpercentage > 0) {
        document.getElementById('bnb-percentage').style.color = positive;
      } else {
        document.getElementById('bnb-percentage').style.color = "gray";
      }
      // BNB rank number
      document.getElementById('mcapbnb-rank').textContent = data_2[0]["market_cap_rank"];

      // XRP API
      const api_url_3 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ripple&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h'];
      const response_3 = await fetch(api_url_3);
      const data_3 = await response_3.json();
      // XRP price
      document.getElementById('xrp').textContent = data_3[0]["current_price"];
      // XRP Market Cap
      var xrpMarketCap = parseInt(data_3[0]["market_cap"]) / 1000000000000;
      xrpMarketCap = xrpMarketCap.toFixed(5);
      document.getElementById('mcap-xrp').textContent = xrpMarketCap;
      // XRP 24H volume
      var xrpVol = parseInt(data_3[0]["total_volume"]) / 1000000000;
      xrpVol = xrpVol.toFixed(2);
      document.getElementById("xrp-volume").textContent = xrpVol;
      // XRP % volume
      var xrppercentage = data_3[0]['price_change_percentage_1h_in_currency'];
      xrppercentage = xrppercentage.toFixed(2);
      document.getElementById('xrp-percentage').textContent = xrppercentage;
      
      if (xrppercentage < 0) {
        document.getElementById('xrp-percentage').style.color = negative;
      } else if (xrppercentage > 0) {
        document.getElementById('xrp-percentage').style.color = positive;
      } else {
        document.getElementById('xrp-percentage').style.color = "gray";
      }
      // XRP rank number
      document.getElementById('mcapxrp-rank').textContent = data_3[0]["market_cap_rank"];

      // doge API
      const api_url_4 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=dogecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h'];
      const response_4 = await fetch(api_url_4);
      const data_4 = await response_4.json();
      // doge price
      document.getElementById('doge').textContent = data_4[0]["current_price"];
      // doge Market Cap
      var dogeMarketCap = parseInt(data_4[0]["market_cap"]) / 1000000000000;
      dogeMarketCap = dogeMarketCap.toFixed(5);
      document.getElementById('mcap-doge').textContent = dogeMarketCap;
      // doge 24H volume
      var dogeVol = parseInt(data_4[0]["total_volume"]) / 1000000000;
      dogeVol = dogeVol.toFixed(2);
      document.getElementById("doge-volume").textContent = dogeVol;
      // doge % volume
      var dogepercentage = data_4[0]['price_change_percentage_1h_in_currency'];
      dogepercentage = dogepercentage.toFixed(2);
      document.getElementById('doge-percentage').textContent = dogepercentage;
      
      if (dogepercentage < 0) {
        document.getElementById('doge-percentage').style.color = negative;
      } else if (dogepercentage > 0) {
        document.getElementById('doge-percentage').style.color = positive;
      } else {
        document.getElementById('doge-percentage').style.color = "gray";
      }
      // doge rank number
      document.getElementById('mcapdoge-rank').textContent = data_4[0]["market_cap_rank"];   

      // dot API
      const api_url_5 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=polkadot&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h'];
      const response_5 = await fetch(api_url_5);
      const data_5 = await response_5.json();
      // dot price
      document.getElementById('dot').textContent = data_5[0]["current_price"];
      // dot Market Cap
      var dotMarketCap = parseInt(data_5[0]["market_cap"]) / 1000000000000;
      dotMarketCap = dotMarketCap.toFixed(5);
      document.getElementById('mcap-dot').textContent = dotMarketCap;
      // dot 24H volume
      var dotVol = parseInt(data_5[0]["total_volume"]) / 1000000000;
      dotVol = dotVol.toFixed(2);
      document.getElementById("dot-volume").textContent = dotVol;
      // dot % volume
      var dotpercentage = data_5[0]['price_change_percentage_1h_in_currency'];
      dotpercentage = dotpercentage.toFixed(2);
      document.getElementById('dot-percentage').textContent = dotpercentage;
      
      if (dotpercentage < 0) {
        document.getElementById('dot-percentage').style.color = negative;
      } else if (dotpercentage > 0) {
        document.getElementById('dot-percentage').style.color = positive;
      } else {
        document.getElementById('dot-percentage').style.color = "gray";
      }
      // dot rank number
      document.getElementById('mcapdot-rank').textContent = data_5[0]["market_cap_rank"];

      // ada API
      const api_url_6 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=cardano&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h'];
      const response_6 = await fetch(api_url_6);
      const data_6 = await response_6.json();
      // ada price
      document.getElementById('ada').textContent = data_6[0]["current_price"];
      // ada Market Cap
      var adaMarketCap = parseInt(data_6[0]["market_cap"]) / 1000000000000;
      adaMarketCap = adaMarketCap.toFixed(5);
      document.getElementById('mcap-ada').textContent = adaMarketCap;
      // ada 24H volume
      var adaVol = parseInt(data_6[0]["total_volume"]) / 1000000000;
      adaVol = adaVol.toFixed(2);
      document.getElementById("ada-volume").textContent = adaVol;
      // ada % volume
      var adapercentage = data_6[0]['price_change_percentage_1h_in_currency'];
      adapercentage = adapercentage.toFixed(2);
      document.getElementById('ada-percentage').textContent = adapercentage;
      
      if (adapercentage < 0) {
        document.getElementById('ada-percentage').style.color = negative;
      } else if (adapercentage > 0) {
        document.getElementById('ada-percentage').style.color = positive;
      } else {
        document.getElementById('ada-percentage').style.color = "gray";
      }
      // ada rank number
      document.getElementById('mcapada-rank').textContent = data_6[0]["market_cap_rank"];

      // uni API
      const api_url_7 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=uniswap&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h'];
      const response_7 = await fetch(api_url_7);
      const data_7 = await response_7.json();
      // uni price
      document.getElementById('uni').textContent = data_7[0]["current_price"];
      // uni Market Cap
      var uniMarketCap = parseInt(data_7[0]["market_cap"]) / 1000000000000;
      uniMarketCap = uniMarketCap.toFixed(5);
      document.getElementById('mcap-uni').textContent = uniMarketCap;
      // uni 24H volume
      var uniVol = parseInt(data_7[0]["total_volume"]) / 1000000000;
      uniVol = uniVol.toFixed(2);
      document.getElementById("uni-volume").textContent = uniVol;
      // uni % volume
      var unipercentage = data_7[0]['price_change_percentage_1h_in_currency'];
      unipercentage = unipercentage.toFixed(2);
      document.getElementById('uni-percentage').textContent = unipercentage;
      
      if (unipercentage < 0) {
        document.getElementById('uni-percentage').style.color = negative;
      } else if (unipercentage > 0) {
        document.getElementById('uni-percentage').style.color = positive;
      } else {
        document.getElementById('uni-percentage').style.color = "gray";
      }
      // uni rank number
      document.getElementById('mcapuni-rank').textContent = data_7[0]["market_cap_rank"];

      // ltc API
      const api_url_8 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=litecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h'];
      const response_8 = await fetch(api_url_8);
      const data_8 = await response_8.json();
      // ltc price
      document.getElementById('ltc').textContent = data_8[0]["current_price"];
      // ltc Market Cap
      var ltcMarketCap = parseInt(data_8[0]["market_cap"]) / 1000000000000;
      ltcMarketCap = ltcMarketCap.toFixed(5);
      document.getElementById('mcap-ltc').textContent = ltcMarketCap;
      // ltc 24H volume
      var ltcVol = parseInt(data_8[0]["total_volume"]) / 1000000000;
      ltcVol = ltcVol.toFixed(2);
      document.getElementById("ltc-volume").textContent = ltcVol;
      // ltc % volume
      var ltcpercentage = data_8[0]['price_change_percentage_1h_in_currency'];
      ltcpercentage = ltcpercentage.toFixed(2);
      document.getElementById('ltc-percentage').textContent = ltcpercentage;
      
      if (ltcpercentage < 0) {
        document.getElementById('ltc-percentage').style.color = negative;
      } else if (ltcpercentage > 0) {
        document.getElementById('ltc-percentage').style.color = positive;
      } else {
        document.getElementById('ltc-percentage').style.color = "gray";
      }
      // ltc rank number
      document.getElementById('mcapltc-rank').textContent = data_8[0]["market_cap_rank"];

      // link API
      const api_url_9 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=uniswap&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h'];
      const response_9 = await fetch(api_url_9);
      const data_9 = await response_9.json();
      // link price
      document.getElementById('link').textContent = data_9[0]["current_price"];
      // link Market Cap
      var linkMarketCap = parseInt(data_9[0]["market_cap"]) / 1000000000000;
      linkMarketCap = linkMarketCap.toFixed(5);
      document.getElementById('mcap-link').textContent = linkMarketCap;
      // link 24H volume
      var linkVol = parseInt(data_9[0]["total_volume"]) / 1000000000;
      linkVol = linkVol.toFixed(2);
      document.getElementById("link-volume").textContent = linkVol;
      // link % volume
      var linkpercentage = data_9[0]['price_change_percentage_1h_in_currency'];
      linkpercentage = linkpercentage.toFixed(2);
      document.getElementById('link-percentage').textContent = linkpercentage;
      
      if (linkpercentage < 0) {
        document.getElementById('link-percentage').style.color = negative;
      } else if (linkpercentage > 0) {
        document.getElementById('link-percentage').style.color = positive;
      } else {
        document.getElementById('link-percentage').style.color = "gray";
      }
      // link rank number
      document.getElementById('mcaplink-rank').textContent = data_9[0]["market_cap_rank"];

      // theta API
      const api_url_10 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=theta-token&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h'];
      const response_10 = await fetch(api_url_10);
      const data_10 = await response_10.json();
      // theta price
      document.getElementById('theta').textContent = data_10[0]["current_price"];
      // theta Market Cap
      var thetaMarketCap = parseInt(data_10[0]["market_cap"]) / 1000000000000;
      thetaMarketCap = thetaMarketCap.toFixed(5);
      document.getElementById('mcap-theta').textContent = thetaMarketCap;
      // theta 24H volume
      var thetaVol = parseInt(data_10[0]["total_volume"]) / 1000000000;
      thetaVol = thetaVol.toFixed(2);
      document.getElementById("theta-volume").textContent = thetaVol;
      // theta % volume
      var thetapercentage = data_10[0]['price_change_percentage_1h_in_currency'];
      thetapercentage = thetapercentage.toFixed(2);
      document.getElementById('theta-percentage').textContent = thetapercentage;
      
      if (thetapercentage < 0) {
        document.getElementById('theta-percentage').style.color = negative;
      } else if (thetapercentage > 0) {
        document.getElementById('theta-percentage').style.color = positive;
      } else {
        document.getElementById('theta-percentage').style.color = "gray";
      }
      // theta rank number
      document.getElementById('mcaptheta-rank').textContent = data_10[0]["market_cap_rank"];

      // theta API
      const api_url_11 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin-cash&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h'];
      const response_11 = await fetch(api_url_11);
      const data_11 = await response_11.json();
      // bch price
      document.getElementById('bch').textContent = data_11[0]["current_price"];
      // bch Market Cap
      var bchMarketCap = parseInt(data_11[0]["market_cap"]) / 1000000000000;
      bchMarketCap = bchMarketCap.toFixed(5);
      document.getElementById('mcap-bch').textContent = bchMarketCap;
      // bch 24H volume
      var bchVol = parseInt(data_11[0]["total_volume"]) / 1000000000;
      bchVol = bchVol.toFixed(2);
      document.getElementById("bch-volume").textContent = bchVol;
      // bch % volume
      var bchpercentage = data_11[0]['price_change_percentage_1h_in_currency'];
      bchpercentage = bchpercentage.toFixed(2);
      document.getElementById('bch-percentage').textContent = bchpercentage;
      
      if (bchpercentage < 0) {
        document.getElementById('bch-percentage').style.color = negative;
      } else if (bchpercentage > 0) {
        document.getElementById('bch-percentage').style.color = positive;
      } else {
        document.getElementById('bch-percentage').style.color = "gray";
      }
      // bch rank number
      document.getElementById('mcapbch-rank').textContent = data_11[0]["market_cap_rank"];

      // xlm API
      const api_url_12 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=stellar&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h'];
      const response_12 = await fetch(api_url_12);
      const data_12 = await response_12.json();
      // xlm price
      document.getElementById('xlm').textContent = data_12[0]["current_price"];
      // xlm Market Cap
      var xlmMarketCap = parseInt(data_12[0]["market_cap"]) / 1000000000000;
      xlmMarketCap = xlmMarketCap.toFixed(5);
      document.getElementById('mcap-xlm').textContent = xlmMarketCap;
      // xlm 24H volume
      var xlmVol = parseInt(data_12[0]["total_volume"]) / 1000000000;
      xlmVol = xlmVol.toFixed(2);
      document.getElementById("xlm-volume").textContent = xlmVol;
      // xlm % volume
      var xlmpercentage = data_12[0]['price_change_percentage_1h_in_currency'];
      xlmpercentage = xlmpercentage.toFixed(2);
      document.getElementById('xlm-percentage').textContent = xlmpercentage;
      
      if (xlmpercentage < 0) {
        document.getElementById('xlm-percentage').style.color = negative;
      } else if (xlmpercentage > 0) {
        document.getElementById('xlm-percentage').style.color = positive;
      } else {
        document.getElementById('xlm-percentage').style.color = "gray";
      }
      // xlm rank number
      document.getElementById('mcapxlm-rank').textContent = data_12[0]["market_cap_rank"];

      // fil API
      const api_url_13 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=filecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h'];
      const response_13 = await fetch(api_url_13);
      const data_13 = await response_13.json();
      // fil price
      document.getElementById('fil').textContent = data_13[0]["current_price"];
      // fil Market Cap
      var filMarketCap = parseInt(data_13[0]["market_cap"]) / 1000000000000;
      filMarketCap = filMarketCap.toFixed(5);
      document.getElementById('mcap-fil').textContent = filMarketCap;
      // fil 24H volume
      var filVol = parseInt(data_13[0]["total_volume"]) / 1000000000;
      filVol = filVol.toFixed(2);
      document.getElementById("fil-volume").textContent = filVol;
      // fil % volume
      var filpercentage = data_13[0]['price_change_percentage_1h_in_currency'];
      filpercentage = filpercentage.toFixed(2);
      document.getElementById('fil-percentage').textContent = filpercentage;
      
      if (filpercentage < 0) {
        document.getElementById('fil-percentage').style.color = negative;
      } else if (filpercentage > 0) {
        document.getElementById('fil-percentage').style.color = positive;
      } else {
        document.getElementById('fil-percentage').style.color = "gray";
      }
      // fil rank number
      document.getElementById('mcapfil-rank').textContent = data_13[0]["market_cap_rank"];

      // wbtc API
      const api_url_14 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=wrapped-bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h'];
      const response_14 = await fetch(api_url_14);
      const data_14 = await response_14.json();
      // wbtc price
      document.getElementById('wbtc').textContent = data_14[0]["current_price"];
      // wbtc Market Cap
      var wbtcMarketCap = parseInt(data_14[0]["market_cap"]) / 1000000000000;
      wbtcMarketCap = wbtcMarketCap.toFixed(5);
      document.getElementById('mcap-wbtc').textContent = wbtcMarketCap;
      // wbtc 24H volume
      var wbtcVol = parseInt(data_14[0]["total_volume"]) / 1000000000;
      wbtcVol = wbtcVol.toFixed(2);
      document.getElementById("wbtc-volume").textContent = wbtcVol;
      // wbtc % volume
      var wbtcpercentage = data_14[0]['price_change_percentage_1h_in_currency'];
      wbtcpercentage = wbtcpercentage.toFixed(2);
      document.getElementById('wbtc-percentage').textContent = wbtcpercentage;
      
      if (wbtcpercentage < 0) {
        document.getElementById('wbtc-percentage').style.color = negative;
      } else if (wbtcpercentage > 0) {
        document.getElementById('wbtc-percentage').style.color = positive;
      } else {
        document.getElementById('wbtc-percentage').style.color = "gray";
      }
      // wbtc rank number
      document.getElementById('mcapwbtc-rank').textContent = data_14[0]["market_cap_rank"];

      // trx API
      const api_url_15 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=tron&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h'];
      const response_15 = await fetch(api_url_15);
      const data_15 = await response_15.json();
      // trx price
      document.getElementById('trx').textContent = data_15[0]["current_price"];
      // trx Market Cap
      var trxMarketCap = parseInt(data_15[0]["market_cap"]) / 1000000000000;
      trxMarketCap = trxMarketCap.toFixed(5);
      document.getElementById('mcap-trx').textContent = trxMarketCap;
      // trx 24H volume
      var trxVol = parseInt(data_15[0]["total_volume"]) / 1000000000;
      trxVol = trxVol.toFixed(2);
      document.getElementById("trx-volume").textContent = trxVol;
      // trx % volume
      var trxpercentage = data_15[0]['price_change_percentage_1h_in_currency'];
      trxpercentage = trxpercentage.toFixed(2);
      document.getElementById('trx-percentage').textContent = trxpercentage;
      
      if (trxpercentage < 0) {
        document.getElementById('trx-percentage').style.color = negative;
      } else if (trxpercentage > 0) {
        document.getElementById('trx-percentage').style.color = positive;
      } else {
        document.getElementById('trx-percentage').style.color = "gray";
      }
      // trx rank number
      document.getElementById('mcaptrx-rank').textContent = data_15[0]["market_cap_rank"];

      // sol API
      const api_url_16 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=solana&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h'];
      const response_16 = await fetch(api_url_16);
      const data_16 = await response_16.json();
      // sol price
      document.getElementById('sol').textContent = data_16[0]["current_price"];
      // sol Market Cap
      var solMarketCap = parseInt(data_16[0]["market_cap"]) / 1000000000000;
      solMarketCap = solMarketCap.toFixed(5);
      document.getElementById('mcap-sol').textContent = solMarketCap;
      // sol 24H volume
      var solVol = parseInt(data_16[0]["total_volume"]) / 1000000000;
      solVol = solVol.toFixed(2);
      document.getElementById("sol-volume").textContent = solVol;
      // sol % volume
      var solpercentage = data_16[0]['price_change_percentage_1h_in_currency'];
      solpercentage = solpercentage.toFixed(2);
      document.getElementById('sol-percentage').textContent = solpercentage;
      
      if (solpercentage < 0) {
        document.getElementById('sol-percentage').style.color = negative;
      } else if (solpercentage > 0) {
        document.getElementById('sol-percentage').style.color = positive;
      } else {
        document.getElementById('sol-percentage').style.color = "gray";
      }
      // sol rank number
      document.getElementById('mcapsol-rank').textContent = data_16[0]["market_cap_rank"];

      // vet API
      const api_url_17 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=vechain&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h'];
      const response_17 = await fetch(api_url_17);
      const data_17 = await response_17.json();
      // vet price
      document.getElementById('vet').textContent = data_17[0]["current_price"];
      // vet Market Cap
      var vetMarketCap = parseInt(data_17[0]["market_cap"]) / 1000000000000;
      vetMarketCap = vetMarketCap.toFixed(5);
      document.getElementById('mcap-vet').textContent = vetMarketCap;
      // vet 24H volume
      var vetVol = parseInt(data_17[0]["total_volume"]) / 1000000000;
      vetVol = vetVol.toFixed(2);
      document.getElementById("vet-volume").textContent = vetVol;
      // vet % volume
      var vetpercentage = data_17[0]['price_change_percentage_1h_in_currency'];
      vetpercentage = vetpercentage.toFixed(2);
      document.getElementById('vet-percentage').textContent = vetpercentage;
      
      if (vetpercentage < 0) {
        document.getElementById('vet-percentage').style.color = negative;
      } else if (vetpercentage > 0) {
        document.getElementById('vet-percentage').style.color = positive;
      } else {
        document.getElementById('vet-percentage').style.color = "gray";
      }
      // vet rank number
      document.getElementById('mcapvet-rank').textContent = data_17[0]["market_cap_rank"];

      // btt API
      const api_url_18 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bittorrent-2&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h'];
      const response_18 = await fetch(api_url_18);
      const data_18 = await response_18.json();
      // btt price
      document.getElementById('btt').textContent = data_18[0]["current_price"];
      // btt Market Cap
      var bttMarketCap = parseInt(data_18[0]["market_cap"]) / 1000000000000;
      bttMarketCap = bttMarketCap.toFixed(5);
      document.getElementById('mcap-btt').textContent = bttMarketCap;
      // btt 24H volume
      var bttVol = parseInt(data_18[0]["total_volume"]) / 1000000000;
      bttVol = bttVol.toFixed(2);
      document.getElementById("btt-volume").textContent = bttVol;
      // btt % volume
      var bttpercentage = data_18[0]['price_change_percentage_1h_in_currency'];
      bttpercentage = bttpercentage.toFixed(2);
      document.getElementById('btt-percentage').textContent = bttpercentage;
      
      if (bttpercentage < 0) {
        document.getElementById('btt-percentage').style.color = negative;
      } else if (bttpercentage > 0) {
        document.getElementById('btt-percentage').style.color = positive;
      } else {
        document.getElementById('btt-percentage').style.color = "gray";
      }
      // btt rank number
      document.getElementById('mcapbtt-rank').textContent = data_18[0]["market_cap_rank"];

      // luna API
      const api_url_19 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=terra-luna&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h'];
      const response_19 = await fetch(api_url_19);
      const data_19 = await response_19.json();
      // luna price
      document.getElementById('luna').textContent = data_19[0]["current_price"];
      // luna Market Cap
      var lunaMarketCap = parseInt(data_19[0]["market_cap"]) / 1000000000000;
      lunaMarketCap = lunaMarketCap.toFixed(5);
      document.getElementById('mcap-luna').textContent = lunaMarketCap;
      // luna 24H volume
      var lunaVol = parseInt(data_19[0]["total_volume"]) / 1000000000;
      lunaVol = lunaVol.toFixed(2);
      document.getElementById("luna-volume").textContent = lunaVol;
      // luna % volume
      var lunapercentage = data_19[0]['price_change_percentage_1h_in_currency'];
      lunapercentage = lunapercentage.toFixed(2);
      document.getElementById('luna-percentage').textContent = lunapercentage;
      
      if (lunapercentage < 0) {
        document.getElementById('luna-percentage').style.color = negative;
      } else if (lunapercentage > 0) {
        document.getElementById('luna-percentage').style.color = positive;
      } else {
        document.getElementById('luna-percentage').style.color = "gray";
      }
      // luna rank number
      document.getElementById('mcapluna-rank').textContent = data_19[0]["market_cap_rank"];

      // eos API
      const api_url_20 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=eos&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h'];
      const response_20 = await fetch(api_url_20);
      const data_20 = await response_20.json();
      // eos price
      document.getElementById('eos').textContent = data_20[0]["current_price"];
      // eos Market Cap
      var eosMarketCap = parseInt(data_20[0]["market_cap"]) / 1000000000000;
      eosMarketCap = eosMarketCap.toFixed(5);
      document.getElementById('mcap-eos').textContent = eosMarketCap;
      // eos 24H volume
      var eosVol = parseInt(data_20[0]["total_volume"]) / 1000000000;
      eosVol = eosVol.toFixed(2);
      document.getElementById("eos-volume").textContent = eosVol;
      // eos % volume
      var eospercentage = data_20[0]['price_change_percentage_1h_in_currency'];
      eospercentage = eospercentage.toFixed(2);
      document.getElementById('eos-percentage').textContent = eospercentage;
      
      if (eospercentage < 0) {
        document.getElementById('eos-percentage').style.color = negative;
      } else if (eospercentage > 0) {
        document.getElementById('eos-percentage').style.color = positive;
      } else {
        document.getElementById('eos-percentage').style.color = "gray";
      }
      // eos rank number
      document.getElementById('mcapeos-rank').textContent = data_20[0]["market_cap_rank"];

      // cro API
      const api_url_21 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=crypto-com-chain&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h'];
      const response_21 = await fetch(api_url_21);
      const data_21 = await response_21.json();
      // cro price
      document.getElementById('cro').textContent = data_21[0]["current_price"];
      // cro Market Cap
      var croMarketCap = parseInt(data_21[0]["market_cap"]) / 1000000000000;
      croMarketCap = croMarketCap.toFixed(5);
      document.getElementById('mcap-cro').textContent = croMarketCap;
      // cro 24H volume
      var croVol = parseInt(data_21[0]["total_volume"]) / 1000000000;
      croVol = croVol.toFixed(2);
      document.getElementById("cro-volume").textContent = croVol;
      // cro % volume
      var cropercentage = data_21[0]['price_change_percentage_1h_in_currency'];
      cropercentage = cropercentage.toFixed(2);
      document.getElementById('cro-percentage').textContent = cropercentage;
      
      if (cropercentage < 0) {
        document.getElementById('cro-percentage').style.color = negative;
      } else if (cropercentage > 0) {
        document.getElementById('cro-percentage').style.color = positive;
      } else {
        document.getElementById('cro-percentage').style.color = "gray";
      }
      // cro rank number
      document.getElementById('mcapcro-rank').textContent = data_21[0]["market_cap_rank"];

      // cake API
      const api_url_22 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=pancakeswap-token&order=market_cap_desc&sparkline=false&price_change_percentage=1h'];
      const response_22 = await fetch(api_url_22);
      const data_22 = await response_22.json();
      // cake price
      document.getElementById('cake').textContent = data_22[0]["current_price"];
      // cake Market Cap
      var cakeMarketCap = parseInt(data_22[0]["market_cap"]) / 1000000000000;
      cakeMarketCap = cakeMarketCap.toFixed(5);
      document.getElementById('mcap-cake').textContent = cakeMarketCap;
      // cake 24H volume
      var cakeVol = parseInt(data_22[0]["total_volume"]) / 1000000000;
      cakeVol = cakeVol.toFixed(2);
      document.getElementById("cake-volume").textContent = cakeVol;
      // cake % volume
      var cakepercentage = data_22[0]['price_change_percentage_1h_in_currency'];
      cakepercentage = cakepercentage.toFixed(2);
      document.getElementById('cake-percentage').textContent = cakepercentage;
      
      if (cakepercentage < 0) {
        document.getElementById('cake-percentage').style.color = negative;
      } else if (cakepercentage > 0) {
        document.getElementById('cake-percentage').style.color = positive;
      } else {
        document.getElementById('cake-percentage').style.color = "gray";
      }
      // cake rank number
      document.getElementById('mcapcake-rank').textContent = data_22[0]["market_cap_rank"];

      // miota API
      const api_url_23 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=iota&order=market_cap_desc&sparkline=false&price_change_percentage=1h'];
      const response_23 = await fetch(api_url_23);
      const data_23 = await response_23.json();
      // miota price
      document.getElementById('miota').textContent = data_23[0]["current_price"];
      // miota Market Cap
      var miotaMarketCap = parseInt(data_23[0]["market_cap"]) / 1000000000000;
      miotaMarketCap = miotaMarketCap.toFixed(5);
      document.getElementById('mcap-miota').textContent = miotaMarketCap;
      // miota 24H volume
      var miotaVol = parseInt(data_23[0]["total_volume"]) / 1000000000;
      miotaVol = miotaVol.toFixed(2);
      document.getElementById("miota-volume").textContent = miotaVol;
      // miota % volume
      var miotapercentage = data_23[0]['price_change_percentage_1h_in_currency'];
      miotapercentage = miotapercentage.toFixed(2);
      document.getElementById('miota-percentage').textContent = miotapercentage;
      
      if (miotapercentage < 0) {
        document.getElementById('miota-percentage').style.color = negative;
      } else if (miotapercentage > 0) {
        document.getElementById('miota-percentage').style.color = positive;
      } else {
        document.getElementById('miota-percentage').style.color = "gray";
      }
      // miota rank number
      document.getElementById('mcapmiota-rank').textContent = data_23[0]["market_cap_rank"];

      // atom API
      const api_url_24 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=cosmos&order=market_cap_desc&sparkline=false&price_change_percentage=1h'];
      const response_24 = await fetch(api_url_24);
      const data_24 = await response_24.json();
      // atom price
      document.getElementById('atom').textContent = data_24[0]["current_price"];
      // atom Market Cap
      var atomMarketCap = parseInt(data_24[0]["market_cap"]) / 1000000000000;
      atomMarketCap = atomMarketCap.toFixed(5);
      document.getElementById('mcap-atom').textContent = atomMarketCap;
      // atom 24H volume
      var atomVol = parseInt(data_24[0]["total_volume"]) / 1000000000;
      atomVol = atomVol.toFixed(2);
      document.getElementById("atom-volume").textContent = atomVol;
      // atom % volume
      var atompercentage = data_24[0]['price_change_percentage_1h_in_currency'];
      atompercentage = atompercentage.toFixed(2);
      document.getElementById('atom-percentage').textContent = atompercentage;
      
      if (atompercentage < 0) {
        document.getElementById('atom-percentage').style.color = negative;
      } else if (atompercentage > 0) {
        document.getElementById('atom-percentage').style.color = positive;
      } else {
        document.getElementById('atom-percentage').style.color = "gray";
      }
      // atom rank number
      document.getElementById('mcapatom-rank').textContent = data_24[0]["market_cap_rank"];

      // xmr API
      const api_url_25 = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=monero&order=market_cap_desc&sparkline=false&price_change_percentage=1h'];
      const response_25 = await fetch(api_url_25);
      const data_25 = await response_25.json();
      // xmr price
      document.getElementById('xmr').textContent = data_25[0]["current_price"];
      // xmr Market Cap
      var xmrMarketCap = parseInt(data_25[0]["market_cap"]) / 1000000000000;
      xmrMarketCap = xmrMarketCap.toFixed(5);
      document.getElementById('mcap-xmr').textContent = xmrMarketCap;
      // xmr 24H volume
      var xmrVol = parseInt(data_25[0]["total_volume"]) / 1000000000;
      xmrVol = xmrVol.toFixed(2);
      document.getElementById("xmr-volume").textContent = xmrVol;
      // xmr % volume
      var xmrpercentage = data_25[0]['price_change_percentage_1h_in_currency'];
      xmrpercentage = xmrpercentage.toFixed(2);
      document.getElementById('xmr-percentage').textContent = xmrpercentage;
      
      if (xmrpercentage < 0) {
        document.getElementById('xmr-percentage').style.color = negative;
      } else if (xmrpercentage > 0) {
        document.getElementById('xmr-percentage').style.color = positive;
      } else {
        document.getElementById('xmr-percentage').style.color = "gray";
      }
      // xmr rank number
      document.getElementById('mcapxmr-rank').textContent = data_25[0]["market_cap_rank"];

  }
  getData();

  setInterval(getData, 60000);
