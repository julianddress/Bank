import React from "react";
import styled from "styled-components";
import ImageFilter from "../../ImageFilter";

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    border-radius: 5px;
    margin: 2px 0;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
    padding: 10px;
    font-size: 12px;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
`
export default ({cargo}) => {

    console.log(cargo)
    // PROPS
    const {id, type, value, date, from } = cargo;

    return  <Card>
                {ImageFilter(type)}
                <Info>
                    <span>{type}</span>
                    <span>{from}</span>
                    <span>{value}</span>
                </Info>
                    <span>{date}</span>
            </Card>
}
