import NavBar from './NavBar'

const Contact = () => {
  return (
    <div className="background-mobile">
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
          <h1>6614 E. Morning Vista Dr</h1>
          <h1>Scottsdale, AZ 85266</h1>
        </div>
        <div className="navbar">
          <NavBar />
        </div>
      </div>
      <div className="location-overview">
        <div className="location-grid">
          <div className="left-side">
            <div className="contact-title">
              <h2>Contact Information</h2>
            </div>
            <div>
              <div className="contacts-info">
                <img
                  className="location-img"
                  src="https://i.imgur.com/2Wwo0BW.png?2"
                  alt="Location"
                />
              </div>
              <div className="contacts-info">
                <p className="contacts-title">Location</p>
                <address className="contact-link">
                  6614 E. Morning Vista Dr. Scottsdale, AZ 85266
                </address>
              </div>
            </div>
            <div>
              <div className="contacts-info">
                <img
                  className="phone-img"
                  src="https://i.imgur.com/UPvzCn9.png?1"
                  alt="Phone Number"
                />
              </div>
              <div className="contacts-info">
                <p className="contacts-title">Phone Number</p>
                <a href="tel:+16024693441" className="contact-link">
                  (602) 469-3441
                </a>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div>
              <iframe
                title="Google"
                className="map"
                width="520"
                height="400"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=6614%20E.%20Morning%20Vista%20Dr.%20Scottsdale,%20AZ%2085266+(Desert%20Canine%20AZ)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps trackers</a>
              </iframe>
            </div>
          </div>
        </div>
        <div className="end">
          <p>Website Created By: Josh Jumelet</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
