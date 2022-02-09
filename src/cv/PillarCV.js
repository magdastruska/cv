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
                                                            <h3 className="resume-position-title font-weight-bold mb-1">
                                                               Carrer change
                                                            </h3>
                                                            <div className="resume-company-name ms-auto">
                                                            </div>
                                                        </div>
                                                        <div className="resume-position-time">2019 - Present</div>
                                                    </div>
                                                    <div className="resume-timeline-item-desc">
                                                        <p>I have worked on switching my career into a  different field. I have always been interested in IT and new technologies.
                                                            During my career in various fields I have participated in several IT projects and even managed one.
                                                            I have observed the work of software developers and I have always wanted to do what they do. To create something useful out of nothing.  </p>
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
                                                                className="badge bg-secondary badge-pill">SAP</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">EXCEL</span>
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
                                                            <h3 className="resume-position-title font-weight-bold mb-1">  Logistics Specialist, Logistics Department  </h3>
                                                            <div className="resume-company-name ms-auto">Jungheinrich Poland </div>
                                                        </div>
                                                        <div className="resume-position-time">2015 - 2018</div>
                                                    </div>
                                                    <div className="resume-timeline-item-desc">
                                                        <p>Role description ...</p>
                                                        <h4 className="resume-timeline-item-desc-heading font-weight-bold">Key responsibilities</h4>
                                                        <p>
                                                                                                                <li>Process manufacturing orders for forklifts in SAP R/3 (SD module)</li>
                                                            <li>Order forklifts in Jungheinrich factories and cooperate with third-party suppliers on customizing them to client’s needs</li>
                                                                <li>Prepare transport documents such as customs invoices and delivery notes</li>
                                                                    <li>Coordinate the transport and communicate with customer regarding transport data</li>
                                                                        <li>	Invoice to customers and act as a first point of contact until delivery</li>
                                                        </p>
                                                    </div>
                                                </article>
                                                <article className="resume-timeline-item position-relative pb-5">

                                                    <div className="resume-timeline-item-header mb-2">
                                                        <div className="d-flex flex-column flex-md-row">
                                                              <h3 className="resume-position-title font-weight-bold mb-1">  Rental Projects Assistant, Forklift Rentals Department   </h3>
                                                                <div className="resume-company-name ms-auto">Jungheinrich Poland </div>
                                                            </div>
                                                            <div className="resume-position-time">2014 - 2015</div>

                                                            <p>Role description ...</p>
                                                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Key responsibilities</h4>
                                                            <p>

                                                                <li>Process forklift rental orders and input technical specification in SAP R/3 </li>
                                                                <li>Development and management of internal technical inspection plans in SAP</li>
                                                                <li>Coordinate forklifts registration and periodical technical inspections with Office of Technical Inspection  </li>
                                                                <li>Design reports and summaries in Microsoft Excel	</li>
                                                            </p>
                                                        <h4 className="resume-timeline-item-desc-heading font-weight-bold"> Skillsused:</h4>

                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill"> Ability to prioritize</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill"> Time management skills</span>
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
                                                            <h3 className="resume-position-title font-weight-bold mb-1">Production Manager, Labels Production   </h3>
                                                            <div className="resume-company-name ms-auto">Logopak East
                                                            </div>
                                                        </div>
                                                        <div className="resume-position-time">2008 - 2013</div>
                                                    </div>
                                                    <div className="resume-timeline-item-desc">
                                                        <p>Leading supplier of fully integrated labelling systems ....</p>

                                                        <h4 className="resume-timeline-item-desc-heading font-weight-bold">Key responsibilities</h4>
                                                        <p>
                                                        <li>Direct and coordinate the activities of our production team </li>
                                                        <li>Communicate with vendors, negotiate contracts, confirm delivery dates and shipping methods</li>
                                                        <li>Plan production schedule based on customer orders, availability of materials, production capacity and deadlines</li>
                                                        <li>Ensure materials are available and consumed in “First-In, First-Out” (FIFO) cycles</li>
                                                        <li>Calculate production cost and finished goods price</li>
                                                        <li>Monitor product quality and shipments to customers</li>
                                                        <li>Manage IT projects and specify software requirements (web application for production support, logopakeast.pl website)</li>
                                                        <li>Use ERP system in everyday work</li>
                                                        </p>

                                                        <h4 className="resume-timeline-item-desc-heading font-weight-bold"> Skills used:</h4>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill"> Managing multiple processes </span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">ERP</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">Problem solving</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">Production process plannig</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">Process improvement</span>
                                                            </li>
                                                        </ul>
                                                         </div>

                                                </article>
                                                <article className="resume-timeline-item position-relative pb-5">

                                                    <div className="resume-timeline-item-header mb-2">
                                                        <div className="d-flex flex-column flex-md-row">
                                                            <h3 className="resume-position-title font-weight-bold mb-1"> Salesman, Sales and Consulting Department   </h3>
                                                            <div className="resume-company-name ms-auto">Logopak East
                                                            </div>
                                                        </div>
                                                        <div className="resume-position-time">2006 - 2008 </div>
                                                    </div>
                                                    <div className="resume-timeline-item-desc">
                                                        <p>Leading supplier of fully integrated labelling systems ....</p>

                                                        <h4 className="resume-timeline-item-desc-heading font-weight-bold">Key responsibilities</h4>
                                                        <p>
                                                            <li>Actively seek out new sales opportunities and prepare sales offers for labeling machines, logistic labels and various software solutions eg. WMS </li>
                                                            <li>Organize regular client meetings to discuss their requirements regarding software and machines</li>
                                                            <li> Receive and process orders from customers, coordinate sales process, technical support and advice</li>

                                                        </p>

                                                        <h4 className="resume-timeline-item-desc-heading font-weight-bold"> Skills used:</h4>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill"> Sales  </span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">Strategic communication</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">Relationship building</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">Monitor customer preferences </span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">Active listening</span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </article>
                                                <article className="resume-timeline-item position-relative pb-5">

                                                    <div className="resume-timeline-item-header mb-2">
                                                        <div className="d-flex flex-column flex-md-row">
                                                            <h3 className="resume-position-title font-weight-bold mb-1"> Sales Department Assistant    </h3>
                                                            <div className="resume-company-name ms-auto">EWA-BIS
                                                            </div>

                                                        </div>
                                                        <div className="resume-position-time">2005 - 2006 </div>
                                                    </div>
                                                    <div className="resume-timeline-item-desc">
                                                        <p>Leading supplier of fully integrated labelling systems ....</p>

                                                        <h4 className="resume-timeline-item-desc-heading font-weight-bold">Key responsibilities</h4>
                                                        <p>
                                                            <li> Identify  potential customers  </li>
                                                            <li> Collect information about potential investment from customer and  update information in CRM system</li>
                                                             <li>Schedule meetings with clients and prepare commercial offers</li>
                                                            <li>Collaborate with Sales Manager and monitor customer needs</li>
                                                            <li> !!!!!!!!!! </li>

                                                        </p>

                                                        <h4 className="resume-timeline-item-desc-heading font-weight-bold"> Skills used:</h4>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill"> Sales  </span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">Strategic communication</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">Relationship building</span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">Monitor customer preferences </span>
                                                            </li>
                                                            <li className="list-inline-item"><span
                                                                className="badge bg-secondary badge-pill">Active listening</span>
                                                            </li>
                                                        </ul>
                                                    </div>


                                                </article>
                                                <article className="resume-timeline-item position-relative">

                                                    <div className="resume-timeline-item-header mb-2">
                                                        <div className="d-flex flex-column flex-md-row">
                                                            <h3 className="resume-position-title font-weight-bold mb-1">Finance Department Assistant  <small className="text-muted">(Intern)</small>
                                                            </h3>
                                                            <div className="resume-company-name ms-auto">Marsh Inc Poland  </div>
                                                        </div>
                                                        <div className="resume-position-time">2002 - 2003</div>
                                                    </div>
                                                    <div className="resume-timeline-item-desc">
                                                        <p>Role description.....</p>
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
                                                <h4 className="resume-skills-cat font-weight-bold">Technical</h4>
                                                <ul className="list-unstyled mb-4">
                                                    <li className="mb-2">
                                                        <div className="resume-skill-name">HTML/CSS</div>
                                                        <div className="progress resume-progress">
                                                            <div className="progress-bar theme-progress-bar-dark w-20"
                                                                 role="progressbar"
                                                                 aria-valuenow="25" aria-valuemin="0"
                                                                 aria-valuemax="100"></div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-2">
                                                        <div className="resume-skill-name">JavaScript</div>
                                                        <div className="progress resume-progress">
                                                            <div className="progress-bar theme-progress-bar-dark w-50"
                                                                 role="progressbar"
                                                                 aria-valuenow="25" aria-valuemin="0"
                                                                 aria-valuemax="100"></div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-2">
                                                        <div className="resume-skill-name">JavaScript</div>
                                                        <div className="progress resume-progress">
                                                            <div className="progress-bar theme-progress-bar-dark w-70"
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
                                                <h4 className="resume-skills-cat font-weight-bold">Personal</h4>
                                                <ul className="list-unstyled">
                                                    <li className="mb-2">
                                                        <div className="resume-skill-name">Good researches</div>
                                                        <div className="progress resume-progress">
                                                            <div className="progress-bar theme-progress-bar-dark"
                                                                 role="progressbar"
                                                                 aria-valuenow="25" aria-valuemin="0"
                                                                 aria-valuemax="100"></div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-2">
                                                        <div className="resume-skill-name">Attention to Detail</div>
                                                        <div className="progress resume-progress">
                                                            <div className="progress-bar theme-progress-bar-dark"
                                                                 role="progressbar"
                                                                 aria-valuenow="25" aria-valuemin="0"
                                                                 aria-valuemax="100"></div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-2">
                                                        <div className="resume-skill-name">Communication</div>
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

