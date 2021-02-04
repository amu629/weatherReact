import React, { PureComponent } from 'react'
import Display from "./Display"
import "./Weather.css"

class Weather extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            value : "",
            name : "",
            region : "",
            country : "",
            localtime : "",
            temp_c : "",
            wind_mph : "",
            wind_dir : "",
            vis_km : "",
            responses: 0
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleInput = e => {
        this.setState ({
            value : e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault();
        this.setState({
            responses: 2
        });
        fetch(`http://api.weatherapi.com/v1/current.json?key=`+this.props.APIKey+`&q=`+this.state.value)
        .then(response => response.json())
        .then(data => {
            if(data.location === undefined || data.location === null) {
                this.setState({
                    responses: 3
                });
            }
            else { 
            this.setState ({
                value : "",
                name : data.location.name,
                region : data.location.region,
                country : data.location.country,
                localtime : data.location.localtime,
                temp_c : data.current.temp_c,
                wind_mph : data.current.wind_mph,
                wind_dir : data.current.wind_dir,
                vis_km : data.current.vis_km,
                responses: 1
            })
        }
        }
        )
    }
    render() {
        if(this.state.responses === 1) {
            alert(this.state.localtime);
        } 
        return (
            <div className="container">
                <form onSubmit = {this.handleOnSubmit}>
                
                <input className="box"
                    type = "text"
                    placeholder = "City Name"
                    value = {this.state.value}
                    onChange = {this.handleInput}
                />
                <button className="button">Search</button>
                
                </form>
                
                {this.state.responses === 1 &&
                <Display 
                    name={this.state.name} 
                    region={this.state.region}
                    country={this.state.country}
                    localtime={this.state.localtime}
                    temp_c={this.state.temp_c}
                    wind_mph={this.state.wind_mph}
                    wind_dir={this.state.wind_dir}
                    vis_km={this.state.vis_km}
                >
                </Display>
                }
                {this.state.responses === 2 && <div className="loader"></div> }
                {this.state.responses === 3 && <div className="a"> Wrong input &#128543; Please enter a valid City &#128578;</div> }
            </div>
        )
    }
}

export default Weather;