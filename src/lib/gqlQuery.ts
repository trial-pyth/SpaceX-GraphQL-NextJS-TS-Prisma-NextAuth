import { gql } from "@apollo/client";

export const GET_CREW = gql`
  query CrewQuery($crewId: String!) {
    crew(id: $crewId) {
      __typename
      agency
      image
      name
      status
      wikipedia
    }
  }
`;

export const GET_LAUNCH = gql`
  query LaunchQuery($launchId: String!) {
    launch(id: $launchId) {
      __typename
      name
      flightNumber
      dateLocal
      success
      links {
        webcast
        patch {
          small
        }
        flickr {
          original
        }
      }
    }
  }
`;

export const GET_LANDPAD = gql`
  query LandpadQuery($landpadId: String!) {
    landpad(id: $landpadId) {
      __typename
      fullName
      images {
        large
      }
      landingAttempts
      type
      wikipedia
      status
      locality
      landingSuccesses
    }
  }
`;

export const GET_PAYLOAD = gql`
  query PayloadQuery($payloadId: String!) {
    payload(id: $payloadId) {
      __typename
      name
      customers
      lifespanYears
      manufacturers
      massKg
      type
      orbit
      nationalities
      reused
    }
  }
`;

export const GET_CAPSULE = gql`
  query CapsuleQuery($capsuleId: String!) {
    capsule(id: $capsuleId) {
      __typename
      landLandings
      reuseCount
      status
      type
      waterLandings
      serial
      lastUpdate
    }
  }
`;

export const GET_ROCKET = gql`
  query RocketQuery($rocketId: String!) {
    rocket(id: $rocketId) {
      __typename
      name
      engines {
        type
        propellant1
      }
      costPerLaunch
      height {
        feet
      }
      stages
      successRatePct
      wikipedia
    }
  }
`;

export const GET_SHIP = gql`
  query ShipQuery($shipId: String!) {
    ship(id: $shipId) {
      __typename
      name
      image
      link
      massKg
      type
      yearBuilt
      homePort
      roles
    }
  }
`;

export const GET_STARLINK = gql`
  query StarlinkQuery($starlinkId: String!) {
    starlink(id: $starlinkId) {
      __typename
      version
      spaceTrack {
        DECAY_DATE
        OBJECT_NAME
        SITE
        velocityKms
        PERIOD
        heightKm
        LAUNCH_DATE
        COUNTRY_CODE
        CENTER_NAME
      }
    }
  }
`;
