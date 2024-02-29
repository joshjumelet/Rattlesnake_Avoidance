import NavBar from './NavBar'

const Home = () => {
  return (
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
      <div className="overview-container">
        <div className="overview-page">
          <div className="overview-title">
            <h3 className="titles">Overview</h3>
          </div>
          <div className="overview-body">
            <p>
              DesertCanine Rattlesnake & Toad Avoidance Training is a premier
              dog training enterprise based in Scottsdale, Arizona, dedicated to
              ensuring the safety of your canine companions amidst the unique
              desert environment. With a focus on rattlesnake and toad
              avoidance, we specialize in providing personalized training
              programs for dogs to navigate the distinctive challenges posed by
              Arizona's wildlife.
            </p>
          </div>
        </div>
        <div className="overview-page">
          <div className="overview-title">
            <h3 className="titles">One-on-One Training Sessions: Scotsdale</h3>
          </div>
          <div className="overview-body">
            <p>
              We offer exclusive one-on-one training sessions at our Scotsdale
              location. The fee for this personalized session is $80 per dog.
              Retests at the Scotsdale site are available at a fee of $40 per
              dog. Our trainers leverage our years of experience to tailor these
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
            <h3 className="titles">On-Site Training in Other Locations:</h3>
          </div>
          <div className="overview-body">
            <p>
              For clients outside our Scotsdale facility, we offer on-site
              training at a cost of $80 per dog, with a minimum requirement of
              12-15 dogs. Retests at a non-Scotsdale site are available for $40
              per dog, ensuring the ongoing effectiveness of the training.
            </p>
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
              . We accept payments in the form of cash, checks, or Zelle,
              providing a seamless and secure transaction process for our valued
              clients.
            </p>
            <p>
              At DesertCanine Rattlesnake & Toad Avoidance Training, we are
              dedicated to instilling essential avoidance skills in your dogs,
              promoting their safety and well-being in Arizona's unique
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
