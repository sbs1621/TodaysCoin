import React, { Component, PureComponent, useEffect } from "react";
import axios from 'axios';
import {
  round,
  Text,
  Box,
  DataChart,
  Grid,
} from "grommet";
import { property, type, opacity, thickness, point } from "grommet";
import { Cpu, Link, Reddit, TextAlignFull } from "grommet-icons";
import "./css/style.css";
import Location from "./Map";


class MainBody extends React.Component {

    options = {
        url: 'https://api.upbit.com/v1/ticker',
        params:{markets: 'KRW-BTC'},
        headers: {Accept: 'application/json'}
    };

    state = {
        isLoading: true,
        MARKETDATA: '',
    };

    getcoin = async () => {
        await axios.request(this.options).then(({ data }) => {
            console.log(data[0]);
            this.setState({
                MARKETDATA: data[0],
            });
            
            console.log(data);
          }).catch(function (error) {
            console.error(error);
          });
        this.setState({
            isLoading: false,
        });
        console.log("loading closed.");
    };

    componentDidMount() {
        this.getcoin();
    }


  render() {
    const data = [
      { date: "2020-08-20", amount: 2 },
      { date: "2020-08-21", amount: 47 },
      { date: "2020-08-22", amount: 33 },
    ];
    const { isLoading, MARKETDATA } = this.state;
    return (
      <Box>
        <Box
          className="welcom"
          justify="center"
          align="center"
          pad="xlarge"
          background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
          round="large"
          margin={{
            left: "xlarge",
            right: "xlarge",
            top: "small",
            bottom: "medium",
          }}
        >
          <h1>
            가장 신뢰받는 글로벌 표준 디지털 자산 거래소
          </h1>
          <span>
            안전하고 투명한 시스템으로 빠르고 편리한 거래 환경을 제공합니다
          </span>
          <div>
            <Location />
            <span>수온 api</span>
          </div>
        </Box>
        <Box fill align="center" gap="medium" margin={{ bottm: "xlarge" }}>
          <Grid
            rows={["medium", "medium"]}
            columns={["medium", "medium"]}
            gap="small"
            areas={[
              { name: "coin1", start: [0, 0], end: [0, 0] },
              { name: "coin2", start: [1, 0], end: [1, 0] },
              { name: "coin3", start: [0, 1], end: [0, 1] },
              { name: "coin4", start: [1, 1], end: [1, 1] },
            ]}
          >
            <Box
              gridArea="coin1"
              direction="column"
              border={{ color: "black", size: "xsmall" }}
              pad="small"
              round="medium"
              background={{ color: "#ffffff" }}
            >
              <DataChart
                data={data}
                series={["date", "amount"]}
                chart={[
                  {
                    property: "amount",
                    type: "line",
                    opacity: "medium",
                    thickness: "xsmall",
                    round,
                  },
                  {
                    property: "amount",
                    type: "point",
                    point: "star",
                    thickness: "medium",
                  },
                ]}
              />
              <Text>이더리움</Text>
            </Box>
            <Box
              gridArea="coin2"
              direction="column"
              border={{ color: "black", size: "xsmall" }}
              pad="small"
              round="medium"
              background={{ color: "#ffffff" }}
              xIndex={1}
            >
              <Text>도지</Text>
            </Box>
            <Box
              gridArea="coin3"
              direction="column"
              border={{ color: "black", size: "xsmall" }}
              pad="small"
              round="medium"
              background={{ color: "#ffffff" }}
              xIndex={1}
            >

              <Text>비트코인</Text>
              {
                isLoading?<h1>Loading...</h1>:<Text>{MARKETDATA.opening_price}</Text>
              }
            </Box>
            <Box
              gridArea="coin4"
              direction="column"
              border={{ color: "black", size: "xsmall" }}
              pad="small"
              round="medium"
              background={{ color: "#ffffff" }}
              xIndex={1}
            >
              
            </Box>
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default MainBody;
