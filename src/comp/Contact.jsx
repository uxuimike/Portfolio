import React, { Component } from 'react';
import check from '../img/check.svg';

export default class HomeAbout extends Component {

  constructor() {
    super();
    this.state = {
      message: '',
      email: false,
      phone: false
    }
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
    this.setState({
      email: false,
      phone: false
    });
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
              <label>Send me a message</label>
              <textarea id='MessageBox' value={this.state.message} onChange={this.handleChange.bind(this)}></textarea>
              <div className='Contact-Message-Buttons'>
                <button onClick={this.onEmailBtn.bind(this)}>+ Email</button>
                <div className='Contact-Message-Check'><img alt='check' src={check} style={{opacity: this.state.email ? '1' : '0'}}></img></div>
                <button onClick={this.onPhoneBtn.bind(this)}>+ Phone</button>
                <div className='Contact-Message-Check'><img alt='check' src={check} style={{opacity: this.state.phone ? '1' : '0'}}></img></div>
              </div>
              <div className='clear'></div>
              <button onClick={this.onSendBtn.bind(this)}>Send</button>
            </div>
            <div className='Contact-Right'>
              <label>Email:</label>
              <a href='mailto:contact@mikenichols.me'>contact@mikenichols.me</a>
              <label>Email:</label>
              <a href='mailto:contact@mikenichols.me'>contact@mikenichols.me</a>
              <label>Email:</label>
              <a href='mailto:contact@mikenichols.me'>contact@mikenichols.me</a>
            </div>
            <div className='clear'></div>
        </footer>
    )
  }
}
