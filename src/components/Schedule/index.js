import React, { Component } from 'react'
import { Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Table } from 'reactstrap'
import { Div } from '../elements'
import classnames from 'classnames';
import SectionTitle from '../SectionTitle'
import './style.scss'

const schedules = [
    { session: 'Opening Remarks', speaker: 'Jeff Severing', time: '08:45 AM', vanue: 'Room a' },
    { session: 'Opening Remarks', speaker: 'Jeff Severing', time: '08:45 AM', vanue: 'Room a' },
    { session: 'Opening Remarks', speaker: 'Jeff Severing', time: '08:45 AM', vanue: 'Room a' },
    { session: 'Opening Remarks', speaker: 'Jeff Severing', time: '08:45 AM', vanue: 'Room a' },
    { session: 'Opening Remarks', speaker: 'Jeff Severing', time: '08:45 AM', vanue: 'Room a' },
]

class ScheduleComponent extends Component {
    state = {
        activeTab: '2'
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        const { className, id } = this.props
        return (
            <Div className={className} id={id} >
                <Container>
                    <Row>
                        <Col lg={{ size: 6, offset: 3 }} xs={12}>
                            <SectionTitle
                                className="sectionTitle conferrenceSectionTitle"
                                title="Our Schedule"
                                text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                            />
                        </Col>
                        <Col xl={{ size: 6, offset: 3 }} lg={{ size: 8, offset: 2 }}>
                            <Nav className="scheduleMenueWrap" tabs>
                                <NavItem className="scheduleMenueItem">
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '1' })}
                                        onClick={() => { this.toggle('1'); }}
                                    >
                                        Day 1 <span>September 11</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="scheduleMenueItem">
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '2' })}
                                        onClick={() => { this.toggle('2'); }}
                                    >
                                        Day 2 <span>September 12</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="scheduleMenueItem">
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '3' })}
                                        onClick={() => { this.toggle('3'); }}
                                    >
                                        Day 3 <span>September 13</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col xs={12}>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <Table className="tableStyle table-responsive">
                                        <thead className="tableHead">
                                            <tr>
                                                <th>SESSION</th>
                                                <th>SPEAKER(S)</th>
                                                <th>TIME</th>
                                                <th>VENUE</th>
                                            </tr>
                                        </thead>
                                        <tbody className="tableBody">
                                            {schedules.map((schedule, i) => (
                                                <tr key={i}>
                                                    <td>{schedule.session}</td>
                                                    <td>{schedule.speaker}</td>
                                                    <td>{schedule.time}</td>
                                                    <td>{schedule.vanue}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Table className="tableStyle table-responsive">
                                        <thead className="tableHead">
                                            <tr>
                                                <th>SESSION</th>
                                                <th>SPEAKER(S)</th>
                                                <th>TIME</th>
                                                <th>VENUE</th>
                                            </tr>
                                        </thead>
                                        <tbody className="tableBody">
                                            {schedules.map((schedule, i) => (
                                                <tr key={i}>
                                                    <td>{schedule.session}</td>
                                                    <td>{schedule.speaker}</td>
                                                    <td>{schedule.time}</td>
                                                    <td>{schedule.vanue}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </TabPane>
                                <TabPane tabId="3">
                                    <Table className="tableStyle table-responsive">
                                        <thead className="tableHead">
                                            <tr>
                                                <th>SESSION</th>
                                                <th>SPEAKER(S)</th>
                                                <th>TIME</th>
                                                <th>VENUE</th>
                                            </tr>
                                        </thead>
                                        <tbody className="tableBody">
                                            {schedules.map((schedule, i) => (
                                                <tr key={i}>
                                                    <td>{schedule.session}</td>
                                                    <td>{schedule.speaker}</td>
                                                    <td>{schedule.time}</td>
                                                    <td>{schedule.vanue}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </Container>
            </Div>
        )
    }
}
export default ScheduleComponent