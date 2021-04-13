import React from "react";
import styled from "styled-components";
import Event from "../components/Event";

const Container = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const Title = styled("div")`
    padding-top: 5vh;
    padding-bottom: 3vh;
    font-family: 'Westwood Sans';
    font-size: 48px;
    display: flex;
    align-items: flex-start;
`;

const AllContainer = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10vh;
`;

export default class Schedule extends React.Component {
    render() {
        return (
            <AllContainer>
                <Title>Schedule</Title>
                <Container>
                    <Event time="🌟 10:00 AM - 10:30 AM PDT" description="Opening ceremony & keynote speaker"></Event>
                    <Event time="🌟 10:30 AM - 11:00 AM PDT" description="Asynchronous team formation in #team-formation"></Event>
                    <Event time="🌟 11:00 AM" description="Work time begins!"></Event>
                    <Event time="🌟 12:00 PM - 12:30 PM PDT" description="Tech Policy Kahoot!"></Event>
                    <Event time="🌟 1:30 PM - 2:30 PM PDT" description="Networking session on Zoom"></Event>
                    <Event time="🌟 3:00 PM PDT" description="Submissions close"></Event>
                    <Event time="🌟 4:00 PM PDT - 4:30 PM PDT" description="Closing presentation"></Event>
                </Container>
            </AllContainer>
        )
    }
}
