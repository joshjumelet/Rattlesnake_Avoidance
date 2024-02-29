import NavBar from './NavBar'

const Contact = () => {
  return (
    <div>
      <div className="title-logo">
        <div className="title">
          <h1>Training Dogs to Avoid Rattlesnakes and Toads</h1>
          <div className="img-container">
            <img
              className="home-logo"
              src="https://i.imgur.com/l4xW0mD.jpg"
              alt="Rattlesnake & Toad Avoidance Training"
              width="500"
            />
          </div>
          <h1>6407 N 82nd Way</h1>
          <h1>Scotsdale, AZ 85250</h1>
        </div>
        <div className="navbar">
          <NavBar />
        </div>
      </div>
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
                6407 N 82nd Way, Scotsdale, AZ 85250
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
              className="map"
              width="520"
              height="400"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=6407%20N%2082nd%20Way,%20Scottsdale,%20AZ%2085250+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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
  )
}

export default Contact
