<?php
// DB Config — change to your actual DB credentials
$host = 'sql204.byethost7.com';
$user = 'b7_39048012';
$pass = 'Josh@2023';
$dbname = 'b7_39048012_amazon';

// Create DB connection
$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

// Fetch all products
$sql = "SELECT * FROM products ORDER BY id DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>All Products</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    <?php include 'style.css'; ?> /* Your existing styles */

    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center; /* or space-between, space-around */
      gap: 20px;
      padding: 20px;
    }

    /* Ensure cards have fixed width */
    .card {
      width: 360px; /* same as your card width */
      flex-shrink: 0;
    }
body{background: linear-gradient(135deg,  rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 50%,rgba(209,209,209,1) 50%,rgba(254,254,254,1) 100%) center/cover no-repeat;min-height:100vh}
.card{width:360px;background:#fff;border-radius:15px;box-shadow:0 5px 20px rgba(0,0,0,.1);transition:.3s;font-family:'Segoe UI',sans-serif;margin:20px auto;overflow:hidden;position:relative;cursor:pointer}
.card:hover{transform:translateY(-5px);box-shadow:0 10px 25px rgba(0,0,0,.15)}
.badge{position:absolute;top:10px;right:10px;background: linear-gradient(to right,  rgba(169,3,41,1) 0%,rgba(196,72,72,1) 44%,rgba(170,34,56,1) 100%);color:#fff;padding:5px 10px;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;border-radius:10px;box-shadow:0 3px 10px rgba(0,0,0,.2);z-index:10}
.tilt{overflow:hidden}
.img{height:200px;overflow:hidden}
.img img{width:100%;height:100%;object-fit:cover;transition:transform .5s}
.card:hover .img img{transform:scale(1.05)}
.info{padding:20px}
.cat{font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:#71717A;margin-bottom:5px}
.title{font-size:18px;font-weight:700;color:#18181B;margin:0 0 10px;letter-spacing:-.5px}
.desc{font-size:13px;color:#52525B;line-height:1.4;margin-bottom:12px}
.feats{display:flex;gap:6px;margin-bottom:15px}
.feat{font-size:10px;background:#F4F4F5;color:#71717A;padding:3px 8px;border-radius:10px;font-weight:500}
.bottom{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}
.price{display:flex;flex-direction:column}
.old{font-size:13px;text-decoration:line-through;color:#A1A1AA;margin-bottom:2px}
.new{font-size:20px;font-weight:700;color:#18181B}
.btn{background:linear-gradient(45deg,#18181B,#27272A);color:#fff;border:none;border-radius:10px;padding:8px 15px;font-size:13px;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:6px;transition:.3s;box-shadow:0 3px 10px rgba(0,0,0,.1)}
.btn:hover{background:linear-gradient(45deg,#27272A,#3F3F46);transform:translateY(-2px);box-shadow:0 5px 15px rgba(0,0,0,.15)}
.btn:before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.1),transparent);transition:.5s}
.btn:hover:before{left:100%}
.icon{transition:transform .3s}
.btn:hover .icon{transform:rotate(-10deg) scale(1.1)}
.meta{display:flex;justify-content:space-between;align-items:center;border-top:1px solid #F4F4F5;padding-top:12px}
.rating{display:flex;align-items:center;gap:2px}
.rcount{margin-left:6px;font-size:11px;color:#71717A}
.stock{font-size:11px;font-weight:600;color:#22C55E}
@media (max-width:400px){.card{width:90%}.title{font-size:16px}.img{height:180px}.bottom{flex-direction:column;align-items:flex-start;gap:10px}.price{margin-bottom:5px}.btn{width:100%;justify-content:center}}

  </style>
</head>
<body>

<div class="card-container">
<?php
if ($result->num_rows > 0):
    while ($row = $result->fetch_assoc()):
        // Get fields
        $title = $row['title'];
        $category = $row['category'];
        $desc = $row['description'];
        $badge = $row['badge'];
        $tag_color = $row['tag_color'];
        $features = explode(',', $row['features']);
        $old_price = $row['old_price'];
        $new_price = $row['new_price'];
        $img = $row['image_url'];
        $rating = $row['rating'];
        $review_count = $row['review_count'];
        $stock_status = $row['stock_status'];
?>
  <div class="card">
    <div class="badge" style="background: <?= htmlspecialchars($tag_color) ?>;"><?= htmlspecialchars($badge) ?></div>
    <div class="tilt">
      <div class="img"><img src="<?= htmlspecialchars($img) ?>" alt="<?= htmlspecialchars($title) ?>"></div>
    </div>
    <div class="info">
      <div class="cat"><?= htmlspecialchars($category) ?></div>
      <h2 class="title"><?= htmlspecialchars($title) ?></h2>
      <p class="desc"><?= htmlspecialchars($desc) ?></p>
      <div class="feats">
        <?php foreach ($features as $feat): ?>
          <span class="feat"><?= htmlspecialchars(trim($feat)) ?></span>
        <?php endforeach; ?>
      </div>
      <div class="bottom">
        <div class="price">
          <span class="old">$<?= number_format($old_price, 2) ?></span>
          <span class="new">$<?= number_format($new_price, 2) ?></span>
        </div>
        <button class="btn">
          <span>Add to Cart</span>
          <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
        </button>
      </div>
      <div class="meta">
        <div class="rating">
          <?php for ($i = 0; $i < floor($rating); $i++): ?>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          <?php endfor; ?>
          <span class="rcount"><?= htmlspecialchars($review_count) ?> Reviews</span>
        </div>
        <div class="stock"><?= htmlspecialchars($stock_status) ?></div>
      </div>
    </div>
  </div>
<?php
    endwhile;
else:
    echo "<p>No products found.</p>";
endif;

$conn->close();
?>
</div> <!-- End card-container -->

</body>
</html>
