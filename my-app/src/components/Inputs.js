import React, { Component } from 'react';
import {formatTime, submit} from "../connect-database";

class Inputs extends Component {
    state = {
        name: '',
        phone: '',
        email: '',
        startPoint: '',
        endPoint: '',
        startTime: '',
        endTime: '',
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false,
        driver: false,
        numPass: '',
        addedTime: ''

    }

    change = (e) => this.setState({ [e.target.name] : e.target.value });
    mark = (e) => this.setState({ 
        [e.target.name] : e.target.checked
    })

    render() {
        return (
        
            <form style={formStyle}>
                {/* HEADER----------------------------------------- */}
                <h1> Input Information Here </h1>

                {/* NAME------------------------------------------- */}
                <label> Name:  </label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Ex. Jacob Liu" 
                    value={this.state.name}
                    onChange={this.change}
                />

                {/* PHONE AND EMAIL------------------------------------ */}
                <br></br>
                <label> Phone #:  </label>
                <input 
                    type="text" 
                    name="phone" 
                    placeholder="Ex. 999-999-9999" 
                    value={this.state.phone}
                    onChange={this.change}
                />
                <label> Email:  </label>
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Ex. abc@gmail.com" 
                    value={this.state.email}
                    onChange={this.change}
                />

                {/* START AND END POINTS---------------------------------------- */}
                <br></br>
                <label> Start Point:  </label>
                <input 
                    type="text" 
                    name="startPoint" 
                    placeholder="Full Address" 
                    value={this.state.startPoint}
                    onChange={this.change}
                />
                <label> End Point:  </label>
                <input 
                    type="text" 
                    name="endPoint" 
                    placeholder="Full Address" 
                    value={this.state.endPoint}
                    onChange={this.change}
                />

                {/* START AND END TIMES----------------------------------------------- */}
                <br></br>
                <label>Start Time: </label>
                <input 
                    type="text" 
                    name="startTime" 
                    placeholder="Ex. 8:30 AM" 
                    value={this.state.startTime}
                    onChange={this.change}
                />
                <label> End Time: </label>
                <input 
                    type="text" 
                    name="endTime" 
                    placeholder="Ex. 5:00 PM" 
                    value={this.state.endTime}
                    onChange={this.change}
                />

                {/* DAYS OF THE WEEK-------------------------------------------------------- */}
                <br></br>
                <label> Mon: </label>
                <input 
                    name="mon" 
                    type="checkbox"
                    checked={this.state.mon}
                    onChange={this.mark}>
                </input>
                <label> Tue: </label>
                <input 
                    name="tue" 
                    type="checkbox"
                    checked={this.state.tue}
                    onChange={this.mark}>
                </input>
                <label> Wed: </label>
                <input 
                    name="wed" 
                    type="checkbox"
                    checked={this.state.wed}
                    onChange={this.mark}>
                </input>
                <label> Thu: </label>
                <input 
                    name="thu" 
                    type="checkbox"
                    checked={this.state.thu}
                    onChange={this.mark}>
                </input>
                <label> Fri: </label>
                <input 
                    name="fri" 
                    type="checkbox"
                    checked={this.state.fri}
                    onChange={this.mark}>
                </input>
                <label> Sat: </label>
                <input 
                    name="sat" 
                    type="checkbox"
                    checked={this.state.sat}
                    onChange={this.mark}>
                </input>
                <label> Sun: </label>
                <input 
                    name="sun" 
                    type="checkbox"
                    checked={this.state.sun}
                    onChange={this.mark}>
                </input>

                {/* DRIVER INFO------------------------------------------------------- */}
                <br></br>
                <label> Driver?: </label>
                <input 
                    name="driver" 
                    type="checkbox"
                    checked={this.state.driver}
                    onChange={this.mark}>
                </input>
                <label> How Many Passengers? (If Checked Yes for Driver): </label>
                <input 
                    type="text" 
                    name="numPass" 
                    placeholder="Ex. 5" 
                    value={this.state.numPass}
                    onChange={this.change}
                />

                {/* TIME ADDED TO TRIP--------------------------------------------- */}
                <br></br>
                <label> How Much Time Are You Willing To Add To Your Trip? (min): </label>
                <input 
                    type="text" 
                    name="addedTime" 
                    placeholder="Ex. 25" 
                    value={this.state.addedTime}
                    onChange={this.change}
                />

                {/* SUBMIT BUTTON---------------------------------------------- */}
                <br></br>
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    onClick={() => submit(this.state)}
                />
            </form>
        );
    }
  }

  const formStyle = {
    background: '',
    textAlign: 'left',
    padding: '0px 10px'
  }

  const inputStyle = {

  }
  
  export default Inputs;