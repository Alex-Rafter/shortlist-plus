<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://bluesky.sirv.com/Global/Assets/Fonts/mbblueskyicons/style.css" media="all">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="./css/style.css">
  <title>Shortlist Component Lib Prototype</title>

</head>

<body id="shortlist">

  <!-- Add JSON -->
  <div class="container">

    <!-- Example Global ShortList Count and Icon, and Reveal Button : START -->
    <div class="row">
      <div class="col-12">

        <div v-scope="GlobalHeart({class : 'display-1 text-dark'})"></div>

      </div>
    </div>
    <!-- Example Global ShortList Count and Icon, and Reveal Button : END -->

      <div class="row">
        <div class="col-12">
          <?php  include_once("./components/shortlist-cars.php"); ?>
        </div>
      </div>
    </div>

    <!-- SCRIPT : START -->
    <script type="module" src="./js/index.js"></script>
    <!-- SCRIPT : END -->

</body>

</html>