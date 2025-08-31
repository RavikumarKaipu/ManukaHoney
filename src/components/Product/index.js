import { useRef, useState } from "react";
import "./index.css";

const Product = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };
  const [open, setOpen] = useState(false);

  const [variant, setVariant] = useState("125g | 4.4oz");
  const [payOption, setPayOption] = useState("once");
  const [qty, setQty] = useState(1);


  const dec = () => setQty((q) => Math.max(1, q - 1));
  const inc = () => setQty((q) => Math.min(99, q + 1));

  const images = [
    "IG-1/ig00.png",
    "IG-1/ig0.png",
    "IG-1/ig1.jpg",
    "IG-1/ig12.png",
    "IG-1/ig13.png",
    "IG-1/ig14.png",
    "IG-1/ig15.png",
  ];

  const images2=[
    "IG-3/ig31.png",
    "IG-3/ig32.png",
    "IG-3/ig33.png",
    "IG-3/ig34.png",
    "IG-3/ig35.png",
    "IG-3/ig36.png",

  ]

  return (
    <div className="main-container">
      {/* ---------- LEFT: GALLERY ---------- */}
      <div className="gallery-container">
        <div
          className="image-container"
          style={{
            backgroundImage: `url('/c7bd40052191c1ff13f591e4bee37222f09c7176.png')`,
          }}
        >
          <button className="arrow left" onClick={() => scroll("left")}>
            &#10094;
          </button>
          <div className="scroll-wrapper" ref={scrollRef}>
            <img
              className="image-scrolled"
              src="/e0a49389a8921faee20a9e43fb6b06f3e7d3015d.png"
              alt="gallery"
            />
          </div>
          <button className="arrow right" onClick={() => scroll("right")}>
            &#10095;
          </button>
        </div>

        <div className="below-image-container">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`sub-${index}`} />
          ))}
        </div>
      </div>

      {/* ---------- RIGHT: DETAILS ---------- */}
      <div className="sub-container2">
        {/* Heading + Badges */}
<div class="product-details">
  <h1>Manuka Honey</h1>
  <div class="honey-info">
    <p class="umf">UMF<sup>™</sup> <span>24+</span></p>
    <p class="mgo">MGO <span>1122+</span></p>
  </div>

  <div className="umfmgo-widget">
      {/* pill trigger */}
      <button
        type="button"
        className="umfmgo-pill"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="umfmgo-pill__icon">i</span>
        <span>What is UMF and MGO?</span>
      </button>

      {/* popover */}
      {open && (
        <div className="umfmgo-popover" role="dialog" aria-modal="true">
          <section className="umfmgo-card">
            <h3 className="umfmgo-title">
              <strong>UMF</strong>&nbsp;is the strength and purity rating of Manuka honey.
            </h3>

            <div className="umfmgo-marks">
              <div className="umfmgo-marks__numbers">
                <span className="c-orange">10+</span>
                <span className="c-red">15+</span>
                <span className="c-pink">20+</span>
                <span className="c-purple">24+</span>
                <span className="c-cyan">26+</span>
                <span className="c-green">28+</span>
                <span className="c-blue">30+</span>
              </div>
              <div className="umfmgo-marks__bars">
                <i className="bar c-orange" />
                <i className="bar c-red" />
                <i className="bar c-pink" />
                <i className="bar c-purple" />
                <i className="bar c-cyan" />
                <i className="bar c-green" />
                <i className="bar c-blue" />
              </div>
            </div>

            <p className="umfmgo-note">
              The higher the number, the greater the potency and rarity of Manuka honey.
            </p>
          </section>

          <section className="umfmgo-card">
            <h3 className="umfmgo-title">
              <strong>MGO</strong>&nbsp;is the key natural compound that gives Manuka honey its
              special antibacterial strength.
            </h3>

            <div className="umfmgo-marks">
              <div className="umfmgo-marks__numbers">
                <span className="c-orange">263+</span>
                <span className="c-red">514+</span>
                <span className="c-pink">829+</span>
                <span className="c-purple">1122+</span>
                <span className="c-cyan">1282+</span>
                <span className="c-green">1450+</span>
                <span className="c-blue">1620+</span>
              </div>
              <div className="umfmgo-marks__bars">
                <i className="bar c-orange" />
                <i className="bar c-red" />
                <i className="bar c-pink" />
                <i className="bar c-purple" />
                <i className="bar c-cyan" />
                <i className="bar c-green" />
                <i className="bar c-blue" />
              </div>
            </div>

            <p className="umfmgo-note">
              The higher the number, the higher the antibacterial properties in the honey.
            </p>
          </section>

          <button className="umfmgo-close" onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
      )}
    </div>

  

  <p class="subtitle">The Optimiser</p>
  <p class="description">
    For those times in life when quality comes first. This pure UMF™ 24+ Manuka Honey is powerfully active, 
    sourced from wild and rugged locations around Aotearoa New Zealand and great for almost all uses. 
    It has a full, delicious flavour and your body will love you for it.
  </p>

  <div class="reviews">
    <span class="hearts">💛💛💛💛💛</span>
    <span class="count">825 REVIEWS</span>
  </div>

  <div class="certifications">
    <img src="IG-2/ig21.png" alt="UMF Certification"  className="ig2"/>
    <img src="IG-2/ig22.png" alt="Non GMO" />
    <img src="IG-2/ig23.png" alt="Glyphosate Free" />
    <img src="IG-2/ig24.png" alt="Halal Certified" />
    <img src="IG-2/ig25.png" alt="New Zealand Certified" />
    <img src="IG-2/ig26.png" alt="MGO Certified" />
  </div>

  <div class="size">
    <p>SIZE (SELECT ONE)</p>
    <p>Variant: 125g | 4.4oz</p>
  </div>
</div>

{/* Variant Grid */}
<div className="variant-grid">
  {images2.map((img, i) => (
    <div
      key={i}
      className={`variant-box ${variant === i ? "active" : ""}`}
      onClick={() => setVariant(i)}
    >
      <img src={img} alt={`variant-${i}`} />
    </div>
  ))}
</div>

{/* Payment Options */}
<p>PAYMENT OPTIONS (SELECT ONE)</p> 
<div className="pay-options">
    
  <button
    className={`pay-btn ${payOption === "once" ? "active" : ""}`}
    onClick={() => setPayOption("once")}
  >
    <div className="pay-title">One-time purchase</div>
    <div className="pay-price">$55.88 USD</div>
  </button>
  <button
    className={`pay-btn ${payOption === "sub" ? "active" : ""}`}
    onClick={() => setPayOption("sub")}
  >
    <div className="pay-title">Subscribe &amp; save 20%</div>
    <div className="pay-price">$44.70 USD</div>
  </button>
</div>
<h3 className="sub-info">↻ What is a Subscription?</h3>

{/* Quantity + Cart */}
<div className="qty-cart">
  <div className="qty-box">
    <button onClick={dec}>−</button>
    <div className="qty-num">{qty}</div>
    <button onClick={inc}>+</button>
  </div>
  <button className="add-cart">ADD TO CART</button>
</div>

 <div className="bundle-card">
      <div className="bundle-header">
        <button className="arrow-btn">◀</button>
        <h3>Beauty Bundle</h3>
        <button className="arrow-btn">▶</button>
      </div>

      <div className="bundle-products">
        <div className="product">
          <img src="IG-4/ig41.png" alt="UMF 20+" />
          <p>UMF 20+</p>
          <select>
            <option>250g</option>
            <option>500g</option>
          </select>
        </div>

        <span className="plus">+</span>

        <div className="product">
          <img src="IG-4/ig44.png" alt="UMF 24+" />
          <p>UMF 24+</p>
          <select>
            <option>250g</option>
            <option>500g</option>
          </select>
        </div>

        <span className="plus">+</span>

        <div className="product">
          <img src="IG-4/ig42.png" alt="Wooden Spoon" />
          <p>Wooden Spoon</p>
        </div>
      </div>

      <div className="bundle-footer">
        <div className="price">
          <span className="old-price">$478.75 USD</span>
          <span className="new-price">$430.88 USD</span>
          <span className="discount">Save 10%</span>
        </div>
        <button className="cart-btn">ADD BUNDLE TO CART</button>
      </div>
    </div>
{/* --- Rewards, Delivery, Afterpay, UMF scale, Taste profile --- */}
<div className="rm-rewards">
  <img src="IG-4\a4ae2eaca1629c3adae1c7714b22764214572002.png" alt="" className="rm-rewards-icon" />
  <span>Colourclub members earn up to</span>
  <span className="rm-rewards-badge">56</span>
  <span>reward points when buy this item.</span>
  <a href="#" className="rm-link">Sign up</a>
  <span>&nbsp;or&nbsp;</span>
  <a href="#" className="rm-link">log in</a>
</div>

<div className="rm-divider" />

<div className="rm-delivery-rows">
  <div className="rm-del-col">
    <div className="rm-del-title">DELIVERY</div>
    <div className="rm-del-sub">FREE DELIVERY ON ORDERS OVER $30</div>
  </div>
  <div className="rm-del-col">
    <div className="rm-del-title">ESTIMATED DELIVERY DATE:</div>
    <div className="rm-del-sub">Jun 9 - Jun 13 to</div>
  </div>
</div>

<div className="rm-divider" />

<div className="rm-afterpay-wrap">
  <div className="rm-del-title">AFTER PAY</div>
  <div className="rm-afterpay-sub">
    or 4 interest-free payments of $13.97 with
    <span className="rm-ap-badge">S</span>
    <span className="rm-ap-text">Afterpay</span>
    <span className="rm-info-dot">i</span>
  </div>
</div>

<div className="rm-divider" />

<div className="rm-scale-colored">
  <div className="rm-label">UMF™ SCALE</div>
  <ul className="rm-umf-list">
    <li className="lv-10">UMF™ 10+</li>
    <li className="lv-15">UMF™ 15+</li>
    <li className="lv-20">UMF™ 20+</li>
    <li className="lv-24 active">UMF™ 24+</li>
    <li className="lv-26">UMF™ 26+</li>
    <li className="lv-28">UMF™ 28+</li>
    <li className="lv-30">UMF™ 30+</li>
  </ul>
</div>

<div className="rm-taste">
  <div className="rm-label">TASTE PROFILE</div>
  <div className="rm-taste-track">
    <span className="rm-taste-thumb" style={{ left: "48%" }} />
  </div>
  <div className="rm-taste-ends">
    <span>Clean &amp; Intense</span>
    <span>Bold &amp; Intense</span>
  </div>
</div>

      </div>
    </div>
  );
};

export default Product;
