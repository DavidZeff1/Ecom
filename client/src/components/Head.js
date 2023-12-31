import React from 'react'



function Head() {
  return (
    <section class="ftco-section">
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div class="container">
    <a class="navbar-brand" href="index.html">MeFood</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="fa fa-bars"></span> Menu
    </button>
    <div class="collapse navbar-collapse" id="ftco-nav">
    <ul class="navbar-nav ml-auto">
    <li class="nav-item active"><a href="#" class="nav-link">Home</a></li>
    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Page</a>
    <div class="dropdown-menu" aria-labelledby="dropdown04">
    <a class="dropdown-item" href="#">Page 1</a>
    <a class="dropdown-item" href="#">Page 2</a>
    <a class="dropdown-item" href="#">Page 3</a>
    <a class="dropdown-item" href="#">Page 4</a>
    </div>
    </li>
    <li class="nav-item"><a href="#" class="nav-link">About</a></li>
    <li class="nav-item"><a href="#" class="nav-link">Menu</a></li>
    <li class="nav-item"><a href="#" class="nav-link">Blog</a></li>
    <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
    <li class="nav-item cta"><a href="#" class="nav-link">Book a table</a></li>
    </ul>
    </div>
    </div>
    </nav>
    </section>
  )
}

export default Head