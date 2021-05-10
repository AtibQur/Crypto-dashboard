<?php 
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="./script.js" async></script> 
  <script src="./cryptoAPI.js" async></script>
  <title>Atib's crypto</title>
</head>
<body>
  
<!-- Header navbar -->
  <header class="header">
    <nav class="navbar" id="navigation">
        <a href="./index.php" class="nav-logo"><img src="./atibs-logo.png" alt="Atibs-logo"></a>
          <ul class="nav-menu">
              <li class="nav-item">
                  <a href="./index.php" class="nav-link"><i class="fa fa-home fa-lg">Home</i></a>
              </li>
              <li class="nav-item">
                  <a href="./calculator.php" class="nav-link"><i class="fa fa-calculator fa-lg">Calculator</i></a>
              </li>
              <li class="nav-item">
                <a href="./exchanges.php" class="nav-link"><i class="crypto-exchange fa-lg">Exchanges</i></a>
            </li>
              <li class="nav-item">
              <?php
              if (isset($_SESSION['username'])) {
                echo '<p class="log" style="font-weight:bold;">Logged in as: ' . $_SESSION['username'] . '</br></p>';
                  echo '<a href="logout.php" class="nav-link"><span data-content="Link Hover" aria-hidden="true"></span><i class="fa fa-sign-out fa-lg" aria-hidden="true">Log out</i></a>';
              } else {
                  echo '<a href="login.php" class="nav-link"><span data-content="Link Hover" aria-hidden="true"></span><i class="fa fa-sign-out fa-lg" aria-hidden="true">Log in</i></a>';
              }
              ?>
              </li>
          </ul>
          <div class="hamburger">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
          </div>
      </nav>
  </header>
<!-- End Header navbar -->

<!-- Dashboard items -->
<?php  

$currencies = [
  ["name" => "bitcoin", "image" => "1/small/bitcoin.png?1547033579", "id-name" => "btc", "id-price" => "btc", "website" => "bitcoin", "id-percentage" => "btc-percentage", "mcaprank" => "mcapbtc-rank", "mcap" => "mcap-btc", "volume" => "btc-volume"],
  ["name" => "ethereum", "image" => "279/small/ethereum.png?1595348880", "id-name" => "eth", "id-price" => "eth", "website" => "ethereum", "id-percentage" => "eth-percentage", "mcaprank" => "mcapeth-rank", "mcap" => "mcap-eth", "volume" => "eth-volume"],
  ["name" => "binance coin", "image" => "825/small/binance-coin-logo.png?1547034615", "id-name" => "bnb", "id-price" => "bnb", "website" => "binance-coin", "id-percentage" => "bnb-percentage", "mcaprank" => "mcapbnb-rank", "mcap" => "mcap-bnb", "volume" => "bnb-volume"],
  ["name" => "ripple", "image" => "44/small/xrp-symbol-white-128.png?1605778731", "id-name" => "xrp", "id-price" => "xrp", "website" => "xrp", "id-percentage" => "xrp-percentage", "mcaprank" => "mcapxrp-rank", "mcap" => "mcap-xrp", "volume" => "xrp-volume"],
  ["name" => "dogecoin", "image" => "5/small/dogecoin.png?1547792256", "id-name" => "doge", "id-price" => "doge", "website" => "dogecoin", "id-percentage" => "doge-percentage", "mcaprank" => "mcapdoge-rank", "mcap" => "mcap-doge", "volume" => "doge-volume"],
  ["name" => "polkadot", "image" => "12171/small/aJGBjJFU_400x400.jpg?1597804776", "id-name" => "dot", "id-price" => "dot", "website" => "polkadot", "id-percentage" => "dot-percentage", "mcaprank" => "mcapdot-rank", "mcap" => "mcap-dot", "volume" => "dot-volume"],
  ["name" => "cardano", "image" => "975/small/cardano.png?1547034860", "id-name" => "ada", "id-price" => "ada", "website" => "cardano", "id-percentage" => "ada-percentage", "mcaprank" => "mcapada-rank", "mcap" => "mcap-ada", "volume" => "ada-volume"],
  ["name" => "uniswap", "image" => "12504/small/uniswap-uni.png?1600306604", "id-name" => "uni", "id-price" => "uni", "website" => "uniswap", "id-percentage" => "uni-percentage", "mcaprank" => "mcapuni-rank", "mcap" => "mcap-uni", "volume" => "uni-volume"],
  ["name" => "litecoin", "image" => "2/small/litecoin.png?1547033580", "id-name" => "ltc", "id-price" => "ltc", "website" => "litecoin", "id-percentage" => "ltc-percentage", "mcaprank" => "mcapltc-rank", "mcap" => "mcap-ltc", "volume" => "ltc-volume"],
  ["name" => "chainlink", "image" => "877/small/chainlink-new-logo.png?1547034700", "id-name" => "link", "id-price" => "link", "website" => "chainlink", "id-percentage" => "link-percentage", "mcaprank" => "mcaplink-rank", "mcap" => "mcap-link", "volume" => "link-volume"],
  ["name" => "theta", "image" => "2538/small/theta-token-logo.png?1548387191", "id-name" => "theta", "id-price" => "theta", "website" => "theta-network", "id-percentage" => "theta-percentage", "mcaprank" => "mcaptheta-rank", "mcap" => "mcap-theta", "volume" => "theta-volume"],
  ["name" => "bitcoin cash", "image" => "780/small/bitcoin-cash-circle.png?1594689492", "id-name" => "bch", "id-price" => "bch", "website" => "bitcoin-cash", "id-percentage" => "bch-percentage", "mcaprank" => "mcapbch-rank", "mcap" => "mcap-bch", "volume" => "bch-volume"],
  ["name" => "stellar", "image" => "100/small/Stellar_symbol_black_RGB.png?1552356157", "id-name" => "xlm", "id-price" => "xlm", "website" => "stellar", "id-percentage" => "xlm-percentage", "mcaprank" => "mcapxlm-rank", "mcap" => "mcap-xlm", "volume" => "xlm-volume"],
  ["name" => "filecoin", "image" => "12817/small/filecoin.png?1602753933", "id-name" => "fil", "id-price" => "fil", "website" => "filecoin", "id-percentage" => "fil-percentage", "mcaprank" => "mcapfil-rank", "mcap" => "mcap-fil", "volume" => "fil-volume"],
  ["name" => "wrapped bitcoin", "image" => "7598/small/wrapped_bitcoin_wbtc.png?1548822744", "id-name" => "wbtc", "id-price" => "wbtc", "website" => "wrapped-bitcoin", "id-percentage" => "wbtc-percentage", "mcaprank" => "mcapwbtc-rank", "mcap" => "mcap-wbtc", "volume" => "wbtc-volume"],
  ["name" => "tron", "image" => "1094/small/tron-logo.png?1547035066", "id-name" => "trx", "id-price" => "trx", "website" => "tron", "id-percentage" => "trx-percentage", "mcaprank" => "mcaptrx-rank", "mcap" => "mcap-trx", "volume" => "trx-volume"],
  ["name" => "solana", "image" => "4128/small/coinmarketcap-solana-200.png?1616489452", "id-name" => "sol", "id-price" => "sol", "website" => "solana", "id-percentage" => "sol-percentage", "mcaprank" => "mcapsol-rank", "mcap" => "mcap-sol", "volume" => "sol-volume"],
  ["name" => "vechain", "image" => "1167/small/VeChain-Logo-768x725.png?1547035194", "id-name" => "vet", "id-price" => "vet", "website" => "vechain", "id-percentage" => "vet-percentage", "mcaprank" => "mcapvet-rank", "mcap" => "mcap-vet", "volume" => "vet-volume"],
  ["name" => "bittorrent", "image" => "7595/small/BTT_Token_Graphic.png?1555066995", "id-name" => "btt", "id-price" => "btt", "website" => "bittorrent", "id-percentage" => "btt-percentage", "mcaprank" => "mcapbtt-rank", "mcap" => "mcap-btt", "volume" => "btt-volume"],
  ["name" => "terra-luna", "image" => "8284/small/luna1557227471663.png?1567147072", "id-name" => "luna", "id-price" => "luna", "website" => "terra-luna", "id-percentage" => "luna-percentage", "mcaprank" => "mcapluna-rank", "mcap" => "mcap-luna", "volume" => "luna-volume"],
  ["name" => "eos", "image" => "738/small/eos-eos-logo.png?1547034481", "id-name" => "eos", "id-price" => "eos", "website" => "eos", "id-percentage" => "eos-percentage", "mcaprank" => "mcapeos-rank", "mcap" => "mcap-eos", "volume" => "eos-volume"],
  ["name" => "crypto.com coin", "image" => "7310/small/cypto.png?1547043960", "id-name" => "cro", "id-price" => "cro", "website" => "crypto-com-coin", "id-percentage" => "cro-percentage", "mcaprank" => "mcapcro-rank", "mcap" => "mcap-cro", "volume" => "cro-volume"],
  ["name" => "pancakeswap", "image" => "12632/small/IMG_0440.PNG?1602654093", "id-name" => "cake", "id-price" => "cake", "website" => "pancakeswap", "id-percentage" => "cake-percentage", "mcaprank" => "mcapcake-rank", "mcap" => "mcap-cake", "volume" => "cake-volume"],
  ["name" => "iota", "image" => "692/small/IOTA_Swirl.png?1604238557", "id-name" => "miota", "id-price" => "miota", "website" => "iota", "id-percentage" => "miota-percentage", "mcaprank" => "mcapmiota-rank", "mcap" => "mcap-miota", "volume" => "miota-volume"],
  ["name" => "cosmos", "image" => "1481/small/cosmos_hub.png?1555657960", "id-name" => "atom", "id-price" => "atom", "website" => "cosmos", "id-percentage" => "atom-percentage", "mcaprank" => "mcapatom-rank", "mcap" => "mcap-atom", "volume" => "atom-volume"],
  ["name" => "monero", "image" => "69/small/monero_logo.png?1547033729", "id-name" => "xmr", "id-price" => "xmr", "website" => "monero", "id-percentage" => "xmr-percentage", "mcaprank" => "mcapxmr-rank", "mcap" => "mcap-xmr", "volume" => "xmr-volume"]
];
?>
 <?php if (isset($_SESSION['username'])) { ?> 
    <div class="dashboard-container">
  <?php  
      foreach ($currencies as $currency) {
      echo '
          <div class="dashboard-items">
            <div class="coin-info">
                <div class="coin-img">
                    <img src="https://assets.coingecko.com/coins/images/'.$currency["image"].'">
                </div>
                <div>
                  <span style="font-size: 18px">
                    <a href="https://www.coingecko.com/en/coins/'.$currency["website"].'" target="_blank" style="text-decoration: none; color: rgb(16, 162, 224);">'.ucfirst($currency["name"]).' ('.strtoupper($currency["id-name"]).')</a>
                  </span>
                  <br>
                  <span style="font-size: 16px">
                    <span style="font-size: 20px; font-weight: 500;"><span id="'.$currency["id-price"].'"></span></span>
                    <span style="font-size: 14px; font-weight: 500;">USD</span>
                    <span style="font-size: 12px; font-weight: 500;">1H : <span id="'.$currency["id-percentage"].'"></span>%</span>
                </span>
                </div> 
            </div>
              <div style="border-top: 1px solid whitesmoke; clear:both;">
                    <div style="text-align: center; float: left; width: 33%; font-size:12px; padding:12px 0 16px 0; border-right: 1px solid whitesmoke; line-height:1em;">RANK<br><br><span id="'.$currency["mcaprank"].'"></span></div>

                    <div style="text-align: center; float: left; width: 33%; font-size: 12px; padding: 12px 0 16px 0; border-right: 1px solid whitesmoke; line-height: 1em;">MARKET CAP<br><br>$<span id="'.$currency["mcap"].'"></span> T <span style="font-size: 10px">USD</span> </div>

                    <div style="text-align:center; float: left; width: 33%; font-size: 12px; padding: 12px 0 16px 0; line-height: 1em;">VOLUME<br><br>$<span id="'.$currency["volume"].'"></span> B <span style="font-size: 10px">USD</span> </div>
            </div> 
        </div>
      ';
    }
    } else {
    echo ' <div class="dashboard-container" >
        <div class="dashboard-items exchanges" style="width: 400px;">
          <h1>Please <a href="./login.php" style="color: #aeaedf;">log in</a> to see the full website.</h1>
        </div>
      </div>
    ';
  }
?>
<!-- End Dashboard items -->

  <div class='light x5'></div>
  <div class='light x6'></div>
  <div class='light x7'></div>
  <div class='light x8'></div>
</body>
</html>