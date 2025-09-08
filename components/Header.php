<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Tracker | <?php echo $pageTitle ?></title>
    <link rel="stylesheet" href="./lib/styles/styles.css">
    <script src="./lib/scripts/utils.js" async></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</head>

<body onload="getCurrentMonth();">
    <header>
        <h1>Music Tracker</h1>
        <nav>
            <a href="index.php">Home</a>
            <a href="makeMonth.php">Make a Month</a>
        </nav>
    </header>