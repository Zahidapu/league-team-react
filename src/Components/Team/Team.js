import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Team = (props) => {
  const { strTeam, idTeam, strTeamLogo, strStadium } = props.team;
  const leagueStyle = {
    height: "300px",
    width: "375px",
    margin: "15px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid lightgrey",
    boxShadow: "5px 5px 5px lightgrey",
    float: "left",
  };
  return (
    <div className="bg-light" style={leagueStyle}>
      <div style={{ width: "15rem" }}>
        <img class="card-img-top" src={strTeamLogo} alt="" />
        <div class="card-body">
          <p class="card-text">
            <h3>{strTeam}</h3>
            <p>{strStadium}</p>
            <Link to={`/team/${idTeam}`}>
              <Button variant="secondary">
                {`Explore  `}
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
