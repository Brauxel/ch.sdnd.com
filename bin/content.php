<?php


$link = mysqli_connect("45.32.247.86", "phpuser", "k8gZs*z3TCnmZf8i", "wordpress");

$sql = "SELECT post_content FROM wp_posts WHERE post_content LIKE '%content_band%'";

$result = mysqli_query($link, $sql) or die(mysql_error($link));

$processed = "";

while ($row = mysqli_fetch_array($result, MYSQLI_BOTH)) {
    $content = $row[0];

    if(strpos($content, '[content_band')){
      $processed = str_replace('[content_band', '<div', $content);
      $processed = str_replace('[/content_band]', '</div>', $processed);
    }

    if(strpos($processed, '[column')){
      $processed = str_replace('[column type=', '<div class=', $processed);
      $processed = str_replace('"]', '">', $processed);
      $processed = str_replace('[/column]', '</div>', $processed);
    }

    if(strpos($processed, '[responsive_youtube ')){
      $pattern = "/\[responsive_youtube (\w+)\]/";
      $replacement = '<figure><iframe src="//www.youtube.com/embed/${1}" frameborder="0" allowfullscreen></iframe></figure>';
      $processed = preg_replace($pattern, $replacement, $processed);
    }

    if(strpos($processed, 'no_margin')){
    
    }
}

print_r($processed);

?>
