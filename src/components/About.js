import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className="container p-4">
        <div class="card">
            <div className="card-body">
                <h1>About Us</h1>
                <p>We are a development team that always seeks the best service to our clients and that pursues
                innovation a lot, that is why we set ourselves the goal of developing an application that is 
                easy and intuitive and that is of a wide range of use. Today we are proud to bring our product, 
                Personal Budget Management (PBM).
                PBM is a tool that facilitates the economy not only of any company, but also of any home. 
                With it you can manage your economy having your income and expenses available from the comfort 
                of your home or from anywhere in the world and with the greatest confidence. 
                We invite you to be part of the large number of people who are using it today.
                Do not stay out!.</p>
                <img src="/virtual-wallet.jpg" alt="imagen-about" className="mx-auto d-block m-4 about_logo"/>
            </div>
        </div>
    </div>
    )
  }
}
