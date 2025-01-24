import React from 'react'
import Hero from './Hero'
import hero1 from './../../assets/hero1.jpg'
import './Home.css'
const Home = () => {
  return (
    <section>
      <Hero></Hero>
      <div className="py-12 px-6">
        <h3 className="text-3xl font-semibold text-center text-green-700 mb-6">
          Our Impact
        </h3>
        <div className="statsGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="statCard text-center bg-green-100 p-6 rounded-lg shadow-md">
            <h4 className="text-4xl font-bold text-green-800">10,000+</h4>
            <p className="text-xl text-green-600">Paper Cups Saved</p>
          </div>
          <div className="statCard text-center bg-green-100 p-6 rounded-lg shadow-md">
            <h4 className="text-4xl font-bold text-green-800">500+</h4>
            <p className="text-xl text-green-600">Users Joined</p>
          </div>
          <div className="statCard text-center bg-green-100 p-6 rounded-lg shadow-md">
            <h4 className="text-4xl font-bold text-green-800">50+</h4>
            <p className="text-xl text-green-600">
              Campus Locations Participating
            </p>
          </div>
        </div>
      </div>
      <section className="aboutSection py-12 px-20">
        <h2 className="text-4xl text-center font-semibold text-green-700 mb-6">
          About Our Initiative
        </h2>
        <div className="flex flex-col md:flex-row items-center h-auto md:h-[500px]">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={hero1}
              alt="Hero Image"
              className="w-full h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>
          {/* Content Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center px-6 md:px-12">
            <p className="text-lg text-gray-700 text-justify leading-relaxed">
              Disposable paper cups contribute massively to environmental
              pollution, affecting both the planet and human health. Over 500
              billion paper cups are used globally each year, leading to
              deforestation, excessive waste, and pollution of oceans and
              landfills.
              <br />
              <br />
              Our platform empowers individuals and communities to reduce waste,
              make conscious choices, and adopt eco-friendly alternatives. By
              leveraging technology and community-driven efforts, we aim to
              build a global network of individuals, campuses, and organizations
              committed to sustainability.
              <br />
              <br />
              Join us in making a lasting impact on our planet! Together, we can
              be part of the solution and reduce our collective carbon
              footprint. Let’s work towards a future where paper cups are no
              longer a threat to the environment. The change starts with us, one
              cup at a time.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="howItWorks py-12 px-12">
        <h2 className="text-4xl text-center font-semibold text-green-700 mb-6">
          How It Works
        </h2>
        <div className="featureGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="featureItem bg-green-100 p-6 rounded-lg text-center shadow-md">
            <h4 className="text-2xl font-semibold text-green-800">
              Track Your Impact
            </h4>
            <p className="text-lg text-green-600">
              See how many paper cups you've helped save and how you're
              contributing to sustainability.
            </p>
          </div>
          <div className="featureItem bg-green-100 p-6 rounded-lg text-center shadow-md">
            <h4 className="text-2xl font-semibold text-green-800">
              Earn Rewards
            </h4>
            <p className="text-lg text-green-600">
              Get rewarded for reducing paper cup usage with badges, discounts,
              and exclusive content.
            </p>
          </div>
          <div className="featureItem bg-green-100 p-6 rounded-lg text-center shadow-md">
            <h4 className="text-2xl font-semibold text-green-800">
              Find Alternatives
            </h4>
            <p className="text-lg text-green-600">
              Explore eco-friendly alternatives to disposable cups and start
              using them today!
            </p>
          </div>
          <div className="featureItem bg-green-100 p-6 rounded-lg text-center shadow-md">
            <h4 className="text-2xl font-semibold text-green-800">
              Join a Community
            </h4>
            <p className="text-lg text-green-600">
              Connect with like-minded individuals and organizations working
              towards sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="ctaSection py-12 bg-green-700 text-white text-center my-12">
        <h2 className="text-4xl font-semibold mb-4">Make a Difference Today</h2>
        <p className="text-xl mb-6">
          Join thousands of others who are helping reduce paper cup waste and
          supporting sustainability.
        </p>
        <button className="ctaButton bg-green-800 hover:bg-green-600 text-white text-lg px-8 py-3 rounded-md transition">
          Join the Movement
        </button>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-12">
        <h2 className="text-4xl text-center font-semibold text-green-700 mb-6">
          What Our Users Say
        </h2>
        <div className="testimonialGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="testimonialCard p-6 bg-white rounded-lg shadow-md">
            <p className="text-lg text-gray-700 mb-4">
              "This platform has completely changed the way I view my daily
              habits. It's so easy to track and make a difference!"
            </p>
            <span className="text-xl font-semibold text-green-700">
              Emily, Student
            </span>
          </div>
          <div className="testimonialCard p-6 bg-white rounded-lg shadow-md">
            <p className="text-lg text-gray-700 mb-4">
              "As an organizer of campus events, I was able to drastically
              reduce paper cup usage by encouraging reusable options through
              this platform."
            </p>
            <span className="text-xl font-semibold text-green-700">
              John, Campus Event Organizer
            </span>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer py-8 bg-gray-900 text-white text-center">
        <ul className="mb-6">
          <li>
            <a href="/contact" className="hover:text-green-500">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/privacy-policy" className="hover:text-green-500">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms-of-service" className="hover:text-green-500">
              Terms of Service
            </a>
          </li>
        </ul>
        <div className="socialMedia flex justify-center space-x-6">
          <a href="https://facebook.com" className="hover:text-green-500">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://twitter.com" className="hover:text-green-500">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="https://instagram.com" className="hover:text-green-500">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </footer>
    </section>
  )
}

export default Home
