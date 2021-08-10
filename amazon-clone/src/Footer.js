import React from 'react';
import "./Footer.css";

function footer() {
    let mybutton = document.getElementById("myBtn");

    

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
    return (
        <div className="footer">
            <div className="top text-center">
                <span className="myBtn" onClick={topFunction}>Back to top</span>
            </div>

            <div className="middle">
                <div className="center">
                    <ul>
                        <li>
                            <h3>Get to Know Us</h3>
                        </li>
                        <li><a href="https://www.amazon.in/">Careers</a></li>
                        <li><a href="https://www.amazon.in/">About Amazon</a></li>
                        <li><a href="https://www.amazon.in/">Investor Relations</a></li>
                        <li><a href="https://www.amazon.in/">Amazon Devices</a></li>
                    </ul>
                    <ul>
                        <li>
                            <h3>Make Money with Us</h3>
                        </li>
                        <li><a href="https://www.amazon.in/">Sell on Amazon</a></li>
                        <li><a href="https://www.amazon.in/">Sell Your Services on Amazon</a></li>
                        <li><a href="https://www.amazon.in/">Sell on Amazon Business</a></li>
                        <li><a href="https://www.amazon.in/">Sell Your Apps on Amazon</a></li>
                        <li><a href="https://www.amazon.in/">Become an Affiliate</a></li>
                        <li><a href="https://www.amazon.in/">Advertise Your Products</a></li>
                        <li><a href="https://www.amazon.in/">Self-Publish with Us</a></li>
                        <li><a href="https://www.amazon.in/">Become an Amazon Vendor</a></li>
                        <li><a href="https://www.amazon.in/">Sell Your Subscription on Amazon</a></li>
                        <li><a href="https://www.amazon.in/">› See all</a></li>
                    </ul>
                    <ul>
                        <li>
                            <h3>Amazon Payment Products</h3>
                        </li>
                        <li><a href="https://www.amazon.in/">Amazon Rewards Visa Signature Cards</a></li>
                        <li><a href="https://www.amazon.in/">Amazon.com Store Card</a></li>
                        <li><a href="https://www.amazon.in/">Amazon.com Corporate Credit Line</a></li>
                        <li><a href="https://www.amazon.in/">Shop with Points</a></li>
                        <li><a href="https://www.amazon.in/">Credit Card Marketplace</a></li>
                        <li><a href="https://www.amazon.in/">Reload Your Balance</a></li>
                        <li><a href="https://www.amazon.in/">Amazon Currency Converter</a></li>
                    </ul>
                    <ul>
                        <li>
                            <h3>Let Us Help You</h3>
                        </li>
                        <li><a href="https://www.amazon.in/">Your Account</a></li>
                        <li><a href="https://www.amazon.in/">Your Orders</a></li>
                        <li><a href="https://www.amazon.in/">Shipping Rates &amp; Policies</a></li>
                        <li><a href="https://www.amazon.in/">Amazon Prime</a></li>
                        <li><a href="https://www.amazon.in/">Returns &amp; Replacements</a></li>
                        <li><a href="https://www.amazon.in/">Manage Your Content and Devices</a></li>
                        <li><a href="https://www.amazon.in/">Amazon Assistant</a></li>
                        <li><a href="https://www.amazon.in/">Help</a></li>
                    </ul>
                </div>

                <ul className="copy text-center">
                    <li>
                        <a href="https://www.amazon.in/" className="logo"></a>
                    </li>
                    <li>
                        <a href="https://www.amazon.in/" className="select"><i className="fa fa-globe" aria-hidden="true"></i> English</a
            >
          </li>
          <li>
            <a href="https://www.amazon.in/" className="select"><i className="flag-icon-us"></i>India</a>
                    </li>
                </ul>
            </div>

            <div className="bottom">
                <div className="center">
                    <ul>
                        <li>
                            <a href="https://www.amazon.in/">Amazon Music<br /><span
                  >Stream millions<br />
                  of songs</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >AmazonFresh<br /><span
                  >Groceries &amp; More<br />
                  Right To Your Door</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >Amazon Web Services<br /><span
                  >Scalable Cloud<br />
                  Computing Services</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >East Dane<br /><span
                  >Designer Men's<br />
                  Fashion</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >Prime Now<br /><span
                  >FREE 2-Hour Delivery<br />
                  on Everyday Items</span
                ></a
              >
            </li>
          </ul>

          <ul>
            <li>
              <a href="https://www.amazon.in/"
                >Amazon Drive<br /><span
                  >Cloud storage<br />
                  from Amazon</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >AmazonGlobal<br /><span
                  >Ship Orders<br />
                  Internationally</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >Audible<br /><span
                  >Download<br />
                  Audio Books</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >Fabric<br /><span
                  >Sewing, Quilting<br />
                  &amp; Knitting</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >Prime Photos<br /><span
                  >Unlimited Photo Storage<br />
                  Free With Prime</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >Woot!<br /><span
                  >Deals and <br />
                  Shenanigans</span
                ></a
              >
            </li>
          </ul>

          <ul>
            <li>
              <a href="https://www.amazon.in/"
                >6pm<br /><span
                  >Score deals<br />
                  on fashion brands</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >Home Services<br /><span
                  >Handpicked Pros<br />
                  Happiness Guarantee</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >Book Depository<br /><span
                  >Books With Free<br />
                  Delivery Worldwide</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >Goodreads<br /><span
                  >Book reviews<br />
                  &amp; recommendations</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >Shopbop<br /><span
                  >Designer<br />
                  Fashion Brands</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >Zappos<br /><span
                  >Shoes &amp;<br />
                  Clothing</span
                ></a
              >
            </li>
          </ul>

          <ul>
            <li>
              <a href="https://www.amazon.in/"
                >AbeBooks<br /><span
                  >Books, art<br />
                  &amp; collectibles</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >Amazon Inspire<br /><span
                  >Free Digital Educational<br />
                  Resources</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >Box Office Mojo<br /><span
                  >Find Movie<br />
                  Box Office Data</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >IMDb<br /><span
                  >Movies, TV<br />
                  &amp; Celebrities</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >TenMarks.com<br /><span
                  >Math Activities<br />
                  for Kids &amp; Schools</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >Souq.com<br /><span
                  >Shop Online in<br />
                  the Middle East</span
                ></a
              >
            </li>
          </ul>

          <ul>
            <li>
              <a href="https://www.amazon.in/"
                >ACX <br /><span
                  >Audiobook Publishing<br />
                  Made Easy</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >Amazon Rapids<br /><span
                  >Fun stories for<br />
                  kids on the go</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >ComiXology<br /><span
                  >Thousands of<br />
                  Digital Comics</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >IMDbPro<br /><span
                  >Get Info Entertainment<br />
                  Professionals Need</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >Warehouse Deals<br /><span
                  >Open-Box<br />
                  Discounts</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >Subscribe with Amazon<br /><span
                  >Discover &amp; try<br />
                  subscription services</span
                ></a
              >
            </li>
          </ul>

          <ul>
            <li>
              <a href="https://www.amazon.in/"
                >Alexa<br /><span
                  >Actionable Analytics<br />
                  for the Web</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >Amazon Restaurants<br /><span
                  >Food delivery from<br />
                  local restaurants</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >CreateSpace<br /><span
                  >Indie Print Publishing<br />
                  Made Easy</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >Junglee.com<br /><span
                  >Shop Online<br />
                  in India</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >Whispercast<br /><span
                  >Discover &amp; Distribute<br />
                  Digital Content</span
                ></a
              >
            </li>
          </ul>

          <ul>
            <li>
              <a href="https://www.amazon.in/"
                >Amazon Business<br /><span
                  >Everything For<br />
                  Your Business</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >Amazon Video Direct<br /><span
                  >Video Distribution<br />
                  Made Easy</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >DPReview<br /><span
                  >Digital<br />
                  Photography</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >Kindle Direct Publishing<br /><span
                  >Indie Digital Publishing<br />
                  Made Easy</span
                ></a
              >
            </li>
            <li>
              <a href="https://www.amazon.in/"
                >Withoutabox<br /><span
                  >Submit to<br />
                  Film Festivals</span
                ></a
              >
            </li>
          </ul>

          <ul className="copy text-center">
            <li><a href="https://www.amazon.in/">Conditions of Use</a></li>
                        <li><a href="https://www.amazon.in/">Privacy Notice</a></li>
                        <li><a href="https://www.amazon.in/">Interest-Based Ads</a></li>
                        <li>&copy; 1996-2017, Amazon.in, Inc. or its affiliates</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default footer
