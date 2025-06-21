import NavBar from './NavBar'

const About = () => {
  return (
    <div className="title-logo">
      <div className="title">
        <h1>Training Dogs to Avoid Rattlesnakes and Toads</h1>
        <div className="img-container">
          <img
            className="home-logo"
            src="https://i.imgur.com/2tyh5BY.jpeg"
            alt="Rattlesnake & Toad Avoidance Training"
          />
        </div>
        <h1>6614 E. Morning Vista Ln.</h1>
        <h1>Scottsdale, AZ 85266</h1>
      </div>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="about-container">
        <div className="about-page">
          <div className="about-title">
            <h3 className="titles">About</h3>
          </div>
          <div className="about-body">
            <p>
              We employ live rattlesnakes in our training regimen to effectively
              teach your dog proper avoidance of them. This approach is
              essential as nothing mimics the scent of a live rattlesnake quite
              like the real thing. Using deceased frozen snakes wouldn't yield
              the same results, as your dog would learn to avoid any lifeless
              snake encountered in the desert.
            </p>
            <p>
              Arizona boasts the highest diversity of rattlesnake species in the
              United States. The exact count varies depending on the source; the
              Arizona Game and Fish Department recognizes 13 primary species,
              excluding the ten (10) sub-species specific to Arizona. Hence,
              considering both main species and sub-species, there are a total
              of 23 distinct varieties of rattlesnakes in the region.
            </p>
          </div>
        </div>
        <div className="about-page">
          <div className="about-title">
            <h3 className="titles">Notice to Owner</h3>
          </div>
          <div className="about-body">
            <p>
              In this training method, I utilize an electronic collar, commonly
              known as a shock collar, on the dog. A transmitter under my
              control sends a signal to the collar, delivering a harmless yet
              attention-grabbing shock. This shock is calibrated to effectively
              convey the message of the dangers posed by rattlesnakes to your
              dog. Drawing from my expertise and understanding of canine
              behavior, I adjust the transmitter settings accordingly.
            </p>
            <p>
              It's important to note that dogs react differently to the shock;
              some may simply lower their head while others may vocalize or
              exhibit more dramatic reactions. If you're concerned about the
              perceived harshness of this training approach and are unwilling to
              subject your dog to a momentary discomfort to prevent a
              potentially fatal, and certainly excruciating, rattlesnake bite,
              then this method may not be suitable for you.
            </p>
          </div>
        </div>
        <div className="about-page">
          <div className="about-title">
            <h3 className="titles">Training Costs & Additional Information</h3>
          </div>
          <div className="about-body">
            <p>
              Training conducted at our Scottsdale facility is priced at $100
              per dog, ensuring individualized attention as sessions are
              one-on-one with just you and your dog(s). Yearly retests,
              scheduled after the initial training, incur a fee of $50 per dog.
            </p>
            <p>
              For off-site group training sessions held at locations other than
              our Scottsdale facility, within the Phoenix Metropolitan area,
              such as dog clubs and organizations the cost remains $100 per dog.
              However, these sessions typically require a minimum number of
              dogs, typically ranging from 12 to 15 (please contact us for more
              details on large group scheduling). Should retests be necessary at
              these off-site locations, the fee remains $50 per dog. It's
              important to note that all training sessions are conducted by
              appointment only.
            </p>
            <h4>Training Fee:</h4>
            <h5>Scottsdale Location:</h5>
            <p>$100 per new dog</p>
            <p>$50 per retest</p>
            <h5>Off-Site Location:</h5>
            <p>$200 for first dog + $80 per additonal dog</p>
            <p>$80 per retest</p>
          </div>
        </div>
        <div className="about-page">
          <div className="about-title">
            <h3 className="titles">Final Thoughts</h3>
          </div>
          <div className="about-body">
            <p>
              While our training methods have demonstrated significant
              effectiveness, we cannot offer a 100% guarantee. We diligently
              strive to instill in dogs the understanding that rattlesnakes pose
              a threat and to steer clear of them. However, it's important to
              acknowledge the multitude of variables at play, including wind
              direction, snake location, dog behavior, and environmental factors
              like terrain and cover. Despite our best efforts, we cannot ensure
              that a trained dog will never encounter a rattlesnake bite.
            </p>
            <p>
              Nevertheless, post-training, the likelihood of avoiding such
              incidents is greatly enhanced. To uphold our commitment to
              providing this invaluable service to dog owners, we require all
              clients to sign a waiver of liability form.
            </p>
            <p>
              To schedule your training session, please contact us at
              <span>
                <a href="tel:+16024693441" className="phone">
                  {' '}
                  (602) 469-3441
                </a>
              </span>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="end">
        <p>Website Created By: Josh Jumelet</p>
      </div>
    </div>
  )
}

export default About
