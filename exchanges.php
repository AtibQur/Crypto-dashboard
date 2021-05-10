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
  <title>Exchanges</title>
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

<?php 
$exchanges = [
  ["image" => "270.png" ,"name" => "#1 Binance", "website" => "https://www.binance.com/en", "exchanges-info" => "Binance is a cryptocurrency exchange that provides a platform for trading various cryptocurrencies. As of January 2018, Binance was the largest cryptocurrency exchange in the world in terms of trading volume."],
  ["image" => "89.png", "name" => "#2 Coinbase Pro", "website" => "https://pro.coinbase.com/", "exchanges-info" => "Coinbase, Inc. is an American cryptocurrency exchange platform that operates remote-first without an official physical headquarters. The company was founded in 2012 by Brian Armstrong and Fred Ehrsam, and as of March 2021, was the largest cryptocurrency exchange in the United States by trading volume. Coinbase is a subsidiary of holding company Coinbase Global, Inc."],
  ["image" => "24.png", "name" => "#3 Kraken", "website" => "https://www.kraken.com/", "exchanges-info" => "Kraken is a United States-based cryptocurrency exchange and bank, founded in 2011.The exchange provides cryptocurrency-to-fiat-money trading, and provides price information to Bloomberg Terminal. As of 2020, Kraken is available to residents of 48 US states and 176 countries, and lists 40 cryptocurrencies available for trade."],
  ["image" => "37.png", "name" => "#4 Bitfinex", "website" => "https://www.bitfinex.com", "exchanges-info" => "Bitfinex is a Hong Kong-based cryptocurrency exchange owned and operated by iFinex Inc., which is headquartered in Hong Kong and registered in the British Virgin Islands. Their customers money has been stolen or lost in several incidents, and they have been unable to secure normal banking relationships."],
  ["image" => "630.png", "name" => "#5 Binance US", "website" => "https://www.binance.us/en", "exchanges-info" => "Binance is a cryptocurrency exchange that provides a platform for trading various cryptocurrencies. As of January 2018, Binance was the largest cryptocurrency exchange in the world in terms of trading volume."],
  ["image" => "1149.png", "name" => "#6 Crypto.com", "website" => "https://crypto.com/exchange/", "exchanges-info" => "Crypto.com is a pioneering payments and cryptocurrency company with a mission to accelerate the world’s transition to cryptocurrency. Crypto.com is working towards this goal with its portfolio of consumer products, including the Crypto.com Wallet & Card App, the MCO Visa Card, Crypto Invest, Crypto.com Chain, as well as Crypto Credit."],
  ["image" => "102.png", "name" => "#7 Huobi", "website" => "https://www.huobi.com/", "exchanges-info" => "Huobi (Chinese: 火币网; pinyin: Huǒbìwǎng) is a Seychelles-based cryptocurrency exchange. Founded in China, the company now has offices in Hong Kong, South Korea, Japan and the United States. In August 2018 it became a publicly listed Hong Kong company."],
  ["image" => "294.png", "name" => "#8 OKEx", "website" => "https://www.okex.com/", "exchanges-info" => "OKEx is a Seychelles-based cryptocurrency exchange that provides a platform for trading various cryptocurrencies. Some of exchange core features include spot and derivative trading. It was founded in 2017."],
  ["image" => "311.png", "name" => "#9 KuCoin", "website" => "https://www.kucoin.com/", "exchanges-info" => "KuCoin is a cryptocurrency exchange based in Hong Kong. US-investors are not listed as prohibited from trading. If you are a US-investor, however, you should still always analyse yourself whether your home state imposes any obstacles for your foreign cryptocurrency trading. The exchange has one of the world’s most impressive trading pair selections, with more than 300 trading pairs."],
  ["image" => "524.png", "name" => "#10 FTX", "website" => "https://ftx.com/", "exchanges-info" => "FTX, a cryptocurrency derivatives trading platform, launched operations on May 8, 2019. It was founded by Alameda Research. Binance purchased shares in the company in December 2019 as well as took a long-term position in the platform FTX Token."]
]
?>

<!-- Exchanges -->
<?php  if (isset($_SESSION['username'])) { ?>
  <div class="dashboard-container">
<?php  
    foreach ($exchanges as $exchange) {
    echo '
        <div class="dashboard-items exchanges">
          <div class="coin-info">
              <div class="coin-img-exchange">
                  <img src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/'.$exchange["image"].'" alt="Binance">
              </div>
              <div class="exchange-info">
                <span style="font-size: 18px">
                  <a href="'.$exchange["website"].'" target="_blank" style="text-decoration: none; color: rgb(16, 162, 224);">'.$exchange["name"].'</a>
                <br><br>
                <p>
                '.$exchange["exchanges-info"].'
                </p>
              </span>
              </div> 
          </div>
        </div>
      ';
  }
  } else {
    echo ' <div class="dashboard-container">
    <div class="dashboard-items exchanges" style="width: 400px;">
    <h1>Please <a href="./login.php" style="color: #aeaedf;">log in</a> to see the full website.</h1>
    </div>
    </div>
  ';
  }
?>
<!-- End Exchanges -->

  <div class='light x5'></div>
  <div class='light x6'></div>
  <div class='light x7'></div>
  <div class='light x8'></div>
</body>
</html>