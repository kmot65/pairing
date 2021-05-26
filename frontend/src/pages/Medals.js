import React, { useState, useEffect } from 'react';
import { Container, Header, Table } from 'semantic-ui-react';
import axios from 'axios';

export default function Medals() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:4000/medals');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <Container text>
      <Header as="h2">Medals</Header>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Year</Table.HeaderCell>
            <Table.HeaderCell>Event</Table.HeaderCell>
            <Table.HeaderCell>M/F</Table.HeaderCell>
            <Table.HeaderCell>Medal</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map(m =>
            TableRow({
              name: m.Name,
              year: m.Games,
              event: m.Event,
              sex: m.Sex,
              medal: m.Medal
            })
          )}
        </Table.Body>
      </Table>
    </Container>
  );
}

function TableRow(rowData) {
  const { name, year, event, sex, medal } = rowData;
  return (
    <Table.Row key={name + event + year + medal}>
      <Table.Cell id="name">{name}</Table.Cell>
      <Table.Cell id="year">{year}</Table.Cell>
      <Table.Cell id="event">{event}</Table.Cell>
      <Table.Cell id="sex">{sex}</Table.Cell>
      <Table.Cell id="medal">{medal}</Table.Cell>
    </Table.Row>
  );
}
