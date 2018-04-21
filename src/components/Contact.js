import React, { Component } from 'react';
import MyForm from '../redux/MyForm';


class Contact extends Component {
  submit = (values) => {
    console.log(values);
  }
  render() {
    return (
      <MyForm onSubmit={this.submit} />
    );
  }
}

export default Contact;
