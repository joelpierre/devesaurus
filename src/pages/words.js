import React, { PureComponent } from 'react';
import { CoreLayout } from '../layouts/CoreLayout';
import Section from '../components/core/Section/Section';
import Container from '../components/core/Container/Container';
import Row from '../components/core/Row/Row';
import Flex from '../components/core/Flex/Flex';
import Heading from '../components/core/Heading/Heading';

export class Words extends PureComponent {
  componentDidMount() {}

  render() {
    return (
      <CoreLayout title="All Words">
        <Section>
          <Container>
            <Row>
              <Flex>
                <Heading priority={2} classes="text-center">
                  All Words
                </Heading>
              </Flex>
            </Row>
          </Container>
        </Section>
      </CoreLayout>
    );
  }
}

export default Words;
