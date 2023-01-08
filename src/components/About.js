import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="https://media.licdn.com/dms/image/D5603AQE7qx27P8cd4Q/profile-displayphoto-shrink_400_400/0/1666668667775?e=1678320000&v=beta&t=LCX144SBnaZ_dHJoZ946yDY0x3oPpVWOjduJi3Iwt2c" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       				   <span>{resumeData.name}</span>
                     <br></br>
       					<span>{resumeData.address}</span>
                     <br></br>
                     <span>{resumeData.email}</span>
                     <br></br>
                     <span>{resumeData.phone}</span>
       			   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}