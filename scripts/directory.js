<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="UTF-8">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta name="description" content="Benin City Chamber of Commerce Directory Page">

  <meta name="author" content="Gabriel Drew Benson">

  <title>Benin Chamber Directory</title>

  <link rel="stylesheet" href="css/small.css">

  <link rel="stylesheet" href="css/larger.css">

  <script src="scripts/navigation.js" defer></script>

  <script src="scripts/date.js" defer></script>

  <script src="scripts/members.js" defer></script>

</head>

<body>

<header>

  <div class="top-header">

    <div class="logo-area">

      <img src="../images/logo.svg.png" alt="Benin Chamber Logo">

      <div>
        <h2>Benin Chamber of Commerce</h2>
      </div>

    </div>

    <button id="menuBtn">☰</button>

  </div>

  <nav id="navMenu">

    <a href="../index.html">Home</a>

    <a class="active" href="directory.html">Directory</a>

    <a href="#">Join</a>

    <a href="#">Discover</a>

  </nav>

</header>

<main>

  <h1>Business Directory</h1>

  <div class="view-buttons">

    <button id="gridView">Grid</button>

    <button id="listView">List</button>

  </div>

  <section id="members" class="grid"></section>

</main>

<footer>

  <div class="footer-info">

    <div>
      <h3>Benin Chamber of Commerce</h3>

      <p>Benin City, Edo State</p>

      <p>info@beninchamber.org</p>

      <p>(234) 800-000-0000</p>
    </div>

    <div class="socials">

      <p>YouTube</p>

      <p>Twitter</p>

      <p>LinkedIn</p>

    </div>

    <div>

      <p>WDD231 Class Project</p>

      <p>Gabriel Drew Benson</p>

      <p>&copy; <span id="year"></span></p>

      <p id="lastModified"></p>

    </div>

  </div>

</footer>

</body>
</html>
