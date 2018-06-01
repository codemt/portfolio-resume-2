import React, { Component } from 'react';
import '../stylesheets/profile.css';
 class Profile extends Component {
  render() {
    return (
      <div>
        <div class='card card-profile text-center'>
            <img alt='' class='card-img-top' src='https://unsplash.it/340/160?image=354' />
            <div class='card-block'>
                <img alt='' class='card-img-profile' src='https://it.gravatar.com/userimage/3434071/205a00fc16ae537b26b56f40790910fe.jpg?size=140' />
                <h4 class='card-title'>
                Mithilesh Tarkar
                <small>Aritst , Engineer , Musician and Teacher</small>
                </h4>
                <div class='card-links'>
                <a class='fa fa-dribbble' href='#'></a>
                <a class='fa fa-twitter' href='#'></a>
                <a class='fa fa-facebook' href='#'></a>
                </div>
            </div>
        </div>


      </div>
    )
  }
};
export default Profile;