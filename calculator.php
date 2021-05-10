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
  <script src="./calculateAPI.js" async></script>
  <title>Bitcoin Calculator</title>
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

<!-- Calculator -->
<?php  

if (isset($_SESSION['username'])) {
  echo '
<div class="calculator-container">
    <div class="calculator">
      <h1 class="title">Enter your bitcoin amount</h1>
      
      <div class="calculatorbox">
        
      <div class="item">
      <input type="number" id="crytovalue" name="crytovalue" class="valuefield" value="1" min="0.1" step="1" required>
        <select name="crytoselect" id="crytoselect" class="crytoselect"></select>
      </div>
      
      <div class="item">
      <input type="number" id="fiatvalue" name="fiatvalue" class="valuefield" value="" min="0.1" step="0.01" required>
        <select name="fiatselect" id="fiatselect"></select>
      </div>
  </div>
</div>
    
  </div>
  ';
} else {
  echo ' <div class="dashboard-container">
  <div class="dashboard-items exchanges" style="width: 400px;">
  <h1>Please <a href="./login.php" style="color: #aeaedf;">log in</a> to see the full website.</h1>
  </div>
   </div>
 ';
 }
?>
<!-- End Calculator -->

  <div class='light x5'></div>
  <div class='light x6'></div>
  <div class='light x7'></div>
  <div class='light x8'></div>
  
</body>
</html>