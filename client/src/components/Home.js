import NavBar from './NavBar'

const Home = () => {
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
      <div className="overview-container">
        <div className="overview-page">
          <div className="overview-title">
            <h3 className="titles">Overview</h3>
          </div>
          <div className="overview-body">
            <p>
              Desert Canine AZ - Rattlesnake & Toad Avoidance Training is a
              premier dog training enterprise located in Scottsdale, Arizona.
              We're dedicated to ensuring the safety of your canine companions
              amidst the unique desert environment. With a focus on rattlesnake
              and toad avoidance, we specialize in providing personalized
              training programs for dogs to navigate the distinctive challenges
              posed by Arizona's wildlife.
            </p>
          </div>
        </div>
        <div className="overview-page">
          <div className="overview-title">
            <h3 className="titles">One-on-One Training Sessions: Scottsdale</h3>
          </div>
          <div className="overview-body">
            <p>
              We offer exclusive one-on-one training sessions at our Scottsdale
              location. The fee for this personalized session is $100 per dog.
              Retests at the Scottsdale site are available at a fee of $50 per
              dog. Our trainers leverage years of experience to tailor these
              sessions to meet the specific needs of your canine companion.
            </p>
          </div>
        </div>
        <div className="overview-page">
          <div className="overview-title">
            <h3 className="titles">Live Rattlesnakes and Safety Measures:</h3>
          </div>
          <div className="overview-body">
            <p>
              Our training methodology involves the use of live rattlesnakes,
              securely caged for the safety of all participants. This hands-on
              approach ensures a realistic and effective learning experience for
              your dogs.
            </p>
          </div>
        </div>
        <div className="overview-page">
          <div className="overview-title">
            <h3 className="titles">Flexible Training Schedule:</h3>
          </div>
          <div className="overview-body">
            <p>
              To accommodate diverse schedules, our training sessions are
              available both during the week and on weekends. Additionally, we
              extend our services to towns across Arizona, providing convenient
              access to our expertise. Please contact us directly for detailed
              information.
            </p>
          </div>
        </div>
        <div className="overview-page">
          <div className="overview-title">
            <h3 className="titles">Off-Site Training:</h3>
          </div>
          <div className="overview-body">
            <p>
              For clients outside our Scottsdale facility, we offer off-site
              training at a cost of $200 for the first dog and $80 for every
              additonal dog.
            </p>
            <p>Please contact us directly for off-site group rates.</p>
          </div>
        </div>
        <div className="overview-page">
          <div className="overview-title">
            <h3 className="titles">Scheduling and Contact Information:</h3>
          </div>
          <div className="overview-body">
            <p>
              To schedule your canine's training session, please contact us at
              <span>
                <a href="tel:+16024693441" className="phone">
                  {' '}
                  (602) 469-3441
                </a>
              </span>
              . We accept payments in the form of cash, checks, Zelle, and Venmo
              providing a seamless and secure transaction process for our valued
              clients.
            </p>
            <p>
              At Desert Canine AZ - Rattlesnake & Toad Avoidance Training, we
              are dedicated to instilling essential avoidance skills in your
              dogs, promoting their safety and well-being in Arizona's unique
              environment.
            </p>
          </div>
        </div>
        <div className="end">
          <p>Website Created By: Josh Jumelet</p>
        </div>
      </div>
    </div>
  )
}

export default Home
