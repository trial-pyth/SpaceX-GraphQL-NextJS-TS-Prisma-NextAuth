import { DocumentNode, gql } from "@apollo/client";

export const gqlQuery: { [key: string]: DocumentNode } = {
  ["crew"]: gql`
    query CrewQuery($crewId: String!) {
      crew(id: $crewId) {
        __typename
        name
        image
        agency
        status
        wikipedia
      }
    }
  `,
  ["launches"]: gql`
    query LaunchQuery($launchesId: String!) {
      launch(id: $launchesId) {
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
  `,
  ["landpads"]: gql`
    query LandpadQuery($landpadsId: String!) {
      landpad(id: $landpadsId) {
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
  `,
  ["payloads"]: gql`
    query PayloadQuery($payloadsId: String!) {
      payload(id: $payloadsId) {
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
  `,
  ["capsules"]: gql`
    query CapsuleQuery($capsulesId: String!) {
      capsule(id: $capsulesId) {
        __typename
        serial
        landLandings
        reuseCount
        status
        type
        waterLandings
        serial
        lastUpdate
      }
    }
  `,
  ["rockets"]: gql`
    query RocketQuery($rocketsId: String!) {
      rocket(id: $rocketsId) {
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
  `,
  ["ships"]: gql`
    query ShipQuery($shipsId: String!) {
      ship(id: $shipsId) {
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
  `,
  ["starlink"]: gql`
    query StarlinkQuery($starlinkId: String!) {
      starlink(id: $starlinkId) {
        __typename
        version
        spaceTrack {
          OBJECT_NAME
          DECAY_DATE
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
  `,
};
