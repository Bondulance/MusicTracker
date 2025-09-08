<?php
$pageTitle = 'Make Month';
include('./components/Header.php');
?>

<main>
    <h2>
        Make Your Month
    </h2>
    <div id="form_container">
        <form action="index.php" method="post">
            <label for="artistName">Artist name:</label><br>
            <input type="text" id="artistName" name="artistName" placeholder="ex. The Roots">

            <input type="submit" value="Search for Artist">
        </form>
    </div>
</main>