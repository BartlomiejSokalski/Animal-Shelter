import React from "react";
import { Link } from "react-router-dom";
import '../pages/_landingPage.scss';

const LandingPage = () => {
    return (
      <>
          <div className="container-main-landingPage">
              {/* landing page */}
              <header className="header-main">
                  <div className="header-logo">
                      <img className="paw-logo" src="src/icons/paw-solid.svg" alt="Paw Logo" />
                      <h1 className="btn-logo">Animal Shelter</h1>
                  </div>
                  <div className="header-hrefs">

                      <button className="btn-header">Pracownicy ośrodka</button>
                      <button className="btn-header">Kontakt</button>
                      <Link to="/login" className="btn-header">Zaloguj</Link>
                  </div>
              </header>
              <div className="landingPageMain-content">
                  <div className="header-main-img">
                      <img className="landingPageMainImg" src="https://png.pngtree.com/background/20230612/original/pngtree-large-number-of-breeds-of-dogs-picture-image_3176576.jpg" alt="Dogs" />
                  </div>
                  <div className="landingPageSideCards">
                      <div className="landingPageSidecard">
                          <h2>Dlaczego warto mieć psa ze schroniska?</h2>
                          <div className="landingPageSidecardReasons">
                              <p>Bo psy w schronisku nie mają zabawek</p>
                          </div>
                          <div className="landingPageSidecardReasons">
                              <p>Bo psy w schronisku nie mają zabawek</p>
                          </div>
                          <div className="landingPageSidecardReasons">
                              <p>Bo psy w schronisku nie mają zabawek</p>
                          </div>
                      </div>
                      <div className="landingPageSidecard">
                          <h2>Aktywności z psem</h2>
                          <div className="landingPageSidecardReasons">
                              <p>Bo psy w schronisku nie mają zabawek</p>
                          </div>
                          <div className="landingPageSidecardReasons">
                              <p>Bo psy w schronisku nie mają zabawek</p>
                          </div>
                          <div className="landingPageSidecardReasons">
                              <p>Bo psy w schronisku nie mają zabawek</p>
                          </div>
                      </div>
                      <div className="landingPageSidecard">
                          <h2>Leczenie i choroby</h2>
                          <div className="landingPageSidecardReasons">
                              <p>Bo psy w schronisku nie mają zabawek</p>
                          </div>
                          <div className="landingPageSidecardReasons">
                              <p>Bo psy w schronisku nie mają zabawek</p>
                          </div>
                          <div className="landingPageSidecardReasons">
                              <p>Bo psy w schronisku nie mają zabawek</p>
                          </div>
                      </div>
                  </div>
                  <div className="landingPageDoctors">
                      <h3>Nasi specjaliści!</h3>
                      <div className="landingPageDoctorsBox">
                          <div className="landingPageDoctorsScrolable">
                              <div className="landingPageDoctorsPhoto">
                                  <img className="landingPageDoctorsImg" src="https://pawelczyk-kozik.pl/wp-content/uploads/2021/04/Formy-zatrudnienia-lekarzy-w-placowce-medycznej.jpg" alt="Doctor 1" />
                                  <p>Doktor habilitowany maja kwaśniewska</p>
                              </div>
                              <div className="landingPageDoctorsPhoto">
                                  <img className="landingPageDoctorsImg" src="https://answer.com.pl/wp-content/uploads/2017/11/LEKARZ.jpg" alt="Doctor 2" />
                                  <p>lekarz weterynarri hubert pocoń</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <footer className="footer-main">
                  <div>
                      <div>Telefon: 123-456-789</div>
                      <div>Email: kontakt@animalshelter.com</div>
                  </div>
              </footer>
          </div>
      </>
    );
}

export default LandingPage;
