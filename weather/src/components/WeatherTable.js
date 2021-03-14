import React from 'react';
import { useState } from "react";
import { Table, Button, Icon } from 'semantic-ui-react';


var arr = [];

const WeatherTable = ({ tableData, tempUnit, windSpeedUnit }) => {


    const [visible,setVisible] = useState(true);
    
    const ShowData = (id) => {
        setVisible(!visible);
        var i = arr.indexOf(id)
        if (i>=0){
            arr.splice(i,1);
        }else{
            arr.push(id);
        }
    } 

    return (
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Days</Table.HeaderCell>
              <Table.HeaderCell>Temp</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          {tableData.map((tr) => {
            return (
            <Table.Row key={tr.id} >
              {arr.indexOf(tr.id) === -1 ?
                <Table.Cell>
                    <Button onClick={()=> ShowData(tr.id)}>{tr.day}
                    </Button>
                </Table.Cell> : 
                <Table.Cell>
                    <Button onClick={()=> ShowData(tr.id)}>{tr.day}</Button><br/>{tr.type}<br/>{tr.windDirection === "north-east"? <Icon disabled name='arrow right' /> :  tr.windDirection === "north-west" ? <Icon disabled name='arrow left' /> : tr.windDirection === "south-east" ?<Icon disabled name='arrow down' />: null}<br/>{tr.windSpeed}{windSpeedUnit}
                </Table.Cell>
                }
                <Table.Cell>
                {tr.temp}
                {tempUnit}
                </Table.Cell>
            </Table.Row>
            );
            })}
          </Table.Body>
        </Table>
    );
};

export default WeatherTable;