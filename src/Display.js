import React, { PureComponent } from 'react'
import "./Display.css"

class Display extends PureComponent {
    render() {
        var city = this.props.name;
        var state = this.props.region;
        var country = this.props.country;
        var time = this.props.localtime;
        var temp = this.props.temp_c;
        var speed = this.props.wind_mph;
        var direction = this.props.wind_dir;
        var visibility = this.props.vis_km;
        console.log(time);
        return (
            <div>
                {city && <div className="city"> City : {city} </div> }
                {state && <div className="state"> State : {state} </div>}
                {country && <div className="country"> Country : {country} </div> }
                {time && <div className="time"> Local Time : {time} </div> }
                {temp && <div className="temp"> Temperature : {temp} Celcius </div> }
                {speed && <div className="speed"> Wind Speed : {speed} mph</div> }
                {direction && <div className="direction"> Direction : {direction} </div> }
                {visibility && <div className="visibility"> Visibility : {visibility} km</div> }
            </div>
        )
    }

}

export default Display;