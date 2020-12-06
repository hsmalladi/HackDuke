import React, { Component } from 'react';
import './Inputs.css';

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
        
            <form className='form-style'>
                <div className='section-style'>
                    <h2> Contact Information </h2>
                    {/* NAME------------------------------------------- */}
                    <label> Name:  </label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Ex. Jacob Liu" 
                        className='input-style'
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
                        className='input-style'
                        value={this.state.phone}
                        onChange={this.change}
                    />
                    <label> Email:  </label>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Ex. abc@gmail.com" 
                        className='input-style'
                        value={this.state.email}
                        onChange={this.change}
                    />
                </div>

                <br></br>
                <div>
                    <h2> Trip Route </h2>
                    {/* START AND END POINTS---------------------------------------- */}
                    <label> Trip Start Point:  </label>
                    <input 
                        type="text" 
                        name="startPoint" 
                        placeholder="Full Address" 
                        className='input-style'
                        value={this.state.startPoint}
                        onChange={this.change}
                    />
                    <label> End Point:  </label>
                    <input 
                        type="text" 
                        name="endPoint" 
                        placeholder="Full Address" 
                        className='input-style'
                        value={this.state.endPoint}
                        onChange={this.change}
                    />
                </div>

                <br></br>
                <div>
                    <h2> Trip Timing </h2>
                    {/* START AND END TIMES----------------------------------------------- */}
                    <label> Trip Estimated Start Time: </label>
                    <input 
                        type="text" 
                        name="startTime" 
                        placeholder="Ex. 8:30 AM" 
                        className='input-style'
                        value={this.state.startTime}
                        onChange={this.change}
                    />
                    <br></br>
                    <label> Trip Estimated End Time: </label>
                    <input 
                        type="text" 
                        name="endTime" 
                        placeholder="Ex. 5:00 PM" 
                        className='input-style'
                        value={this.state.endTime}
                        onChange={this.change}
                    />

                    {/* DAYS OF THE WEEK-------------------------------------------------------- */}
                    <br></br>
                    <label> Mon: </label>
                    <input 
                        name="mon" 
                        type="checkbox"
                        className='input-style'
                        checked={this.state.mon}
                        onChange={this.mark}>
                    </input>
                    <label> Tue: </label>
                    <input 
                        name="tue" 
                        type="checkbox"
                        className='input-style'
                        checked={this.state.tue}
                        onChange={this.mark}>
                    </input>
                    <label> Wed: </label>
                    <input 
                        name="wed" 
                        type="checkbox"
                        className='input-style'
                        checked={this.state.wed}
                        onChange={this.mark}>
                    </input>
                    <label> Thu: </label>
                    <input 
                        name="thu" 
                        type="checkbox"
                        className='input-style'
                        checked={this.state.thu}
                        onChange={this.mark}>
                    </input>
                    <label> Fri: </label>
                    <input 
                        name="fri" 
                        type="checkbox"
                        className='input-style'
                        checked={this.state.fri}
                        onChange={this.mark}>
                    </input>
                    <label> Sat: </label>
                    <input 
                        name="sat" 
                        type="checkbox"
                        className='input-style'
                        checked={this.state.sat}
                        onChange={this.mark}>
                    </input>
                    <label> Sun: </label>
                    <input 
                        name="sun" 
                        type="checkbox"
                        className='input-style'
                        checked={this.state.sun}
                        onChange={this.mark}>
                    </input>
                    {/* TIME ADDED TO TRIP--------------------------------------------- */}
                    <br></br>
                    <label> How Much Time (minutes) Can You Add To Your Trip?: </label>
                    <input 
                        type="text" 
                        name="addedTime" 
                        placeholder="Ex. 25" 
                        className='input-style'
                        value={this.state.addedTime}
                        onChange={this.change}
                    />
                </div>

                <div>
                    <br></br>
                    <h2> Driver Information </h2>
                    {/* DRIVER INFO------------------------------------------------------- */}
                    <label> Are You a Driver?: </label>
                    <input 
                        name="driver" 
                        type="checkbox"
                        className='input-style'
                        checked={this.state.driver}
                        onChange={this.mark}>
                    </input>
                    <br></br>
                    <label> How Many Passengers? (If Checked Yes for Driver): </label>
                    <input 
                        type="text" 
                        name="numPass" 
                        placeholder="Ex. 5" 
                        className='input-style'
                        value={this.state.numPass}
                        onChange={this.change}
                    />
                </div>

                {/* SUBMIT BUTTON---------------------------------------------- */}
                <br></br>
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                />
            </form>
        );
    }
  }
  
  export default Inputs;