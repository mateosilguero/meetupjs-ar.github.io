import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Isna from 'components/Isna/Isna';
import withGA from 'next-ga';
import App, { Container } from 'next/app';
import getConfig from 'next/config';
import Router from 'next/router';
import React from 'react';

const { publicRuntimeConfig } = getConfig();
const greeting = `
https://meetupjs.com.ar/
Versión ${publicRuntimeConfig.REACT_APP_VERSION}

MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmdhhyyyhyhydmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMNmddhhhhhhddhhhhhhyyyhdMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMmhyhdddddmmmmmmmmdhdhhhhhhydMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMNdhhddmmdddddddhhhhhhhhhhhhhhhysNMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMNhhddmmmhyysooo++///:::///+oyhhhddydMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMmydmmNmhoo++++/////::---------:/+hmdhhNMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMmhdmNNmy+///////////::-------...--:hmdhyMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMNodmmmmhs+///////////::::----......-/dmhhyMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMyydmmmdhs+///////////::::::--.......-odhhsMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMmsmmmmdhs////////////::::::--........+hhddyMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMsdmmmds+///++++++++//:::::----......:yhmdoMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMydmmmy+//+oossyyyyso++//++/+oo+/::-.-sdddsMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMhodmmo//++osyhddhhyso+/:/oosyyso/:--./dhhdMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMM++ymh//++osssyhdyddyo+:--ohyddy/o+:-.-yh/oMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMM//+do///++++oosyyysso+/--:osso+:::--..+y::MMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMM/osy///////+++ooooo+++/----:///:--....:o.:MMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMM:oys+/////++++oooo++++/-.--:://:-.....-+-/MMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMM+/+o+/////++oossys+o+++:::-+o+/:-.....-/-sMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMmo+oo+///++oossssssysss//+::+so/:---..-:-NMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMmoo++++++oossysssso+o+/:::/oso/:----::hMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMyoo+o++++oyhyssssooo+////+sys+::-::/hMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMdooooo++oossssssso+++//:::/++///:::/MMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMN/sooooooooo++++osss+/:----///////+yMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMysssssoooo++++oo+++/:-----::/+++++NMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMosyssssssoooooo+///-:-::://+++++hMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMhsssssyyyysysyssoso++//+o+++++//MMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMN/oosssssyhhhhhhhhhhysso++++//:sMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMM/+oossssssyyyyyyyysoo++/////:-dMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMNmds/++osossssyyyyyyysoo+///:::-./yhNMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMmhNmo///++oooossyyyyyyso++/::---..//dhhdmMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMNhddmms//////++++oossyyso++//::--.....+yddmdhhddddNMMMMMMMMM
MMMMMMMMMMMMNdddmNNmmy////////++++++++///::---.......odmmmdmmmmmmhyhhddmNNM
MMMMMMMNdddhmNNNNNNNNNh+////////+++++/::::----.....-smmmmmmmmmmmmmmmmmmddhh
MMMmddddNNNNNNNNNNNNNNNmho///////+++++/:---------:smmmmmmmmmmmmmmmmmmmmmmmm

`;

class MyApp extends App {
  componentDidMount() {
    this.insertIsnardi();

    // eslint-disable-next-line
    console.log(greeting);
  }

  insertIsnardi = () => {
    const { head } = document;
    const parent = head.parentNode;

    const node = document.createComment(greeting);

    parent.insertBefore(node, head);
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <div className="custom-min-vh-100 flex flex-column">
          <Header />
          <div className="flex-auto">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
        <Isna />
      </Container>
    );
  }
}

export default withGA(publicRuntimeConfig.GA, Router)(MyApp);
