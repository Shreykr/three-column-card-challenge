import "./App.css";
import sedan from "./assets/icon-sedans.svg";
import suvs from "./assets/icon-suvs.svg";
import luxury from "./assets/icon-luxury.svg";

function App() {
  return (
    <>
      <main>
        <div className='p-4 mt-16 mb-16 w-screen max-w-xs flex flex-col sm:mt-0 sm:md-0 lg:p-0 sm:max-w-4xl sm:flex-row'>
          <div className='p-8 bg-bright_orange rounded-t-lg sm:rounded-t-none sm:rounded-tl-lg sm:rounded-bl-lg flex flex-col justify-between'>
            <article>
              <img
                className='h-auto mb-8'
                width={"60"}
                height={"60"}
                src={sedan}
                alt={"sedan icon"}
              />
              <h1 className='mb-6 text-4xl text-very_light_gray font-big_shoulders'>
                SEDANS
              </h1>
              <p className='mb-8 sm:mb-24 text-sm+1 text-transparent_white font-lexend_deca'>
                Choose a sedan for its affordability and excellent fuel economy.
                Ideal for cruising in the city or on your next road trip.
              </p>
            </article>
            <button className='mb-4 p-3 w-36 select-none font-lexend_deca  text-bright_orange bg-very_light_gray text-center rounded-full border-2 border-transparent transition ease-in hover:border-very_light_gray hover:bg-bright_orange hover:text-very_light_gray'>
              Learn More
            </button>
          </div>
          <div className='p-8 bg-dark_cyan flex flex-col justify-between'>
            <article>
              <img
                className='h-auto mb-8'
                width={"60"}
                height={"60"}
                src={suvs}
                alt={"suv icon"}
              />
              <h1 className='mb-6 text-4xl text-very_light_gray font-big_shoulders'>
                SUVS
              </h1>
              <p className='mb-8 sm:mb-24 text-sm+1 text-transparent_white font-lexend_deca'>
                Take an SUV for its spacious interior, power, and versatility.
                Perfect for your next family vacation and off-road adventures.
              </p>
            </article>
            <button className='mb-4 p-3 w-36 select-none font-lexend_deca  text-dark_cyan bg-very_light_gray text-center rounded-full border-2 border-transparent transition ease-in hover:border-very_light_gray hover:bg-dark_cyan hover:text-very_light_gray'>
              Learn More
            </button>
          </div>
          <div className='p-8 bg-very_dark_cyan rounded-b-lg sm:rounded-b-none sm:rounded-tr-lg sm:rounded-br-lg flex flex-col justify-between'>
            <article>
              <img
                className='h-auto mb-8'
                width={"60"}
                height={"60"}
                src={luxury}
                alt={"luxury car icon"}
              />
              <h1 className='mb-6 text-4xl text-transparent_white font-big_shoulders'>
                LUXURY
              </h1>
              <p className='mb-8 sm:mb-24 text-sm+1 text-transparent_white font-lexend_deca'>
                Cruise in the best car brands without the bloated prices. Enjoy
                the enhanced comfort of a luxury rental and arrive in style.
              </p>
            </article>
            <button className='mb-4 p-3 w-36 select-none font-lexend_deca  text-very_dark_cyan bg-very_light_gray text-center rounded-full border-2 border-transparent transition ease-in hover:border-very_light_gray hover:bg-very_dark_cyan hover:text-very_light_gray'>
              Learn More
            </button>
          </div>
        </div>
      </main>
      <footer>
        <div className='attribution text-sm font-lexend_deca'>
          Challenge by{" "}
          <a
            className='underline text-blue-600'
            href='https://www.frontendmentor.io?ref=challenge'
            target='_blank'
            rel='noreferrer'>
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            className='underline text-blue-600'
            href='https://www.frontendmentor.io/profile/Shreykr'>
            Shreyas K R
          </a>
          .
        </div>
      </footer>
    </>
  );
}

export default App;
