import * as React from 'react';
import './PillarCV.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import photo from './photo.jpg'

export default function PillarCV() {
    return(
    <div className="PillarCV">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet"/>
                <article className="resume-wrapper text-center position-relative">
                    <div className="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">
                        <header className="resume-header pt-4 pt-md-0">
                            <div className="row">
                                <div className="col-block col-md-auto resume-picture-holder text-center text-md-start">
                                    <img className="picture" src={photo} alt="My photo"/>
                                </div>
                                <div className="col">
                                    <div className="row p-4 justify-content-center justify-content-md-between">
                                        <div className="primary-info col-auto">
                                            <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">Magda Struska</h1>
                                            <div className="title mb-3">Junior Scrum Master/Developer</div>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><a className="text-link" href="mailto:magda.struska@outlook.com"><FontAwesomeIcon icon={faEnvelope} /><span className="px-2">magda.struska@outlook.com</span></a></li>
                                                <li><a className="text-link"><FontAwesomeIcon icon={faMobileAlt} /><span className="px-2">+41 77 929 65 75</span></a></li>
                                            </ul>
                                        </div>
                                        <div className="secondary-info col-auto mt-2">
                                            <ul className="resume-social list-unstyled">
                                                <li className="mb-3"><a className="text-link"><span className="fa-container px-1 text-center"><FontAwesomeIcon icon={faLinkedinIn} /></span><span className="px-2">linkedin.com/in/TODO</span></a>
                                                </li>
                                                <li className="mb-3"><a className="text-link"><span className="fa-container px-1 text-center"><FontAwesomeIcon icon={faGithubAlt} /></span><span className="px-2">github.com/magdastruska</span></a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div className="resume-body p-5">
                            <section className="resume-section summary-section mb-5">
                                <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career
                                    Summary</h2>
                                <div className="resume-section-content">
                                    <p className="mb-0">Summarise your career here. </p>
                                </div>
                            </section>
                            <div className="row">
                                <div className="col-lg-9">
                                    <section className="resume-section experience-section mb-5">
                                        <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work
                                            Experience</h2>
                                        <div className="resume-section-content">
                                            <div className="resume-timeline position-relative">
                                                <article className="resume-timeline-item position-relative pb-5">

                                                    <div className="resume-timeline-item-header mb-2">
                                                        <div className="d-flex flex-column flex-md-row">
                                                            <h3 className="resume-position-title font-weight-bold mb-1">Lead
                                                                Developer</h3>
                                                            <div className="resume-company-name ms-auto">Startup Hub
                                                            </div>
                                                        </div>
                                                        <div className="resume-position-time">2020 - Present</div>
                                                    </div>
                                                    <div className="resume-timeline-item-desc">
                                                        <p>Role description goes here ipsum dolor sit amet, consectetuer
                                                            adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                                                            massa. Cum sociis natoque penatibus et magnis dis parturient
                                                            montes, nascetur ridiculus mus. Donec quam felis, ultricies
                                                            nec, pellentesque eu, pretium quis, sem. Donec pede justo,
                                                            fringilla vel.</p>
                                                        <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
                                                        <p>Praesentium voluptatum deleniti atque corrupti quos dolores
                                                            et quas molestias excepturi sint occaecati cupiditate non
                                                            provident.</p>
                                                        <ul>
                                                            <li>Lorem ipsum dolor sit amet, 80% consectetuer adipiscing
                                                                elit.
                                                            </li>
                                                            <li>At vero eos et accusamus et iusto odio dignissimos.</li>
                                                            <li>Blanditiis praesentium voluptatum deleniti atque
                                                                corrupti.
                                                            </li>
                                                            <li>Maecenas tempus tellus eget.</li>
                                                        </ul>
                                                        <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies
                                                            used:</h4>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">Angular</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">Python</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">jQuery</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">Webpack</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">HTML/SASS</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">PostgresSQL</span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </article>

                                                <article className="resume-timeline-item position-relative pb-5">

                                                    <div className="resume-timeline-item-header mb-2">
                                                        <div className="d-flex flex-column flex-md-row">
                                                            <h3 className="resume-position-title font-weight-bold mb-1">Senior
                                                                Software Developer</h3>
                                                            <div className="resume-company-name ms-auto">Google</div>
                                                        </div>
                                                        <div className="resume-position-time">2016 - 2020</div>
                                                    </div>
                                                    <div className="resume-timeline-item-desc">
                                                        <p>Role description goes here ipsum dolor sit amet, consectetuer
                                                            adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                                                            massa. Cum sociis natoque penatibus et magnis dis parturient
                                                            montes, nascetur ridiculus mus. Donec quam felis, ultricies
                                                            nec, pellentesque eu, pretium quis, sem. Donec pede justo,
                                                            fringilla vel.</p>
                                                        <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements</h4>
                                                        <p>Cum sociis natoque penatibus et magnis dis parturient montes,
                                                            nascetur ridiculus mus. Donec quam felis, ultricies nec,
                                                            pellentesque eu, pretium quis, sem.</p>
                                                        <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies
                                                            used:</h4>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">React</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">Redux</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">Django</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">Webpack</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">HTML/SASS</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">MySQL</span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </article>
                                                <article className="resume-timeline-item position-relative pb-5">

                                                    <div className="resume-timeline-item-header mb-2">
                                                        <div className="d-flex flex-column flex-md-row">
                                                            <h3 className="resume-position-title font-weight-bold mb-1">Co-Founder
                                                                & Lead Developer</h3>
                                                            <div className="resume-company-name ms-auto">To-do Lists
                                                            </div>
                                                        </div>
                                                        <div className="resume-position-time">2012 - 2016</div>
                                                    </div>
                                                    <div className="resume-timeline-item-desc">
                                                        <p>Role description goes here ipsum dolor sit amet, consectetuer
                                                            adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                                                            massa. Cum sociis natoque penatibus et magnis dis parturient
                                                            montes, nascetur ridiculus mus. Donec quam felis, ultricies
                                                            nec.</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                                                            natoque penatibus et magnis dis parturient montes.</p>
                                                        <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies
                                                            used:</h4>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">Django</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">JavaScript</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">Node.js</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">Require.js</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">HTML/SASS</span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </article>
                                                <article className="resume-timeline-item position-relative">

                                                    <div className="resume-timeline-item-header mb-2">
                                                        <div className="d-flex flex-column flex-md-row">
                                                            <h3 className="resume-position-title font-weight-bold mb-1">Web
                                                                Developer <small className="text-muted">(Intern)</small>
                                                            </h3>
                                                            <div className="resume-company-name ms-auto">Amazon</div>
                                                        </div>
                                                        <div className="resume-position-time">2011 - 2012</div>
                                                    </div>
                                                    <div className="resume-timeline-item-desc">
                                                        <p>Role description goes here ipsum dolor sit amet, consectetuer
                                                            adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                                                            massa. Cum sociis natoque penatibus et magnis dis parturient
                                                            montes, nascetur ridiculus mus. Donec quam felis, ultricies
                                                            nec. Fusce vulputate eleifend sapien. Vestibulum purus quam,
                                                            scelerisque ut, mollis sed, nonummy id, metus. Nullam
                                                            accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit
                                                            fringilla. Vestibulum.</p>
                                                        <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies
                                                            used:</h4>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">Ruby on Rails</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">jQuery</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">HTML/LESS</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">MongoDB</span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </article>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-lg-3">
                                    <section className="resume-section skills-section mb-5">
                                        <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
                                        <div className="resume-section-content">
                                            <div className="resume-skill-item">
                                                <h4 className="resume-skills-cat font-weight-bold">Frontend</h4>
                                                <ul className="list-unstyled mb-4">
                                                    <li className="mb-2">
                                                        <div className="resume-skill-name">Angular</div>
                                                        <div className="progress resume-progress">
                                                            <div className="progress-bar theme-progress-bar-dark"
                                                                 role="progressbar"
                                                                 aria-valuenow="25" aria-valuemin="0"
                                                                 aria-valuemax="100"></div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-2">
                                                        <div className="resume-skill-name">React</div>
                                                        <div className="progress resume-progress">
                                                            <div className="progress-bar theme-progress-bar-dark"
                                                                 role="progressbar"
                                                                 aria-valuenow="25" aria-valuemin="0"
                                                                 aria-valuemax="100"></div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-2">
                                                        <div className="resume-skill-name">JavaScript</div>
                                                        <div className="progress resume-progress">
                                                            <div className="progress-bar theme-progress-bar-dark"
                                                                 role="progressbar"
                                                                 aria-valuenow="25" aria-valuemin="0"
                                                                 aria-valuemax="100"></div>
                                                        </div>
                                                    </li>

                                                    <li className="mb-2">
                                                        <div className="resume-skill-name">Node.js</div>
                                                        <div className="progress resume-progress">
                                                            <div className="progress-bar theme-progress-bar-dark"
                                                                 role="progressbar"
                                                                 aria-valuenow="25" aria-valuemin="0"
                                                                 aria-valuemax="100"></div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-2">
                                                        <div className="resume-skill-name">HTML/CSS/SASS/LESS</div>
                                                        <div className="progress resume-progress">
                                                            <div className="progress-bar theme-progress-bar-dark"
                                                                 role="progressbar"
                                                                 aria-valuenow="25" aria-valuemin="0"
                                                                 aria-valuemax="100"></div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="resume-skill-item">
                                                <h4 className="resume-skills-cat font-weight-bold">Backend</h4>
                                                <ul className="list-unstyled">
                                                    <li className="mb-2">
                                                        <div className="resume-skill-name">Python/Django</div>
                                                        <div className="progress resume-progress">
                                                            <div className="progress-bar theme-progress-bar-dark"
                                                                 role="progressbar"
                                                                 aria-valuenow="25" aria-valuemin="0"
                                                                 aria-valuemax="100"></div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-2">
                                                        <div className="resume-skill-name">Ruby/Rails</div>
                                                        <div className="progress resume-progress">
                                                            <div className="progress-bar theme-progress-bar-dark"
                                                                 role="progressbar"
                                                                 aria-valuenow="25" aria-valuemin="0"
                                                                 aria-valuemax="100"></div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-2">
                                                        <div className="resume-skill-name">PHP</div>
                                                        <div className="progress resume-progress">
                                                            <div className="progress-bar theme-progress-bar-dark"
                                                                 role="progressbar"
                                                                 aria-valuenow="25" aria-valuemin="0"
                                                                 aria-valuemax="100"></div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-2">
                                                        <div className="resume-skill-name">WordPress/Shopify</div>
                                                        <div className="progress resume-progress">
                                                            <div className="progress-bar theme-progress-bar-dark"
                                                                 role="progressbar"
                                                                 aria-valuenow="25" aria-valuemin="0"
                                                                 aria-valuemax="100"></div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="resume-skill-item">
                                                <h4 className="resume-skills-cat font-weight-bold">Others</h4>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><span
                                                        className="badge badge-light">DevOps</span></li>
                                                    <li className="list-inline-item"><span
                                                        className="badge badge-light">Code Review</span></li>
                                                    <li className="list-inline-item"><span
                                                        className="badge badge-light">Git</span></li>
                                                    <li className="list-inline-item"><span
                                                        className="badge badge-light">Unit Testing</span></li>
                                                    <li className="list-inline-item"><span
                                                        className="badge badge-light">Wireframing</span></li>
                                                    <li className="list-inline-item"><span
                                                        className="badge badge-light">Sketch</span></li>
                                                    <li className="list-inline-item"><span
                                                        className="badge badge-light">Balsamiq</span></li>
                                                    <li className="list-inline-item"><span
                                                        className="badge badge-light">WordPress</span></li>
                                                    <li className="list-inline-item"><span
                                                        className="badge badge-light">Shopify</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="resume-section education-section mb-5">
                                        <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
                                        <div className="resume-section-content">
                                            <ul className="list-unstyled">
                                                <li className="mb-2">
                                                    <div className="resume-degree font-weight-bold">MSc in Computer
                                                        Science
                                                    </div>
                                                    <div className="resume-degree-org">University College London</div>
                                                    <div className="resume-degree-time">2010 - 2011</div>
                                                </li>
                                                <li>
                                                    <div className="resume-degree font-weight-bold">BSc Maths and
                                                        Physics
                                                    </div>
                                                    <div className="resume-degree-org">Imperial College London</div>
                                                    <div className="resume-degree-time">2007 - 2010</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>
                                    <section className="resume-section language-section mb-5">
                                        <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
                                        <div className="resume-section-content">
                                            <ul className="list-unstyled resume-lang-list">
                                                <li className="mb-2"><span
                                                    className="resume-lang-name font-weight-bold">English</span> <small
                                                    className="text-muted font-weight-normal">(Native)</small></li>
                                                <li className="mb-2 align-middle"><span
                                                    className="resume-lang-name font-weight-bold">French</span> <small
                                                    className="text-muted font-weight-normal">(Professional)</small>
                                                </li>
                                                <li><span className="resume-lang-name font-weight-bold">Spanish</span>
                                                    <small
                                                        className="text-muted font-weight-normal">(Professional)</small>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>
                                    <section className="resume-section interests-section mb-5">
                                        <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
                                        <div className="resume-section-content">
                                            <ul className="list-unstyled">
                                                <li className="mb-1">Climbing</li>
                                                <li className="mb-1">Snowboarding</li>
                                                <li className="mb-1">Cooking</li>
                                            </ul>
                                        </div>
                                    </section>

                                </div>
                            </div>
                        </div>
                    </div>
                </article>
    </div>

    );
}

