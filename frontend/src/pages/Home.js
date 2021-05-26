import React from 'react';
import { Container, Header } from 'semantic-ui-react';

export default function Home() {
  return (
    <Container text>
      <Header as="h2">The Olympics</Header>
      <p>
        Ever wanted to know who won the bronze medal for Greco-Roman wrestling
        at the 1980 Olympics*? If so, you're in the right place.
      </p>
      <p style={{ fontSize: 10 }}>
        * Hassan Ali Bechara of Lebanon. You're welcome.
      </p>
    </Container>
  );
}
