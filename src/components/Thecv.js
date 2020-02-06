import React, {Component} from 'react';
import kuva from '../assets/img/profile.jpg';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import dataeng from '../assets/info.json'
import datafin from '../assets/infofin.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {Container,Row,Col} from 'react-bootstrap';
import '../assets/css/allcss.css';
import {CPlusPlus,C,Photoshop,JavaScript,Kubernetes} from './icons.js'
import Navigate from './navbar.js'

library.add(fab,CPlusPlus,C,Photoshop,JavaScript,Kubernetes);
FontAwesomeIcon.defaultPrefix = "fab";
class Basics extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    

    render(){
      const basics = this.props.data.basics;

      const allSocial = basics.profiles.map((profile, index) => 
      
      <a href={profile.url}>
      <FontAwesomeIcon icon={{prefix: 'fab', iconName: profile.network}} />
      </a>
      
      );

      return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div className="w-100">
      <h1 className="mb-0">{basics.name.split(" ")[0]}
        <span className="text-primary"> {basics.name.split(" ")[1]}</span>
      </h1>
      <div className="subheading mb-5"> {basics.label} · {basics.location} · {basics.phone} ·
        <a href={`mailto:${basics.email}`}> {basics.email}</a>
      </div>
      <p className="lead mb-5"> {basics.summary}</p>
      <div className="social-icons">
        {allSocial}
      </div>
    </div>
  </section>
      )
    }
}

class Experience extends Component {
  render() {
    const experiences = this.props.data.work;
    const allExperiences = experiences.map((oneJob, index) =>
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="resume-content">
        <h3 className="mb-0">{oneJob.position}</h3>
        <div className="subheading mb-3">
        <a href={oneJob.website}>{oneJob.company}</a> 
        </div>
        <p>{oneJob.summary}</p>
      </div>
      <div className="resume-date text-md-right">
      <span className="text-primary">{oneJob.startDate} - {oneJob.endDate}</span>
      </div>
    </div>
    );

    return (allExperiences);
  
}
}
class Education extends Component {
  render() {
    const educations = this.props.data.education;
    const allEducations = educations.map((oneEdu, index) =>
      <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">{oneEdu.institution}</h3>
          <div className="subheading mb-3 colorized">{oneEdu.studyType}</div>
          <div>{oneEdu.area}</div>
          <div >{oneEdu.info}</div>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">{oneEdu.startDate} - {oneEdu.endDate}</span>
        </div>
      </div>
    );

    return (allEducations);
  
}
}
class Interest extends Component {
  render() {
    const interests = this.props.data.interests;
    const interest = interests.map((inter,index) =>
    <p key={index} className="mb-0">{inter.info}</p>
    );

    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
    <div className="w-100">
      <h2 className="mb-5">Interests</h2>
      {interest}
    </div>
  </section>
    );
  
}
}

class Skill extends Component {
  //      <FontAwesomeIcon className={"hovering icon-size"} icon={{prefix: 'fab', iconName: (icon.split(" ")[0]).toLowerCase()}} />
//(icon.split(" ")[0]).toLowerCase()
  render() {
    const skills = this.props.data.skills;

    const allSkills = skills.map((perSkill,index) =>
    <div key={index}>
    <h3 className="mb-3">{perSkill.name}</h3>
    <div className="subheading mb-3 colorized">{perSkill.level}</div>
    <Container className="middle" style={{ paddingLeft: 0}} >
    <Row className="mb-4 justify-content-md-left">
    {perSkill.keywords.map((icon,index) =>
      <Col  className="text-center" xs={3} >
      <FontAwesomeIcon className={"hovering icon-size"} icon={{prefix: 'fab',iconName: (icon.split(" ")[0]).toLowerCase()}} />
      </Col>
    )}
    </Row>
    <Row className="mb-4 justify-content-md-left">
    {perSkill.keywords.map((name,index) =>
      <Col className="text-center" xs={3} >
      <p >{name}</p>
      </Col>
    )}
    </Row>
    </Container>
    </div>
    );
    return (
      <div>
      <h2 className="mb-5">Skills</h2>
      {allSkills}
      </div>
    );
  
}
}
class AboutSite extends Component {
  render(){
    return(
      <div>
      <hr className="m-0"/>

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="aboutsite">
      <div className="w-100">
      <h2 className="mb-5">About this site</h2>
      <p className="lead mb-5">
        This site was made with startbootstrap <a href="https://startbootstrap.com/themes/resume/">resume theme</a>.
        I also used react to make this work with json CV, so I could switch between languages more easily.
        I have this site on <a href="">Github</a>
      </p>
      </div>
      </section>


      </div>
    )
  }
}
class TheCv extends Component {
  constructor(props){
    super(props);
    this.state = {
        isEng: false
    };
  }
  handleSwitchChange(){
    this.setState({
      isEng: !this.state.isEng
    });
  }

  render() {
      return (
      <div>
      <Navigate
      handleSwitch = {() => this.handleSwitchChange()}
      />
  <div className="container-fluid p-0">
    <Basics data={this.state.isEng ? datafin : dataeng}/>
  <hr className="m-0"/>

  <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
    <div className="w-100">
      <h2 className="mb-5">Experience</h2>
      <Experience data={this.state.isEng ? datafin : dataeng}/>
    </div>
  </section>

  <hr className="m-0"/>

  <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
    <div className="w-100">
      <h2 className="mb-5">Education</h2>

      <Education data={this.state.isEng ? datafin : dataeng}/>

    </div>
  </section>

  <hr className="m-0"/>

  <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
 
      <Skill data={this.state.isEng ? datafin : dataeng}/>

  </section>

  <hr className="m-0"/>

  <Interest data={this.state.isEng ? datafin : dataeng}/>


    </div>
    </div>
        );
    }
}
export default TheCv