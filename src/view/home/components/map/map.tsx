import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";
import topo from "./world-50.json";
import StyledTooltip from "core/components/tooltip/tooltip";
import { useNavigate } from "react-router";

export default function WorldMap() {
  const navigate = useNavigate();

  return (
    <>
      <ComposableMap
        width={800}
        height={500}
        //projection={"geoOrthographic"}
        projectionConfig={{ scale: 175 }}
      >
        <ZoomableGroup /*  center={[2, 0]} */>
          <Geographies geography={topo}>
            {({ geographies }) =>
              geographies.map((geography) => (
                <StyledTooltip title={geography.properties.NAME_LONG}>
                  <Geography
                    onClick={() => {
                      navigate("/home/map/" + geography.propertuies.NAME);
                    }}
                    key={geography.id}
                    geography={geography}
                    style={{
                      //border: "1px solid #424242",
                      default: {
                        fill: "#dedede",
                        stroke: "#4E92A0",
                        strokeWidth: 0.1,
                        outline: "none",
                      },
                      hover: {
                        fill: "#c32a2a70",
                        stroke: "#c32a2a80",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      pressed: {
                        fill: "#FFE255",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                    }}
                  />
                </StyledTooltip>
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
}
