import React, { Component } from 'react';
import check from '../img/check.svg';

import {connect} from 'react-redux';
import * as contactActs from '../actions/contactActions';

@connect((store) => {
    return {
        contact: store.contact
    }
})

export default class HomeAbout extends Component {

  constructor() {
    super();
    this.state = {
      message: '',
      email: false,
      phone: false,
      sentClass: ''
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.contact.status !== this.props.contact.status){
      if (this.props.contact.status === 'Fulfilled') {
        this.setState({message: '', email: false, phone: false});
        setTimeout(this.resetState.bind(this), 3200);
      }
    }
  }

  resetState(){
    this.props.dispatch(contactActs.resetStatus());
  }

  handleChange(event) {
    this.setState({message: event.target.value});
    if(this.validateEmail(event.target.value)) {
      this.setState({
        email: true
      });
    }else {
      this.setState({
        email: false
      });
    }

    if(this.validatePhone(event.target.value)) {
      this.setState({
        phone: true
      });
    }else {
      this.setState({
        phone: false
      });
    }

  }

  onEmailBtn() {
    this.setState({
      message: this.state.message + ' My email address is: '
    });
    document.getElementById('MessageBox').focus();
  }

  onPhoneBtn() {
    this.setState({
      message: this.state.message + ' My phone number is: '
    });
    document.getElementById('MessageBox').focus();
  }

  onSendBtn() {
    this.props.dispatch(contactActs.sendMessage(this.state.message));
  }

  validateEmail(email) {
    var re = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
    return re.test(email);
  }

  validatePhone(phone) {
    var re = /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/;
    return re.test(phone);
  }

  render(){

    return(
        <footer className='Contact'>
            <div className='Contact-Left'>
              <label>{this.props.contact.statusMessage}</label>
              <textarea className={this.props.contact.style} id='MessageBox' value={this.state.message} onChange={this.handleChange.bind(this)}></textarea>
              <div className='Contact-Message-Check-Wrap'>
                <div className='Contact-Message-Check' style={{display: this.state.email ? 'block' : 'none', opacity: this.state.email ? '1' : '0'}}>
                  <img alt='check' src={check}></img>
                  <p>Email</p>
                </div>
                <div className='clear'></div>
                <div className='Contact-Message-Check' style={{display: this.state.phone ? 'block' : 'none', opacity: this.state.phone ? '1' : '0'}}>
                  <img alt='check' src={check}></img>
                  <p>Phone</p>
                </div>
              </div>
              <div className='clear'></div>
              <button className={this.props.contact.style} onClick={this.onSendBtn.bind(this)}>Send</button>
              <div className='clear'></div>
            </div>
            <div className='Contact-Right'>
              <label>Email:</label>
              <a href='mailto:contact@mikenichols.me'>contact@mikenichols.me</a>
              <label>Linkedin:</label>
              <a target='_blank' href='http://linkedin.com/in/uxuimike'>uxuimike</a>
              <label>Medium:</label>
              <a target='_blank' href='https://medium.com/@uxuimike'>@uxuimike</a>
            </div>
            <div className='clear'></div>
        </footer>
    )
  }
}
