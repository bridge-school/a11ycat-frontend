import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { RadioScale } from "../form/RadioScale";
import { Button } from "../Button";
import MapContainer from "../map/MapContainer";
import { submitForm } from "../../store/actions/incidentsActions";

const MapWrapper = Styled.div`
width: 50%;
height: 200px;
border: 1px solid green;
background: (0,0,0,0.3);
margin: 30px auto;
`;

const InputButton = Styled.button`
	border-radius: 0;
	padding: 10px;
	border: 1px solid black;
	background-color: #fefefe;
	width: 300px;
	padding: 10px;
	box-shadow: 1px 2px 0px #000;
	margin: 10px;
`;

const StyledForm = Styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Heading = Styled.p`
	text-align: center;
	margin: 20px;
	font-family: sans-serif;
`;

const Scalewrapper = Styled.div`
width: 450px;
margin: 10px auto;
display: flex;
justify-content: space-between;
align-items: center;
`;

class ReportIncident extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedInput: "",
      inputOptions: [
        {
          displayEmoji: "😑",
          inputRating: "emojiScale-1"
        },
        {
          displayEmoji: "😟",
          inputRating: "emojiScale-2"
        },
        {
          displayEmoji: "😡",
          inputRating: "emojiScale-3"
        },
        {
          displayEmoji: "😨",
          inputRating: "emojiScale-4"
        },
        {
          displayEmoji: "😱",
          inputRating: "emojiScale-5"
        }
      ]
    };

    this.handleRadioInputChange = this.handleRadioInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRadioInputChange(e) {
    this.setState({ selectedInput: e.target.value });
  }

  handleSubmit(e) {
    this.props.submitForm(this.state.selectedInput);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <StyledForm onSubmit={this.handleSubmit}>
          <MapWrapper>
            <MapContainer addressText="Location to report" />
          </MapWrapper>
          <Heading>
            Please state how you felt when the incident happened{" "}
          </Heading>
          <Scalewrapper>
            <RadioScale
              selectedInput={this.state.selectedInput}
              inputOptions={this.state.inputOptions}
              handleRadioInputChange={this.handleRadioInputChange}
            />
          </Scalewrapper>
          <InputButton type="submit">Submit Report</InputButton>
          <Link to="/view-reports">
            <Button text={"Cancel"} />
          </Link>
        </StyledForm>
      </div>
    );
  }
}

// const mapStateToProps = store => ({
//   lat: store.map.centerMarker.lat,
//   lng: store.map.centerMarker.lng,
//   address: store.map.address
// });

const mapDispatchToProps = {
  submitForm
};

export default connect(
  null,
  mapDispatchToProps
)(ReportIncident);
